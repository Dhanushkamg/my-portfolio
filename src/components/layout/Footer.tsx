"use client";

import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link href="/" className="font-mono font-bold text-lg tracking-tighter hover:text-accent transition-colors block mb-2">
              {personal.name}<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-muted">
              {personal.studentRole} • {personal.role}
            </p>
          </div>

          <div className="flex items-center gap-4 text-muted">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={`mailto:${personal.email}`} className="hover:text-foreground transition-colors p-2" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p>
            Built with <span className="text-accent font-medium">Next.js</span> & <span className="text-accent font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
