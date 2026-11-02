"use client"

import { ArrowUpRight, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import MobileMenu from "./MobileMenu"
import ThemeButton from "../ui/ThemeButton"

const links = [
  { label: "Trabalho", href: "#trabalho" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Contato", href: "#contato" },
]

export default function DockBar() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.55)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <header
      inert={!visible}
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-50 bg-bg px-6 text-ink transition-[transform,opacity] duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4">
        <a href="#top" className="shrink-0">
          <span className="font-display text-lead leading-none tracking-[-0.01em] uppercase">
            Gabriel Leandro
          </span>
        </a>

        <div className="ml-auto flex items-center gap-1.5 lg:gap-4">
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-small transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeButton />

          <a
            href="#trabalho"
            className="hidden h-11 items-center gap-2 bg-accent px-5 text-small font-medium text-accent-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Ver os projetos
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
