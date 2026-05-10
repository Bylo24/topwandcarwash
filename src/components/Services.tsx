/**
 * SECTION: Services
 * PURPOSE: Showcase 3–6 service offerings or feature pillars.
 * REMIX: Edit copy + items via src/config/site.ts (`services`).
 */
import { services } from "@/config/site";

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 sm:mb-4 block font-sans">
              {services.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] text-balance">
              {services.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {services.intro}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.items.map((service) => (
            <div
              key={service.num}
              className="bg-card p-6 sm:p-7 md:p-9 group transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span className="text-xs text-muted-foreground font-sans tracking-wider font-semibold">
                  {service.num}
                </span>
                <service.icon size={22} className="text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 sm:mb-3 leading-none">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
