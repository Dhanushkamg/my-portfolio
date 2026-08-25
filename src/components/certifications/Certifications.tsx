"use client";

import { motion } from "motion/react";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
            {"//"} Continuous Learning
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 flex flex-col hover:border-accent/50 transition-colors group h-full"
            >
              <Award className="w-8 h-8 text-accent mb-6" />
              <h4 className="font-bold text-foreground text-lg mb-2">{cert.title}</h4>
              <p className="font-mono text-sm text-muted mb-8">{cert.platform}</p>
              
              <div className="mt-auto">
                {cert.url ? (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted/50 cursor-not-allowed">
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
