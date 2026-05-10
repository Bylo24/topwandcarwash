/**
 * SECTION: Footer
 * PURPOSE: Brand summary, navigation, and contact details.
 * REMIX: Almost always kept. Edit via src/config/site.ts.
 */
import { site } from "@/config/site";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-12 sm:py-14 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="sm:col-span-2 md:col-span-5">
            <p className="font-display text-2xl text-foreground mb-3 sm:mb-4">{site.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {site.description}
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs font-semibold text-foreground mb-3 sm:mb-4 font-sans tracking-[0.2em] uppercase">Navigate</p>
            <div className="space-y-2.5">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs font-semibold text-foreground mb-3 sm:mb-4 font-sans tracking-[0.2em] uppercase">Contact</p>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <a href={site.contact.phoneHref} className="block hover:text-foreground transition-colors duration-200">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="block hover:text-foreground transition-colors duration-200">
                {site.contact.email}
              </a>
              <p className="text-xs leading-relaxed pt-1">{site.contact.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-14 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
