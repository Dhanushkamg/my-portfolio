import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Projects`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <article className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <div className="flex items-center gap-3 mb-4 text-sm font-mono text-accent">
                <span>{project.type}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-surface hover:bg-surface/80 border border-border text-foreground px-5 py-2.5 rounded-md font-medium text-sm transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </a>
                ) : null}
                
                {project.liveDemo ? (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-5 py-2.5 rounded-md font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Website
                  </a>
                ) : null}
              </div>
            </div>

            {/* Visual Image */}
            <div className="w-full aspect-video rounded-xl bg-surface border border-border flex flex-col items-center justify-center mb-16 shadow-lg overflow-hidden relative">
               {project.image ? (
                 <Image
                   src={`/projects/${project.image}`}
                   alt={project.title}
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 1024px"
                   priority
                 />
               ) : (
                 <>
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
                   <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative z-10">
                     <span className="text-accent font-mono font-bold text-3xl">{project.title.charAt(0)}</span>
                   </div>
                   <p className="font-mono text-muted relative z-10">{project.title}</p>
                 </>
               )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-accent font-mono text-sm">{"//"} 01</span>
                    Overview & Key Features
                  </h2>
                  <div className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 text-muted">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {project.detailedContributions && project.detailedContributions.length > 0 ? (
                  <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="text-accent font-mono text-sm">{"//"} 02</span>
                      My Core Contributions
                    </h2>
                    <div className="space-y-8">
                      {project.detailedContributions.map((contrib, idx) => (
                        <div key={idx} className="bg-surface/50 border border-border rounded-lg p-5">
                          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            {contrib.category}
                          </h3>
                          <ul className="space-y-2 ml-4">
                            {contrib.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex gap-3 text-muted text-sm">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : project.contributions && project.contributions.length > 0 ? (
                  <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="text-accent font-mono text-sm">{"//"} 02</span>
                      My Contribution
                    </h2>
                    <div className="space-y-4">
                      {project.contributions.map((contribution, idx) => (
                        <div key={idx} className="flex gap-3 text-muted">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <p>{contribution}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
                
              </div>

              <div className="md:col-span-1">
                <div className="sticky top-24 bg-surface border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
