import fs from "fs";
import path from "path";
import { create } from "xmlbuilder2";

// utilities from project (importing TS files directly requires ts-node or esbuild-register)
// course + event helpers are used by our manual routing logic
// we will import them via require after registering ts-node so they compile on the fly.

// configuration
const DOMAIN = "https://www.skillhub.africa";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const APP_DIR = path.join(process.cwd(), "app");

// load raw course and event data with require so ts-node transpiles .tsx
const { AllCourseLists } = require("../short-courses/AllCourseLists.tsx");
const { NewCourse } = require("../short-courses/NewCourse.tsx");
const allCourses: any[] = [...AllCourseLists, ...NewCourse];

const trajlonEvents: any[] = require("../events-content/event.tsx").default;
const allEvents: any[] = trajlonEvents;

// helper functions operating on the raw arrays
function getAllCategories(): string[] {
  const s = new Set(allCourses.map((c) => c.type));
  return Array.from(s);
}
function getTotalCourseCount(): number {
  return allCourses.length;
}
function getCourseCountByCategory(cat: string): number {
  return allCourses.filter((c) => c.type === cat).length;
}

function getAllEventCategories(): string[] {
  const s = new Set(allEvents.map((e) => e.skillLevel));
  return Array.from(s);
}
function getTotalEventCount(): number {
  return allEvents.length;
}
function getEventCountByCategory(cat: string): number {
  return allEvents.filter((e) => e.skillLevel === cat).length;
}

interface RouteTemplate {
  template: string; // e.g. /courses/[slug]
  filePath: string; // absolute path to page file
  params: string[];
  paramSets: Array<Record<string, string | string[]>>;
}

// Recursively walk a directory and collect page.tsx/js files
function gatherTemplates(dir: string, templates: RouteTemplate[] = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      gatherTemplates(full, templates);
    } else if (
      ent.isFile() &&
      /page\.(tsx?|jsx?)$/.test(ent.name) &&
      !/\.(test|spec)\./.test(ent.name)
    ) {
      const relativeDir = path.relative(APP_DIR, path.dirname(full));
      // segments are folder names relative to /app
      const segments = relativeDir === "" ? [] : relativeDir.split(path.sep);
      const template = "/" + segments.map((s) => s).join("/");
      templates.push({
        template: template === "/" ? "/" : template.replace(/\/+/g, "/"),
        filePath: full,
        params: [],
        paramSets: [],
      });
    }
  }
  return templates;
}

// given a route template return parameter names
function extractParamNames(template: string): string[] {
  const re = /\[(?:\.\.\.)?([^\]]+)\]/g;
  const names: string[] = [];
  let m;
  while ((m = re.exec(template)) !== null) {
    names.push(m[1].replace(/^\.\.\./, ""));
  }
  return names;
}

// compute paramsets for each template using explicit business logic
async function resolveParamSets(routes: RouteTemplate[]) {
  const map = new Map<string, Array<Record<string, string | string[]>>>();
  routes.sort((a, b) => a.template.split("/").length - b.template.split("/").length);

  for (const route of routes) {
    const params = extractParamNames(route.template);
    route.params = params;
    if (params.length === 0) {
      route.paramSets = [{}];
      map.set(route.template, route.paramSets);
      continue;
    }

    let sets: Array<Record<string, string>> | undefined;

    // name simplification for easier matching
    const tpl = route.template;

    // ------------- courses logic -------------
    if (tpl.startsWith("/courses")) {
      if (tpl === "/courses/[slug]" || tpl === "/courses/[slug]/enroll") {
        sets = allCourses.map((c: any) => ({ slug: c.slg }));
      } else if (tpl === "/courses/category/[category]") {
        sets = getAllCategories().map((c: string) => ({ category: encodeURIComponent(c) }));
      } else if (tpl === "/courses/page/[page]") {
        const total = getTotalCourseCount();
        const pages = Math.ceil(total / 12);
        sets = [];
        for (let i = 2; i <= pages; i++) sets.push({ page: i.toString() });
      } else if (tpl === "/courses/category/[category]/page/[page]") {
        sets = [];
        for (const cat of getAllCategories()) {
          const count = getCourseCountByCategory(cat);
          const pages = Math.ceil(count / 12);
          for (let i = 2; i <= pages; i++) {
            sets.push({ category: encodeURIComponent(cat), page: i.toString() });
          }
        }
      }
    }

    // ------------- events logic -------------
    if (tpl.startsWith("/events")) {
      if (tpl === "/events/[slug]" || tpl === "/events/[slug]/register") {
        sets = allEvents.map((e: any) => ({ slug: e.slug }));
      } else if (tpl === "/events/category/[category]") {
        sets = getAllEventCategories().map((c: string) => ({ category: encodeURIComponent(c) }));
      } else if (tpl === "/events/page/[page]") {
        const total = getTotalEventCount();
        const pages = Math.ceil(total / 12);
        sets = [];
        for (let i = 2; i <= pages; i++) sets.push({ page: i.toString() });
      } else if (tpl === "/events/category/[category]/page/[page]") {
        sets = [];
        for (const cat of getAllEventCategories()) {
          const count = getEventCountByCategory(cat);
          const pages = Math.ceil(count / 12);
          for (let i = 2; i <= pages; i++) {
            sets.push({ category: encodeURIComponent(cat), page: i.toString() });
          }
        }
      }
    }

    if (sets) {
      route.paramSets = sets;
      map.set(route.template, route.paramSets);
      continue;
    }

    // fallback: parent route method
    const segments = route.template.split("/");
    let found = false;
    for (let i = segments.length - 1; i > 0; i--) {
      const parent = segments.slice(0, i).join("/") || "/";
      if (map.has(parent)) {
        const parentSets = map.get(parent)!;
        if (params.every((p) => extractParamNames(parent).includes(p))) {
          route.paramSets = parentSets.map((s) => ({ ...s }));
          map.set(route.template, route.paramSets);
          found = true;
          break;
        }
      }
    }
    if (!found) {
      console.warn(`Unable to resolve dynamic params for template ${route.template}`);
      route.paramSets = [];
    }
  }
}

