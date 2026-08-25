"use client";

import { motion } from "motion/react";
import { leadership } from "@/data/leadership";
import { Users } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
              {"//"} Community
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Leadership
            </h3>
            <p className="text-muted leading-relaxed">
              Active involvement in the university community, facilitating communication and organizing academic matters.
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface border border-border rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-accent/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">{item.role}</h4>
                  <p className="font-mono text-sm text-accent mb-4">{item.organization}</p>
                  <p className="text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
