import { accredited } from "@/short-courses/accredited"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnrollmentForm } from "@/components/forms/enrollment-form"
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

export default async function AccreditedApplyPage({ params }: PageProps) {
    const { slug } = await params
    const course = accredited.courses.find((c) => c.slug === slug)

    if (!course) {
        notFound()
    }

    return (
        <div className="bg-background min-h-screen text-foreground flex flex-col font-sans">
            <Navbar />

            <div className="relative pt-28 pb-20 z-10 flex-grow">
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.03]" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 w-full">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/learnerships" className="hover:text-foreground transition-colors">Learnerships</Link>
                        <span>/</span>
                        <Link href="/learnerships/accredited" className="hover:text-foreground transition-colors">Accredited</Link>
                        <span>/</span>
                        <Link href={`/learnerships/accredited/${slug}`} className="hover:text-foreground transition-colors truncate max-w-[120px]">{course.title}</Link>
                        <span>/</span>
                        <span className="text-foreground">Apply</span>
                    </div>

                    <EnrollmentForm courseTitle={course.title} />
                </div>
            </div>

            <Footer />
        </div>
    )
}
