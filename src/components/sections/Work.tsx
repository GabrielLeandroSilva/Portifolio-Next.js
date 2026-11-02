import Image from "next/image"
import { Fragment } from "react"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/src/data/projects"
import Reveal from "../ui/Reveal"

const placements = [
  "w-full md:w-[54%] md:self-start",
  "ml-auto w-[68%] md:ml-0 md:w-[40%] md:self-end",
  "w-[82%] md:ml-[12%] md:w-[58%]",
  "ml-auto w-[72%] md:ml-0 md:w-[40%] md:self-end",
  "w-full md:w-[50%] md:self-start",
  "w-[82%] md:ml-[12%] md:w-[58%]",
]

const ratios = [
  "aspect-[3/2]",
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-[16/9]",
]

export default function Work() {
  return (
    <section id="trabalho" className="px-6 py-24 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="text-head text-ink">Trabalho</h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-[72px] md:mt-24 md:gap-[22vh]">
          {projects.map((project, index) => (
            <Fragment key={project.id}>
            <article className={placements[index]}>
              <Reveal>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-small leading-none uppercase text-muted">
                    {project.title}
                  </h3>
                  {project.url ? (
                    <span className="hidden text-small text-muted sm:inline">
                      no ar
                    </span>
                  ) : (
                    <span className="hidden text-small text-muted sm:inline">
                      este site
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal delay={70}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${project.title}`}
                    className="group mt-2 block"
                  >
                    <figure
                      className={`relative overflow-hidden bg-surface ${ratios[index]}`}
                    >
                      <Image
                        src={project.screenshot}
                        alt={`Captura da interface de ${project.title}`}
                        fill
                        sizes="(min-width: 768px) 58vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        style={{ objectPosition: project.focus ?? "center" }}
                      />
                    </figure>
                  </a>
                ) : (
                  <figure
                    className={`mt-2 relative overflow-hidden bg-surface ${ratios[index]}`}
                  >
                    <Image
                      src={project.screenshot}
                      alt={`Captura da interface de ${project.title}`}
                      fill
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: project.focus ?? "center" }}
                    />
                  </figure>
                )}
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-4 max-w-[52ch] text-body text-ink">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-small">
                  <span className="text-muted">{project.tags.join(" · ")}</span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-ink underline underline-offset-4 transition-colors hover:text-accent"
                    >
                      Abrir
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-ink underline underline-offset-4 transition-colors hover:text-accent"
                    >
                      GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </Reveal>
            </article>

            {index === 1 && (
              <Reveal className="md:ml-[8%] md:w-[44%]">
                <p className="text-lead text-ink">
                  Jurídico, recrutamento, rotina, mercado, ferramentas de
                  desenvolvimento e este site: seis contextos, uma mesma
                  disciplina de interface.
                </p>
              </Reveal>
            )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
