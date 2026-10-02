import { createFileRoute, Link } from "@tanstack/react-router";

import { FeatureCard, FinalCta, PageHero, ProcessTimeline, Section, SectionHeading } from "@/components/site/blocks";
import { ENTRY_TEST_FEATURES, ENTRY_TEST_PROCESS, ENTRY_TESTS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/entry-test-prep")({
  head: () =>
    pageHead(
      "University Entry Test Preparation",
      "ECAT, MDCAT, SAT, GRE, GAT & GMAT preparation with concept building, timed practice and mock tests.",
    ),
  component: EntryTest,
});

function EntryTest() {
  return (
    <>
      <PageHero
        eyebrow="University Admissions"
        title="University Entry Test Preparation"
        description="Prepare for ECAT, MDCAT, SAT, GRE, GAT, GMAT and other competitive entrance examinations with structured learning, intensive practice, mock tests, and examination strategies."
      >
        <Link to="/admissions" className="btn-gold">Enroll Now</Link>
        <Link to="/contact" className="btn-ghost-light">Check Availability</Link>
      </PageHero>
      <Section muted>
        <SectionHeading
          eyebrow="Tests We Prepare For"
          title="ECAT, MDCAT, SAT, GRE, GAT & GMAT"
          subtitle="Focused preparation for each test, built around its syllabus, question style and marking scheme."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRY_TESTS.map((t) => <FeatureCard key={t.name} icon={t.icon} title={t.name} text={t.description} />)}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="What You Get" title="A Complete Preparation Program" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ENTRY_TEST_FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </Section>
      <Section muted>
        <SectionHeading
          eyebrow="Our Process"
          title="From Assessment to Exam Readiness"
          subtitle="Entry test offerings may vary by session and admission cycle."
        />
        <ProcessTimeline steps={ENTRY_TEST_PROCESS} />
      </Section>
      <FinalCta />
    </>
  );
}
