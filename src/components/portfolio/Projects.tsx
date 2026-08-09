import { Reveal, Section } from "./primitives";
import { projects } from "@/data/cv";
import { ExternalLink, Github, ImageIcon, Star } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="06 / Projects"
      title="Selected work"
      description="Applications built end-to-end — from database schema to interface."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08}>
            <article className="card-hover group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative flex aspect-[16/10] items-center justify-center border-b border-border bg-surface-2">
                <div className="grid-backdrop absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="relative flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="size-6" aria-hidden="true" />
                  <span className="font-mono text-[11px]">screenshot placeholder</span>
                </div>
                {project.featured ? (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary backdrop-blur">
                    <Star className="size-3" aria-hidden="true" />
                    Featured
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-secondary ${!project.demo ? "flex-1" : ""}`}
                    >
                      <Github className="size-3.5" aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20 ${!project.github ? "flex-1" : "flex-1"}`}
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
