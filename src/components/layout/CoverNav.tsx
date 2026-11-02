"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import ThemeButton from "../ui/ThemeButton"

const links = [
  { label: "Trabalho", href: "#trabalho" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Contato", href: "#contato" },
]

export default function CoverNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="relative z-20 mx-auto flex h-16 w-full max-w-[1440px] items-center justify-end gap-5">
        <nav className="hidden items-center gap-5 md:flex" aria-label="Principal">
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

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
