import { Project } from "../../data/projects"
import Link from "next/link"
import clsx from "clsx"


type Props = {
    project: Project
}

export function ProjectCard({ project }: Props) {
    const CardContent = (
        <div
            className={clsx(
                "rounded-xl p-6 bg-white text-black dark:bg-zinc-900 dark:text-white border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition",
                project.url
                    ? "cursor-pointer"
                    : "cursor-default"
            )}
        >
            <h3 className="text-lg font-semibold">
                {project.title}
            </h3>

            <p className="mt-3 text-sm opacity-70">
                {project.description}
            </p>

            {project.url && (
                <span className="mt-4 inline-block text-xs text-primary">
                    Ver projeto
                </span>
            )}
    

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="
                            px-2 py-1
                            text-xs text-white
                            rounded-md
                            bg-primary dark:bg-gray-600
                            opacity-90
                    ">
                        {tag}
                    </span>
                ))}
            </div>

        </div>
    )

    if (project.url) {
        return (
            <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title}`}
            >
                {CardContent}
            </Link>
        )
    }

    return CardContent
}