/**
 * SECTION: CTA
 * PURPOSE: Full-width band that drives the visitor toward conversion.
 * REMIX: Optional. Edit copy via src/config/site.ts (`ctaBand`).
 */
import { site, ctaBand } from "@/config/site";

const CTA = () => {
  return (
    <section className="bg-foreground text-background">
      <div className="section-container py-16 sm:py-20 md:py-28 text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1] mb-5 sm:mb-6 text-balance max-w-3xl mx-auto">
          {ctaBand.heading}
        </h2>
        <p className="text-background/70 max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
          {ctaBand.subhead}
        </p>
        <a
          href={site.cta.primary.href}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-background text-foreground px-10 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-opacity duration-200 hover:opacity-90"
        >
          {site.cta.primary.label}
        </a>
      </div>
    </section>
  );
};

export default CTA;
