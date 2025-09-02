"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, Utensils, Code, Trophy, Mic } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { schedule, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

const eventTypeIcons = {
  logistics: MapPin,
  ceremony: Trophy,
  meal: Utensils,
  milestone: Code,
  workshop: Mic,
}

const eventTypeColors = {
  logistics: "bg-gray-500",
  ceremony: "bg-purple-500",
  meal: "bg-green-500",
  milestone: "bg-primary-500",
  workshop: "bg-secondary-500",
}

export function Schedule() {
  const [selectedDay, setSelectedDay] = React.useState("October 18")
  const days = Object.keys(schedule)

  return (
    <section id="schedule" className="section-padding relative overflow-hidden">
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
            <span className="text-gradient">Event Schedule</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            36-48 hours of non-stop innovation, learning, and building
          </p>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg bg-fintech-surface/50 p-1 glass-card">
            {days.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "ghost"}
                size="lg"
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "rounded-md transition-all duration-300",
                  selectedDay === day && "bg-gradient-to-r from-primary-500 to-secondary-500"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {day}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-gold opacity-30" />
            
            <div className="space-y-8">
              {schedule[selectedDay as keyof typeof schedule].map((event, index) => {
                const Icon = eventTypeIcons[event.type as keyof typeof eventTypeIcons] || Clock
                const colorClass = eventTypeColors[event.type as keyof typeof eventTypeColors] || "bg-gray-500"
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "relative flex items-center",
                      "md:justify-center"
                    )}
                  >
                    {/* Timeline Node */}
                    <div className={cn(
                      "absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-white z-10",
                      colorClass,
                      "md:-translate-x-1/2"
                    )} />

                    {/* Content */}
                    <div className={cn(
                      "ml-16 md:ml-0 md:w-5/12",
                      isLeft ? "md:mr-auto md:text-right md:pr-12" : "md:ml-auto md:text-left md:pl-12"
                    )}>
                      <Card className="card-hover gradient-border overflow-hidden">
                        <div className={cn("h-1", colorClass)} />
                        <CardContent className="p-4 md:p-6">
                          <div className={cn(
                            "flex items-start space-x-3",
                            isLeft && "md:flex-row-reverse md:space-x-reverse"
                          )}>
                            <div className={cn(
                              "p-2 rounded-lg",
                              colorClass,
                              "bg-opacity-20"
                            )}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className={cn(
                              "flex-1",
                              isLeft && "md:text-right"
                            )}>
                              <div className={cn(
                                "flex items-center space-x-2 mb-1",
                                isLeft && "md:flex-row-reverse md:space-x-reverse"
                              )}>
                                <span className="text-sm text-gray-400 flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {event.time}
                                </span>
                                {event.type === "milestone" && (
                                  <span className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-primary-300 border border-primary-500/30">
                                    Important
                                  </span>
                                )}
                              </div>
                              <h4 className="font-semibold text-white">{event.event}</h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Key Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Calendar,
              title: "Duration",
              description: "36-48 hours of continuous hacking",
              color: "text-primary-400",
            },
            {
              icon: MapPin,
              title: "Venue",
              description: `${siteConfig.event.location} - Open 24/7`,
              color: "text-secondary-400",
            },
            {
              icon: Utensils,
              title: "Food & Drinks",
              description: "All meals and snacks provided",
              color: "text-accent-gold",
            },
          ].map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Icon className={cn("h-8 w-8 mx-auto mb-3", info.color)} />
                    <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="gradient-border">
            <CardContent className="p-6 text-center">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Note:</span> Schedule is subject to change. 
                We'll send final timings to all registered participants. Make sure to arrive on time for 
                check-in and stay for the entire duration to be eligible for prizes!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
