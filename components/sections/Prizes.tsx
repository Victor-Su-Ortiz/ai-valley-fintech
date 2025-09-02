"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Trophy, Award, Medal, Star, DollarSign, Target, Zap, Brain } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { tracks } from "@/lib/constants"
import { cn } from "@/lib/utils"

const specialPrizes = [
  {
    icon: Brain,
    title: "Best AI Integration",
    prize: "$2,000",
    description: "Most innovative use of AI/ML in fintech",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Best Risk/Compliance",
    prize: "$1,500",
    description: "Outstanding approach to regulatory compliance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Best Data Story",
    prize: "$1,500",
    description: "Most compelling use of data visualization",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Star,
    title: "People's Choice",
    prize: "$1,000",
    description: "Voted by fellow participants",
    color: "from-green-500 to-emerald-500",
  },
]

export function Prizes() {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null)
  const totalPrize = 20000

  return (
    <section id="prizes" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
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
            <span className="text-gradient">Prizes & Recognition</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Compete for your share of the prize pool and launch your fintech journey
          </p>

          {/* Total Prize Pool */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Card className="gradient-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4">
                  <Trophy className="h-12 w-12 text-accent-gold" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Total Prize Pool</p>
                    <p className="text-5xl font-bold gradient-text-animate">
                      ${totalPrize.toLocaleString()}+
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Track Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Track Winners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(track.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                <Card className={cn(
                  "h-full card-hover overflow-hidden transition-all duration-300",
                  hoveredCard === track.id && "scale-105 shadow-2xl"
                )}>
                  <div className={`h-2 bg-gradient-to-r ${track.color}`} />
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3">{track.icon}</div>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-gradient mb-2">{track.prize}</p>
                    <p className="text-sm text-gray-400">First Place</p>
                    {hoveredCard === track.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <p className="text-xs text-gray-500">
                          Plus mentorship and potential funding opportunities
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Special Recognition Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => {
              const Icon = prize.icon
              return (
                <motion.div
                  key={prize.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full glass-card">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${prize.color} bg-opacity-20 mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{prize.title}</h4>
                      <p className="text-2xl font-bold text-gradient mb-2">{prize.prize}</p>
                      <p className="text-xs text-gray-400">{prize.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Judging Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">How We Judge</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Innovation", value: 25, description: "Creativity and originality of the solution" },
                    { label: "Technical", value: 25, description: "Code quality and technical implementation" },
                    { label: "Viability", value: 25, description: "Business model and market potential" },
                    { label: "Presentation", value: 25, description: "Demo quality and pitch effectiveness" },
                  ].map((criteria, index) => (
                    <motion.div
                      key={criteria.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="relative mb-3">
                        <svg className="w-20 h-20 mx-auto">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-fintech-surface"
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 36}`}
                            strokeDashoffset={`${2 * Math.PI * 36 * (1 - criteria.value / 100)}`}
                            strokeLinecap="round"
                            transform="rotate(-90 40 40)"
                            initial={{ strokeDashoffset: `${2 * Math.PI * 36}` }}
                            whileInView={{ strokeDashoffset: `${2 * Math.PI * 36 * (1 - criteria.value / 100)}` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#0066FF" />
                              <stop offset="100%" stopColor="#00D4AA" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{criteria.value}%</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-white mb-1">{criteria.label}</h4>
                      <p className="text-xs text-gray-400">{criteria.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="gradient-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Beyond the Prizes</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Winners don't just take home cash prizes. You'll also receive:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Award, label: "Mentorship", description: "Ongoing guidance from industry experts" },
                  { icon: DollarSign, label: "Funding Access", description: "Introduction to VCs and angel investors" },
                  { icon: Medal, label: "Recognition", description: "Feature in AI Valley and Stanford networks" },
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-left"
                    >
                      <Icon className="h-6 w-6 text-secondary-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">{benefit.label}</h4>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
