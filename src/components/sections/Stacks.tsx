import FadeIn from "../ui/FadeIn"
import TechCard from "../cards/TechCard"

const stacks = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Figma',
]

export default function Stacks() {
    return (
        <section id="stacks" className="
            py-10 px-6 md:py-32
            text-black dark:text-white
            transition-colors">
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl font-semibold text-center text-primary">
                        Tecnologias
                    </h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="
                    mt-6 max-w-2xl mx-auto
                    text-center text-base
                    opacity-70">
                        Tecnologias e ferramentas que utilizo no desenvolvimento
                        de interfaces modernas e escaláveis.
                    </p>
                </FadeIn>

                <div className="
                    mt-14
                    grid gap-4
                    grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {stacks.map((tech, index) => (
                        <FadeIn key={tech} delay={0.15 + index * 0.05}>
                            <TechCard name={tech}></TechCard>
                        </FadeIn>
                        ))}
                </div>
            </div>
        </section>
    )
}