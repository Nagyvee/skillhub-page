import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { DigitalAgencyContent } from "@/components/digital-agency-content"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Digital Agency | SkillHub International",
    description:
        "SkillHub Digital Agency is the technology and digital transformation division of SkillHub International — website development, software, LMS, cybersecurity, cloud, data analytics, digital transformation, digital marketing, and creative design.",
    alternates: { canonical: "https://www.skillhub.africa/digital-agency" },
}

export default function DigitalAgencyPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="SkillHub Digital Agency"
                description="Building Digital Solutions. Driving Innovation. Enabling Growth. From websites and mobile applications to cloud infrastructure, cybersecurity, data analytics, learning technologies, and digital marketing — we provide end-to-end services that empower organisations to thrive in the digital economy."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Digital Agency", href: "/digital-agency" },
                ]}
            />
            <DigitalAgencyContent />
            <CtaSection />
            <Footer />
        </main>
    )
}