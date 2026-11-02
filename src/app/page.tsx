import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";
import Hero from "@/src/components/sections/Hero";
import Tools from "@/src/components/sections/Tools";
import Work from "@/src/components/sections/Work";
import DockBar from "@/src/components/layout/DockBar";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-[70] focus:bg-accent focus:px-4 focus:py-3 focus:text-small focus:text-accent-ink"
      >
        Pular para o conteúdo
      </a>

      <DockBar />

      <main id="conteudo">
        <Hero />
        <Work />
        <Tools />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
