export type Project = {
    id: number
    title: string
    description: string
    tags: string[]
    url?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portifolio Next.js",
        description:
            "Aplicação front-end desenvolvida para demonstrar organização de componentes e UI moderna.",
        tags: ["React", "Next.js", "Tailwind"],
    },
    {
        id: 2,
        title: "Site Advogada Nicoli",
        description:
            "Landing page responsiva com foco em performance e experiência do usuário.",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://nicolifurtado.adv.br",
    },
    {
        id: 3,
        title: "Projeto Figma Resume AI",
        description:
            "Chatbot de resumo de curriculos com API integrada. (desenvolvimento)",
        tags: ["TypeScript", "React", "Figma"],
    },
    {
        id: 4,
        title: 'AnotaSim',
        description: 'AnotaSim é um aplicativo simples, rápido e moderno para organizar tarefas do dia a dia.',
        tags: ["TypeScript", "Next.js", "Tailwind", "PWA"],
        url: "https://anotasim.vercel.app/",
    }
]