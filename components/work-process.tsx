"use client"

import { motion } from "framer-motion"
import { Search, Layers, Code2, CheckCircle2, Users, Zap, Shield } from "lucide-react"

export default function WorkProcess() {
  const processSteps = [
    {
      icon: Search,
      title: "Análisis & Estrategia",
      description: "Levantamiento de requisitos, identificación de riesgos técnicos y alineación con objetivos de negocio.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Diseño de Arquitectura",
      description: "Definición de componentes, patrones DDD, integraciones de sistemas y estrategia de datos.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Desarrollo & APIs",
      description: "Implementación backend con Golang/Java, APIs escalables y flujos orientados a eventos.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: CheckCircle2,
      title: "Deploy & Monitoreo",
      description: "Automatización CI/CD, despliegue en Kubernetes y observabilidad con Datadog.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const expertise = [
    {
      icon: Users,
      title: "Liderazgo Técnico",
      description: "Coordinación de equipos distribuidos, mentoring y toma de decisiones arquitectónicas de alto impacto.",
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Optimización de sistemas críticos con alta concurrencia y disponibilidad 24/7 en producción.",
    },
    {
      icon: Shield,
      title: "Resiliencia & Calidad",
      description: "Testing automatizado, observabilidad proactiva y gestión de incidentes en entornos bancarios y FinTech.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Mi{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Proceso
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Un enfoque sistemático para entregar soluciones de software de alto valor: desde la estrategia
            hasta el monitoreo en producción.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative group h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {idx < processSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"
                      aria-hidden="true"
                    />
                  )}
                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${step.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      <div className="text-xs font-bold text-primary opacity-60">PASO {idx + 1}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-balance">Diferenciadores Clave</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {expertise.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
