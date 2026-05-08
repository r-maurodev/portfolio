"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Database, Server, Cloud, Users, CheckCircle2, ShieldCheck, MapPin, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const highlights = [
    {
      title: "Liderazgo Técnico (Tech Lead)",
      description: "Gestión de ciclo completo de software, coordinación de equipos distribuidos (Scrum/Kanban) y alineación de tecnología con negocio.",
      icon: <Users size={28} strokeWidth={1.5} className="text-emerald-500" />,
    },
    {
      title: "Arquitectura Backend & APIs",
      description: "Diseño de arquitecturas cloud (DDD, Clean Code), APIs escalables en Golang/Java y flujos orientados a eventos.",
      icon: <Server size={28} strokeWidth={1.5} className="text-emerald-500" />,
    },
    {
      title: "Bases de Datos & ETL",
      description: "Integración de bases de datos relacionales (Oracle, PostgreSQL) y NoSQL (MongoDB, BigQuery). Pipelines en Python.",
      icon: <Database size={28} strokeWidth={1.5} className="text-emerald-500" />,
    },
    {
      title: "DevOps & Cloud",
      description: "Automatización CI/CD, despliegue en Kubernetes, Docker y conocimientos sólidos en ecosistemas AWS/GCP.",
      icon: <Cloud size={28} strokeWidth={1.5} className="text-emerald-500" />,
    },
    {
      title: "Alta Disponibilidad",
      description: "Resolución de incidentes críticos, testing automatizado y resiliencia usando herramientas como Datadog.",
      icon: <ShieldCheck size={28} strokeWidth={1.5} className="text-emerald-500" />,
    },
    {
      title: "Marcos Ágiles",
      description: "Capacidad demostrada para impulsar valor rápido en equipos ágiles complejos y entornos bancarios/FinTech.",
      icon: <CheckCircle2 size={28} strokeWidth={1.5} className="text-emerald-500" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
              PERFIL <span className="text-emerald-500">PROFESIONAL</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-[1.1rem] md:text-xl text-zinc-400 leading-relaxed mb-6 font-light">
              Soy <span className="font-semibold text-white">Oscar Mauricio Rodriguez</span>, un Profesional de Tecnologías de la Información destacando en roles de Desarrollador Backend, Líder Técnico y gestión de aplicaciones. Poseo experiencia sólida en el diseño, desarrollo, optimización y mantenimiento de soluciones distribuidas en los sectores financiero, asegurador y e-commerce.
            </p>
            <p className="text-[1.1rem] md:text-xl text-zinc-400 leading-relaxed mb-6 font-light">
              Tengo más de <span className="font-semibold text-white">20 años de experiencia</span>. Recientemente he participado como Senior Software Engineer en <span className="text-white font-medium">Mercado Libre Colombia</span> apoyando arquitecturas de alto rendimiento, y como Líder de Aplicaciones en <span className="text-white font-medium">Zurich Seguros</span> y <span className="text-white font-medium">Sophos Solutions</span>.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-wide text-sm">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-wide text-sm">Quick Info</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-sm">
              {[
                { label: "Ubicación", value: "Colombia", icon: <MapPin size={24} strokeWidth={1.5} /> },
                { label: "Experiencia", value: "20+ Años", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-emerald-500 mb-2">{item.icon}</div>
                  <p className="text-xs text-zinc-500 mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-white hover:text-emerald-400 text-sm transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-white text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
