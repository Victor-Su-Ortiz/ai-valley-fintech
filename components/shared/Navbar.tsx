"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { navItems, siteConfig } from "@/lib/constants"
import { scrollToSection } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1))
      setIsMobileMenuOpen(false)
    }
  }

  const isApplicationOpen = siteConfig.links.apply !== "coming_soon"

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-fintech-navy/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container-max">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-gradient"
            >
              MoneyHacks
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant="glow"
                size="sm"
                disabled={!isApplicationOpen}
                onClick={() => isApplicationOpen && window.open(siteConfig.links.apply, "_blank")}
                className={cn(
                  !isApplicationOpen && "opacity-50 cursor-not-allowed"
                )}
              >
                {isApplicationOpen ? "Apply Now" : "Coming Soon"}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-fintech-surface hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <Button
                    variant="glow"
                    size="sm"
                    className="w-full"
                    disabled={!isApplicationOpen}
                    onClick={() => isApplicationOpen && window.open(siteConfig.links.apply, "_blank")}
                  >
                    {isApplicationOpen ? "Apply Now" : "Coming Soon"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
