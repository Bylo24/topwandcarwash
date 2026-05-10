/**
 * SECTION: Work
 * PURPOSE: Portfolio / case study / featured work grid.
 * REMIX: Edit projects via src/config/site.ts (`work`).
 */
import { work } from "@/config/site";

const Work = () => {
  return (
    <section id="work" className="section-spacing bg-card scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 md:mb-16 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 sm:mb-4 block font-sans">
              {work.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] text-balance">
              {work.heading}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {work.intro}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {work.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group block"
            >
              <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden flex items-center justify-center text-muted-foreground/40 font-display text-xl tracking-widest uppercase mb-4 transition-opacity duration-300 group-hover:opacity-90">
                Image
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold font-sans">
                {project.category}
              </p>
              <h3 className="font-display text-2xl text-foreground mt-2 leading-none">
                {project.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
