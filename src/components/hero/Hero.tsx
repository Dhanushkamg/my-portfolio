"use client";

import { motion } from "motion/react";
import { personal } from "@/data/personal";
import Link from "next/link";
import { Mail, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-28 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <p className="text-accent font-mono text-sm tracking-widest uppercase">
                {"// Hello, I'm"}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                Dhanushka <br />
                Madhushanka.
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted font-medium">
                {personal.studentRole} • {personal.role}
              </h2>
            </div>

            <p className="text-muted text-lg max-w-lg leading-relaxed text-balance">
              I build complete software systems, not just interfaces. Focused on end-to-end development including backend architecture, database design, AI integration, and full-stack applications.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border text-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-6 text-muted">
              {personal.github && (
                <Link href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                  <GithubIcon className="w-6 h-6" />
                </Link>
              )}
              {personal.linkedin && (
                <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              )}
              {personal.email && (
                <Link href={`mailto:${personal.email}`} className="hover:text-foreground transition-colors" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </Link>
              )}
            </div>
          </motion.div>

          {/* ── Right: Profile Image + Code Editor ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-5 w-full"
          >
            {/* Profile Image — always fully visible on top */}
            <div className="relative w-full max-w-[320px] lg:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-border shadow-2xl bg-surface flex-shrink-0">
              <Image
                src="/profile/dhanushka.webp"
                alt="Dhanushka Madhushanka — IT Undergraduate and Full-Stack Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 340px"
                priority
              />
              {/* Subtle gradient at bottom for depth */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>

            {/* Code Editor — below the portrait, slightly offset right for depth */}
            <div className="w-full max-w-[380px] lg:max-w-[420px] lg:mr-0 lg:-mt-6 lg:ml-8 rounded-xl overflow-hidden border border-border bg-[#0f172a] shadow-2xl relative z-10 self-end">
              {/* Editor Header */}
              <div className="h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-slate-400 font-mono">developer.config.ts</div>
              </div>

              {/* Editor Body */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-green-400">&quot;{personal.role}&quot;</span>,</p>
                <p className="pl-4"><span className="text-slate-400">education:</span> <span className="text-green-400">&quot;B.Sc. (Hons) IT&quot;</span>,</p>
                <p className="pl-4"><span className="text-slate-400">focus:</span> [</p>
                <p className="pl-8"><span className="text-green-400">&quot;Software Engineering&quot;</span>,</p>
                <p className="pl-8"><span className="text-green-400">&quot;AI Integration&quot;</span>,</p>
                <p className="pl-8"><span className="text-green-400">&quot;Backend Systems&quot;</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-slate-400">technologies:</span> [</p>
                <p className="pl-8"><span className="text-green-400">&quot;React&quot;</span>, <span className="text-green-400">&quot;TypeScript&quot;</span>, <span className="text-green-400">&quot;NestJS&quot;</span>, <span className="text-green-400">&quot;Java&quot;</span></p>
                <p className="pl-4">]</p>
                <p>{'};'}</p>

                {/* Blinking Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-accent mt-2"
                />
              </div>

              {/* Decorative faint grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="self-start lg:self-auto p-4 bg-surface border border-border rounded-lg shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-medium uppercase tracking-wider">End-to-End</p>
                  <p className="text-sm font-bold text-foreground">Systems Built</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
