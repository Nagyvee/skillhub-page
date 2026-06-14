"use client"

import { MotionSection, MotionDiv, fadeInUp, staggerContainer } from "@/components/motion"
import { motion } from "motion/react"
import {
  Building2,
  Landmark,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Stethoscope,
  Banknote,
  ShoppingCart,
  Users,
  Briefcase,
} from "lucide-react"

const industries = [
  { icon: Building2, label: "Corporate & Private Sector" },
  { icon: Landmark, label: "Government & Public Sector" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: BookOpen, label: "Training Providers" },
  { icon: HeartHandshake, label: "NGOs & Non-Profit Organisations" },
  { icon: Stethoscope, label: "Healthcare Organisations" },
  { icon: Banknote, label: "Financial Services" },
  { icon: ShoppingCart, label: "Retail & E-Commerce" },
  { icon: Users, label: "Professional Associations" },
  { icon: Briefcase, label: "Small & Medium Enterprises" },
]

export function DigitalAgencyIndustries() {
  return (
    <MotionSection className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Serve
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl tracking-tight text-balance">
              Industries We Work With
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We serve a diverse range of organisations across Africa and beyond, each with unique
              digital challenges we're equipped to solve.
            </p>
          </MotionDiv>
        </div>

        {/* Industry tiles */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.07, delayChildren: 0.05 },
            },
          }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.label}
                variants={fadeInUp}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[13px] font-medium text-foreground/80 leading-snug">
                  {industry.label}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </MotionSection>
  )
}