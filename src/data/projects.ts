export type Project = {
    id: number
    title: string
    description: string
    tags: string[]
    url?: string
    repo?: string
    screenshot: string
    focus?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Bruna Nicoli Furtado",
        description:
            "Landing page para um escritório de advocacia, com foco em clareza e contato direto.",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://nicolifurtado.adv.br",
        screenshot: "/work/nicoli.webp",
        focus: "76% 50%",
    },
    {
        id: 2,
        title: "Resume AI",
        description:
            "Análise de currículos com IA: texto colado ou PDF, leitura estruturada e histórico.",
        tags: ["TypeScript", "React", "Next.js", "Chat"],
        url: "https://resume-ai-seven-flame.vercel.app/",
        screenshot: "/work/resumeai.webp",
        focus: "30% 45%",
    },
    {
        id: 3,
        title: "AnotaSim",
        description:
            "PWA de tarefas com categorias, datas e funcionamento offline.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "PWA"],
        url: "https://anota-sim.vercel.app/",
        screenshot: "/work/anotasim.webp",
        focus: "50% 30%",
    },
    {
        id: 4,
        title: "ConsultaSim",
        description:
            "Controle de gastos do mercado em tempo real, com login e dados por conta.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "PWA", "Prisma", "Zustand"],
        url: "https://consulta-sim.vercel.app/",
        screenshot: "/work/consultasim.webp",
        focus: "50% 50%",
    },
    {
        id: 5,
        title: "Este portfólio",
        description:
            "O site que você está lendo: tipografia própria, dois temas e nenhum componente de catálogo.",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        screenshot: "/work/portfolio.webp",
        focus: "50% 50%",
    },
    {
        id: 6,
        title: "DevMock",
        description:
            "Contrato de API e mock local no VS Code: schema, dados realistas, cenários de erro e tipos TypeScript.",
        tags: ["TypeScript", "VS Code", "Node.js", "OpenAPI"],
        url: "https://marketplace.visualstudio.com/items?itemName=devmock.devmock-vscode",
        repo: "https://github.com/GabrielLeandroSilva/Devmock",
        screenshot: "/work/devmock.webp",
        focus: "50% 50%",
    },
]

export const contact = {
    email: "gleandro0795@gmail.com",
    whatsapp: "+55 15 99184-2194",
    whatsappUrl: "https://wa.me/5515991842194",
    github: "https://github.com/GabrielLeandroSilva",
    linkedin: "https://www.linkedin.com/in/gleandro0795/",
}
