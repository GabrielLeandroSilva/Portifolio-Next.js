"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { contact } from "@/src/data/projects"
import Reveal from "../ui/Reveal"

const rows = [
  {
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "WhatsApp",
    value: contact.whatsapp,
    href: contact.whatsappUrl,
  },
  {
    label: "LinkedIn",
    value: "/in/gleandro0795",
    href: contact.linkedin,
  },
]

export default function Contact() {
  const [message, setMessage] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body =
      message.trim() || "Olá, Gabriel. Vi seu portfólio e queria conversar."
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Contato pelo portfólio"
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contato" className="px-6 pt-32 pb-24 md:pt-52 md:pb-32">
      <div className="mx-auto max-w-[520px]">
        <Reveal>
          <h2 className="text-head text-ink">Contato</h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-10 text-lead">
            <span className="block text-muted">Tem um projeto em mente?</span>
            <span className="block text-ink">
              Escreva uma linha e eu respondo.
            </span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            action={`mailto:${contact.email}`}
            method="get"
            onSubmit={handleSubmit}
            className="mt-7"
          >
            <div className="flex h-16 items-center bg-field pr-1.5 pl-5 focus-within:ring-2 focus-within:ring-accent focus-within:ring-inset">
              <label htmlFor="mensagem" className="sr-only">
                Mensagem
              </label>
              <input
                id="mensagem"
                name="body"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Conte o que você precisa"
                className="h-full min-w-0 flex-1 bg-transparent text-body text-[#1c1c1c] placeholder:text-[#55534d] focus:outline-none focus-visible:outline-none"
              />
              <button
                type="submit"
                aria-label="Enviar por e-mail"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-accent-ink transition-opacity hover:opacity-90"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
            <p className="mt-4 text-small text-muted">
              Abre seu e-mail com a mensagem pronta.
            </p>
          </form>
        </Reveal>

        <Reveal delay={180}>
          <dl className="mt-[72px] space-y-5 text-small">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 sm:flex-row sm:gap-6"
              >
                <dt className="text-muted sm:w-24">{row.label}</dt>
                <dd>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      row.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-ink underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
