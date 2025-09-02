"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CreditCard, TrendingUp, Link2, Rocket, ChevronRight, Code, Trophy } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tracks } from "@/lib/constants"
import { cn } from "@/lib/utils"

const trackIcons = {
  payments: CreditCard,
  investing: TrendingUp,
  web3: Link2,
  wildcard: Rocket,
}

export function Tracks() {
  const [selectedTrack, setSelectedTrack] = React.useState("payments")

  return (
    <section id="tracks" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-5" />

      <div className="relative container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hackathon Tracks</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose your path and compete for prizes in four exciting categories
          </p>
        </motion.div>

        {/* Desktop Tabs View */}
        <div className="hidden lg:block">
          <Tabs value={selectedTrack} onValueChange={setSelectedTrack} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {tracks.map((track) => {
                const Icon = trackIcons[track.id as keyof typeof trackIcons]
                return (
                  <TabsTrigger 
                    key={track.id} 
                    value={track.id}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{track.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            <AnimatePresence mode="wait">
              {tracks.map((track) => {
                const Icon = trackIcons[track.id as keyof typeof trackIcons]
                return (
                  <TabsContent key={track.id} value={track.id} className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${track.color}`} />
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-3 rounded-lg bg-gradient-to-br ${track.color} bg-opacity-10`}>
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-2xl">{track.title}</CardTitle>
                                <p className="text-gray-400 mt-1">{track.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-gradient">{track.prize}</p>
                              <p className="text-sm text-gray-500">Prize Pool</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Project Ideas */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-white flex items-center">
                                <ChevronRight className="h-4 w-4 mr-1" />
                                Example Project Ideas
                              </h4>
                              <ul className="space-y-2">
                                {track.ideas.map((idea, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-2"
                                  >
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${track.color} mt-1`}>
                                      •
                                    </span>
                                    <span className="text-gray-300 text-sm">{idea}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Recommended Tools */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-white flex items-center">
                                <Code className="h-4 w-4 mr-1" />
                                Recommended Tools & APIs
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {track.tools.map((tool, index) => (
                                  <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-3 py-1 rounded-full text-xs bg-fintech-surface border border-white/10"
                                  >
                                    {tool}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Prize Details */}
                          <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Trophy className="h-5 w-5 text-accent-gold" />
                                <span className="text-sm text-gray-400">
                                  Compete with teams building in this track
                                </span>
                              </div>
                              <div className="text-sm text-gray-400">
                                Judged on innovation, implementation, viability, and presentation
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                )
              })}
            </AnimatePresence>
          </Tabs>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-6">
          {tracks.map((track, index) => {
            const Icon = trackIcons[track.id as keyof typeof trackIcons]
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${track.color}`} />
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${track.color} bg-opacity-10`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{track.title}</CardTitle>
                        <p className="text-sm text-gray-400 mt-1">{track.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient">{track.prize}</span>
                      <span className="text-sm text-gray-500">Prize Pool</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Project Ideas</h4>
                      <ul className="space-y-1">
                        {track.ideas.slice(0, 2).map((idea, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="mr-2">•</span>
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tools & APIs</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.tools.slice(0, 3).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full text-xs bg-fintech-surface border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="gradient-border">
            <CardContent className="p-6">
              <p className="text-gray-300">
                Can't decide on a track? No problem! You can switch tracks anytime before the final submission.
                The important thing is to start building something amazing.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
