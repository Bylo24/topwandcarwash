/**
 * SECTION: About
 * PURPOSE: Tell the brand story and introduce the team.
 * REMIX: Edit copy + team via src/config/site.ts (`about`). Drop the team
 * grid by removing the `about.team` array or hiding the second block.
 */
import { about } from "@/config/site";

const About = () => {
  return (
    <section id="about" className="section-spacing scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 sm:mb-4 block font-sans">
              {about.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] mb-5 sm:mb-6 text-balance">
              {about.heading}
            </h2>
            <div className="h-px bg-foreground w-16 mb-6 sm:mb-8" />
            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-[1.75] text-sm sm:text-base">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm bg-muted aspect-[4/5] md:aspect-[5/6] flex items-center justify-center text-muted-foreground/40 font-display text-2xl tracking-widest uppercase">
              Image
            </div>
          </div>
        </div>

        {about.team.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {about.team.map((member) => (
              <div key={member.name} className="bg-card p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-foreground flex items-center justify-center font-display text-xl sm:text-2xl text-background shrink-0">
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground leading-none truncate">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-sans font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
