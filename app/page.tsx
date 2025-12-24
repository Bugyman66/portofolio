import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Hackathons } from "@/components/sections/Hackathons";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <div className="relative z-10 space-y-0 pb-20">
        <Projects />
        <Skills />
        <Hackathons />
        <Research />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
