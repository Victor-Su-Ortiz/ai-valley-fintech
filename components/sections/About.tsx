"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb, Rocket, Target, Clock, Trophy } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Code,
    title: "Build Real Solutions",
    description: "Create production-ready MVPs that solve actual fintech challenges",
    color: "text-primary-400",
  },
  {
    icon: Lightbulb,
    title: "Learn from Experts",
    description: "Get mentorship from industry leaders and successful founders",
    color: "text-secondary-400",
  },
  {
    icon: Rocket,
    title: "Launch Your Startup",
    description: "Turn your hackathon project into a funded venture",
    color: "text-accent-gold",
  },
  {
    icon: Target,
    title: "Win Big Prizes",
    description: "$20,000+ in prizes and opportunities for continued support",
    color: "text-purple-400",
  },
  {
    icon: Clock,
    title: "36-48 Hours",
    description: "Intensive building session with all resources provided",
    color: "text-green-400",
  },
  {
    icon: Trophy,
    title: "30-50 MVPs",
    description: "Be part of an incredible showcase of fintech innovation",
    color: "text-orange-400",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
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
            <span className="text-gradient">What is MoneyHacks?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            MoneyHacks is more than just a hackathon — it's where the next generation of fintech innovation begins.
          </p>
        </motion.div>

        {/* Main description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 md:p-10">
            <CardContent className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Join us for an intensive <span className="text-primary-400 font-semibold">36-48 hour</span> fintech 
                hackathon where builders, students, and industry professionals come together to reimagine the future 
                of financial technology.
              </p>
              <p className="text-lg leading-relaxed">
                Organized by <span className="text-secondary-400 font-semibold">AI Valley</span> and{" "}
                <span className="text-secondary-400 font-semibold">AI Collective Stanford Chapter</span>, this event 
                brings together the brightest minds in tech and finance to build innovative solutions that will shape 
                how we interact with money.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're passionate about payments, investing, Web3, or have a wildcard idea, MoneyHacks provides 
                the perfect environment to turn your vision into reality. With world-class mentors, cutting-edge APIs, 
                and a community of driven builders, you'll have everything you need to create something extraordinary.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-2xl font-bold text-center">
                  <span className="text-gradient">Expected: 30-50 MVPs</span>
                </p>
                <p className="text-center text-gray-400 mt-2">
                  Real products, real impact, real opportunities
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="h-full card-hover gradient-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-fintech-surface/50 ${benefit.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Who Should Join?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Students",
              "Developers",
              "Designers",
              "Product Managers",
              "Entrepreneurs",
              "Finance Professionals",
              "Web3 Builders",
              "AI Engineers",
            ].map((audience) => (
              <span
                key={audience}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-white/10 text-sm text-gray-300"
              >
                {audience}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