function buildUrl(template: string, params: Record<string, string | string[]>): string {
  let url = template;
  for (const [k, v] of Object.entries(params)) {
    if (Array.isArray(v)) {
      const joined = v.map(encodeURIComponent).join("/");
      url = url.replace(`[[...${k}]]`, joined).replace(`[...${k}]`, joined);
    } else {
      url = url.replace(`[${k}]`, encodeURIComponent(v));
    }
  }
  // remove any optional catch-all placeholders left empty
  url = url.replace(/\[\[\.\.\.\w+\]\]/g, "");
  return url || "/";
}

function getLastMod(filePath: string): string {
  try {
    const s = fs.statSync(filePath);
    return s.mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

async function main() {
  console.log("Scanning app directory for routes...");
  const routes = gatherTemplates(APP_DIR);
  await resolveParamSets(routes);

  const urlEntries: Array<{
    loc: string;
    lastmod: string;
    filePath: string;
    changefreq: string;
    priority: string;
  }> = [];

  function computeRules(route: RouteTemplate): { changefreq: string; priority: string } {
    // default to static page
    let changefreq = "monthly";
    let priority = "0.6";
    if (route.template === "/") {
      changefreq = "daily";
      priority = "1.0";
    } else if (
      route.template.startsWith("/courses/category") ||
      route.template.startsWith("/events/category")
    ) {
      changefreq = "weekly";
      priority = "0.8";
    } else if (route.template.includes("[slug]")) {
      // individual course or event
      changefreq = "weekly";
      priority = "0.7";
    } else if (route.template.includes("/page/")) {
      changefreq = "weekly";
      priority = "0.5";
    } else {
      // static or index collections
      changefreq = "monthly";
      priority = "0.6";
    }
    // homepage already handled
    return { changefreq, priority };
  }

  function computeLastmod(route: RouteTemplate, params: Record<string, any>): string {
    // dynamic course slug
    if (route.template === "/courses/[slug]" || route.template === "/courses/[slug]/enroll") {
      const slug = params.slug as string;
      const course = allCourses.find((c) => c.slg === slug);
      if (course) {
        if ((course as any).updatedAt) return new Date((course as any).updatedAt).toISOString();
      }
    }
    // course category pages
    if (route.template.startsWith("/courses/category")) {
      const cat = decodeURIComponent(params.category as string);
      const courses = allCourses.filter((c) => c.type === cat);
      const times = courses.map((c) => ((c as any).updatedAt ? new Date((c as any).updatedAt).getTime() : 0));
      const max = Math.max(...times);
      if (max > 0) return new Date(max).toISOString();
    }
    // pagination pages (use latest of all or category)
    if (route.template === "/courses/page/[page]") {
      // latest of all courses
      const times = allCourses.map((c) => ((c as any).updatedAt ? new Date((c as any).updatedAt).getTime() : 0));
      const max = Math.max(...times);
      if (max > 0) return new Date(max).toISOString();
    }
    if (route.template === "/courses/category/[category]/page/[page]") {
      const cat = decodeURIComponent(params.category as string);
      const courses = allCourses.filter((c) => c.type === cat);
      const times = courses.map((c) => ((c as any).updatedAt ? new Date((c as any).updatedAt).getTime() : 0));
      const max = Math.max(...times);
      if (max > 0) return new Date(max).toISOString();
    }
    // events slug
    if (route.template === "/events/[slug]" || route.template === "/events/[slug]/register") {
      const slug = params.slug as string;
      const event = allEvents.find((e) => e.slug === slug);
      if (event) {
        if ((event as any).updatedAt) return new Date((event as any).updatedAt).toISOString();
        // parse day/monthYear
        const raw = `${event.dayDate} ${event.monthYear}`;
        const dt = new Date(raw);
        if (!isNaN(dt.getTime())) return dt.toISOString();
      }
    }
    if (route.template.startsWith("/events/category")) {
      const cat = decodeURIComponent(params.category as string);
      const events = allEvents.filter((e) => e.skillLevel === cat);
      const times = events.map((e) => {
        if ((e as any).updatedAt) return new Date((e as any).updatedAt).getTime();
        const raw = `${e.dayDate} ${e.monthYear}`;
        const dt = new Date(raw);
        return isNaN(dt.getTime()) ? 0 : dt.getTime();
      });
      const max = Math.max(...times);
      if (max > 0) return new Date(max).toISOString();
    }
    if (route.template === "/events/page/[page]") {
      const times = allEvents.map((e) => {
        if ((e as any).updatedAt) return new Date((e as any).updatedAt).getTime();
        const raw = `${e.dayDate} ${e.monthYear}`;
        const dt = new Date(raw);
        return isNaN(dt.getTime()) ? 0 : dt.getTime();
      });
      const max = Math.max(...times);
      if (max > 0) return new Date(max).toISOString();
    }
    if (route.template === "/events/category/[category]/page/[page]") {
      const cat = decodeURIComponent(params.category as string);
      const events = allEvents.filter((e) => e.skillLevel === cat);
      const times = events.map((e) => {
        if ((e as any).updatedAt) return new Date((e as any).updatedAt).getTime();
        const raw = `${e.dayDate} ${e.monthYear}`;
        const dt = new Date(raw);
        return isNaN(dt.getTime()) ? 0 : dt.getTime();
      });
      const max = Math.max(...times);
      if (max > 0) return new Date(max).toISOString();
    }

    return getLastMod(route.filePath);
  }

  for (const r of routes) {
    for (const pset of r.paramSets) {
      const loc = DOMAIN + buildUrl(r.template, pset);
      const lm = computeLastmod(r, pset as Record<string, any>);
      const { changefreq, priority } = computeRules(r);
      urlEntries.push({ loc, lastmod: lm, filePath: r.filePath, changefreq, priority });
    }
  }

  // remove duplicates
  const seen = new Set<string>();
  const unique = urlEntries.filter((e) => {
    if (seen.has(e.loc)) return false;
    seen.add(e.loc);
    return true;
  });

  console.log(`Found ${unique.length} unique URLs`);

  // Build XML sitemap (split if >50000)
  const MAX_URLS = 50000;
  const chunks: typeof unique[] = [];
  for (let i = 0; i < unique.length; i += MAX_URLS) {
    chunks.push(unique.slice(i, i + MAX_URLS));
  }

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const sitemapFiles: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const list = chunks[i];
    const root = create({ version: "1.0", encoding: "UTF-8" })
      .ele("urlset", { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" });
    for (const entry of list) {
      const urlNode = root.ele("url");
      urlNode.ele("loc").txt(entry.loc);
      urlNode.ele("lastmod").txt(entry.lastmod);
      urlNode.ele("changefreq").txt(entry.changefreq);
      urlNode.ele("priority").txt(entry.priority);
    }
    const xml = root.end({ prettyPrint: true });
    const filename = chunks.length === 1 ? "sitemap.xml" : `sitemap-${i + 1}.xml`;
    const fullpath = path.join(PUBLIC_DIR, filename);
    fs.writeFileSync(fullpath, xml, "utf8");
    sitemapFiles.push(filename);
    console.log(`Wrote ${filename} (${list.length} urls)`);
  }

  if (sitemapFiles.length > 1) {
    // write index
    const idxRoot = create({ version: "1.0", encoding: "UTF-8" })
      .ele("sitemapindex", { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" });
    for (const fname of sitemapFiles) {
      idxRoot.ele("sitemap").ele("loc").txt(`${DOMAIN}/${fname}`);
    }
    fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap-index.xml"), idxRoot.end({ prettyPrint: true }));
    console.log("Wrote sitemap-index.xml");
  }

  // build sitemap.html
  const htmlLines: string[] = [];
  htmlLines.push(`<!DOCTYPE html>`);
  htmlLines.push(`<html lang="en">`);
  htmlLines.push(`<head><meta charset="utf-8"><title>Sitemap</title>`);
  htmlLines.push(`<meta name="viewport" content="width=device-width,initial-scale=1">`);
  htmlLines.push(`<link rel="canonical" href="${DOMAIN}/sitemap.html">`);
  htmlLines.push(`</head><body><h1>Sitemap</h1><ul>`);
  for (const e of unique) {
    htmlLines.push(`<li><a href="${e.loc}">${e.loc}</a></li>`);
  }
  htmlLines.push(`</ul></body></html>`);
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.html"), htmlLines.join("\n"), "utf8");
  console.log(`Wrote sitemap.html`);

  // robots.txt (dynamic sitemap reference)
  const sitemapRef =
    sitemapFiles.length > 1
      ? `${DOMAIN}/sitemap-index.xml`
      : `${DOMAIN}/sitemap.xml`;
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/

Sitemap: ${sitemapRef}
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf8");
  console.log(`Wrote robots.txt (ref ${sitemapRef})`);

  console.log("Sitemap generation complete.");
}

main().catch((err) => {
  console.error("Error generating sitemap:", err);
  process.exit(1);
});
