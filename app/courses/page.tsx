import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CoursesGrid } from "@/components/courses-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedCourses } from "@/lib/courses-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Short Courses South Africa",
  description: "Browse 100+ QCTO-accredited short courses in supply chain, logistics, procurement, finance, HR and leadership. Classroom and online training available across South Africa.",
  keywords: "short courses South Africa, professional development courses, supply chain training, logistics courses, procurement training, QCTO courses",
  alternates: { canonical: "https://www.skillhub.africa/courses" },
  openGraph: {
    title: "Professional Short Courses | SkillHub International",
    description: "100+ accredited courses across supply chain, logistics, finance, HR and more.",
    type: "website",
    siteName: "SkillHub International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Short Courses | SkillHub International",
    description: "100+ accredited courses across supply chain, logistics, finance, HR and more.",
  },
}

export default function CoursesPage() {
  const { courses, totalPages, totalCourses } = getPaginatedCourses(1)

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Our Courses"
        description="Explore our comprehensive catalogue of world-class programs, each meticulously designed with industry leaders to deliver real-world competencies and lasting career impact."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
        ]}
      />
      <CoursesGrid
        courses={courses}
        totalCourses={totalCourses}
        currentPage={1}
        totalPages={totalPages}
        baseUrl="/courses"
      />
      <CtaSection />
      <Footer />
    </main>
  )
}
