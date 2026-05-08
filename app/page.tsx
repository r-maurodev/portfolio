"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import WorkProcess from "@/components/work-process"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("lightMode") === "true"
    setIsLight(stored)
    if (stored) document.documentElement.classList.add("light")
  }, [])

  const toggleDarkMode = () => {
    const next = !isLight
    setIsLight(next)
    localStorage.setItem("lightMode", String(next))
    document.documentElement.classList.toggle("light", next)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={!isLight} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkProcess />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
