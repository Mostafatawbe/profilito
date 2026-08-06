import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/cv";
import avatar from "@/assets/profile-placeholder.jpg";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to software engineering opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">{profile.title}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{profile.intro}</p>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.cvUrl}
              download
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Download className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Contact Me
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden rounded-2xl p-2">
            <img
              src={avatar}
              width={768}
              height={768}
              alt={`Profile photo placeholder for ${profile.name}`}
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="flex items-center justify-between px-3 py-3">
              <span className="font-mono text-xs text-muted-foreground">profile-photo.placeholder</span>
              <span className="rounded-full bg-primary/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                Replace
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
