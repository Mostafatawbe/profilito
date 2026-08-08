import { Reveal, Section } from "./primitives";
import { concepts, skillGroups } from "@/data/cv";
import {
  Boxes,
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Cloud,
  Wrench,
  Boxes,
  Terminal,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Skills"
      title="Technical toolkit"
      description="Languages, platforms and practices I use to design, build and ship applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Code2;
          return (
            <Reveal key={group.category} delay={(i % 4) * 0.06}>
              <article className="card-hover h-full rounded-xl border border-border bg-surface p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-5">
          <span className="mr-2 text-sm font-semibold">Concepts</span>
          {concepts.map((c) => (
            <span
              key={c}
              className="rounded-full bg-primary/12 px-3 py-1 text-xs text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
