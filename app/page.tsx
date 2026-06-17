import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import AuroraBackground from "@/components/AuroraBackground";
import MouseSpotlight from "@/components/MouseSpotlight";

export default function Home() {
  return (
    <main>

      <AuroraBackground/>

      <MouseSpotlight />

      <Hero/>

      <About/>

      <Skills/>

      <Projects/>

      <Achievements/>

      <Experience/>

      <Certifications/>

      <Contact/>

    </main>
  );
}