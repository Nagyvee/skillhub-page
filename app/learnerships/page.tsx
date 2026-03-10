import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import QctoCourses from "@/lib/qcto-courses"
import { LearnershipGrid } from "@/components/learnership-grid"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Users, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "QCTO Learnerships | SkillHub International",
    description: "QCTO-accredited learnership programmes in supply chain, procurement, transport, and logistics. NQF Levels 5–7."
}

export default function LearnershipsPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-24 pb-16 lg:pt-32 bg-background">
                <MotionSection className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Page Hero - Matching CourseDetail hero card pattern exactly as requested */}
                    <MotionDiv variants={fadeInUp} className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:p-12">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                                    QCTO Accredited
                                </Badge>
                                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    NQF Levels 5–7
                                </Badge>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                                QCTO Learnership Programmes
                            </h1>

                            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                                Nationally recognised qualifications registered with the Quality
                                Council for Trades and Occupations — designed for working professionals
                                in supply chain, logistics, procurement, and transport.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    6 Qualifications
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    12–18 Month Programmes
                                </span>
                                <span className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    NQF Levels 5, 6 & 7
                                </span>
                                <span className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    120–205 Credits
                                </span>
                            </div>
                        </div>
                    </MotionDiv>
                </MotionSection>
            </div>
            <LearnershipGrid courses={QctoCourses} />
            <Footer />
        </main>
    )
}
