import FadeIn from "../ui/FadeIn"
import ProjectCard from "../ProjectCard"

const projects = [
    {
        title: "Projeto Exemplo 01",
        description:
            "Aplicação front-end desenvolvida para demonstrar organização de componentes e UI moderna.",
        tags: ["React", "Next.js", "Tailwind"],
    },
    {
        title: "Projeto Exemplo 02",
        description:
            "Landing page responsiva com foco em performance e experiência do usuário.",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Projeto Exemplo 03",
        description:
            "Dashboard fictício com layout modular e boas práticas de componentização.",
        tags: ["TypeScript", "React"],
    },
]

export default function Projects() {
    return (
        <section id="projetos" className="
        py-24 px-6
        bg-white dark:bg-black
        text-black dark:text-white
        transition-colors">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl font-semibold text-center text-primary">
                        Projetos
                    </h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="
                    mt-6 max-w-2xl mx-auto
                    text-center text-base
                    opacity-70">
                        Alguns projetos selecionados para demonstrar minhas
                        habilidades em desenvolvimento front-end.
                    </p>
                </FadeIn>

                <div className="
                mt-16 grid gap-6
                sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <FadeIn key={project.title} delay={0.2 + index * 0.1}>
                            <ProjectCard title={project.title} description={project.description} tags={project.tags} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}