import { hero } from "@/config/site";

const heroImage =
  "https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-9/75323333_2759933247392970_1217586265927450624_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fFsdHg84mf0Q7kNvwHYfAkh&_nc_oc=Ado7aJC5HQPwAaNYFzrQKUarmUTF0WVylzljsvVEnoYvlC0iYPRi-9ImlQB2YAs3j80sHutUeh7jtGEzoEEgNZ5Y&_nc_zt=23&_nc_ht=scontent-akl1-1.xx&_nc_gid=pF6ywSPYaprzXkB5-1i2VA&_nc_ss=7b2a8&oh=00_Af5iRxrBMpeac_JDgEnz7uJ0IIZqe_emS8y9L0RPACCQ9g&oe=6A31F072";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=6306%20Fifty%20Five%20Street%2C%20Taber%2C%20AB%2C%20Canada%2C%20T1G%202H4";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[82svh] lg:min-h-[78svh] flex items-end pt-40 sm:pt-44 md:pt-56 lg:pt-52 pb-14 md:pb-16 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Topwand Car and Truck Wash facility"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-[#005EC3]/20" />
        <div className="absolute inset-0 bg-black/35 sm:hidden" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <h1 className="reveal-up delay-100 mt-3 sm:mt-4 lg:mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem] leading-[0.92] text-background mb-5 text-balance max-w-3xl">
            {hero.headline}
          </h1>
          <p className="reveal-up delay-200 text-sm sm:text-base md:text-lg lg:text-xl text-background leading-relaxed max-w-2xl mb-6 sm:mb-8 font-light">
            {hero.subhead}
          </p>
          <div className="reveal-up delay-300 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="#services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#005EC3] text-white px-8 py-4 text-sm font-normal tracking-wider uppercase rounded-sm transition-opacity duration-200 hover:opacity-90"
            >
              View Services
            </a>
            <a
              href={directionsUrl}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-background bg-background text-[#005EC3] px-8 py-4 text-sm font-normal tracking-wider uppercase rounded-sm transition-colors duration-200 hover:bg-background/90"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="reveal-up delay-500 mt-10 sm:mt-12 md:mt-14 pt-5 border-t border-background/35 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 text-[10px] sm:text-xs text-background uppercase tracking-[0.2em]">
          {hero.trustSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
