/**
 * SECTION: Testimonials
 * PURPOSE: Social proof from clients.
 * REMIX: Optional. Drop entirely for early-stage brands. Mobile shows a
 * single rotating card; desktop shows a grid.
 */
import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/config/site";

const reviews = testimonials.reviews;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section-spacing bg-background scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-8 md:mb-14 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-xs font-normal tracking-[0.25em] uppercase text-muted-foreground mb-3 sm:mb-4 block font-sans">
              {testimonials.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] text-balance">
              {testimonials.heading}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {testimonials.intro}
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative min-h-[260px] overflow-hidden">
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={review.name}
                  className={[
                    "absolute inset-0 rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-700 ease-out",
                    isActive ? "opacity-100 translate-x-0" : "pointer-events-none opacity-0 translate-x-3",
                  ].join(" ")}
                  aria-hidden={!isActive}
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-1 text-[#1D4ED8]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <Quote size={22} className="text-muted-foreground/20 shrink-0" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">{review.quote}</p>
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-sm font-normal text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{review.role}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "w-6 bg-foreground" : "w-2 bg-border",
                ].join(" ")}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-1 text-[#1D4ED8]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote size={22} className="text-muted-foreground/20 shrink-0" strokeWidth={1.5} />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90">{review.quote}</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-normal text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
