import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { EventsGrid } from "@/components/events-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedEvents } from "@/lib/events-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Training Events & Workshops South Africa",
  description: "Browse upcoming professional training events, workshops and programmes in supply chain, logistics, ports, and operations management across South Africa.",
  keywords: "training events South Africa, professional workshops, logistics events, supply chain workshops, operations management training",
  alternates: { canonical: "https://www.skillhub.africa/events" },
  openGraph: {
    title: "Training Events & Workshops | SkillHub International",
    description: "Upcoming professional training events in supply chain, logistics, ports and operations management.",
    type: "website",
    siteName: "SkillHub International",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function EventsPage() {
    const { events, totalPages, totalEvents } = getPaginatedEvents(1)

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Events & Training Programs"
                description="Expand your expertise. Connect with professionals. Build real-world skills through our world-class operational leadership, logistics & AI training events."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" }
                ]}
            />
            <EventsGrid
                events={events}
                totalEvents={totalEvents}
                currentPage={1}
                totalPages={totalPages}
                baseUrl="/events"
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
