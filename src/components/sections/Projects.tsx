"use client"

import FadeIn from "../ui/FadeIn"

import { projects } from "@/src/data/projects"
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Select } from "../ui/Select"
import { ProjectCard } from "../cards/ProjectCard"

export default function Projects() {

    const [selectedTag, setSelectedTag] = useState("Todos")

    // 🔹 Extrai todas as tags sem repetir
    const tags = useMemo(() => {
        const allTags = projects.flatMap(project => project.tags)
        return ["Todos", ...Array.from(new Set(allTags))]
    }, [])

    // 🔹 Filtra os projetos
    const filteredProjects = useMemo(() => {
        if (selectedTag === "Todos") return projects

        return projects.filter(project =>
            project.tags.includes(selectedTag)
        )
    }, [selectedTag])

    return (
        <section id="projetos" className="
        py-10 px-6 md:py-32
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

                <div className="mb-8 mt-4 flex justify-end">
                    <Select
                        value={selectedTag}
                        options={tags}
                        onChange={setSelectedTag}
                    />

                </div>


                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTag}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </AnimatePresence>


            </div>
        </section>
    )
}