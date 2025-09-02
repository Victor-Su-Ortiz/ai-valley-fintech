import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Hosts } from "@/components/sections/Hosts"
import { Tracks } from "@/components/sections/Tracks"
import { Sponsors } from "@/components/sections/Sponsors"
import { Judges } from "@/components/sections/Judges"
import { Speakers } from "@/components/sections/Speakers"
import { Schedule } from "@/components/sections/Schedule"
import { Prizes } from "@/components/sections/Prizes"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Hosts />
      <Tracks />
      <Sponsors />
      <Judges />
      <Speakers />
      <Schedule />
      <Prizes />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}