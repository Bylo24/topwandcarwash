/**
 * SECTION: CTA
 * PURPOSE: Full-width band that drives the visitor toward conversion.
 * REMIX: Optional. Use between Work and Contact for emphasis.
 */
import { site } from "@/config/site";

const CTA = () => {
  return (
    <section className="bg-foreground text-background">
      <div className="section-container py-20 md:py-28 text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1] mb-6 text-balance max-w-3xl mx-auto">
          Ready to start something great?
        </h2>
        <p className="text-background/70 max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
          A short closing line that nudges the visitor to take the next step.
        </p>
        <a
          href={site.cta.primary.href}
          className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-10 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-opacity duration-200 hover:opacity-90"
        >
          {site.cta.primary.label}
        </a>
      </div>
    </section>
  );
};

export default CTA;
