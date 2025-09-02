"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Sparkles } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { sponsorTiers, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

// Placeholder sponsors - replace with actual sponsors
const mockSponsors = {
  platinum: [
    { name: "TechCorp", logo: "🏢" },
  ],
  gold: [
    { name: "FinanceAPI", logo: "💳" },
    { name: "CloudProvider", logo: "☁️" },
  ],
  silver: [
    { name: "DataCo", logo: "📊" },
    { name: "SecurityFirm", logo: "🔒" },
    { name: "DevTools", logo: "🛠️" },
  ],
  bronze: [
    { name: "StartupA", logo: "🚀" },
    { name: "StartupB", logo: "💡" },
    { name: "StartupC", logo: "⚡" },
    { name: "StartupD", logo: "🎯" },
  ],
}

const tierSizes = {
  platinum: "h-32 w-32",
  gold: "h-24 w-24",
  silver: "h-20 w-20",
  bronze: "h-16 w-16",
}

export function Sponsors() {
  const handleSponsorClick = () => {
    const subject = encodeURIComponent("MoneyHacks Sponsorship Inquiry")
    const body = encodeURIComponent(
      "Hello AI Valley team,\n\nI'm interested in learning more about sponsorship opportunities for MoneyHacks.\n\nCompany: [Your Company Name]\nContact: [Your Name]\nRole: [Your Role]\n\nPlease send me information about sponsorship tiers and benefits.\n\nThank you!"
    )
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="sponsors" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
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
            <span className="text-gradient">Our Sponsors</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Powering innovation with industry-leading partners
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {Object.entries(sponsorTiers).map(([tierKey, tier]) => {
            const sponsors = mockSponsors[tierKey as keyof typeof mockSponsors]
            if (sponsors.length === 0) return null

            return (
              <motion.div
                key={tierKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Tier Label */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`px-6 py-2 rounded-full bg-gradient-to-r ${tier.color} bg-opacity-20`}>
                    <span className="text-sm font-semibold text-white uppercase tracking-wider">
                      {tier.name} Sponsors
                    </span>
                  </div>
                </div>

                {/* Sponsor Logos */}
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <Card className={cn(
                        "overflow-hidden transition-all duration-300",
                        "hover:shadow-2xl hover:border-white/30",
                        "grayscale hover:grayscale-0"
                      )}>
                        <CardContent className={cn("p-6 flex flex-col items-center justify-center", tierSizes[tierKey as keyof typeof tierSizes])}>
                          <div className="text-5xl mb-2">{sponsor.logo}</div>
                          <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                            {sponsor.name}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State / Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="gradient-border">
            <CardContent className="p-8 text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent-gold" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Become a Sponsor</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Partner with MoneyHacks to connect with the next generation of fintech innovators. 
                Gain direct access to 200+ ambitious builders, position your brand as a leader in AI + fintech, 
                and fuel the ecosystem while supporting rising leaders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="glow"
                  size="lg"
                  onClick={handleSponsorClick}
                  className="group"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact for Sponsorship
                </Button>
                <p className="text-sm text-gray-500">
                  Email: {siteConfig.links.email}
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "Brand Visibility",
                  "Talent Pipeline", 
                  "Innovation Partnership",
                  "Community Impact",
                  "Thought Leadership",
                  "Network Growth",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 rounded-lg bg-fintech-surface/50 border border-white/10"
                  >
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
