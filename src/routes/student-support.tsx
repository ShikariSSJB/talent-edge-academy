import { createFileRoute } from "@tanstack/react-router";

import parentsImg from "@/assets/parents-meeting.jpg";
import { CheckList, FeatureCard, FinalCta, PageHero, Section, SectionHeading } from "@/components/site/blocks";
import { PARENT_COMMS, STUDENT_SUPPORT } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/student-support")({
  head: () =>
    pageHead("Student Support & Parent Communication", "Teacher guidance, academic feedback and regular progress updates for parents."),
  component: Support,
});

function Support() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the Classroom"
        title="Student Support"
        description="We support every student academically and personally, and keep parents informed throughout the year."
      />
      <Section>
        <SectionHeading eyebrow="Support" title="How We Support Students" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STUDENT_SUPPORT.map((s) => <FeatureCard key={s.title} icon={s.icon} title={s.title} />)}
        </div>
      </Section>
      <Section muted>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={parentsImg}
            alt="Parent-teacher meeting"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <SectionHeading align="left" eyebrow="For Parents" title="Parent Communication" />
            <CheckList items={PARENT_COMMS} />
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
