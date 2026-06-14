"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone, Globe } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"

const serviceOptions = [
  "Website Design & Development",
  "Software & Application Development",
  "LMS & E-Learning Solutions",
  "Cybersecurity Solutions",
  "Cloud Services & Infrastructure",
  "Data Analytics & Business Intelligence",
  "Digital Transformation Consulting",
  "Digital Marketing & Social Media",
  "Creative Design & Branding",
  "Not sure, I need guidance",
]

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Surname must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  organisation: z.string().min(2, { message: "Please enter your organisation name." }),
  country: z.string().min(2, { message: "Please enter your country." }),
  service: z.string().min(1, { message: "Please select a service area." }),
  message: z.string().min(10, { message: "Please describe your project in at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export function DigitalAgencyEnquiry() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organisation: "",
      country: "",
      service: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setIsError(false)

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          number: values.phone,
          country: values.country,
          companyName: values.organisation,
          message: `[Digital Agency Enquiry]\nService Interest: ${values.service}\n\n${values.message}`,
          type: "request",
          courseOrEventName: `Digital Agency: ${values.service}`,
        }),
      })

      if (!response.ok) throw new Error("Submission failed")
      setIsSuccess(true)
      form.reset()
    } catch {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <MotionSection id="enquiry" className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* Left: intro copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Get in Touch
              </span>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl tracking-tight text-balance">
                Let's Build Your Digital Future
              </h2>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Whether you need a website, mobile application, custom software, LMS, cybersecurity
                programme, cloud platform, data analytics capability, or digital marketing strategy,
                SkillHub Digital Agency is your trusted partner.
              </p>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Fill in the form and one of our digital consultants will be in touch within one
                business day.
              </p>
            </MotionDiv>

            {/* Contact details */}
            <MotionDiv variants={fadeInUp}>
              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@skillhub.africa",
                    href: "mailto:hello@skillhub.africa",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+27 64 515 8024",
                    href: "tel:+27645158024",
                  },
                  {
                    icon: Globe,
                    label: "Website",
                    value: "www.skillhub.africa",
                    href: "https://www.skillhub.africa",
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-accent/30 hover:bg-background"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </MotionDiv>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <MotionDiv variants={fadeInUp}>
              <Card className="border-border shadow-xl shadow-primary/5 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <CardHeader className="pb-6">
                  <CardTitle className="font-serif text-xl font-semibold text-foreground">
                    Project Enquiry
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Tell us about your project and we'll connect you with the right team.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle2 className="h-7 w-7 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Enquiry Received!</h3>
                        <p className="max-w-xs text-sm text-muted-foreground">
                          Thank you for reaching out. A digital consultant will contact you within
                          one business day.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => setIsSuccess(false)}
                        >
                          Submit another enquiry
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name row */}
                            <div className="grid gap-4 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                      First Name <span className="text-destructive">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. Thabo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                      Last Name <span className="text-destructive">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. Nkosi" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* Email / phone row */}
                            <div className="grid gap-4 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                      Email Address <span className="text-destructive">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input type="email" placeholder="you@organisation.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                      Phone Number <span className="text-destructive">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input placeholder="+27 xx xxx xxxx" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* Organisation / country row */}
                            <div className="grid gap-4 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="organisation"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                      Organisation <span className="text-destructive">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input placeholder="Your company or institution" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                      Country <span className="text-destructive">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. South Africa" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* Service select */}
                            <FormField
                              control={form.control}
                              name="service"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Service of Interest <span className="text-destructive">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <select
                                      {...field}
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
                                    >
                                      <option value="">Select a service…</option>
                                      {serviceOptions.map((opt) => (
                                        <option key={opt} value={opt}>
                                          {opt}
                                        </option>
                                      ))}
                                    </select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Message */}
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Project Description <span className="text-destructive">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Tell us about your project, goals, timeline, or any specific requirements…"
                                      className="min-h-[120px] resize-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {isError && (
                              <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3">
                                <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                                <p className="text-sm text-destructive">
                                  Something went wrong. Please try again or email us directly.
                                </p>
                              </div>
                            )}

                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 h-11 text-sm font-medium"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Sending…
                                </>
                              ) : (
                                "Send Enquiry"
                              )}
                            </Button>

                            <p className="text-center text-xs text-muted-foreground">
                              We respond within one business day. Your information is kept confidential.
                            </p>
                          </form>
                        </Form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}