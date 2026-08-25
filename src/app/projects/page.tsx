import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dhanushka Madhushanka",
  description: "A showcase of complete software systems built by Dhanushka Madhushanka.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              All Projects
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              A comprehensive collection of my technical work, ranging from full-stack applications to AI integrations and backend systems.
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
