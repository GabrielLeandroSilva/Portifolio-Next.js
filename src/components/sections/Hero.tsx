import Image from "next/image"
import CoverNav from "../layout/CoverNav"

const facts = [
  { label: "Função", value: "Front-end e sistemas" },
  { label: "No ar", value: "6 projetos" },
  { label: "Base", value: "Brasil" },
]

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Apresentação"
      className="cover flex min-h-svh flex-col px-6"
    >
      <CoverNav />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <h1 className="mt-[6vh] font-display text-display uppercase">
          Gabriel Leandro
        </h1>

        <div className="grid flex-1 grid-cols-12 content-center items-center gap-x-6 gap-y-8 py-6 md:py-10">
          <div className="col-span-12 max-w-[560px] md:col-span-6">
            <p className="font-display text-lead uppercase">
              Desenvolvedor front-end e analista de sistemas.
            </p>
            <p className="mt-5 max-w-[52ch] text-body">
              Construo interfaces que vão ao ar e continuam funcionando. Do
              primeiro componente à conta do usuário.
            </p>
            <p className="mt-3 max-w-[52ch] text-body">
              Trabalho entre o desenho da tela e a regra do sistema:
              componente, estado, banco, deploy.
            </p>
          </div>

          <div className="col-span-12 ml-auto w-[120px] shrink-0 md:col-span-3 md:col-start-9 md:ml-0 md:w-full md:max-w-[240px]">
            <Image
              src="/profile.webp"
              alt="Retrato de Gabriel Leandro"
              width={400}
              height={400}
              priority
              sizes="(min-width: 768px) 240px, 120px"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
          <dl className="grid grid-cols-3 gap-6 text-small md:flex md:gap-10">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-muted">{fact.label}</dt>
                <dd className="text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#trabalho"
            className="inline-flex h-11 w-full items-center justify-center bg-accent px-6 text-small font-medium text-accent-ink transition-opacity hover:opacity-90 md:w-auto"
          >
            Ver os projetos
          </a>
        </div>
      </div>
    </section>
  )
}
