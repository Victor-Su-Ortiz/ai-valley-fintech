"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Users, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig, stats } from "@/lib/constants"
import { cn } from "@/lib/utils"

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    })

    const unsubscribe = rounded.onChange((v) => setDisplayValue(v))

    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [count, value, rounded])

  return (
    <span className="counter text-2xl md:text-3xl">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export function Hero() {
  const isApplicationOpen = siteConfig.links.apply !== "coming_soon"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-fintech-navy via-fintech-navyLight to-fintech-surface" />
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="absolute inset-0 grid-background opacity-10" />
        
        {/* Animated particles/orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30">
              AI Valley
            </span>
            <span className="text-gray-500">×</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-500/20 text-secondary-300 border border-secondary-500/30">
              AI Collective Stanford
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="block">Build the</span>
              <span className="block gradient-text-animate">Future of Money</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Join the premier fintech hackathon where innovation meets opportunity
            </p>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-300"
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary-400" />
              <span>{siteConfig.event.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-secondary-400" />
              <span>{siteConfig.event.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent-gold" />
              <span>{siteConfig.event.duration}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative group">
              <Button
                variant="glow"
                size="xl"
                disabled={!isApplicationOpen}
                onClick={() => isApplicationOpen && window.open(siteConfig.links.apply, "_blank")}
                className={cn(
                  "relative z-10 px-8 py-6 text-lg font-semibold",
                  !isApplicationOpen && "opacity-50 cursor-not-allowed"
                )}
              >
                {isApplicationOpen ? (
                  <>
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  "Applications Opening Soon"
                )}
              </Button>
              {!isApplicationOpen && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              )}
            </div>

            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById("tracks")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-6 text-lg border-white/20 hover:border-white/40"
            >
              View Tracks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <div className="text-center">
                    <Counter 
                      value={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                    />
                    <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-gray-400"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-gray-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
