/**
 * SECTION: Hero
 * PURPOSE: Above-the-fold headline, subhead, and primary CTAs.
 * REMIX: Almost always kept. Edit copy via src/config/site.ts (`hero`).
 * To add a background image, drop one in src/assets/ and uncomment below.
 */
import { hero, site } from "@/config/site";
// import heroImage from "@/assets/placeholder-hero.jpg";

const Hero = () => {
  return (
    <section className="relative isolate flex items-center min-h-[80svh] md:min-h-[88svh] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background">
      {/* Optional background image — uncomment to use.
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-background/70" />
      </div> */}

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <span className="reveal-up text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-5 sm:mb-6 block font-sans">
            {hero.eyebrow}
          </span>
          <h1 className="reveal-up delay-100 font-display text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] md:leading-[0.92] text-foreground mb-5 sm:mb-6 text-balance">
            {hero.headline}
          </h1>
          <p className="reveal-up delay-200 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8 sm:mb-10 font-light">
            {hero.subhead}
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

        <div className="reveal-up delay-500 mt-12 sm:mt-16 md:mt-20 pt-6 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-2 sm:gap-x-10 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
          {hero.trustSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
