/**
 * SECTION: Work
 * PURPOSE: Portfolio / case study / featured work grid.
 * REMIX: Optional. Replace placeholder tiles with images, links, or an
 * embed (Instagram, Behance, Dribbble) as needed.
 */
const projects = [
  { title: "Project One", category: "Category" },
  { title: "Project Two", category: "Category" },
  { title: "Project Three", category: "Category" },
];

const Work = () => {
  return (
    <section id="work" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block font-sans">
              Selected Work
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] text-balance">
              Recent projects.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              A short line of context about the work below or a link to a fuller portfolio.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group block"
            >
              <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden flex items-center justify-center text-muted-foreground/40 font-display text-xl tracking-widest uppercase mb-4 transition-opacity duration-300 group-hover:opacity-90">
                Image
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold font-sans">
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
