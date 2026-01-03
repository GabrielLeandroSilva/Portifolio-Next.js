interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
    return (
        <div className="
            p-6 rounded-xl
            border border-black/10 dark:border-white/10
            hover:border-black/30 dark:hover:border-white/30
            hover:bg-black/5 dark:hover:bg-white/5
        ">

            <h3 className="text-lg font-medium">
                {title}
            </h3>

            <p className="mt-3 text-sm opacity-70">
                {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(tag => (
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
}