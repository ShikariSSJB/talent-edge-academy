import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero, Section } from "@/components/site/blocks";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Us", "Get in touch with Talent Edge Academy for admissions and program information."),
  component: Contact,
});

const INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 345 567 4744",
    href: "tel:+923455674744",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@talentedge.com.pk",
    href: "mailto:info@talentedge.com.pk",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "D, 1st Floor D-31, Block Satellite, near Jinnah Institute, Town, Rawalpindi",
  },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a question about our programs or admissions? Send us a message and we'll get back to you."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-primary">Talent Edge Academy</h2>
            {INFO.map(({ icon: I, label, value, href }) => (
              <div key={label} className="card-elevated flex gap-4 p-5">
                <I className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-sm font-semibold text-primary">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="card-elevated p-6 sm:p-10">
            <InquiryForm variant="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
