"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle2, AlertCircle, Linkedin } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  message: z.string().min(10, "Mínimo 10 caracteres"),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Hablemos{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              de tu Proyecto
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Abierto a roles de liderazgo técnico, arquitectura de sistemas, consultoría o proyectos de desarrollo backend.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-500" />
              <h3 className="text-2xl font-bold text-foreground">¡Mensaje enviado!</h3>
              <p className="text-muted-foreground">Te responderé a la brevedad.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 bg-card border border-border rounded-xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Empresa <span className="text-muted-foreground text-xs">(opcional)</span>
                </label>
                <input
                  {...register("company")}
                  placeholder="Nombre de tu empresa o proyecto"
                  className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Mensaje <span className="text-primary">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Contame sobre tu proyecto o propuesta..."
                  className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Error al enviar. Intentá de nuevo o escribime por LinkedIn.
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity text-sm"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
                <a
                  href="https://www.linkedin.com/in/mauricio-rodriguez-it-leader-senior-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Conectar por LinkedIn
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
