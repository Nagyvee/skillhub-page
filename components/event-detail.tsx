"use client"

import { useState } from "react"
import { Event } from "@/lib/events-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, MapPin, Clock, Users, CheckCircle, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

interface EventDetailProps {
    event: Event
}

export function EventDetail({ event }: EventDetailProps) {
    const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([0]))

    const toggleModule = (index: number) => {
        const newExpanded = new Set(expandedModules)
        if (newExpanded.has(index)) {
            newExpanded.delete(index)
        } else {
            newExpanded.add(index)
        }
        setExpandedModules(newExpanded)
    }

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero / Header Section within content */}
                        <div className="mb-12">
                            <div className="flex flex-wrap gap-2 mb-6">
                                <Badge variant="secondary" className="text-sm font-medium">
                                    {event.skillLevel}
                                </Badge>
                                <Badge variant="outline" className="text-sm font-medium">
                                    {event.participants} Participants
                                </Badge>
                                {event.duration && (
                                    <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-medium">
                                        {event.duration}
                                    </Badge>
                                )}
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                                {event.title}
                            </h1>

                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8">
                                <Image
                                    src={event.imgSrc || "/placeholder-event.jpg"}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Program Summary */}
                        <div className="rounded-2xl border border-border/50 bg-card p-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                Program Summary
                            </h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {event.programSummary || event.seo.seoDescription}
                            </p>
                        </div>

                        {/* Who Should Attend */}
                        {event.whoShouldAttend && event.whoShouldAttend.length > 0 && (
                            <div className="rounded-2xl border border-border/50 bg-card p-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-6">
                                    Who Should Attend
                                </h2>
                                <ul className="grid gap-4 sm:grid-cols-2">
                                    {event.whoShouldAttend.map((person, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                            <span>{person}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Learning Outcomes */}
                        {event.learningOutcomes && event.learningOutcomes.length > 0 && (
                            <div className="rounded-2xl border border-border/50 bg-card p-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    Learning Outcomes
                                </h2>
                                <ul className="space-y-3">
                                    {event.learningOutcomes.map((outcome, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Curriculum / Modules */}
                        {event.modules && event.modules.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                                    Curriculum / Modules
                                </h2>
                                {event.modules.map((module, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-2xl border border-border/50 bg-card overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleModule(idx)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors"
                                        >
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {module.title}
                                            </h3>
                                            <ChevronDown
                                                className={`h-5 w-5 text-muted-foreground transition-transform ${expandedModules.has(idx) ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {expandedModules.has(idx) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-border/50 bg-card"
                                            >
                                                <div className="p-6 space-y-6">
                                                    {/* Key Topics */}
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Topics</h4>
                                                        <ul className="space-y-2">
                                                            {module.keyTopics.map((topic, tIdx) => (
                                                                <li key={tIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                                    <span>{topic}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Practical Activities */}
                                                    {module.practicalActivities && (
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-foreground mb-2">Practical Activities</h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                {module.practicalActivities}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Training Methodology */}
                        {event.trainingMethodology && event.trainingMethodology.length > 0 && (
                            <div className="rounded-2xl border border-border/50 bg-card p-8 mt-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-6">
                                    Training Methodology
                                </h2>
                                <ul className="grid gap-4 sm:grid-cols-2">
                                    {event.trainingMethodology.map((method, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                            <span>{method}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="rounded-2xl border border-border/50 bg-card p-8 sticky top-24 shadow-sm">
                            <h3 className="text-xl font-semibold mb-6">Event Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Calendar className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Date</p>
                                        <p className="text-base font-semibold text-foreground">{event.dayDate} {event.monthYear}</p>
                                        <p className="text-xs text-muted-foreground mt-1">Reg. ends: {event.regEndDate}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Time</p>
                                        <p className="text-base font-semibold text-foreground">{event.startTime} - {event.endTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                                        <p className="text-base font-semibold text-foreground">{event.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Capacity</p>
                                        <p className="text-base font-semibold text-foreground">{event.participants} Seats</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border/50">
                                <Button className="w-full h-12 text-base" size="lg" asChild>
                                    <Link href={`/events/${event.slug}/register`}>
                                        Register Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <p className="mt-4 text-xs text-center text-muted-foreground">
                                    Limited seats available. Secure your spot today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
