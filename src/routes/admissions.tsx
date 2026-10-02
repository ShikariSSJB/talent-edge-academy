import { createFileRoute } from "@tanstack/react-router";

import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero, ProcessTimeline, Section, SectionHeading } from "@/components/site/blocks";
import { ADMISSION_STEPS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admissions")({
  head: () =>
    pageHead("Admissions", "Apply for O Level, A Level or entry test preparation at Talent Edge Academy."),
  component: Admissions,
});

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions Open"
        title="Admissions"
        description="Join Talent Edge Academy in five simple steps. Submit an inquiry and our team will contact you."
      />
      <Section>
        <SectionHeading eyebrow="Process" title="How to Join" />
        <ProcessTimeline steps={ADMISSION_STEPS} />
      </Section>
      <Section muted>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Apply" title="Admission Inquiry Form" />
          <div className="card-elevated mt-10 p-6 sm:p-10">
            <InquiryForm variant="admission" />
          </div>
        </div>
      </Section>
    </>
  );
}
