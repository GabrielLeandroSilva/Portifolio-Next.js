interface InfoCardProps {
    title: string
    description: string
}

export default function InfoCard({
    title,
    description
}: InfoCardProps) {
    return (
        <div
        className="
          p-6 rounded-xl
          shadow-sm
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
          border border-black/10 dark:border-white/10
          hover:border-black/30 dark:hover:border-white/30
          hover:bg-black/5 dark:hover:bg-white/5
        "
      >
        <h3 className="font-medium text-lg text-primary dark:text-white">
          {title}
        </h3>
  
        <p className="mt-2 text-sm opacity-70">
          {description}
        </p>
      </div>
    )
}