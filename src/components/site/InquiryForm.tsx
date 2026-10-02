import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { PROGRAM_OPTIONS } from "@/data/site";
import { submitInquiry } from "@/lib/inquiry.functions";

type Variant = "admission" | "contact";

const EMPTY = {
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  grade: "",
  program: "",
  subjects: "",
  message: "",
};

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-secondary focus:ring-2 focus:ring-ring/25";
const labelClass = "mb-2 block font-display text-[0.8rem] font-semibold text-primary";

export function InquiryForm({ variant = "admission" }: { variant?: Variant }) {
  const [values, setValues] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const send = useServerFn(submitInquiry);

  const set = (key: keyof typeof EMPTY) => (event: { target: { value: string } }) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await send({
        data: {
          ...values,
          form: variant === "admission" ? "Admission Inquiry" : "Contact Form",
        },
      });
      toast.success("Thank you! Your inquiry has been received.", {
        description: "Our team will contact you shortly.",
      });
      setValues(EMPTY);
    } catch (error) {
      toast.error("We could not submit your inquiry.", {
        description: error instanceof Error ? error.message : "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-elevated p-7 hover:translate-y-0 lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="studentName">
            Student Name *
          </label>
          <input
            id="studentName"
            required
            maxLength={100}
            className={fieldClass}
            placeholder="Full name"
            value={values.studentName}
            onChange={set("studentName")}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="parentName">
            Parent / Guardian Name
          </label>
          <input
            id="parentName"
            maxLength={100}
            className={fieldClass}
            placeholder="Full name"
            value={values.parentName}
            onChange={set("parentName")}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            required
            type="tel"
            maxLength={30}
            className={fieldClass}
            placeholder="03XX XXXXXXX"
            value={values.phone}
            onChange={set("phone")}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            maxLength={255}
            className={fieldClass}
            placeholder="name@example.com"
            value={values.email}
            onChange={set("email")}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="grade">
            Current Grade / Level
          </label>
          <input
            id="grade"
            maxLength={60}
            className={fieldClass}
            placeholder="e.g. O Level Year 1"
            value={values.grade}
            onChange={set("grade")}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="program">
            Program Interested In
          </label>
          <select id="program" className={fieldClass} value={values.program} onChange={set("program")}>
            <option value="">Select a program</option>
            {PROGRAM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="subjects">
            Subjects
          </label>
          <input
            id="subjects"
            maxLength={300}
            className={fieldClass}
            placeholder="e.g. Mathematics, Physics, Chemistry"
            value={values.subjects}
            onChange={set("subjects")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            maxLength={1000}
            className={fieldClass}
            placeholder="Tell us how we can help"
            value={values.message}
            onChange={set("message")}
          />
        </div>
      </div>

      <button type="submit" disabled={submitting} className="btn-gold mt-8 w-full sm:w-auto">
        {submitting
          ? "Submitting..."
          : variant === "admission"
            ? "Submit Admission Inquiry"
            : "Send Message"}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Your details are recorded securely for admissions follow-up only.
      </p>
    </form>
  );
}
