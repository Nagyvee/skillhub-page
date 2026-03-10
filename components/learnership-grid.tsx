"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Clock, BookOpen, Hash, ArrowRight, Search } from "lucide-react"
import { QctoCourse } from "@/lib/qcto-courses"
import { cn } from "@/lib/utils"

interface LearnershipGridProps {
    courses: QctoCourse[]
}

const nqfLabels = ["All", "NQF Level 5", "NQF Level 6", "NQF Level 7"] as const
type FilterType = "All" | 5 | 6 | 7

const getNqfColor = (nqf: 5 | 6 | 7) => {
    if (nqf === 5) return "bg-accent/10 text-accent border-accent/20"
    if (nqf === 6) return "bg-primary/10 text-primary border-primary/20"
    return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
}

export function LearnershipGrid({ courses }: LearnershipGridProps) {
    const [activeNqf, setActiveNqf] = useState<FilterType>("All")

    const filtered = useMemo(() => {
        return activeNqf === "All" ? courses : courses.filter(c => c.nqf === activeNqf)
    }, [activeNqf, courses])

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 mt-8">
                    {nqfLabels.map((label) => {
                        let filterValue: FilterType = "All"
                        if (label === "NQF Level 5") filterValue = 5
                        if (label === "NQF Level 6") filterValue = 6
                        if (label === "NQF Level 7") filterValue = 7

                        const isActive = activeNqf === filterValue

                        return (
                            <button
                                key={label}
                                onClick={() => setActiveNqf(filterValue)}
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
                                <span className="relative z-10">{label}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Results Count */}
                <div className="mt-8 text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                    of{" "}
                    <span className="font-semibold text-foreground">{courses.length}</span>{" "}
                    learnerships
                </div>

                {/* Card Grid */}
                <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((course) => (
                            <motion.div
                                key={course.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="group h-full"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 cursor-pointer border-border/50 bg-card hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border">
                                    <div className="relative p-6 lg:p-7 flex flex-col h-full">
                                        {/* ROW 1: Icon container + Badges */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                                                <GraduationCap className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge className={cn("text-[10px]", getNqfColor(course.nqf))}>
                                                    NQF {course.nqf}
                                                </Badge>
                                                <Badge variant="outline" className="text-[10px] font-semibold">
                                                    Learnership
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* ROW 2: Label + Title */}
                                        <div className="mt-5">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                                                QCTO · NQF LEVEL {course.nqf}
                                            </p>
                                            <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground line-clamp-2">
                                                {course.title}
                                            </h3>
                                        </div>

                                        {/* ROW 3: Entry requirements */}
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-4">
                                            {course.entryRequirements}
                                        </p>

                                        {/* ROW 4: Metadata */}
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {course.duration} Months
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <BookOpen className="h-3.5 w-3.5" />
                                                    {course.credits} Credits
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Hash className="h-3.5 w-3.5" />
                                                    SAQA {course.saqaId}
                                                </span>
                                            </div>

                                            {/* ROW 5: Learnership code pill */}
                                            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-mono text-muted-foreground">
                                                {course.learnershipCode || "Code Pending"}
                                            </div>

                                            {/* ROW 6: Footer */}
                                            <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between gap-4">
                                                <Button
                                                    size="sm"
                                                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-4"
                                                    asChild
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Link href={`/contact?learnership=${encodeURIComponent(course.title)}`}>
                                                        Enquire Now
                                                    </Link>
                                                </Button>
                                                {/* <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary/80">
                                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filtered.length === 0 && (
                    <div className="mt-16 text-center py-16">
                        <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                            No learnerships found
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Try adjusting your filters.
                        </p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-16">
                    <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-primary/10 p-8 lg:p-12 text-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent)/0.1),transparent_50%)] pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                Ready to advance your supply chain career?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Our QCTO-accredited learnerships are nationally recognised qualifications that open doors across the industry.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                                    <Link href="/contact">
                                        Enquire About Learnerships
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/courses">
                                        View All Courses
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
