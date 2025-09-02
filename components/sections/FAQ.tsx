"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { HelpCircle, Search } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { faqs } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const categories = ["all", ...faqs.map(faq => faq.category)]

  const filteredFAQs = React.useMemo(() => {
    let filtered = selectedCategory === "all" 
      ? faqs 
      : faqs.filter(faq => faq.category === selectedCategory)

    if (searchQuery) {
      filtered = filtered.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    }

    return filtered
  }, [searchQuery, selectedCategory])

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
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
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about MoneyHacks
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 bg-fintech-surface/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full capitalize"
                >
                  {category === "all" ? "All Categories" : category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {filteredFAQs.length > 0 ? (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={category.category}>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary-400" />
                    {category.category}
                  </h3>
                  <Card className="glass-card">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((item, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${categoryIndex}-${index}`}
                            className="border-white/10"
                          >
                            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                              <span className="text-white font-medium">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <Card className="glass-card">
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">
                  Try adjusting your search query or browse all categories
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  className="mt-4"
                >
                  Clear filters
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="gradient-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Still Have Questions?</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? We're here to help!
              </p>
              <Button
                variant="glow"
                size="lg"
                onClick={() => {
                  window.location.href = `mailto:${faqs[0].questions[0].answer.includes("community@aivalley.io") ? "community@aivalley.io" : "community@aivalley.io"}?subject=MoneyHacks Question`
                }}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
