import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Oscar Mauricio Rodriguez | Desarrollador Backend & Líder Técnico",
  description: "Especialista en desarrollo backend y líder técnico con más de 20 años de experiencia entregando soluciones de alto valor en sectores financiero, asegurador y e-commerce.",
  keywords: ["Desarrollador Backend", "Líder Técnico", "Software Engineer", "Golang", "Java", "Python", "Colombia"],
  openGraph: {
    title: "Oscar Mauricio Rodriguez | Desarrollador Backend & Líder Técnico",
    description: "Especialista en desarrollo backend y líder técnico con más de 20 años de experiencia.",
    type: "website",
    locale: "es_CO",
    url: "https://mauricio.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Mauricio Rodriguez | Desarrollador Backend",
    description: "Especialista en desarrollo backend y líder técnico.",
  },
  alternates: {
    canonical: "https://mauricio.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', { page_path: window.location.pathname });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oscar Mauricio Rodriguez",
              url: "https://mauricio.dev",
              jobTitle: "Senior Software Engineer & Tech Lead",
              email: "omrodriguezr@gmail.com",
              telephone: "+573005535689",
              address: { "@type": "PostalAddress", addressCountry: "CO" },
              sameAs: ["https://www.linkedin.com/in/mauricio-rodriguez-it-leader-senior-developer"],
              knowsAbout: ["Golang", "Java", "Python", "Oracle", "Docker", "Kubernetes", "DevOps", "DDD"],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
