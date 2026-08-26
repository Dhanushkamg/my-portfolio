"use client";

import * as React from "react";
import { motion } from "motion/react";
import { personal } from "@/data/personal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = React.useState("");

  const isFormValid = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setFeedback("Opening your email client...");

    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);
    const body = encodeURIComponent(
      `Name:\n${formData.name}\n\nSender Email:\n${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback("");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-5xl mx-auto text-left">
            {/* Left: Contact Information */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 shadow-sm flex flex-col h-full">
              <h4 className="text-xl font-bold mb-6 text-foreground">Contact Information</h4>
              <div className="flex flex-col gap-6">
                <a href={`mailto:${personal.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Email</p>
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors break-all">{personal.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">{personal.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Location</p>
                    <p className="text-foreground font-medium">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-foreground">Send Me a Message</h4>
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm text-foreground placeholder:text-muted transition-all"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email address" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm text-foreground placeholder:text-muted transition-all"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    placeholder="Tell me about your project or just say hello!" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm text-foreground placeholder:text-muted transition-all resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-6 py-3.5 rounded-md font-medium transition-colors w-full mt-2 group ${(!isFormValid || isSubmitting) ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </button>
                {feedback && (
                  <p className="text-sm text-accent text-center mt-1 animate-pulse">{feedback}</p>
                )}
              </form>
            </div>
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
