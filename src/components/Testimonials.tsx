import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Cheryl Hill",
    quote:
      "Clear communication from the first call through to installation, with a smooth, hassle-free process.",
  },
  {
    name: "Rebekah Johnson",
    quote:
      "Quick to respond, sorted the repair fast, and then delivered a beautiful carpet and vinyl install.",
  },
  {
    name: "Reana Tasker",
    quote:
      "Outstanding communication and genuine care, even for a small job. Felt like a priority from start to finish.",
  },
  {
    name: "Tie Scown",
    quote:
      "Fast quoting, quick turnaround, and quality craftsmanship with a result that matched the budget.",
  },
  {
    name: "Debz Tongotea",
    quote:
      "Organised, professional, and easy to have in the home. They kept to the plan and finished early.",
  },
  {
    name: "Peter Winter",
    quote:
      "Great service, fast follow-up, and a tough job completed properly when other companies did not show up.",
  },
];

const GoogleBadge = () => (
  <span className="inline-flex items-center gap-2 text-muted-foreground">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png"
      alt="Google"
      className="h-5 w-5 shrink-0 object-contain"
      loading="lazy"
    />
    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Google</span>
  </span>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section-spacing bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Reviews
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See what our clients say.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Real feedback from customers who wanted clear communication, tidy work, and a result they
              could trust.
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
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <Quote size={22} className="text-muted-foreground/20 shrink-0" strokeWidth={1.5} />
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                    {review.quote}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] font-sans text-muted-foreground">
                      {review.name}
                    </p>
                    <div className="mt-2">
                      <GoogleBadge />
                    </div>
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
                aria-label={`Show review from ${review.name}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review) => {
            return (
              <article
                key={review.name}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={22} className="text-muted-foreground/20 shrink-0" strokeWidth={1.5} />
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                  {review.quote}
                </p>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] font-sans text-muted-foreground">
                    {review.name}
                  </p>
                  <div className="mt-2">
                    <GoogleBadge />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
