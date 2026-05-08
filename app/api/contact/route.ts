import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "omrodriguezr@gmail.com",
      replyTo: data.email,
      subject: `Nuevo contacto: ${data.name}${data.company ? ` — ${data.company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
            Nuevo mensaje desde tu portfolio
          </h2>
          <table style="width:100%; border-collapse:collapse; margin-top:16px;">
            <tr>
              <td style="padding:8px 0; color:#6b7280; width:120px;"><strong>Nombre</strong></td>
              <td style="padding:8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#6b7280;"><strong>Email</strong></td>
              <td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#3b82f6;">${data.email}</a></td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding:8px 0; color:#6b7280;"><strong>Empresa</strong></td>
              <td style="padding:8px 0;">${data.company}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top:24px; padding:16px; background:#f8f9fa; border-radius:8px; border-left:4px solid #3b82f6;">
            <strong style="color:#6b7280;">Mensaje</strong>
            <p style="margin:8px 0 0; white-space:pre-wrap; color:#1a1d23;">${data.message}</p>
          </div>
          <p style="margin-top:24px; font-size:12px; color:#9ca3af;">
            Respondé directamente a este email para contactar a ${data.name}.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
    }
    console.error(error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}
