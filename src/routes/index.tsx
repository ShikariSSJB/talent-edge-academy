import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero-students.jpg";
import missionImg from "@/assets/mission-teaching.jpg";
import { CheckList, FeatureCard, FinalCta, ProcessTimeline, Section, SectionHeading } from "@/components/site/blocks";
import { METHODOLOGY_STEPS, PROGRAMS, WHY_CHOOSE } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "O/A Level Coaching & Entry Test Prep",
      "Talent Edge Academy offers concept-based O/A Level coaching and university entry test preparation with individual attention and regular assessments.",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <div className="academic-grid absolute inset-0" aria-hidden />
        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="eyebrow text-gold">
              <span className="h-px w-8 bg-current" />
              O/A Level & Entry Test Coaching
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.3rem]">
              Building Strong Concepts. Shaping Confident Futures.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              Talent Edge Academy helps students achieve academic excellence through concept-based
              learning, individual attention, regular assessments, and focused examination preparation.
            </p>
            <p className="mt-6 font-display text-xl font-bold text-gold">Learn. Excel. Succeed.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-gold">Enroll Now</Link>
              <Link to="/o-level" className="btn-ghost-light">Explore Programs</Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Students studying at Talent Edge Academy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Our Programs"
          title="Structured Programs for Every Academic Goal"
          subtitle="From Cambridge O Level to competitive university entrance examinations."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article key={p.to} className="card-elevated flex flex-col p-8">
              <span className="font-display text-sm font-bold tracking-[0.18em] text-gold">{p.index}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <CheckList items={p.features} />
              <Link to={p.to} className="btn-outline mt-8 self-start px-5 py-2.5 text-sm">
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Why Talent Edge"
          title="Why Students & Parents Choose Us"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w) => (
            <FeatureCard key={w.title} icon={w.icon} title={w.title} text={w.text} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={missionImg}
            alt="Teacher guiding students"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Helping Every Student Reach Their Potential"
              subtitle="We aim to develop knowledgeable, confident and disciplined learners who understand concepts deeply and perform with confidence in their examinations."
            />
            <Link to="/about" className="btn-navy mt-8">About the Academy</Link>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Our Methodology" title="A Proven Path to Excellence" />
        <ProcessTimeline steps={METHODOLOGY_STEPS} />
      </Section>

      <FinalCta />
    </>
  );
}
