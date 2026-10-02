import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  muted,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-y", muted && "bg-muted/50", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className={cn("eyebrow", light && "text-gold")}>
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem]",
          light ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

type IconName = keyof typeof Icons;

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons[name as IconName] ?? Icons.Circle) as React.ComponentType<{
    className?: string | undefined;
    strokeWidth?: number;
  }>;
  return <Cmp className={className} strokeWidth={1.6} />;
}

export function FeatureCard({
  icon,
  title,
  text,
}: {
  icon?: string;
  title: string;
  text?: string;
}) {
  return (
    <article className="card-elevated group p-7">
      {icon ? (
        <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-muted text-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon name={icon} className="h-5 w-5" />
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
      {text ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      ) : null}
    </article>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <div className="academic-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-white/10"
        aria-hidden
      />
      <div className="container-page relative py-20 lg:py-28">
        {eyebrow ? (
          <span className="eyebrow text-gold">
            <span className="h-px w-8 bg-current" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl font-display text-lg font-medium text-gold">{subtitle}</p>
        ) : null}
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-9 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  );
}

export function Timeline({
  steps,
}: {
  steps: readonly { index: string; title: string; text: string }[];
}) {
  return (
    <ol className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.index} className="card-elevated relative p-7">
          <span className="font-display text-sm font-bold tracking-[0.18em] text-gold">
            {step.index}
          </span>
          <h3 className="mt-3 font-display text-lg font-semibold text-primary">{step.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Horizontal on desktop, vertical on mobile. */
export function ProcessTimeline({
  steps,
}: {
  steps: readonly { index: string; title: string; text: string }[];
}) {
  return (
    <>
      <ol className="mt-14 hidden lg:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0,1fr))` }}>
        {steps.map((step) => (
          <li key={step.index} className="relative pr-6">
            <div className="flex items-center">
              <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background font-display text-xs font-bold text-primary shadow-[var(--shadow-card)]">
                {step.index}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-6 font-display text-base font-semibold text-primary">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>

      <ol className="mt-12 space-y-8 border-l border-border pl-8 lg:hidden">
        {steps.map((step) => (
          <li key={step.index} className="relative">
            <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background font-display text-[0.7rem] font-bold text-primary">
              {step.index}
            </span>
            <h3 className="font-display text-base font-semibold text-primary">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export function SubjectGrid({ subjects }: { subjects: readonly string[] }) {
  return (
    <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {subjects.map((subject) => (
        <li
          key={subject}
          className="card-elevated flex items-center gap-3 px-5 py-4 text-sm font-medium text-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-secondary">
            <Icon name="BookOpen" className="h-4 w-4" />
          </span>
          {subject}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, light }: { items: readonly string[]; light?: boolean }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", light ? "text-gold" : "text-secondary")} />
          <span className={light ? "text-primary-foreground/80" : "text-muted-foreground"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <div className="academic-grid absolute inset-0" aria-hidden />
      <div className="container-page relative py-20 text-center lg:py-28">
        <span className="eyebrow mx-auto text-gold">
          <span className="h-px w-8 bg-current" />
          Ready to Excel?
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.8rem]">
          Start Your Journey with Talent Edge Academy
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
          Whether you are beginning your O Level journey, preparing for AS/A Level, or working toward
          a university entry test, our team is here to guide you.
        </p>
        <p className="mt-10 font-display text-2xl font-bold tracking-tight text-gold sm:text-3xl">
          Learn. Excel. Succeed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/admissions" className="btn-gold">
            Apply for Admission
          </Link>
          <Link to="/contact" className="btn-ghost-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
