"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const subjects = [
  { value: "sponsorship", label: "Sponsorship Opportunity" },
  { value: "partnership", label: "Partnership Proposal" },
  { value: "speaking", label: "Speaking/Workshop Proposal" },
  { value: "judging", label: "Judging Application" },
  { value: "general", label: "General Inquiry" },
]

export function Contact() {
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading")
    
    // Simulate API call - replace with actual email sending logic
    try {
      // In production, you would send this to your API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      
      // For now, we'll use mailto as a fallback
      const subject = encodeURIComponent(`MoneyHacks - ${subjects.find(s => s.value === data.subject)?.label}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.organization}\n\nMessage:\n${data.message}`
      )
      
      // Simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus("success")
      reset()
      
      // Open mailto as fallback
      window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
      
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get Involved</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Partner with us, sponsor the event, or join as a judge or speaker
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="gradient-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className={cn(
                        "w-full px-4 py-2 bg-fintech-surface/50 border rounded-lg text-white placeholder-gray-500",
                        "focus:outline-none focus:border-primary-500/50 transition-colors",
                        errors.name ? "border-red-500/50" : "border-white/10"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className={cn(
                        "w-full px-4 py-2 bg-fintech-surface/50 border rounded-lg text-white placeholder-gray-500",
                        "focus:outline-none focus:border-primary-500/50 transition-colors",
                        errors.email ? "border-red-500/50" : "border-white/10"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                      Organization *
                    </label>
                    <input
                      {...register("organization")}
                      type="text"
                      id="organization"
                      className={cn(
                        "w-full px-4 py-2 bg-fintech-surface/50 border rounded-lg text-white placeholder-gray-500",
                        "focus:outline-none focus:border-primary-500/50 transition-colors",
                        errors.organization ? "border-red-500/50" : "border-white/10"
                      )}
                      placeholder="Your company or school"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-xs text-red-400">{errors.organization.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      {...register("subject")}
                      id="subject"
                      className={cn(
                        "w-full px-4 py-2 bg-fintech-surface/50 border rounded-lg text-white",
                        "focus:outline-none focus:border-primary-500/50 transition-colors",
                        errors.subject ? "border-red-500/50" : "border-white/10"
                      )}
                    >
                      <option value="" className="bg-fintech-surface">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value} className="bg-fintech-surface">
                          {subject.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      className={cn(
                        "w-full px-4 py-2 bg-fintech-surface/50 border rounded-lg text-white placeholder-gray-500",
                        "focus:outline-none focus:border-primary-500/50 transition-colors resize-none",
                        errors.message ? "border-red-500/50" : "border-white/10"
                      )}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full"
                    disabled={submitStatus === "loading" || submitStatus === "success"}
                  >
                    {submitStatus === "loading" && (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    )}
                    {submitStatus === "success" && (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    )}
                    {submitStatus === "error" && (
                      <>
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Try Again
                      </>
                    )}
                    {submitStatus === "idle" && (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-sm text-green-400 text-center">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-red-400 text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact Options */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email us directly</p>
                      <a
                        href={`mailto:${siteConfig.links.email}`}
                        className="text-white hover:text-primary-400 transition-colors"
                      >
                        {siteConfig.links.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Involved Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Sponsor",
                  description: "Support innovation",
                  icon: "💎",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Partner",
                  description: "Collaborate with us",
                  icon: "🤝",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Judge",
                  description: "Evaluate projects",
                  icon: "⚖️",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Speak",
                  description: "Share expertise",
                  icon: "🎤",
                  color: "from-orange-500 to-red-500",
                },
              ].map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{option.icon}</div>
                      <h4 className="font-semibold text-white">{option.title}</h4>
                      <p className="text-xs text-gray-400">{option.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <Card className="gradient-border">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-white mb-2">Response Time</h4>
                <p className="text-sm text-gray-400">
                  We typically respond within 24-48 hours during business days
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
