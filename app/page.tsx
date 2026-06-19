import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import MouseSpotlight from "@/components/MouseSpotlight";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  return (
    <main className="relative z-10">

      

      <HeroBackground/>

      <MouseSpotlight />

      <ScrollProgress />

      <Navbar/>

      <main>
      <Hero/>
      </main>

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