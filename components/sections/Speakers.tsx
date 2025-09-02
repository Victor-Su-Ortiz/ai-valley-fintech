"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Calendar, Clock, Mic, Filter } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { speakers, siteConfig, tracks } from "@/lib/constants"

export function Speakers() {
  const [selectedTrack, setSelectedTrack] = React.useState<string>("all")
  const hasSpeakers = speakers.length > 0 && speakers[0].name !== "Coming Soon"

  const handleSpeakerProposal = () => {
    const subject = encodeURIComponent("MoneyHacks Speaker Proposal")
    const body = encodeURIComponent(
      "Hello AI Valley team,\n\nI'm interested in conducting a workshop/talk at MoneyHacks.\n\nName: [Your Name]\nCompany/Organization: [Your Company]\nRole: [Your Role]\n\nProposed Topic: [Workshop/Talk Title]\nTrack: [Payments/Investing/Web3/General]\nDuration: [30/45/60 minutes]\n\nTopic Description:\n[Brief description of what you'll cover]\n\nRelevant Experience:\n[Your background and expertise]\n\nThank you for considering my proposal!\n\nBest regards"
    )
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
  }

  const filteredSpeakers = selectedTrack === "all" 
    ? speakers 
    : speakers.filter(speaker => speaker.track === selectedTrack)

  return (
    <section id="speakers" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
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
            <span className="text-gradient">Speakers & Workshops</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts through hands-on workshops and inspiring talks
          </p>
        </motion.div>

        {hasSpeakers && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {/* Track Filter */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Filter className="h-4 w-4 text-gray-400" />
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant={selectedTrack === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTrack("all")}
                  className="rounded-full"
                >
                  All Tracks
                </Button>
                {tracks.map((track) => (
                  <Button
                    key={track.id}
                    variant={selectedTrack === track.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTrack(track.id)}
                    className="rounded-full"
                  >
                    {track.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* Speakers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpeakers.map((speaker, index) => {
                const trackInfo = tracks.find(t => t.id === speaker.track)
                return (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full card-hover">
                      {trackInfo && (
                        <div className={`h-1 bg-gradient-to-r ${trackInfo.color}`} />
                      )}
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl font-bold text-white">
                            {speaker.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{speaker.name}</CardTitle>
                            <p className="text-sm text-gray-400">{speaker.title}</p>
                            <p className="text-sm text-primary-400">{speaker.company}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="p-3 rounded-lg bg-fintech-surface/50 border border-white/10">
                          <div className="flex items-center space-x-2 mb-1">
                            <Mic className="h-4 w-4 text-secondary-400" />
                            <span className="text-sm font-semibold text-white">{speaker.topic}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{speaker.time}</span>
                            </span>
                          </div>
                        </div>
                        {trackInfo && (
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Track:</span>
                            <span className="px-2 py-1 rounded-full text-xs bg-fintech-surface border border-white/10">
                              {trackInfo.title}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {!hasSpeakers && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="gradient-border">
              <CardContent className="p-12 text-center">
                <Mic className="h-16 w-16 mx-auto mb-4 text-secondary-400" />
                <h3 className="text-2xl font-bold mb-4">Speaker Lineup Coming Soon</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We're curating an amazing lineup of workshops and talks from fintech leaders, 
                  successful founders, and technical experts. Check back soon for the full schedule!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Workshop Topics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Expected Workshop Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Building with Stripe & Plaid APIs",
              "Smart Contract Development",
              "AI/ML in Fintech",
              "Regulatory Compliance 101",
              "Pitch Perfect: Demo Day Prep",
              "Product Design for Finance",
              "Risk Management Systems",
              "Scaling Financial Infrastructure",
            ].map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg glass-card text-center"
              >
                <span className="text-sm text-gray-300">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                <span className="text-gradient">Share Your Expertise</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Have valuable insights to share? Lead a workshop or give a talk at MoneyHacks. 
                Help builders learn from your experience and contribute to the fintech ecosystem.
              </p>
              <Button
                variant="glow"
                size="lg"
                onClick={handleSpeakerProposal}
                className="group"
              >
                <Mail className="mr-2 h-4 w-4" />
                Propose a Workshop
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
