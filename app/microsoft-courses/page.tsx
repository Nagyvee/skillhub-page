import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Microsoft } from "@/short-courses/Microsoft"
import type { Course } from "@/lib/courses-data"
import { CoursesGrid } from "@/components/courses-grid"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Users, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Microsoft Productivity & Analytics Courses | SkillHub International",
    description: "Microsoft Productivity & Analytics training courses in Excel, Power BI, dashboards, and AI-assisted analytics for professionals."
}

export default function MicrosoftCoursesPage() {
    const courses: Course[] = (Microsoft as Course[]).filter((course) => course.type === "Microsoft-Productivity-and-Analytics")
    const totalCourses = courses.length
    const totalPages = Math.ceil(totalCourses / 12)

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
                                    Microsoft Productivity & Analytics
                                </Badge>
                                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    Course Collection
                                </Badge>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                                Microsoft Productivity & Analytics
                            </h1>

                            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                                Discover Microsoft Productivity & Analytics training programs designed to strengthen your data, reporting and business analytics capabilities.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    {totalCourses} Courses
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    2–3 Day Accelerated Modules
                                </span>
                                <span className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Business and Data Professionals
                                </span>
                                <span className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    Practical Hands-on Learning
                                </span>
                            </div>
                        </div>
                    </MotionDiv>
                </MotionSection>
            </div>
            <CoursesGrid
                courses={courses}
                totalCourses={totalCourses}
                currentPage={1}
                totalPages={totalPages}
                currentCategory="Microsoft-Productivity-and-Analytics"
                baseUrl="/microsoft-courses"
                showCategoryNavigation={false}
            />
            <Footer />
        </main>
    )
}
