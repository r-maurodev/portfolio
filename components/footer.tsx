export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <nav>
            <h3 className="font-bold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { href: "#about", label: "Perfil" },
                { href: "#skills", label: "Skills" },
                { href: "#process", label: "Proceso" },
                { href: "#experience", label: "Experiencia" },
                { href: "#contact", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Formulario de contacto
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mauricio-rodriguez-it-leader-senior-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="LinkedIn (abre en nueva ventana)"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-bold mb-4">Stack Principal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Golang · Java · Python</li>
              <li>Docker · Kubernetes · CI/CD</li>
              <li>AWS · GCP · Datadog</li>
              <li>DDD · Microservicios</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Oscar Mauricio Rodriguez. Todos los derechos reservados.</p>
          <p>Colombia</p>
        </div>
      </div>
    </footer>
  )
}
