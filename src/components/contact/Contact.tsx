"use client";

import { motion } from "motion/react";
import { personal } from "@/data/personal";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
              {"//"} Get In Touch
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Let&apos;s build something useful.
            </h3>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-balance">
              Whether you have a question, a project opportunity, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-md font-medium text-lg transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a 
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-3 bg-surface hover:bg-surface/80 border border-border text-foreground px-8 py-4 rounded-md font-medium text-lg transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8">
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs">GitHub</span>
            </a>
            
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs">LinkedIn</span>
            </a>
            
            <a 
              href={`mailto:${personal.email}`} 
              className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
