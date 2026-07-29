"use client"

import Link from "next/link"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { digitalAgencyServices } from "@/lib/digital-agency-services"
import { Layers, Lightbulb, Users, LockKeyhole, ArrowRight } from "lucide-react"

const industries = [
    "Corporate and Private Sector",
    "Government and Public Sector",
    "Educational Institutions",
    "Training Providers",
    "NGOs and Non-Profit Organisations",
    "Healthcare Organisations",
    "Financial Services",
    "Retail and E-Commerce",
    "Professional Associations",
    "Small and Medium Enterprises (SMEs)",
]

const whyChooseUs = [
    {
        icon: Layers,
        title: "End-to-End Solutions",
        description:
            "From strategy and design to implementation, support, and optimisation, we provide complete digital solutions under one roof.",
    },
    {
        icon: Lightbulb,
        title: "Innovation-Focused",
        description:
            "We leverage the latest technologies and best practices to deliver future-ready solutions.",
    },
    {
        icon: Users,
        title: "Industry Expertise",
        description:
            "Our multidisciplinary team combines technical, creative, learning, and business expertise to solve complex challenges.",
    },
    {
        icon: LockKeyhole,
        title: "Security and Reliability",
        description:
            "We prioritise cybersecurity, data protection, and system reliability in every project we undertake.",
    },
]

export function DigitalAgencyContent() {
    return (
        <>
            {/* Intro */}
            <MotionSection className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <MotionDiv variants={fadeInUp}>
                        <Badge className="bg-accent/10 text-accent border-accent/20 text-xs mb-4">
                            Building Digital Solutions. Driving Innovation. Enabling Growth.
                        </Badge>
                        <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                            SkillHub Digital Agency is the technology and digital transformation
                            division of SkillHub International, providing innovative digital
                            solutions that help organisations modernise operations, strengthen
                            their online presence, enhance cybersecurity, leverage data, and
                            accelerate growth. We partner with businesses, government
                            institutions, educational organisations, NGOs, and entrepreneurs to
                            design, develop, implement, and support technology solutions that
                            deliver measurable results.
                        </p>
                    </MotionDiv>
                </div>
            </MotionSection>

            {/* Services */}
            <MotionSection className="py-16 lg:py-24 bg-secondary/20 border-t border-border/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <MotionDiv variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Our Services
                        </h2>
                        <p className="text-muted-foreground">
                            End-to-end digital services that empower organisations to thrive in
                            the digital economy. Click a service to see the full scope.
                        </p>
                    </MotionDiv>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {digitalAgencyServices.map((service) => (
                            <MotionDiv key={service.slug} variants={fadeInUp} className="h-full">
                                <Link
                                    href={`/digital-agency/services/${service.slug}`}
                                    className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 group-hover:bg-accent/10 group-hover:ring-accent/20 transition-all duration-300">
                                        <service.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between gap-4">
                                        <span className="text-xs font-semibold text-accent">
                                            {service.items.length} services included
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary/80">
                                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </Link>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </MotionSection>

            {/* Industries */}
            <MotionSection className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            We proudly serve organisations across:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {industries.map((industry) => (
                                <Badge
                                    key={industry}
                                    variant="outline"
                                    className="text-xs font-medium px-4 py-2"
                                >
                                    {industry}
                                </Badge>
                            ))}
                        </div>
                    </MotionDiv>
                </div>
            </MotionSection>

            {/* Why Choose Us */}
            <MotionSection className="py-16 lg:py-24 bg-secondary/20 border-t border-border/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <MotionDiv variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Why Choose SkillHub Digital Agency?
                        </h2>
                    </MotionDiv>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {whyChooseUs.map((reason) => (
                            <MotionDiv
                                key={reason.title}
                                variants={fadeInUp}
                                className="rounded-2xl border border-border/50 bg-card p-6 text-center"
                            >
                                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                                    <reason.icon className="h-5 w-5 text-accent" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-foreground">
                                    {reason.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {reason.description}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </MotionSection>

            {/* Vision & Mission */}
            <MotionSection className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <MotionDiv
                            variants={fadeInUp}
                            className="rounded-2xl border border-border/50 bg-card p-8 lg:p-10"
                        >
                            <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                                Our Vision
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                To be Africa&apos;s leading digital transformation agency,
                                empowering organisations through innovative technology,
                                cybersecurity, cloud, data, learning, and marketing solutions that
                                create lasting impact.
                            </p>
                        </MotionDiv>
                        <MotionDiv
                            variants={fadeInUp}
                            className="rounded-2xl border border-border/50 bg-card p-8 lg:p-10"
                        >
                            <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                                Our Mission
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                To deliver world-class digital solutions that enable
                                organisations to innovate, grow, compete, and succeed in a
                                rapidly evolving digital world.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </MotionSection>
        </>
    )
}