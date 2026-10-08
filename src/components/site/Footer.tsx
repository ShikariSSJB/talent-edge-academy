import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const PROGRAM_LINKS = [
  { to: "/o-level", label: "O Level Coaching" },
  { to: "/a-level", label: "A Level Coaching" },
  { to: "/entry-test-prep", label: "University Entry Test Prep" },
  { to: "/exam-preparation", label: "Examination Preparation" },
] as const;

const ACADEMY_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/methodology", label: "Teaching Methodology" },
  { to: "/student-support", label: "Student Support" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="academic-grid">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-background p-2"><img src={logo} alt="Talent Edge Academy" className="h-14 w-auto" /></span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              O/A Level coaching and university entry test preparation built on concept-based
              learning, individual attention, and consistent practice.
            </p>
            <p className="mt-5 font-display text-sm font-semibold tracking-wide text-gold">
              Learn. Excel. Succeed.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
              Programs
            </h3>
            <ul className="mt-5 space-y-3">
              {PROGRAM_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
              Academy
            </h3>
            <ul className="mt-5 space-y-3">
              {ACADEMY_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+923455674744" className="transition-colors hover:text-gold">
                  +92 345 567 4744
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:info@talentedge.com.pk"
                  className="transition-colors hover:text-gold"
                >
                  info@talentedge.com.pk
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  1st Floor D-31, D Block, Satellite Town, near Jinnah Institute, Rawalpindi
                </span>
              </li>
            </ul>
            <Link to="/admissions" className="btn-gold mt-6 px-5 py-2.5 text-sm">
              Enroll Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Talent Edge Academy. All rights reserved.</p>
            <p>Subject availability may vary by session and batch.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
