"use client"

import { Badge } from "@/components/ui/badge"
import {
    Zap,
    Clock,
    BookOpen,
    ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface BootcampProgram {
    id: string
    slug: string
    url: string
    image: string
    title: string
    tagline: string
    meta: {
        lessons: number
        duration: string
    }
    program: {
        duration: string
        delivery: string
        intensity: string
    }
}

interface BootcampsGridProps {
    programs: BootcampProgram[]
    pricingDisplay: string
    seatsPerCohort: number
}

export function BootcampsGrid({ programs }: BootcampsGridProps) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {programs.map((bootcamp) => (
                <Link
                    key={bootcamp.id}
                    href={`/learnerships/bootcamps/${bootcamp.slug}`}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border cursor-pointer flex flex-col"
                >
                    <div className="relative h-48 w-full overflow-hidden bg-muted shrink-0">
                        {bootcamp.image ? (
                            <Image
                                src={bootcamp.image}
                                alt={bootcamp.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <span className="text-xs text-muted-foreground">Image coming soon</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-semibold flex items-center gap-1">
                                View bootcamp details
                                <ArrowRight className="h-3 w-3" />
                            </span>
                        </div>
                    </div>

                    <div className="p-6 lg:p-7 flex flex-col flex-grow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 group-hover:bg-accent/10 group-hover:ring-accent/20 transition-all duration-300">
                                <Zap className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                                    {bootcamp.program.duration}
                                </Badge>
                                <Badge variant="outline" className="text-[10px] font-semibold">
                                    Bootcamp
                                </Badge>
                            </div>
                        </div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                            {bootcamp.program.intensity} · Job Guarantee
                        </p>
                        <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground group-hover:text-accent transition-colors duration-300">
                            {bootcamp.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-4">
                            {bootcamp.tagline}
                        </p>

                        <div className="mt-auto">
                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5" />
                                    {bootcamp.program.duration}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <BookOpen className="h-3.5 w-3.5" />
                                    {bootcamp.meta.lessons} Lessons
                                </span>
                            </div>

                            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-mono text-muted-foreground">
                                {bootcamp.program.intensity}
                            </div>

                            <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between gap-4">
                                <div
                                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-4 py-2 text-xs font-semibold inline-flex items-center justify-center transition-colors"
                                >
                                    Enquire Now
                                </div>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary/80">
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
