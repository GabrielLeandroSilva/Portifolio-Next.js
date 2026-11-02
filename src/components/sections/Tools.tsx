"use client"

import Image from "next/image"
import { useState } from "react"
import { projects, type Project } from "@/src/data/projects"
import Reveal from "../ui/Reveal"

const tools = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "PWA",
  "Prisma",
  "Zustand",
  "HTML",
]

const toolData = tools.map((name) => {
  const using = projects.filter((project) => project.tags.includes(name))
  const published = using.find((project) => project.url) ?? using[0]
  return { name, count: using.length, project: published }
})

type PlateProps = {
  active: number
  mobile?: boolean
}

function Plate({ active, mobile = false }: PlateProps) {
  const project = toolData[active].project

  return (
    <div>
      <div
        className={`relative w-full overflow-hidden bg-surface ${
          mobile ? "aspect-[16/9]" : "aspect-[4/5]"
        }`}
      >
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${project.title}`}
            className="absolute inset-0 z-10"
          />
        ) : null}
        {projects.map((item) => (
          <Image
            key={item.id}
            src={item.screenshot}
            alt=""
            fill
            loading="eager"
            sizes={mobile ? "100vw" : "34vw"}
            className={`object-cover transition-opacity duration-500 ${
              item.id === project.id ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: item.focus ?? "center" }}
          />
        ))}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4 text-small">
        <span className="text-muted">{project.title}</span>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 transition-colors hover:text-accent"
          >
            Abrir
          </a>
        )}
      </div>
    </div>
  )
}

function ActiveProject({ project }: { project: Project }) {
  return (
    <>
      <p className="max-w-[34ch] text-small text-ink">
        {project.title}: {project.description}
      </p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-small text-ink underline underline-offset-4 transition-colors hover:text-accent"
        >
          Abrir {project.title}
        </a>
      )}
    </>
  )
}

export default function Tools() {
  const [active, setActive] = useState(0)

  return (
    <section id="ferramentas" className="room-light px-6 py-24 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="hidden md:col-span-5 md:block md:sticky md:top-[12vh] md:self-start">
            <Reveal>
              <Plate active={active} />
            </Reveal>
          </div>

          <Reveal className="col-span-12 mb-6 md:hidden">
            <h2 className="text-head text-ink">Ferramentas</h2>
          </Reveal>

          <div className="col-span-12 mb-8 md:hidden">
            <Plate active={active} mobile />
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-7">
            <Reveal className="hidden md:block">
              <h2 className="text-head text-ink">Ferramentas</h2>
            </Reveal>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1 md:mt-12 md:block">
              {toolData.map((tool, index) => {
                const isActive = index === active

                return (
                  <li key={tool.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className="flex min-h-[52px] w-full flex-col items-start gap-0.5 py-2 text-left md:min-h-[58px] md:flex-row md:items-baseline md:justify-between md:gap-4 md:py-4"
                    >
                      <span
                        className={`font-display text-[1.5rem] leading-none uppercase ${
                          isActive ? "text-ink" : "text-muted"
                        }`}
                      >
                        {tool.name}
                      </span>
                      <span className="text-small text-muted">
                        {tool.count} {tool.count === 1 ? "projeto" : "projetos"}
                      </span>
                    </button>

                    {isActive && (
                      <div className="hidden pb-4 md:block">
                        <ActiveProject project={tool.project} />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 md:hidden">
              <ActiveProject project={toolData[active].project} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
