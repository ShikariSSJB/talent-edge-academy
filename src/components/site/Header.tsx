import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Talent Edge Academy home">
      <img src={logo} alt="Talent Edge Academy — Learn, Excel, Succeed" className="h-12 w-auto sm:h-14" />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/95 backdrop-blur transition-shadow",
        scrolled ? "border-b border-border shadow-[0_2px_16px_rgba(10,20,50,0.07)]" : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-6">
        <Wordmark />

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link to="/admissions" className="btn-gold px-5 py-2.5 text-sm">
            Enroll Now
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <Link to="/admissions" className="btn-gold px-4 py-2.5 text-[0.82rem]">
            Enroll Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary transition-colors hover:bg-muted"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 xl:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-page flex flex-col py-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 font-display text-[0.95rem] font-medium text-muted-foreground transition-colors last:border-0 hover:text-primary data-[status=active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
