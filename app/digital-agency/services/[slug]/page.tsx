import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { DigitalAgencyCtaSection } from "@/components/digital-agency-cta-section"
import { Footer } from "@/components/footer"
import { digitalAgencyServices, getDigitalAgencyServiceBySlug } from "@/lib/digital-agency-services"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface ServicePageProps {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return digitalAgencyServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params
    const service = getDigitalAgencyServiceBySlug(slug)

    if (!service) {
        return { title: "Service Not Found | SkillHub International" }
    }

    return {
        title: `${service.title} | SkillHub Digital Agency`,
        description: service.description,
        alternates: { canonical: `https://www.skillhub.africa/digital-agency/services/${service.slug}` },
    }
}

export default async function DigitalAgencyServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = getDigitalAgencyServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <main>
            <Navbar />
            <PageHeader
                title={service.title}
                description={service.description}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Digital Agency", href: "/digital-agency" },
                    { label: service.title, href: `/digital-agency/services/${service.slug}` },
                ]}
            />

            <section className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                        <service.icon className="h-7 w-7 text-primary" />
                    </div>

                    <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-foreground">
                        What&apos;s included
                    </h2>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {service.items.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                <span className="text-sm leading-relaxed text-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <DigitalAgencyCtaSection />
            <Footer />
        </main>
    )
}