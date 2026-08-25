import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        {/* Featured Projects will go here */}
        {/* Skills will go here */}
        {/* Leadership will go here */}
        {/* Certifications will go here */}
        {/* Contact will go here */}
      </main>
      {/* Footer will go here */}
    </>
  );
}
