import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { Events } from "@/components/events"
import { CtaSection } from "@/components/cta-section"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"


export const metadata: Metadata = {
  title: "SkillHub International | Professional Training Courses South Africa",
  description: "SkillHub International offers QCTO-accredited short courses and learnerships in supply chain, logistics, procurement, finance, and leadership. Training across South Africa since 1999.",
  keywords: "professional training South Africa, short courses South Africa, supply chain courses, logistics training, QCTO learnerships, SkillHub International",
  openGraph: {
    title: "SkillHub International | Professional Training Courses South Africa",
    description: "QCTO-accredited short courses and learnerships in supply chain, logistics, procurement, finance, and leadership. Training across South Africa since 1999.",
    type: "website",
    url: "https://www.skillhub.africa",
    siteName: "SkillHub International",
    images: [{ url: "https://www.skillhub.africa/assets/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillHub International | Professional Training South Africa",
    description: "QCTO-accredited short courses and learnerships across South Africa.",
  },
  alternates: {
    canonical: "https://www.skillhub.africa",
  },
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Testimonials />
      <Events />
      <Partners />
      <CtaSection />
      <Footer />
    </main>
  )
}
