import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import Stacks from "@/src/components/sections/Stacks";
import ThemeToggle from "@/src/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
