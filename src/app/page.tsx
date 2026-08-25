import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { Leadership } from "@/components/leadership/Leadership";
import { Certifications } from "@/components/certifications/Certifications";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedProjects />
        <SkillsSection />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
