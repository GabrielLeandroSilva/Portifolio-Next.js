import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import FadeIn from "../ui/FadeIn";

export default function Contact() {
    return (
        <section id="contato" className="
            py-32 px-6
            bg-white dark:bg-gray-900
            text-black dark:text-white
            transition-colors">
            <div className="max-w-3xl mx-auto text-center">
                <FadeIn>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
                        Vamos conversar?
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="mt-6 text-base opacity-80">
                        Estou aberto a novas oportunidades, projetos
                        ou colaborações. Fique à vontade para entrar
                        em contato.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="mt-12 grid gap-4 sm:grid-cols-4">
                        <a href="https://github.com/GabrielLeandroSilva" target="_blank" aria-label="GitHub" className="
                        flex items-center justify-center gap-2
                        p-4 rounded-xl
                        bg-white text-black
                        dark:bg-zinc-900 dark:text-white
                        border border-black/10 dark:border-white/10
                        hover:bg-primary/5 hover:shadow-sm dark:hover:bg-white/5
                        ">
                            <Github className="sm:size-5 size-6" size={20} />
                            <span className="inline">
                                GitHub
                            </span>
                        </a>

                        <a href="https://www.linkedin.com/in/gleandro0795/" target="_blank" aria-label="LinkedIn" className="
                        flex items-center justify-center gap-2
                        p-4 rounded-xl
                        bg-white text-black
                        dark:bg-zinc-900 dark:text-white
                        border border-black/10 dark:border-white/10
                        hover:bg-primary/5 hover:shadow-sm dark:hover:bg-white/5
                        ">
                            <Linkedin className="sm:size-5 size-6" size={20} />
                            <span className="inline">
                                LinkedIn
                            </span>
                        </a>

                        <a href="mailto:gleandro0795@gmail.com" target="_blank" aria-label="Email" className="
                        flex items-center justify-center gap-2
                        p-4 rounded-xl
                        bg-white text-black
                        dark:bg-zinc-900 dark:text-white
                        border border-black/10 dark:border-white/10
                        hover:bg-primary/5 hover:shadow-sm dark:hover:bg-white/5
                        ">
                            <Mail className="sm:size-5 size-6" size={20} />
                            <span className="inline">
                                Email
                            </span>
                        </a>

                        <a href="https://wa.me/5515991842194" target="_blank" aria-label="WhatsApp" className="
                        flex items-center justify-center gap-2
                        p-4 rounded-xl
                        bg-white text-black
                        dark:bg-zinc-900 dark:text-white
                        border border-black/10 dark:border-white/10
                        hover:bg-primary/5 hover:shadow-sm dark:hover:bg-white/5
                        ">
                            <MessageCircle className="sm:size-5 size-6" size={20} />
                            <span className="inline">
                                WhatsApp
                            </span>
                        </a>
                   </div>
                </FadeIn>

            </div>
        </section>
    )
}