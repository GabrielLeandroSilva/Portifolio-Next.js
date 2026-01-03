import { ArrowDown } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import Image from "next/image";
import Typewriter from "../ui/Typewriter";

export default function Hero() {
    return (
        <section className="
            relative
            min-h-screen
            flex items-center justify-center
            px-6
            bg-white dark:bg-black
            text-black dark:text-white
            transition-colors
        ">
            <div className="text-center flex flex-col items-center">
                <FadeIn>
                    <div className="
                    mb-6
                    rounded-full
                    border border-black/10 dark:border-white/10
                    overflow-hidden
                    hover:scale-105 transition
                    w-60 h-60 sm:w-50 sm:h-50">
                        <Image src="/profile.webp"
                            alt="Foto de perfil de Gabriel Leandro"
                            width={400}
                            height={400}
                            className="object-cover"
                            priority
                        />
                    </div>
                </FadeIn>

                <FadeIn>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 animate-gradient bg-clip-text text-transparent">
                        Gabriel Leandro
                    </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="mt-4 text-base opacity-70 h-6">
                        <Typewriter
                            texts={[
                                "Desenvolvedor Front End",
                                "Analista de Sistemas"
                            ]}
                        />
                    </p>
                </FadeIn>
            </div>

            <a href="#sobre" aria-label="Scroll para conteúdo" className="
                absolute bottom-10
                left-1/2 -translate-x-1/2
                opacity-60
                px-2 py-2
                border
                rounded-xl
                hover:opacity-100
                transition
                animate-bounce
            ">
                <ArrowDown size={28} />
            </a>
        </section>
    )
}