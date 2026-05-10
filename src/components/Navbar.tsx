/**
 * SECTION: Navbar
 * PURPOSE: Sticky top navigation with brand wordmark, links, and CTA.
 * REMIX: Almost always kept. Edit links and brand via src/config/site.ts.
 */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-display text-xl md:text-2xl text-foreground tracking-wide">
          {site.name}
        </a>

        <div className="hidden md:flex items-center gap-10">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground link-underline transition-colors duration-200 hover:text-foreground tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cta.primary.href}
            className="text-sm font-semibold text-background bg-foreground px-5 py-2.5 rounded-sm transition-opacity duration-200 hover:opacity-85 tracking-wide uppercase"
          >
            {site.cta.primary.label}
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-5 pt-3">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cta.primary.href}
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm font-semibold text-background bg-foreground px-5 py-3.5 rounded-sm uppercase tracking-wide"
          >
            {site.cta.primary.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
