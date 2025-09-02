"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Copy, Check, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig, navItems } from "@/lib/constants"
import { copyToClipboard, scrollToSection } from "@/lib/utils"

export function Footer() {
  const [copiedEmail, setCopiedEmail] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [subscribeStatus, setSubscribeStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  const handleCopyEmail = async () => {
    await copyToClipboard(siteConfig.links.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscribeStatus("loading")
    
    // Simulate API call - replace with actual newsletter subscription
    setTimeout(() => {
      setSubscribeStatus("success")
      setEmail("")
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    }, 1000)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1))
    }
  }

  return (
    <footer className="relative bg-fintech-navyLight border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-10" />

      <div className="relative container-max">
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gradient">MoneyHacks</h3>
              <p className="text-sm text-gray-400">
                Building the future of money through innovation and collaboration.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">📍</span>
                <span className="text-sm text-gray-400">House of Web3</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">📅</span>
                <span className="text-sm text-gray-400">{siteConfig.event.date}</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-fintech-surface/50 border border-white/10 group hover:border-primary-500/50 transition-colors">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-300 truncate">
                      {siteConfig.links.email}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopyEmail}
                    className="h-8 w-8"
                  >
                    {copiedEmail ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-400" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  For sponsorships, partnerships, speaking opportunities, and general inquiries.
                </p>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-sm text-gray-400">
                Get the latest updates about MoneyHacks and future events.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-fintech-surface/50 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                  required
                />
                <Button
                  type="submit"
                  variant="glow"
                  size="sm"
                  className="w-full"
                  disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                >
                  {subscribeStatus === "loading" && "Subscribing..."}
                  {subscribeStatus === "success" && "Subscribed! ✓"}
                  {subscribeStatus === "error" && "Try Again"}
                  {subscribeStatus === "idle" && "Subscribe"}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Host Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center md:text-left">
                  <p className="text-xs text-gray-500 mb-2">Organized by</p>
                  <div className="flex items-center space-x-6">
                    <Link
                      href={siteConfig.links.aiValley}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2"
                    >
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-primary-400 transition-colors">
                        AI Valley
                      </span>
                      <ExternalLink className="h-3 w-3 text-gray-500 group-hover:text-primary-400 transition-colors" />
                    </Link>
                    <span className="text-gray-600">×</span>
                    <span className="text-sm font-semibold text-gray-300">
                      AI Collective Stanford
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <Link
                  href="/privacy"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link
                  href="/code-of-conduct"
                  className="hover:text-primary-400 transition-colors"
                >
                  Code of Conduct
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              © 2024 MoneyHacks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
