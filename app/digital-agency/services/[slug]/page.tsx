import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { DigitalAgencyCtaSection } from "@/components/digital-agency-cta-section"
import { Footer } from "@/components/footer"
import { digitalAgencyServices, getDigitalAgencyServiceBySlug, digitalAgencyProcess } from "@/lib/digital-agency-services"
import { CheckCircle2, Sparkles } from "lucide-react"
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

                    <div className="mt-6 space-y-4">
                        {service.overview.split("\n\n").map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base leading-relaxed text-muted-foreground lg:text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <h2 className="mt-12 text-2xl lg:text-3xl font-bold text-foreground">
                        Key Benefits
                    </h2>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {service.benefits.map((benefit) => (
                            <li
                                key={benefit}
                                className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4"
                            >
                                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                <span className="text-sm leading-relaxed text-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-12 text-2xl lg:text-3xl font-bold text-foreground">
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

            <section className="py-16 lg:py-24 bg-secondary/20 border-t border-border/50">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Our Process
                        </h2>
                        <p className="text-muted-foreground">
                            How we take {service.title.toLowerCase()} from a conversation to a
                            delivered solution.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {digitalAgencyProcess.map((step, index) => (
                            <div
                                key={step.title}
                                className="relative rounded-2xl border border-border/50 bg-card p-6"
                            >
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                                    Step {index + 1}
                                </span>
                                <h3 className="mt-3 text-lg font-semibold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DigitalAgencyCtaSection />
            <Footer />
        </main>
    )
}