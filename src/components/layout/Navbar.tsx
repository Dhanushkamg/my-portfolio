"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-mono font-bold text-lg tracking-tighter hover:text-accent transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {personal.initials}<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const linkHref = isHome ? link.href.replace(/^\//, "") : link.href;
            return (
              <Link
                key={link.name}
                href={linkHref}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            )
          })}
          <div className="h-4 w-px bg-border mx-2" />
          <a
            href={personal.resumeUrl}
            download="Dhanushka_Madhushanka_CV.pdf"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-foreground hover:bg-surface rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 gap-4">
              {navLinks.map((link) => {
                const linkHref = isHome ? link.href.replace(/^\//, "") : link.href;
                return (
                  <Link
                    key={link.name}
                    href={linkHref}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="h-px w-full bg-border my-2" />
              <a
                href={personal.resumeUrl}
                download="Dhanushka_Madhushanka_CV.pdf"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
