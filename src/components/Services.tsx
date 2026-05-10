/**
 * SECTION: Services
 * PURPOSE: Showcase 3–6 service offerings or feature pillars.
 * REMIX: Safe to remove for portfolio/SaaS. Swap icons via lucide-react.
 */
import { Sparkles, Layers, Zap, Compass, Shield, Heart } from "lucide-react";

const services = [
  { num: "01", icon: Sparkles, title: "Service One", description: "A short, benefit-led description of this offering." },
  { num: "02", icon: Layers, title: "Service Two", description: "Explain what the client gets and why it matters." },
  { num: "03", icon: Zap, title: "Service Three", description: "Keep copy tight. One or two clear sentences." },
  { num: "04", icon: Compass, title: "Service Four", description: "Speak to the outcome, not the process." },
  { num: "05", icon: Shield, title: "Service Five", description: "Use plain language that anyone can understand." },
  { num: "06", icon: Heart, title: "Service Six", description: "Close with the value the client walks away with." },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block font-sans">
              What We Do
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] text-balance">
              A clear section heading.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              Use this paragraph to set context for the services below. Keep it short and benefit-focused.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-card p-7 md:p-9 group transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-sans tracking-wider font-semibold">
                  {service.num}
                </span>
                <service.icon size={22} className="text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-none">
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
