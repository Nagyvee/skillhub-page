import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DigitalAgencyHero } from "@/components/digital-agency/digital-agency-hero"
import { DigitalAgencyServices } from "@/components/digital-agency/digital-agency-services"
import { DigitalAgencyIndustries } from "@/components/digital-agency/digital-agency-industries"
import { DigitalAgencyWhyUs } from "@/components/digital-agency/digital-agency-why-us"
import { DigitalAgencyEnquiry } from "@/components/digital-agency/digital-agency-enquiry"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Agency | SkillHub International",
  description:
    "SkillHub Digital Agency delivers end-to-end digital transformation solutions: websites, software, LMS, cybersecurity, cloud, data analytics, and digital marketing across Africa.",
  keywords:
    "digital agency South Africa, web development, cybersecurity, cloud services, LMS, data analytics, digital marketing, digital transformation Africa",
  alternates: { canonical: "https://www.skillhub.africa/digital-agency" },
  openGraph: {
    title: "SkillHub Digital Agency | Innovate. Secure. Transform. Grow.",
    description:
      "End-to-end digital solutions for organisations across Africa. Websites, software, LMS, cybersecurity, cloud, analytics, and digital marketing.",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "SkillHub Digital Agency" }],
  },
}

export default function DigitalAgencyPage() {
  return (
    <main>
      <Navbar />
      <DigitalAgencyHero />
      <DigitalAgencyServices />
      <DigitalAgencyIndustries />
      <DigitalAgencyWhyUs />
      <DigitalAgencyEnquiry />
      <Footer />
    </main>
  )
}