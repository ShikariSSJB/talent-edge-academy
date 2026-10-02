import { createFileRoute } from "@tanstack/react-router";

import { FinalCta, PageHero, Section } from "@/components/site/blocks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("FAQ", "Answers to common questions about classes, tests and admissions at Talent Edge Academy."),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <FinalCta />
    </>
  );
}
