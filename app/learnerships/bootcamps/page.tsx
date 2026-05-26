import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Clock, BookOpen, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { bootcamps } from "@/short-courses/bootcamp"
import { BootcampsGrid } from "@/components/bootcamps-grid"
import Link from "next/link"

export const metadata = {
    title: "Bootcamps | SkillHub International",
    description: "Intensive, practical bootcamps in Software Engineering, UI/UX Design, Cyber Security, and Data Science. Job guaranteed.",
    alternates: { canonical: "https://www.skillhub.africa/learnerships/bootcamps" },
}

export default function BootcampsPage() {
    const programs = bootcamps.bootcamps

    return (
        <main>
            <Navbar />
            <div className="pt-24 pb-16 lg:pt-32 bg-background">
                <MotionSection className="mx-auto max-w-7xl px-6 lg:px-8">
                    <MotionDiv variants={fadeInUp} className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:p-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                                    Bootcamp
                                </Badge>
                                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    100% Job Guarantee
                                </Badge>
                            </div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                                Intensive Bootcamps
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                                Hands-on, accelerated programmes designed to take you from beginner
                                to job-ready in 3–6 months. Practice-based learning with 1-on-1
                                mentorship and a guaranteed placement or internship.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <Zap className="h-4 w-4" />
                                    {programs.length} Bootcamps
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    3–6 Month Programmes
                                </span>
                                <span className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    {bootcamps.shared.enrollment.seats_per_cohort} seats per cohort
                                </span>
                                <span className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    {bootcamps.shared.pricing.display} · Payment plans available
                                </span>
                            </div>
                        </div>
                    </MotionDiv>
                </MotionSection>
            </div>

            {/* Bootcamp Grid */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <BootcampsGrid 
                        programs={programs as any} 
                        pricingDisplay={bootcamps.shared.pricing.display}
                        seatsPerCohort={bootcamps.shared.enrollment.seats_per_cohort}
                    />

                    {/* Bottom CTA */}
                    <div className="mt-16">
                        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-primary/10 p-8 lg:p-12 text-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent)/0.1),transparent_50%)] pointer-events-none" />
                            <div className="relative z-10">
                                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                    Ready to fast-track your tech career?
                                </h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Guaranteed placement or internship within 3 months of completion via our partner network.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                                        <Link href="/contact">Apply Now</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="/learnerships/accredited">View Accredited Courses</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
