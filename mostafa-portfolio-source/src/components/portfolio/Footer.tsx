import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/cv";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-3">
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
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <ArrowUp className="size-3.5" aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
