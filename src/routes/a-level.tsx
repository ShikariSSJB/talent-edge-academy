import { createFileRoute, Link } from "@tanstack/react-router";

import { FeatureCard, FinalCta, PageHero, Section, SectionHeading, SubjectGrid } from "@/components/site/blocks";
import { A_LEVEL_SUBJECTS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/a-level")({
  head: () =>
    pageHead("A Level Coaching", "AS & A Level coaching focused on advanced concepts, analytical thinking and exam technique."),
  component: ALevel,
});

const FEATURES = [
  { icon: "Layers", title: "Advanced Concept Building", text: "Deep subject knowledge built step by step." },
  { icon: "Brain", title: "Analytical Learning", text: "Critical thinking and problem-solving skills." },
  { icon: "FileText", title: "Past Paper Practice", text: "Structured practice with past papers and mark schemes." },
  { icon: "Target", title: "Exam Technique", text: "Answering strategies to maximise marks." },
];

function ALevel() {
  return (
    <>
      <PageHero
        eyebrow="Cambridge AS & A Level"
        title="A Level Coaching"
        description="Develop advanced subject knowledge, analytical thinking, problem-solving skills, and examination confidence."
      >
        <Link to="/admissions" className="btn-gold">Enroll Now</Link>
        <Link to="/contact" className="btn-ghost-light">Ask a Question</Link>
      </PageHero>
      <Section>
        <SectionHeading eyebrow="Program Features" title="How We Prepare A Level Students" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </Section>
      <Section muted>
        <SectionHeading
          eyebrow="Subjects"
          title="A Level Subjects"
          subtitle="Subject availability may vary by session and batch."
        />
        <SubjectGrid subjects={A_LEVEL_SUBJECTS} />
      </Section>
      <FinalCta />
    </>
  );
}
