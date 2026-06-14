"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export function DigitalAgencyHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary flex items-center pt-20">
      {/* Layered ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-accent/10 rounded-full -translate-y-1/3 translate-x-1/4 blur-[140px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-[120px] opacity-30" />
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated orbital rings */}
      <motion.div
        className="absolute -top-48 -right-48 h-96 w-96 rounded-full border border-primary-foreground/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <ol className="flex items-center gap-1.5 text-sm">
            <li>
              <Link href="/" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-primary-foreground/30" />
              <span className="text-primary-foreground/80 font-medium">Digital Agency</span>
            </li>
          </ol>
        </motion.nav>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              SkillHub Digital Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif text-5xl font-bold text-primary-foreground md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-balance"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Building Digital Solutions.{" "}
            <span className="text-accent">Driving Innovation.</span>{" "}
            Enabling Growth.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/65 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            The technology and digital transformation division of SkillHub International, delivering end-to-end
            digital solutions that help organisations modernise, grow, and succeed across Africa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-12 px-8 text-sm font-medium"
              asChild
            >
              <Link href="#enquiry">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="bg-transparent border border-primary-foreground/15 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-sm font-medium"
              asChild
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {["End-to-End Solutions", "Africa-Focused", "Security-First", "25+ Years Experience"].map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-[13px] text-primary-foreground/45">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}