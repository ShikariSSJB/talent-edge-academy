import { createFileRoute } from "@tanstack/react-router";

import aboutImg from "@/assets/about-study.jpg";
import { CheckList, FeatureCard, FinalCta, PageHero, Section, SectionHeading } from "@/components/site/blocks";
import { COMMITMENT_QUALITIES, WHY_CHOOSE } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead("About Us", "Learn about Talent Edge Academy's mission, values and commitment to academic excellence."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Talent Edge Academy"
        subtitle="Learn. Excel. Succeed."
        description="A focused academic coaching academy dedicated to O/A Level excellence and university entry test success."
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Academic Excellence Built on Strong Concepts"
              subtitle="Talent Edge Academy provides O Level and A Level coaching along with university entry test preparation. Our approach combines concept-based teaching, regular practice, assessments and examination techniques to help every student perform at their best."
            />
            <h3 className="mt-10 font-display text-lg font-semibold text-primary">
              We aim to develop students who are:
            </h3>
            <CheckList items={COMMITMENT_QUALITIES} />
          </div>
          <img
            src={aboutImg}
            alt="Students studying together"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        </div>
      </Section>
      <Section muted>
        <SectionHeading eyebrow="Our Strengths" title="What Sets Us Apart" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w) => (
            <FeatureCard key={w.title} icon={w.icon} title={w.title} text={w.text} />
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
