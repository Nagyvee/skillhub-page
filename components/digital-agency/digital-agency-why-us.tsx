"use client"

import { MotionSection, MotionDiv, fadeInUp, staggerContainer } from "@/components/motion"
import { motion } from "motion/react"
import { Layers, Zap, Users, Lock, Target } from "lucide-react"

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description:
      "From strategy and design to implementation, support, and optimisation, complete digital solutions under one roof, so you never have to manage multiple vendors.",
  },
  {
    icon: Zap,
    title: "Innovation-Focused",
    description:
      "We leverage the latest technologies and best practices to deliver future-ready solutions that keep your organisation ahead of the curve.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description:
      "Our multidisciplinary team combines technical, creative, learning, and business expertise to solve complex challenges with practical precision.",
  },
  {
    icon: Lock,
    title: "Security & Reliability",
    description:
      "We prioritise cybersecurity, data protection, and system reliability in every project, because your trust is the foundation of everything we build.",
  },
  {
    icon: Target,
    title: "Client-Centred Approach",
    description:
      "We work closely with clients to develop solutions aligned with their goals, budget, and long-term vision, not just what's convenient for us.",
  },
]

export function DigitalAgencyWhyUs() {
  return (
    <MotionSection className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="da-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#da-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why Partner With Us
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl tracking-tight text-balance">
              Why Choose SkillHub Digital Agency?
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              We don't just deliver technology, we deliver outcomes that matter to your organisation.
            </p>
          </MotionDiv>
        </div>

        {/* Vision / Mission callout */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {[
            {
              label: "Our Vision",
              text: "To be Africa's leading digital transformation agency, empowering organisations through innovative technology, cybersecurity, cloud, data, learning, and marketing solutions that create lasting impact.",
            },
            {
              label: "Our Mission",
              text: "To deliver world-class digital solutions that enable organisations to innovate, grow, compete, and succeed in a rapidly evolving digital world.",
            },
          ].map((item) => (
            <MotionDiv key={item.label} variants={fadeInUp}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-8">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.label}
                </p>
                <p className="text-base leading-relaxed text-primary-foreground/75 font-medium italic">
                  "{item.text}"
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Reasons grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 text-[15px] font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </MotionSection>
  )
}