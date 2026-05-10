/**
 * SECTION: About
 * PURPOSE: Tell the brand story and introduce the team.
 * REMIX: Optional. Drop the team grid for solo founders. Swap the image
 * by replacing src/assets/placeholder-team.jpg.
 */
const team = [
  { name: "Team Member One", role: "Role Title", initials: "TO" },
  { name: "Team Member Two", role: "Role Title", initials: "TT" },
];

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block font-sans">
              Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] mb-6 text-balance">
              A few words about us.
            </h2>
            <div className="h-px bg-foreground w-16 mb-8" />
            <div className="space-y-5 text-muted-foreground leading-[1.75] text-sm sm:text-base">
              <p>
                Use this paragraph to introduce the brand. Talk about the founding story, what drives the
                team, and what makes the approach different.
              </p>
              <p>
                A second paragraph can deepen the narrative. Mention values, milestones, or the kind of
                clients you love working with.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm bg-muted aspect-[4/5] md:aspect-[5/6] flex items-center justify-center text-muted-foreground/40 font-display text-2xl tracking-widest uppercase">
              Image
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {team.map((member) => (
            <div key={member.name} className="bg-card p-8 md:p-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-foreground flex items-center justify-center font-display text-xl sm:text-2xl text-background">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground leading-none">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-sans font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
