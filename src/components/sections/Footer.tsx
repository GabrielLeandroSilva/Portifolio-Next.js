import { contact } from "@/src/data/projects"

const links = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "E-mail", href: `mailto:${contact.email}` },
]

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-[18vh]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-2 text-small md:grid-cols-3 md:items-baseline">
        <p className="text-muted">Portfólio de Gabriel Leandro</p>

        <nav
          className="flex flex-wrap gap-6 md:justify-self-center"
          aria-label="Links"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-ink transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-muted md:justify-self-end">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
