import { Reveal, Section } from "./primitives";
import { certifications } from "@/data/cv";
import { BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 / Certifications"
      title="Verified training"
      description="Programs and certificates completed to date."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.08}>
            <article className="card-hover h-full rounded-xl border border-border bg-surface p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <BadgeCheck className="size-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cert.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
