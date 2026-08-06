import { Reveal, Section } from "./primitives";
import { education, experience, experienceNote } from "@/data/cv";
import { GraduationCap, Info } from "lucide-react";

function TimelineItem({
  title,
  subtitle,
  dates,
  body,
  tags,
  index,
  icon,
}: {
  title: string;
  subtitle: string;
  dates: string;
  body: string;
  tags?: string[];
  index: number;
  icon?: React.ReactNode;
}) {
  return (
    <Reveal as="li" delay={index * 0.08} className="relative pl-10">
      <span
        className="absolute left-3 top-3 bottom-[-2rem] w-px bg-border last:hidden"
        aria-hidden="true"
      />
      <span className="absolute left-0 top-1.5 inline-flex size-6 items-center justify-center rounded-full border border-border bg-surface text-primary">
        {icon ?? <span className="size-2 rounded-full bg-primary" />}
      </span>
      <div className="card-hover rounded-xl border border-border bg-surface p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold">{title}</h3>
          <span className="font-mono text-xs text-muted-foreground">{dates}</span>
        </div>
        <p className="mt-1 text-sm text-primary">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        {tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / Experience"
      title="Where I've been building"
    >
      <ol className="space-y-8">
        {experience.map((job, i) => (
          <TimelineItem
            key={job.company}
            title={job.company}
            subtitle={job.position}
            dates={job.dates}
            body={job.description}
            tags={job.tech}
            index={i}
          />
        ))}
      </ol>
      <Reveal delay={0.2}>
        <p className="mt-8 flex items-start gap-3 rounded-xl border border-dashed border-border bg-surface/60 p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {experienceNote}
        </p>
      </Reveal>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="04 / Education" title="Academic background">
      <ol className="space-y-8">
        {education.map((ed, i) => (
          <TimelineItem
            key={ed.school}
            title={ed.school}
            subtitle={ed.degree}
            dates={ed.dates}
            body={`${ed.location} · Relevant coursework below.`}
            tags={ed.coursework}
            index={i}
            icon={<GraduationCap className="size-3.5" aria-hidden="true" />}
          />
        ))}
      </ol>
    </Section>
  );
}
