import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import logo from "../../278de2ee-9da8-4011-a600-c63de338fb40.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#005EC3] border-b border-white/15 shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <span className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-sm bg-white p-1.5 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.5)]">
            <img src={logo} alt="Topwand Car and Truck Wash" className="h-full w-full object-contain" />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/85 link-underline transition-colors duration-200 hover:text-white tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cta.primary.href}
            className="text-sm font-normal text-[#005EC3] bg-white px-5 py-2.5 rounded-sm transition-colors duration-200 hover:bg-white/90 tracking-wide uppercase"
          >
            {site.cta.primary.label}
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#005EC3] border-t border-white/15 px-4 pb-5 pt-3">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm font-normal text-white/85 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cta.primary.href}
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm font-normal text-[#005EC3] bg-white px-5 py-3.5 rounded-sm uppercase tracking-wide"
          >
            {site.cta.primary.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
