import { notFound } from "next/navigation";
import { landingPages } from "../../../lib/landing-pages-data";
import { CourseLandingTemplate } from "../../../components/landing/CourseLandingTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = landingPages[slug];
  if (!data) return {};
  return {
    title: `${data.title} | SkillHub International`,
    description: data.heroSub,
    robots: "noindex, nofollow",
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const data = landingPages[slug];
  if (!data) notFound();
  return <CourseLandingTemplate data={data!} />;
}