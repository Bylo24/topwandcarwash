import { useEffect } from "react";

const instagramProfileUrl = "https://www.instagram.com/2_brothers_flooring_ltd/";

const Blog = () => {
  useEffect(() => {
    const instagramWindow = window as Window & {
      instgrm?: {
        Embeds?: {
          process?: () => void;
        };
      };
    };

    const scriptId = "instagram-embed-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existingScript) {
      instagramWindow.instgrm?.Embeds?.process?.();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = () => {
      instagramWindow.instgrm?.Embeds?.process?.();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section id="work" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 items-start">
          <div className="max-w-xl lg:pt-8 xl:pt-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See Our Work.
            </h2>
          </div>

          <div className="lg:justify-self-end w-full lg:max-w-[440px] xl:max-w-[500px]">
            <div className="overflow-hidden rounded-sm bg-card border border-border shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <blockquote
                className="instagram-media w-full !max-w-none"
                data-instgrm-permalink={instagramProfileUrl}
                data-instgrm-version="14"
                style={{
                  width: "100%",
                  minWidth: "326px",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                <a href={instagramProfileUrl} target="_blank" rel="noreferrer">
                  View this profile on Instagram
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
