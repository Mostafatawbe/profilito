import { Reveal, Section } from "./primitives";
import { achievements } from "@/data/cv";
import { BrainCircuit, Cloud, GraduationCap, Trophy, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Trophy, Cloud, BrainCircuit, GraduationCap };

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="07 / Achievements"
      title="Milestones & recognition"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Trophy;
          return (
            <Reveal key={item.title} delay={(i % 4) * 0.06}>
              <article className="card-hover h-full rounded-xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
