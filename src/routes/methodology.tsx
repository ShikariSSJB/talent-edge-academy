import { createFileRoute } from "@tanstack/react-router";

import { FinalCta, PageHero, Section, SectionHeading, Timeline } from "@/components/site/blocks";
import { METHODOLOGY_STEPS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/methodology")({
  head: () =>
    pageHead("Teaching Methodology", "Our six-step method: Understand, Practice, Assess, Improve, Master and Excel."),
  component: Methodology,
});

function Methodology() {
  return (
    <>
      <PageHero
        eyebrow="How We Teach"
        title="Our Teaching Methodology"
        description="A structured approach that moves every student from understanding concepts to excelling in examinations."
      />
      <Section>
        <SectionHeading eyebrow="Six Steps" title="Understand. Practice. Assess. Improve. Master. Excel." />
        <Timeline steps={METHODOLOGY_STEPS} />
      </Section>
      <FinalCta />
    </>
  );
}
