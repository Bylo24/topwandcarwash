/**
 * SECTION: Hero
 * PURPOSE: Above-the-fold headline, subhead, and primary CTAs.
 * REMIX: Almost always kept. Swap copy via src/config/site.ts. To add a
 * background image, drop one into src/assets/ and uncomment the <img> block.
 */
import { site } from "@/config/site";
// import heroImage from "@/assets/placeholder-hero.jpg";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[88svh] flex items-center pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background">
      {/* Optional background image — uncomment to use.
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-background/70" />
      </div> */}

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <span className="reveal-up text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6 block font-sans">
            {site.tagline}
          </span>
          <h1 className="reveal-up delay-100 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.92] text-foreground mb-6 text-balance">
            A bold headline that says exactly what you do.
          </h1>
          <p className="reveal-up delay-200 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 font-light">
            One or two sentences of supporting copy that sets the tone, builds trust, and invites the
            visitor to take the next step.
          </p>
          <div className="reveal-up delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={site.cta.primary.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-opacity duration-200 hover:opacity-85"
            >
              {site.cta.primary.label}
            </a>
            <a
              href={site.cta.secondary.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-foreground text-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              {site.cta.secondary.label}
            </a>
          </div>
        </div>

        <div className="reveal-up delay-500 mt-16 md:mt-20 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
          <span>Trust Signal One</span>
          <span>Trust Signal Two</span>
          <span>Trust Signal Three</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
