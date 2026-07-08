"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
    Search,
    Clock,
    BookOpen,
    ArrowRight,
    Cpu,
    Briefcase,
    Store,
    Truck,
    GraduationCap,
} from "lucide-react"
import { cn } from "@/lib/utils"

export interface LearnershipItem {
    id: string
    title: string
    section: string
    nqf: number
    credits: number
    duration: string
    description: string
    href: string
    cta: string
}

const SECTIONS = ["All", "Supply Chain", "ICT", "Business", "Wholesale & Retail"]

const getSectionIcon = (section: string) => {
    switch (section) {
        case "Supply Chain":
            return Truck
        case "ICT":
            return Cpu
        case "Business":
            return Briefcase
        case "Wholesale & Retail":
            return Store
        default:
            return GraduationCap
    }
}

interface AllLearnershipsGridProps {
    items: LearnershipItem[]
}

export function AllLearnershipsGrid({ items }: AllLearnershipsGridProps) {
    const router = useRouter()
    const [search, setSearch] = useState("")
    const [section, setSection] = useState("All")

    const filtered = useMemo(() => {
        return items.filter((item) => {
            const matchSection = section === "All" || item.section === section
            const matchSearch =
                !search ||
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase())
            return matchSection && matchSearch
        })
    }, [search, section, items])

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Search */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative max-w-md flex-1">
                        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search learnerships..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 h-11 bg-card border-border/60 focus-visible:ring-accent/30"
                        />
                    </div>
                </div>

                {/* Section filter pills */}
                <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                        {SECTIONS.map((sec) => {
                            const isActive = section === sec
                            return (
                                <button
                                    key={sec}
                                    onClick={() => setSection(sec)}
                                    className={cn(
                                        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                                        isActive
                                            ? "text-accent-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="learnership-filter"
                                            className="absolute inset-0 rounded-full bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{sec}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Results count */}
                <div className="mt-8 text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                    of{" "}
                    <span className="font-semibold text-foreground">{items.length}</span>{" "}
                    learnerships
                </div>

                {/* Grid */}
                <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item) => {
                            const Icon = getSectionIcon(item.section)
                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className="group h-full"
                                >
                                    <div
                                        onClick={() => router.push(item.href)}
                                        className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 cursor-pointer hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                                    >
                                        <div className="relative p-6 lg:p-7 flex flex-col h-full">
                                            <div className="flex items-start justify-between">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                                                    <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                                                        NQF {item.nqf}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-[10px] font-semibold">
                                                        Accredited
                                                    </Badge>
                                                </div>
                                            </div>

                                            <div className="mt-5">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                                                    {item.section}
                                                </p>
                                                <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground line-clamp-2">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-4">
                                                {item.description}
                                            </p>

                                            <div className="mt-auto">
                                                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        {item.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <BookOpen className="h-3.5 w-3.5" />
                                                        {item.credits} Credits
                                                    </span>
                                                </div>

                                                <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between gap-4">
                                                    <Button
                                                        size="sm"
                                                        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-4"
                                                        asChild
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Link href={item.href}>{item.cta}</Link>
                                                    </Button>
                                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary/80">
                                                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="mt-16 text-center py-16">
                        <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                            No learnerships found
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Try adjusting your search or filter.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}