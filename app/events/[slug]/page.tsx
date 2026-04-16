import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { EventDetail } from "@/components/event-detail"
import { Footer } from "@/components/footer"
import { getEventBySlug, allEvents } from "@/lib/events-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface EventPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return allEvents.map((event) => ({
        slug: event.slug,
    }))
}

export async function generateMetadata({
    params,
}: EventPageProps): Promise<Metadata> {
    const { slug } = await params
    const event = getEventBySlug(slug)

    if (!event) {
        return {
            title: "Event Not Found",
        }
    }

    const title = event.seo.seoTitle || `${event.title} | SkillHub Events`
    const description = event.seo.seoDescription || event.title

    return {
        title,
        description,
        keywords: event.seo.seoKeywords,
        openGraph: {
            title,
            description,
            type: "website",
            siteName: "SkillHub",
        },
        alternates: { canonical: `https://www.skillhub.africa/events/${slug}` },
    }
}

export default async function EventPage({ params }: EventPageProps) {
    const { slug } = await params
    const event = getEventBySlug(slug)

    if (!event) {
        notFound()
    }

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Event Details"
                description={event.title}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" },
                    { label: event.title, href: `/events/${event.slug}` },
                ]}
            />
            <EventDetail event={event} />
            <Footer />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: event.title,
                        description: event.seo.seoDescription,
                        startDate: (() => {
                            const d = new Date(`${event.dayDate} ${event.monthYear}`)
                            return isNaN(d.getTime()) ? event.dayDate : d.toISOString()
                        })(),
                        endDate: (() => {
                            const d = new Date(event.endTime)
                            return isNaN(d.getTime()) ? event.endTime : d.toISOString()
                        })(),
                        eventStatus: "https://schema.org/EventScheduled",
                        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                        location: {
                            "@type": "Place",
                            name: event.location,
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: event.location,
                            }
                        },
                        organizer: {
                            "@type": "Organization",
                            name: "SkillHub International",
                            url: "https://www.skillhub.africa"
                        }
                    })
                }}
            />
        </main>
    )
}
