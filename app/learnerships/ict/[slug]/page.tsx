import { accredited } from "@/short-courses/accredited"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CourseCountdown } from "@/components/CourseCountdown"
import {
    Clock,
    Award,
    Layers,
    CheckCircle2,
    Users,
    Hash,
    BarChart,
    PlayCircle,
} from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return accredited.courses.map((course) => ({
        slug: course.slug,
    }))
}

export default async function AccreditedDetailPage({ params }: PageProps) {
    const { slug } = await params
    const course = accredited.courses.find((c) => c.slug === slug)
    const shared = accredited.shared

    if (!course) {
        notFound()
    }

    const deliveryText = course.program.delivery
    const intensityText = course.program.intensity
    const accreditationText = `This is a nationally recognised qualification registered with the Quality Council for Trades and Occupations (${shared.accreditation_body}) under SAQA ID ${course.meta.saqa_id}.`
    const aboutParagraph = `${course.tagline} Delivered via ${deliveryText.charAt(0).toLowerCase()}${deliveryText.slice(1)}, this programme requires a commitment of ${intensityText} of study. ${accreditationText} The curriculum is structured to prepare you directly for the industry.`

    return (
        <div className="bg-background min-h-screen text-foreground flex flex-col font-sans">
            <Navbar />

            {/* Main Content Area */}
            <div className="relative pt-28 pb-20 md:pb-24 z-10 flex-grow">
                {/* Subtle background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.03]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/learnerships" className="hover:text-foreground transition-colors">Learnerships</Link>
                        <span>/</span>
                        <Link href="/learnerships/ict" className="hover:text-foreground transition-colors">ICT</Link>
                        <span>/</span>
                        <span className="text-foreground truncate">{course.title}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Left Column (Main Content) */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* 1. Hero / Header */}
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                                        NQF Level {course.meta.nqf_level}
                                    </Badge>
                                    <Badge className="bg-secondary text-secondary-foreground border-border text-xs">
                                        Accredited
                                    </Badge>
                                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                        100% Job Guarantee
                                    </Badge>
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                                    {course.title}
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                    {course.tagline}
                                </p>
                            </div>

                            {/* 2. About the Course */}
                            <section className="space-y-4 border-t border-border pt-8">
                                <h2 className="text-2xl font-bold text-foreground">About the course</h2>
                                <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                                    {aboutParagraph}
                                </p>
                            </section>

                            {/* 3. Duration and Program Structure */}
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Duration and Program Structure</h2>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {/* Duration & Intensity */}
                                    <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                                        <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-accent" />
                                            Duration & Intensity
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            12 Months of self-paced learning.<br />
                                            Required effort: {course.program.intensity}.
                                        </p>
                                    </div>

                                    {/* Cohort Info */}
                                    <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                                        <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <Users className="h-4 w-4 text-accent" />
                                            Cohort Info
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Max Seats: {shared.enrollment.seats_per_cohort} seats per cohort.<br />
                                            Format: {shared.program.format} online lectures & practical labs.
                                        </p>
                                    </div>

                                    {/* Accreditation */}
                                    <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                                        <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <Award className="h-4 w-4 text-accent" />
                                            Accreditation & Certificate
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            SAQA ID: {course.meta.saqa_id} (NQF Level {course.meta.nqf_level}).<br />
                                            {course.meta.occupational_certificate}
                                        </p>
                                    </div>

                                    {/* Credits Breakdown */}
                                    <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                                        <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                                            <Layers className="h-4 w-4 text-accent" />
                                            Credits Breakdown
                                        </h3>
                                        <div className="text-xs text-muted-foreground space-y-1">
                                            <p>Total: {course.meta.credits} credits</p>
                                            <ul className="pl-2 space-y-0.5">
                                                <li>• Knowledge modules: {course.program.credits_breakdown.knowledge} Credits</li>
                                                <li>• Practical modules: {course.program.credits_breakdown.practical} Credits</li>
                                                <li>• Work experience: {course.program.credits_breakdown.work_experience} Credits</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 4. Curriculum */}
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Programme Curriculum</h2>
                                <div className="relative border-l border-border pl-6 ml-3 space-y-8">
                                    {course.curriculum.map((phase, idx) => (
                                        <div key={idx} className="relative group">
                                            {/* Timeline dot */}
                                            <div className="absolute -left-[31px] top-1.5 bg-accent h-2.5 w-2.5 rounded-full ring-4 ring-background transition-all group-hover:scale-125" />

                                            <div className="rounded-2xl border border-border bg-card p-6 space-y-4 hover:border-border/80 hover:shadow-sm transition-all">
                                                <div className="flex flex-wrap justify-between items-center gap-2">
                                                    <span className="text-xs font-bold text-accent uppercase tracking-widest">
                                                        Phase {idx + 1}: {phase.phase} ({phase.months})
                                                    </span>
                                                    <span className="text-sm font-semibold text-foreground">
                                                        {phase.focus_area}
                                                    </span>
                                                </div>
                                                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                                                    {phase.highlights.map((highlight, hIdx) => (
                                                        <li key={hIdx} className="flex items-start gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 5. Skills You'll Gain */}
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Skills You'll Gain</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {course.skills.map((skill, idx) => (
                                        <div key={idx} className="rounded-2xl border border-border bg-card p-5 hover:border-border/80 hover:shadow-sm transition-all">
                                            <h4 className="font-semibold text-foreground text-base mb-1">{skill.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 6. Target Career Roles */}
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Career Outcomes</h2>
                                <div className="flex flex-wrap gap-2">
                                    {course.target_roles.map((role, idx) => (
                                        <Badge key={idx} variant="outline" className="bg-secondary text-secondary-foreground border-border text-xs px-3.5 py-1.5">
                                            {role}
                                        </Badge>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column (Sticky Sidebar) */}
                        <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6 z-20">
                            {/* Price Card */}
                            <div className="rounded-3xl border border-border bg-card p-6 space-y-6 shadow-md">
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                                        Course price
                                    </span>
                                    <span className="text-4xl font-extrabold text-foreground tracking-tight">
                                        {shared.pricing.display}
                                    </span>
                                </div>

                                <div className="bg-secondary rounded-xl p-3 border border-border flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">Applications close in:</span>
                                    <CourseCountdown />
                                </div>

                                {/* Meta details */}
                                <div className="border-t border-border pt-6 space-y-4 text-sm text-foreground">
                                    <div className="flex items-center gap-3">
                                        <PlayCircle className="h-5 w-5 text-accent shrink-0" />
                                        <span>{course.meta.lessons} lessons</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-accent shrink-0" />
                                        <span>{course.meta.duration} duration</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="h-5 w-5 text-accent shrink-0" />
                                        <span>{course.meta.students} students enrolled</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <BarChart className="h-5 w-5 text-accent shrink-0" />
                                        <span>Level: {course.meta.level}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Hash className="h-5 w-5 text-accent shrink-0" />
                                        <span>SAQA ID: {course.meta.saqa_id}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Award className="h-5 w-5 text-accent shrink-0" />
                                        <span>NQF Level: {course.meta.nqf_level}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Layers className="h-5 w-5 text-accent shrink-0" />
                                        <span>Total: {course.meta.credits} credits</span>
                                    </div>
                                </div>

                                {/* Enquire Now CTA */}
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-base rounded-xl transition-all"
                                >
                                    <Link href={`/learnerships/ict/${course.slug}/apply`}>
                                        Enquire Now
                                    </Link>
                                </Button>

                                {/* Financing Note */}
                                {shared.pricing.financing.available && (
                                    <p className="text-center text-[11px] text-muted-foreground">
                                        Payment plans available · Financed by {shared.pricing.financing.partners.join(" & ")}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
