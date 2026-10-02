import { createFileRoute, Link } from "@tanstack/react-router";

import { FeatureCard, FinalCta, PageHero, Section, SectionHeading, SubjectGrid } from "@/components/site/blocks";
import { O_LEVEL_SUBJECTS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/o-level")({
  head: () =>
    pageHead("O Level Coaching", "Cambridge O Level coaching with concept-based learning, regular assessments and past paper practice."),
  component: OLevel,
});

const FEATURES = [
  { icon: "Lightbulb", title: "Concept-Based Learning", text: "Clear understanding of every topic, not rote memorization." },
  { icon: "ClipboardCheck", title: "Regular Assessments", text: "Frequent tests to track progress and close gaps early." },
  { icon: "FileText", title: "Past Paper Practice", text: "Extensive practice with Cambridge-style questions." },
  { icon: "PenLine", title: "Examination Preparation", text: "Time management, answer structure and exam technique." },
];

function OLevel() {
  return (
    <>
      <PageHero
        eyebrow="Cambridge O Level"
        title="O Level Coaching"
        description="Build strong concepts, develop examination skills, and prepare confidently for Cambridge O Level examinations."
      >
        <Link to="/admissions" className="btn-gold">Enroll Now</Link>
        <Link to="/contact" className="btn-ghost-light">Ask a Question</Link>
      </PageHero>
      <Section>
        <SectionHeading eyebrow="Program Features" title="How We Prepare O Level Students" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </Section>
      <Section muted>
        <SectionHeading
          eyebrow="Subjects"
          title="O Level Subjects"
          subtitle="Subject availability may vary by session and batch."
        />
        <SubjectGrid subjects={O_LEVEL_SUBJECTS} />
      </Section>
      <FinalCta />
    </>
  );
}
