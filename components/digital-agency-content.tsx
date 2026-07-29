"use client"

import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import {
    Globe,
    Code2,
    GraduationCap,
    ShieldCheck,
    Cloud,
    BarChart3,
    Rocket,
    Megaphone,
    Palette,
    CheckCircle2,
    Layers,
    Lightbulb,
    Users,
    LockKeyhole,
} from "lucide-react"

interface Service {
    icon: typeof Globe
    title: string
    description: string
    items: string[]
}

const services: Service[] = [
    {
        icon: Globe,
        title: "Website Design and Development",
        description:
            "Modern, responsive, and user-friendly websites that enhance your brand, engage customers, and support your business objectives.",
        items: [
            "Corporate websites",
            "E-commerce websites",
            "Educational institution websites",
            "Government and NGO websites",
            "Landing pages and campaign websites",
            "Website maintenance and support",
            "Website hosting and management",
        ],
    },
    {
        icon: Code2,
        title: "Software and Application Development",
        description:
            "Custom software solutions that streamline business processes, improve efficiency, and create exceptional user experiences.",
        items: [
            "Custom web applications",
            "Mobile application development",
            "Enterprise software solutions",
            "Customer and employee portals",
            "Workflow automation systems",
            "Membership management platforms",
            "Booking and reservation systems",
            "Database development and integration",
            "API development and systems integration",
        ],
    },
    {
        icon: GraduationCap,
        title: "Learning Management Systems (LMS) & E-Learning",
        description:
            "As a trusted provider in the learning and development sector, we build digital learning environments that support education, training, and workforce development.",
        items: [
            "LMS design and development",
            "LMS implementation and customisation",
            "E-learning platform development",
            "Online assessment systems",
            "Certification and compliance management",
            "Virtual classroom integration",
            "Learner management and reporting",
            "Digital content hosting solutions",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Cybersecurity Solutions",
        description:
            "Protect your organisation's digital assets with comprehensive cybersecurity services designed to reduce risks and strengthen resilience.",
        items: [
            "Cybersecurity risk assessments",
            "Vulnerability assessments",
            "Penetration testing",
            "Security audits and compliance reviews",
            "Data protection and privacy solutions",
            "Network security solutions",
            "Endpoint protection",
            "Identity and access management",
            "Security awareness training",
            "Incident response planning",
            "Business continuity and disaster recovery planning",
        ],
    },
    {
        icon: Cloud,
        title: "Cloud Services and Infrastructure",
        description:
            "Leverage the power of cloud technology to improve scalability, accessibility, security, and operational efficiency.",
        items: [
            "Cloud strategy and consulting",
            "Cloud migration services",
            "Cloud infrastructure deployment",
            "Cloud-hosted applications",
            "Cloud-hosted LMS platforms",
            "Data backup and recovery solutions",
            "Managed cloud services",
            "Cloud security implementation",
            "Remote work and collaboration solutions",
        ],
    },
    {
        icon: BarChart3,
        title: "Data Analytics and Business Intelligence",
        description:
            "Transform data into valuable insights that drive informed decision-making and business performance.",
        items: [
            "Business intelligence solutions",
            "Interactive dashboards and reporting",
            "Data visualisation",
            "Performance monitoring systems",
            "Predictive analytics",
            "Market and customer insights",
            "Operational analytics",
            "Learning and training analytics",
            "KPI development and reporting",
            "Data management and governance",
        ],
    },
    {
        icon: Rocket,
        title: "Digital Transformation Consulting",
        description:
            "We help organisations embrace innovation and adapt to changing business environments through technology-driven transformation.",
        items: [
            "Digital transformation strategies",
            "Technology roadmaps",
            "Business process optimisation",
            "Workflow automation",
            "Systems integration",
            "Innovation advisory services",
            "Change management support",
            "Digital maturity assessments",
        ],
    },
    {
        icon: Megaphone,
        title: "Digital Marketing and Social Media Management",
        description:
            "We help organisations increase visibility, engage audiences, generate leads, and grow their brands through effective digital marketing strategies.",
        items: [
            "Social media strategy, content, and advertising",
            "Search Engine Optimisation (SEO)",
            "Search Engine Marketing (SEM) & PPC",
            "Content marketing and blogging",
            "Email marketing and automation",
            "Digital advertising (Facebook, Instagram, LinkedIn, YouTube)",
        ],
    },
    {
        icon: Palette,
        title: "Creative Design and Branding",
        description:
            "We create memorable brands and digital experiences that connect organisations with their audiences.",
        items: [
            "Logo design",
            "Corporate identity development",
            "Brand strategy",
            "Graphic design",
            "UI/UX design",
            "Marketing collateral design",
            "Infographics and presentations",
            "Digital media design",
        ],
    },
]

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
                            the digital economy.
                        </p>
                    </MotionDiv>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <MotionDiv
                                key={service.title}
                                variants={fadeInUp}
                                className="group relative h-full rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border flex flex-col"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 group-hover:bg-accent/10 group-hover:ring-accent/20 transition-all duration-300">
                                    <service.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-foreground">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>

                                <ul className="mt-4 space-y-2 flex-grow">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2 text-xs text-muted-foreground"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                                organisations to invovate, grow, compete, and succeed in a
                                rapidly evolving digital world.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </MotionSection>
        </>
    )
}