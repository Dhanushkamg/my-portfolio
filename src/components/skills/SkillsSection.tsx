"use client";

import { motion } from "motion/react";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
            {"//"} Technical Arsenal
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technologies & Tools
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-accent/50 transition-colors group"
            >
              <h4 className="font-mono text-sm uppercase tracking-wider text-muted mb-4 group-hover:text-foreground transition-colors">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-surface border border-border rounded-md text-sm font-medium hover:bg-accent hover:text-white hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
