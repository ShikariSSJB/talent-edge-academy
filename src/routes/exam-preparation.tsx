import { createFileRoute } from "@tanstack/react-router";

import { FinalCta, PageHero, Section, SectionHeading, Icon } from "@/components/site/blocks";
import { EXAM_PREP_ITEMS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/exam-preparation")({
  head: () =>
    pageHead("Examination Preparation", "Mock exams, past-paper sessions, mark-scheme analysis and revision planning for final examinations."),
  component: ExamPrep,
});

function ExamPrep() {
  return (
    <>
      <PageHero
        eyebrow="Exam Readiness"
        title="Examination Preparation"
        description="Focused preparation that teaches students how to approach, structure and time their answers in the final examination."
      />
      <Section>
        <SectionHeading eyebrow="What We Cover" title="Everything Needed for Exam Day" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXAM_PREP_ITEMS.map((item) => (
            <li key={item} className="card-elevated flex items-center gap-4 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-secondary">
                <Icon name="CheckCircle2" className="h-5 w-5" />
              </span>
              <span className="font-display font-semibold text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
      <FinalCta />
    </>
  );
}
