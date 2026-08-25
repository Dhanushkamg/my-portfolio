"use client";

import { motion } from "motion/react";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Building systems, not just interfaces.</h2>
            <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
          </div>

          <div className="space-y-6 text-muted text-lg leading-relaxed">
            {personal.aboutDetailed.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6 font-mono uppercase tracking-widest text-sm border-l-2 border-accent pl-4">Education</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {personal.education.map((edu, index) => (
                <div key={index} className="bg-surface/50 border border-border p-5 rounded-lg flex flex-col h-full">
                  <h4 className="font-bold text-foreground leading-tight">{edu.degree}</h4>
                  <p className="text-accent text-sm mt-1 mb-4">{edu.institution}</p>
                  <div className="mt-auto flex justify-between items-center text-sm text-muted">
                    <span className="font-mono">{edu.duration}</span>
                    {edu.details && (
                      <span className="font-medium border border-border/50 text-muted-foreground px-2 py-1 rounded text-xs">
                        {edu.details}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
