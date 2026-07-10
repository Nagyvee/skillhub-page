import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Clock, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { business } from "@/short-courses/business"
import { AccreditedGrid } from "@/components/accredited-grid"
import Link from "next/link"

export const metadata = {
    title: "Business Qualifications | SkillHub International",
    description: "QCTO/SAQA accredited business qualifications and occupational certificates. Nationally recognised programmes for professionals across South Africa.",
    alternates: { canonical: "https://www.skillhub.africa/learnerships/business" },
}

export default function BusinessPage() {
    const courses = business.courses

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
                                    QCTO / SAQA Accredited
                                </Badge>
                                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    NQF Levels 4–8
                                </Badge>
                            </div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                                Business Qualifications
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                                Nationally recognised occupational certificates and business
                                qualifications registered with QCTO and SAQA — designed to build
                                practical, work-ready skills for professionals and organisations
                                across South Africa.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    {courses.length} Qualifications
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    Flexible Programmes
                                </span>
                            </div>
                        </div>
                    </MotionDiv>
                </MotionSection>
            </div>

            {/* Course Grid */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {courses.length > 0 ? (
                        <AccreditedGrid
                            courses={courses as any}
                            pricingDisplay={business.shared.pricing.display}
                            basePath="/learnerships/business"
                        />
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border/60 bg-card/50 py-16 text-center">
                            <GraduationCap className="mx-auto h-10 w-10 text-muted-foreground/40" />
                            <h3 className="mt-4 text-lg font-semibold text-foreground">
                                Business qualifications coming soon
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Our business qualification programmes are being finalised. Check back shortly.
                            </p>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="mt-16">
                        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-primary/10 p-8 lg:p-12 text-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent)/0.1),transparent_50%)] pointer-events-none" />
                            <div className="relative z-10">
                                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                    Ready to earn a nationally recognised qualification?
                                </h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Our QCTO/SAQA accredited programmes are recognised across South Africa and internationally.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                                        <Link href="/contact">Enquire Now</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="/learnerships/ict">View ICT Courses</Link>
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