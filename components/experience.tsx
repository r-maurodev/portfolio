"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Mercado Libre Colombia",
      period: "2022 – 2024",
      location: "Bogotá, Colombia",
      highlights: [
        "Diseño y desarrollo de APIs de alto rendimiento en Golang sobre arquitecturas de microservicios",
        "Optimización de pipelines de datos con BigQuery y Python para análisis en tiempo real",
        "Implementación de patrones DDD y Clean Code en servicios críticos de pagos y logística",
        "Mejora de resiliencia del sistema usando Kubernetes, Docker y herramientas de observabilidad Datadog",
      ],
    },
    {
      title: "Líder de Aplicaciones",
      company: "Zurich Seguros",
      period: "2019 – 2022",
      location: "Colombia",
      highlights: [
        "Liderazgo de equipo técnico de 8 ingenieros en proyectos de transformación digital",
        "Coordinación de equipos distribuidos bajo marcos Scrum/Kanban alineando tecnología con negocio",
        "Arquitectura de soluciones cloud en AWS con integración de bases de datos Oracle y PostgreSQL",
        "Diseño de flujos orientados a eventos para automatización de pólizas y siniestros",
      ],
    },
    {
      title: "Líder de Desarrollo",
      company: "Sophos Solutions",
      period: "2015 – 2019",
      location: "Colombia",
      highlights: [
        "Desarrollo de soluciones backend en Java/Spring Boot para clientes del sector financiero y FinTech",
        "Gestión de ciclo completo de software: análisis, desarrollo, pruebas y despliegue",
        "Integración de sistemas con bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB)",
        "Automatización CI/CD y adopción de prácticas DevOps en proyectos bancarios",
      ],
    },
    {
      title: "Desarrollador Backend Senior",
      company: "Sector Financiero / Banca",
      period: "2004 – 2015",
      location: "Colombia",
      highlights: [
        "Más de 10 años de desarrollo y mantenimiento de sistemas críticos en entornos bancarios",
        "Diseño y optimización de modelos de datos en Oracle para aplicaciones de alta disponibilidad",
        "Desarrollo de integraciones y servicios en Java con alto volumen de transacciones",
        "Resolución de incidentes críticos y garantía de continuidad operacional 24/7",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Experiencia{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" aria-hidden="true" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
