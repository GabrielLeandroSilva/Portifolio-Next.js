interface TechCardProps {
    name: string
}

export default function TechCard({ name }: TechCardProps) {
    return (
        <div className="
        flex items-center justify-center
        px-5 py-3
        rounded-lg
        border border-black/10 dark:border-white/10
        text-sm font-medium
        text-black dark:text-white
        hover:bg-black/5 dark:hover:bg-white/5
        transition">
            {name}
        </div>
    )
}