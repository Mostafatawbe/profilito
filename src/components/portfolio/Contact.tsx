import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { profile } from "@/data/cv";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      form.reset();
    }, 600);
  };

  const details = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
    { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, Icon: Linkedin },
    { label: "GitHub", value: "View my repositories", href: profile.github, Icon: Github },
  ];

  return (
    <Section
      id="contact"
      eyebrow="08 / Contact"
      title="Let's build something"
      description="Available for internships, junior engineering roles, and freelance work."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {details.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-hover flex items-center gap-4 rounded-xl border border-border bg-surface p-4"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/40"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/40"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/40"
                placeholder="Tell me about the role or project…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
            >
              <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              {sending ? "Sending…" : "Send message"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              This form opens your email client — no data is stored.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
