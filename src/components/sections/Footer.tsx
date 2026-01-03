export default function Footer() {
    return (
        <footer className="
        py-10 px-6
        bg-white dark:bg-black
        text-black dark:text-white
        border-t border-black/10 dark:border-white/10">
            <div className="
            max-w-6xl mx-auto
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            text-sm
            opacity-70">
                <span>
                    © {new Date().getFullYear()} Desenvolvedor Front-End
                </span>
                <a href="https://www.linkedin.com/in/gleandro0795/" target="_blank" className="hover:underline">
                Gabriel Leandro 
                </a>
            </div>
        </footer>
    )
}