import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AllLearnershipsGrid, type LearnershipItem } from "@/components/all-learnerships-grid"
import QctoCourses from "@/lib/qcto-courses"
import { accredited } from "@/short-courses/accredited"
import { business } from "@/short-courses/business"
import { wholesaleRetail } from "@/short-courses/wholesale-retail"
import type { Metadata } from "next"
import { getAccreditedLearnerships } from "@/lib/accreditations-data"

export const metadata: Metadata = {
    title: "Learnerships | SkillHub International",
    description:
        "Browse all QCTO/SAQA accredited learnership qualifications at SkillHub International across Supply Chain, ICT, Business, and Wholesale & Retail. NQF Levels 3–8.",
    alternates: { canonical: "https://www.skillhub.africa/learnerships" },
}

// Aggregate every learnership qualification into a single, consistently-shaped list.
function getAllLearnerships(): LearnershipItem[] {
    const supplyChain: LearnershipItem[] = QctoCourses.map((c) => ({
        id: `supply-chain-${c.id}`,
        title: c.title,
        section: "Supply Chain",
        nqf: c.nqf,
        credits: c.credits,
        duration: `12 Months`,
        description: `QCTO-accredited learnership. Entry: ${c.entryRequirements}.`,
        href: `/contact?learnership=${encodeURIComponent(c.title)}`,
        cta: "Enquire Now",
    }))

    const mapAccredited = (
        courses: any[],
        section: string,
        basePath: string
    ): LearnershipItem[] =>
        courses.map((c) => ({
            id: `${basePath}-${c.slug}`,
            title: c.title,
            section,
            nqf: c.meta.nqf_level,
            credits: c.meta.credits,
            duration: c.meta.duration,
            description: c.tagline,
            href: `/learnerships/${basePath}/${c.slug}`,
            cta: "View Course",
        }))

    return [
        ...supplyChain,
        ...mapAccredited(accredited.courses, "ICT", "ict"),
        ...mapAccredited(business.courses, "Business", "business"),
        ...mapAccredited(wholesaleRetail.courses, "Wholesale & Retail", "wholesale-retail"),
        ...getAccreditedLearnerships(),
    ]
}

export default function LearnershipsPage() {
    const items = getAllLearnerships()

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Learnerships"
                description="Explore every QCTO/SAQA accredited learnership qualification at SkillHub International — nationally recognised programmes across Supply Chain, ICT, Business, and Wholesale & Retail, spanning NQF Levels 3 to 8."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Learnerships", href: "/learnerships" },
                ]}
            />
            <AllLearnershipsGrid items={items} />
            <CtaSection />
            <Footer />
        </main>
    )
}
