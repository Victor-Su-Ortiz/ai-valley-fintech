"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter, UserPlus } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { judges, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Judges() {
  const handleJudgeApplication = () => {
    const subject = encodeURIComponent("MoneyHacks Judge Application")
    const body = encodeURIComponent(
      "Hello AI Valley team,\n\nI'm interested in joining the judging panel for MoneyHacks.\n\nName: [Your Name]\nCompany/Organization: [Your Company]\nRole: [Your Role]\nExpertise Areas: [Your Areas of Expertise]\nLinkedIn: [Your LinkedIn Profile]\n\nBrief Background:\n[Please share your relevant experience in fintech, judging, or mentorship]\n\nThank you for considering my application!\n\nBest regards"
    )
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
  }

  const hasJudges = judges.length > 0 && judges[0].name !== "Coming Soon"

  return (
    <section id="judges" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-5" />

      <div className="relative container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Expert Judges</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Industry leaders evaluating innovation and impact
          </p>
        </motion.div>

        {hasJudges ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {judges.map((judge, index) => (
              <motion.div
                key={judge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full card-hover overflow-hidden">
                  <CardContent className="p-6">
                    {/* Profile */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-3xl font-bold text-white">
                        {judge.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{judge.name}</h3>
                        <p className="text-sm text-gray-400">{judge.title}</p>
                        <p className="text-sm text-primary-400">{judge.company}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                      {judge.bio}
                    </p>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {judge.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-full text-xs bg-fintech-surface border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-2">
                      {judge.linkedin !== "#" && (
                        <a
                          href={judge.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-fintech-surface/50 text-gray-400 hover:text-primary-400 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {judge.twitter !== "#" && (
                        <a
                          href={judge.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-fintech-surface/50 text-gray-400 hover:text-primary-400 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="gradient-border">
              <CardContent className="p-12 text-center">
                <UserPlus className="h-16 w-16 mx-auto mb-4 text-primary-400" />
                <h3 className="text-2xl font-bold mb-4">Judges Announcement Coming Soon</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We're assembling an incredible panel of industry experts, successful founders, and technical leaders
                  to evaluate your innovations. Stay tuned for the full lineup!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="gradient-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Join Our Panel of Judges</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Are you an industry expert, successful entrepreneur, or technical leader in fintech?
                Join our judging panel and help identify the next breakthrough innovations.
              </p>
              <Button
                variant="glow"
                size="lg"
                onClick={handleJudgeApplication}
                className="group"
              >
                <Mail className="mr-2 h-4 w-4" />
                Apply to Be a Judge
              </Button>

              {/* Judging Criteria */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Innovation", value: "25%" },
                  { label: "Technical", value: "25%" },
                  { label: "Viability", value: "25%" },
                  { label: "Presentation", value: "25%" },
                ].map((criteria) => (
                  <div key={criteria.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">{criteria.value}</div>
                    <div className="text-sm text-gray-400">{criteria.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
