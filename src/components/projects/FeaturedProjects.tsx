"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
              {"//"} Featured Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
              Selected Projects
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent font-medium transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
