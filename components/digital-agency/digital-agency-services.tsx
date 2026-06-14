"use client"

import { MotionSection, MotionDiv, fadeInUp, staggerContainer } from "@/components/motion"
import { motion } from "motion/react"
import {
  Globe,
  Code2,
  BookOpen,
  Shield,
  Cloud,
  BarChart3,
  Lightbulb,
  Megaphone,
  Palette,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "website-design-development",
    icon: Globe,
    title: "Website Design & Development",
    summary:
      "Modern, responsive websites that enhance your brand and support your business objectives, from corporate sites to e-commerce platforms.",
    items: [
      "Corporate & e-commerce websites",
      "Government and NGO websites",
      "Landing pages & campaign sites",
      "Website hosting & maintenance",
    ],
  },
  {
    id: "software-application-development",
    icon: Code2,
    title: "Software & Application Development",
    summary:
      "Custom software solutions that streamline processes, improve efficiency, and create exceptional user experiences.",
    items: [
      "Custom web & mobile applications",
      "Enterprise software solutions",
      "Workflow automation systems",
      "API development & integration",
    ],
  },
  {
    id: "lms-elearning-solutions",
    icon: BookOpen,
    title: "LMS & E-Learning Solutions",
    summary:
      "Digital learning environments that support education, training, and workforce development, backed by our L&D expertise.",
    items: [
      "LMS design, development & implementation",
      "Online assessment systems",
      "Virtual classroom integration",
      "Learner management & reporting",
    ],
  },
  {
    id: "cybersecurity-solutions",
    icon: Shield,
    title: "Cybersecurity Solutions",
    summary:
      "Comprehensive cybersecurity services designed to protect your digital assets, reduce risk, and strengthen organisational resilience.",
    items: [
      "Cybersecurity risk & vulnerability assessments",
      "Penetration testing & security audits",
      "Data protection & privacy solutions",
      "Incident response & business continuity planning",
    ],
  },
  {
    id: "cloud-services-infrastructure",
    icon: Cloud,
    title: "Cloud Services & Infrastructure",
    summary:
      "Leverage cloud technology to improve scalability, accessibility, security, and operational efficiency.",
    items: [
      "Cloud strategy, migration & deployment",
      "Cloud-hosted LMS platforms",
      "Data backup & recovery solutions",
      "Managed cloud services & security",
    ],
  },
  {
    id: "data-analytics-business-intelligence",
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    summary:
      "Transform raw data into actionable insights that drive informed decision-making and business performance.",
    items: [
      "Business intelligence & dashboards",
      "Data visualisation & predictive analytics",
      "Learning & training analytics",
      "KPI development & data governance",
    ],
  },
  {
    id: "digital-transformation-consulting",
    icon: Lightbulb,
    title: "Digital Transformation Consulting",
    summary:
      "We help organisations embrace innovation and adapt to change through technology-driven transformation strategies.",
    items: [
      "Digital transformation strategies",
      "Technology roadmaps & process optimisation",
      "Systems integration & workflow automation",
      "Digital maturity assessments",
    ],
  },
  {
    id: "digital-marketing-social-media",
    icon: Megaphone,
    title: "Digital Marketing & Social Media",
    summary:
      "Increase visibility, engage audiences, generate leads, and grow your brand through targeted digital marketing strategies.",
    items: [
      "SEO, SEM & Google Ads management",
      "Social media strategy & management",
      "Content & email marketing",
      "LinkedIn, Facebook & YouTube advertising",
    ],
  },
  {
    id: "creative-design-branding",
    icon: Palette,
    title: "Creative Design & Branding",
    summary:
      "Memorable brands and digital experiences that connect your organisation with its audiences.",
    items: [
      "Logo design & corporate identity",
      "Brand strategy & graphic design",
      "UI/UX design",
      "Marketing collateral & infographics",
    ],
  },
]

export function DigitalAgencyServices() {
  return (
    <MotionSection id="services" className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What We Do
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl tracking-tight text-balance">
              Our Digital Services
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              From strategy and design to implementation, support, and optimisation, we provide
              complete digital solutions under one roof.
            </p>
          </MotionDiv>
        </div>

        {/* Services grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                id={service.id}
                variants={fadeInUp}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 scroll-mt-28 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Accent top bar on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/40" />

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mb-3 text-base font-semibold text-foreground leading-snug">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground flex-1">
                  {service.summary}
                </p>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA nudge */}
        <MotionDiv variants={fadeInUp} className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which service you need?{" "}
            <Link
              href="#enquiry"
              className="font-medium text-foreground underline decoration-accent/50 underline-offset-4 hover:decoration-accent transition-colors"
            >
              Let's talk, we'll guide you.
              <ChevronRight className="inline ml-1 h-3.5 w-3.5" />
            </Link>
          </p>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}