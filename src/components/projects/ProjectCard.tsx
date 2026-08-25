"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row gap-8 bg-surface/50 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors"
    >
      {/* Project Visual */}
      <div className="w-full md:w-5/12 aspect-[4/3] rounded-lg overflow-hidden bg-background border border-border relative group-hover:border-accent/30 transition-colors flex items-center justify-center">
        {project.image ? (
          <Image
            src={`/projects/${project.image}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-mono font-bold text-xl">{project.title.charAt(0)}</span>
              </div>
              <p className="font-mono text-sm text-muted">{project.title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="w-full md:w-7/12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3 text-sm font-mono text-accent">
          <span>{"//"} 0{index + 1}</span>
          <span className="w-8 h-px bg-accent/50" />
          <span>{project.type}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 5).map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-muted-foreground whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <Link 
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-5 py-2.5 rounded-md font-medium text-sm transition-all group-hover:pr-4"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2 ml-2">
            {project.github ? (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-foreground transition-colors" aria-label="GitHub Repository">
                <GithubIcon className="w-5 h-5" />
              </Link>
            ) : (
              <span className="p-2 text-muted/30 cursor-not-allowed" aria-label="GitHub Repository Not Available">
                <GithubIcon className="w-5 h-5" />
              </span>
            )}
            
            {project.liveDemo ? (
              <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-foreground transition-colors" aria-label="Live Demo">
                <ExternalLink className="w-5 h-5" />
              </Link>
            ) : (
              <span className="p-2 text-muted/30 cursor-not-allowed" aria-label="Live Demo Not Available">
                <ExternalLink className="w-5 h-5" />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
