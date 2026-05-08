"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Typing Effect Logic
  useEffect(() => {
    const textArray = ["un servidor", "un inquieto por el aprendizaje", "un apasionado por la tecnología", "un co-equipero", "Mauricio Rodríguez"]
    const typingDelay = 20
    const erasingDelay = 15
    const newTextDelay = 800
    let textArrayIndex = 0
    let charIndex = 0
    let typingTimeout: NodeJS.Timeout

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        setIsTyping(true)
        setText(textArray[textArrayIndex].substring(0, charIndex + 1))
        charIndex++
        typingTimeout = setTimeout(type, typingDelay)
      } else {
        setIsTyping(false)
        typingTimeout = setTimeout(erase, newTextDelay)
      }
    }

    const erase = () => {
      if (charIndex > 0) {
        setIsTyping(true)
        setText(textArray[textArrayIndex].substring(0, charIndex - 1))
        charIndex--
        typingTimeout = setTimeout(erase, erasingDelay)
      } else {
        setIsTyping(false)
        textArrayIndex++
        if (textArrayIndex >= textArray.length) textArrayIndex = 0
        typingTimeout = setTimeout(type, typingDelay + 1100)
      }
    }

    typingTimeout = setTimeout(type, newTextDelay + 250)

    return () => clearTimeout(typingTimeout)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="main-content">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: "url('/hero_dashboard.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 to-black/90" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[clamp(4rem,8vw,6rem)] font-black text-white leading-tight mb-2 tracking-tight">
          Hola
        </h1>
        <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-extralight text-white tracking-normal mb-8 lowercase">
          Soy {text}
          <span className={`inline-block w-[3px] ml-1 bg-white h-[clamp(2rem,4.5vw,4rem)] align-middle ${isTyping ? '' : 'animate-pulse'}`}></span>
        </h2>

        {/* Social Links */}
        <div className="absolute -bottom-32 left-0 w-full flex justify-center gap-8">
          <a href="https://www.linkedin.com/in/mauricio-rodriguez-it-leader-senior-developer" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white font-medium lowercase transition-colors">
            in
          </a>
        </div>
      </motion.div>
    </section>
  )
}
