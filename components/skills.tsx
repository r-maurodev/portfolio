"use client"

import { motion } from "framer-motion"
import { Code2, Database, Cloud, Cpu } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: Code2,
      skills: ["Golang", "Java / Spring Boot", "Python", "Node.js", "REST APIs", "Event-Driven"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Bases de Datos",
      icon: Database,
      skills: ["Oracle", "PostgreSQL", "MongoDB", "BigQuery", "ETL / Pipelines", "NoSQL"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Datadog"],
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Arquitectura",
      icon: Cpu,
      skills: ["DDD", "Clean Code", "Microservicios", "Scrum / Kanban", "Tech Lead", "Alta Disponibilidad"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative h-full p-6 bg-card rounded-lg border border-border overflow-hidden group cursor-default hover:border-primary transition-colors"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
