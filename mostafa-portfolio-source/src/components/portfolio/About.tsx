import { Reveal, Section } from "./primitives";
import { about, profile } from "@/data/cv";
import { Braces, Cloud, Lightbulb, Sparkles } from "lucide-react";

const icons = [Braces, Cloud, Lightbulb, Sparkles];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="A backend-leaning developer who likes hard problems"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-5">
          {about.summary.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="pt-2 font-mono text-sm text-muted-foreground">
              Languages: <span className="text-foreground">{profile.languages.join(" · ")}</span>
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="card-hover h-full rounded-xl border border-border bg-surface p-5">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
