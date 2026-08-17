import Hero from "@/components/hero";
import WhyQuant from "@/components/why-quant";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import { ResearchSection } from "@/components/research-experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyQuant />
      <TechStack />
      <Projects />
      <ResearchSection />
      <Contact />
    </main>
  );
}
