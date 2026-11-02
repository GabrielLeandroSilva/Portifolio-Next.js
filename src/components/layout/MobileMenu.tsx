"use client"

import { Dialog, DialogPanel } from "@headlessui/react"
import { ArrowUpRight, X } from "lucide-react"
import ThemeButton from "../ui/ThemeButton"

const links = [
  { label: "Trabalho", href: "#trabalho" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Contato", href: "#contato" },
]

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[60] lg:hidden">
      <div className="fixed inset-0 bg-bg" aria-hidden="true" />
      <DialogPanel className="fixed inset-0 flex flex-col overflow-y-auto bg-bg px-6 pb-8 pt-2 text-ink">
        <div className="flex h-14 items-center justify-between">
          <span className="font-display text-lead leading-none uppercase">
            Gabriel Leandro
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="inline-flex h-11 w-11 items-center justify-center"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col" aria-label="Menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-[2rem] leading-[1.1] uppercase transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex items-center justify-between pt-12">
          <ThemeButton />
          <a
            href="#trabalho"
            onClick={onClose}
            className="inline-flex h-11 items-center gap-2 bg-accent px-5 text-small font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            Ver os projetos
            <ArrowUpRight size={16} />
          </a>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
