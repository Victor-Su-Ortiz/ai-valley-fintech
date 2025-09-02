"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Users, Calendar, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

const hostData = [
  {
    name: "AI Valley",
    logo: "/ai-valley-logo.png",
    isImage: true,
    description: "AI Valley is a community-driven organization built on the belief that environment is everything. Started as Bay Area hackathons, now a global movement across disciplines. We provide the right space, people, and opportunities for ambitious individuals to grow, build, and thrive. From tech to arts and entrepreneurship, we nurture every niche and create connections that multiply potential.",
    website: siteConfig.links.aiValley,
    stats: [
      { icon: Users, label: "Community Members", value: "1,000+" },
      { icon: Calendar, label: "Events Hosted", value: "12+" },
      { icon: Award, label: "Prizes Awarded", value: "$50K+" },
    ],
    gradient: "from-primary-500 to-cyan-500",
    bgGradient: "from-primary-500/10 to-cyan-500/10",
  },
  {
    name: "AI Collective Stanford",
    logo: "🎓",
    isImage: false,
    description: "The Stanford chapter of AI Collective brings together students, researchers, and industry professionals to explore the frontiers of artificial intelligence. We foster innovation through academic excellence and real-world application.",
    website: "#",
    stats: [
      { icon: Users, label: "Student Members", value: "500+" },
      { icon: Globe, label: "Global Reach", value: "10+ Countries" },
      { icon: Award, label: "Research Papers", value: "100+" },
    ],
    gradient: "from-red-500 to-secondary-500",
    bgGradient: "from-red-500/10 to-secondary-500/10",
  },
]

export function Hosts() {
  return (
    <section id="hosts" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
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
            <span className="text-gradient">Host Organizations</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A powerful collaboration between two leading innovation communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {hostData.map((host, index) => (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${host.gradient}`} />
                
                <CardContent className="p-8">
                  {/* Logo and Name */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${host.bgGradient} border border-white/10`}>
                      {host.isImage ? (
                        <Image
                          src={host.logo}
                          alt={`${host.name} logo`}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-6xl">{host.logo}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{host.name}</h3>
                      {host.website !== "#" && (
                        <Link
                          href={host.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-sm text-gray-400 hover:text-primary-400 transition-colors mt-1"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {host.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {host.stats.map((stat) => {
                      const Icon = stat.icon
                      return (
                        <div key={stat.label} className="text-center">
                          <Icon className="h-5 w-5 mx-auto mb-2 text-gray-400" />
                          <p className="text-xl font-bold text-white">{stat.value}</p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="gradient-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Why This Partnership Matters</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                By combining AI Valley's belief that "environment is everything" with Stanford's academic excellence,
                MoneyHacks creates the perfect space for ambitious builders to thrive. This partnership embodies our core principles:
                equal access to opportunity, nurturing every niche, and creating connections that multiply potential.
                Together, we're building more than a hackathon — we're fostering a movement where collaboration creates brilliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30">
                  <span className="text-sm text-primary-300">Environment is Everything</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-500/10 border border-secondary-500/30">
                  <span className="text-sm text-secondary-300">Equal Access</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30">
                  <span className="text-sm text-accent-gold">Connections Create Brilliance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
