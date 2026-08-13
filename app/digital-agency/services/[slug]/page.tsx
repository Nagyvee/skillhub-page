import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { digitalAgencyServices, getDigitalAgencyServiceBySlug } from "@/lib/digital-agency-services"
import { CheckCircle2, XCircle, Layers, ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"
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

    const otherServices = digitalAgencyServices.filter((s) => s.slug !== service.slug).slice(0, 3)

    return (
        <div className="bg-background min-h-screen text-foreground flex flex-col font-sans">
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

            <div className="relative pt-16 pb-20 md:pb-24 z-10 flex-grow">
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.03]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Left Column (Main Content) */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* 1. Badges */}
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-xs">
                                    Digital Agency Service
                                </Badge>
                                <Badge className="bg-secondary text-secondary-foreground border-border text-xs">
                                    {service.items.length} Services Included
                                </Badge>
                            </div>

                            {/* 2. Overview */}
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                                {service.overview.split("\n\n").map((paragraph, index) => (
                                    <p key={index} className="text-muted-foreground leading-relaxed text-base">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>

                            {/* 3. Who It's For */}
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Who It&apos;s For</h2>
                                <div className="rounded-2xl border border-border bg-card p-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {service.whoItsFor}
                                    </p>
                                </div>
                            </section>

                            {/* 4. Problems We Solve */}
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Problems We Solve</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {service.problems.map((problem) => (
                                        <div
                                            key={problem}
                                            className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3 hover:border-border/80 hover:shadow-sm transition-all"
                                        >
                                            <XCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                            <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 5. Our Approach */}
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Our Approach</h2>
                                <div className="relative border-l border-border pl-6 ml-3 space-y-8">
                                    {service.approach.map((step, idx) => (
                                        <div key={step.title} className="relative group">
                                            <div className="absolute -left-[31px] top-1.5 bg-accent h-2.5 w-2.5 rounded-full ring-4 ring-background transition-all group-hover:scale-125" />
                                            <div className="rounded-2xl border border-border bg-card p-6 space-y-2 hover:border-border/80 hover:shadow-sm transition-all">
                                                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                                                    Step {idx + 1}
                                                </span>
                                                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 6. Key Benefits */}
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Key Benefits</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {service.benefits.map((benefit) => (
                                        <div
                                            key={benefit}
                                            className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3 hover:border-border/80 hover:shadow-sm transition-all"
                                        >
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 7. What's Included */}
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">What&apos;s Included</h2>
                                <div className="flex flex-wrap gap-2">
                                    {service.items.map((item) => (
                                        <Badge
                                            key={item}
                                            variant="outline"
                                            className="bg-secondary text-secondary-foreground border-border text-xs px-3.5 py-1.5"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </section>

                            {/* 8. FAQs */}
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <div className="space-y-3">
                                    {service.faqs.map((faq) => (
                                        <div
                                            key={faq.question}
                                            className="rounded-2xl border border-border bg-card p-5"
                                        >
                                            <div className="flex items-start gap-3">
                                                <HelpCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                                                <h3 className="text-sm font-semibold text-foreground">{faq.question}</h3>
                                            </div>
                                            <p className="mt-2 pl-7 text-sm text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 9. Often Paired With */}
                            <section className="space-y-6 border-t border-border pt-8">
                                <h2 className="text-2xl font-bold text-foreground">Often Paired With {service.title}</h2>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {otherServices.map((other) => (
                                        <Link
                                            key={other.slug}
                                            href={`/digital-agency/services/${other.slug}`}
                                            className="group rounded-2xl border border-border bg-card p-5 hover:border-border/80 hover:shadow-sm transition-all flex flex-col"
                                        >
                                            <other.icon className="h-5 w-5 text-accent" />
                                            <h4 className="mt-3 font-semibold text-foreground text-sm">{other.title}</h4>
                                            <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-accent">
                                                Explore
                                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column (Sticky Sidebar) */}
                        <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6 z-20">
                            <div className="rounded-3xl border border-border bg-card p-6 space-y-6 shadow-md">
                                <div className="bg-secondary rounded-xl p-3 border border-border flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">Category:</span>
                                    <span className="font-semibold text-foreground">Digital Agency</span>
                                </div>

                                <div className="border-t border-border pt-6 space-y-4 text-sm text-foreground">
                                    <div className="flex items-center gap-3">
                                        <service.icon className="h-5 w-5 text-accent shrink-0" />
                                        <span>{service.title}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Layers className="h-5 w-5 text-accent shrink-0" />
                                        <span>{service.items.length} services included</span>
                                    </div>
                                </div>

                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-base rounded-xl transition-all"
                                >
                                    <Link href={`/contact?enquiry=digital-agency&service=${encodeURIComponent(service.title)}`}>
                                        Get a Free Consultation
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}