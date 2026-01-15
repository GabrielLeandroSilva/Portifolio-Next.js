import FadeIn from "../ui/FadeIn";
import InfoCard from "../cards/InfoCard";

const cards = [
    {
        title: 'UI Responsiva',
        description: 'Interfaces adaptáveis, consistentes e bem estruturadas para diferentes dispositivos.',
    },
    {
        title: 'Código Limpo',
        description: 'Componentização, organização e foco em manutenção e escalabilidade.',
    },
    {
        title: 'UI/UX',
        description: 'Atenção aos detalhes, usabilidade e experiência do usuário em primeiro lugar.',
    },
]

export default function About() {
    return (
        <section id="sobre" className="
        py-10 px-6
        text-black dark:text-white
        transition-colors"
        >
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl font-semibold text-center text-primary">
                        Sobre mim
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="mt-6 text-center leading-relaxed opacity-70">
                        Sou desenvolvedor front-end com foco em criar interfaces
                        modernas, acessíveis e bem estruturadas. Gosto de transformar
                        ideias em experiências visuais funcionais, priorizando
                        clareza, performance e boas práticas.
                    </p>
                </FadeIn>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <FadeIn key={card.title} delay={0.3 + index * 0.1}>
                            <InfoCard title={card.title} description={card.description} />
                        </FadeIn>
                    ))}

                </div>
            </div>
        </section>
    )
}