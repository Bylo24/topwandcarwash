const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="section-container py-8 md:py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            Copyright Topwand Car and Truck Wash. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-sm text-white/70">
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Privacy", href: "#contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
