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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col gap-6 order-2 lg:order-1"
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
              {personal.bio}
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

          {/* ── Right: Layered Composition ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative order-1 lg:order-2 flex flex-col items-center lg:items-end lg:pr-8 pt-8 lg:pt-0"
          >
            {/* 1. Large Profile Image */}
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface flex-shrink-0 z-0 mr-0 lg:mr-16">
              <Image
                src="/profile/dhanushka.webp"
                alt="Dhanushka Madhushanka"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 340px"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating Tech Badges (Desktop only, behind or around) */}
            <div className="hidden lg:block absolute top-[10%] right-[5%] bg-surface/50 backdrop-blur-md border border-border p-2 rounded-xl shadow-lg z-10 animate-[bounce_6s_ease-in-out_infinite]">
              <span className="text-xs font-mono font-medium text-blue-400">React</span>
            </div>
            <div className="hidden lg:block absolute top-[30%] right-[90%] bg-surface/50 backdrop-blur-md border border-border p-2 rounded-xl shadow-lg z-10 animate-[bounce_7s_ease-in-out_infinite_reverse]">
              <span className="text-xs font-mono font-medium text-blue-500">TypeScript</span>
            </div>
            <div className="hidden lg:block absolute bottom-[35%] right-[0%] bg-surface/50 backdrop-blur-md border border-border p-2 rounded-xl shadow-lg z-10 animate-[bounce_8s_ease-in-out_infinite]">
              <span className="text-xs font-mono font-medium text-red-500">NestJS</span>
            </div>
            <div className="hidden lg:block absolute bottom-[60%] right-[95%] bg-surface/50 backdrop-blur-md border border-border p-2 rounded-xl shadow-lg z-10 animate-[bounce_5s_ease-in-out_infinite_reverse]">
              <span className="text-xs font-mono font-medium text-orange-500">Java</span>
            </div>

            {/* 2. Glassmorphism Code Editor */}
            <div 
              className="w-full max-w-[420px] rounded-xl overflow-hidden shadow-2xl relative z-10 mt-[-60px] lg:mt-[-140px] ml-0 lg:ml-[-40px] self-center lg:self-start border border-white/10"
              style={{
                background: "rgba(15, 23, 42, 0.65)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)"
              }}
            >
              <div className="h-10 bg-slate-900/60 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-slate-400 font-mono">developer.config.ts</div>
              </div>
              
              <div className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-green-400">&quot;{personal.name}&quot;</span>,</p>
                <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-green-400">&quot;{personal.role}&quot;</span>,</p>
                <p className="pl-4 mt-2"><span className="text-slate-400">focus:</span> [</p>
                <p className="pl-8"><span className="text-green-400">&quot;Software Engineering&quot;</span>,</p>
                <p className="pl-8"><span className="text-green-400">&quot;AI Integration&quot;</span>,</p>
                <p className="pl-8"><span className="text-green-400">&quot;Backend Systems&quot;</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4 mt-2"><span className="text-slate-400">technologies:</span> [</p>
                <p className="pl-8"><span className="text-green-400">&quot;React&quot;</span>, <span className="text-green-400">&quot;TypeScript&quot;</span>, <span className="text-green-400">&quot;NestJS&quot;</span>, <span className="text-green-400">&quot;Java&quot;</span>, <span className="text-green-400">&quot;Firebase&quot;</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4 mt-2"><span className="text-slate-400">builds:</span> [</p>
                <p className="pl-8"><span className="text-green-400">&quot;Web Applications&quot;</span>,</p>
                <p className="pl-8"><span className="text-green-400">&quot;Scalable APIs&quot;</span>,</p>
                <p className="pl-8"><span className="text-green-400">&quot;AI-Powered Solutions&quot;</span></p>
                <p className="pl-4">]</p>
                <p>{'};'}</p>
                
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-accent mt-2 inline-block"
                />
              </div>
            </div>

            {/* 3. Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="z-20 mt-4 lg:mt-[-40px] lg:mr-[-20px] self-end p-4 bg-surface/90 border border-border rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-muted font-medium uppercase tracking-widest">End-to-End</p>
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
