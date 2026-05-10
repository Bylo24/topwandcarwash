/**
 * SITE CONFIG
 * Single source of truth for brand, navigation, and contact info.
 * Edit this file first when remixing the template for a new client.
 */
export const site = {
  name: "Studio Name",
  tagline: "A short, punchy tagline that explains what you do.",
  description:
    "Replace this with a one-sentence description of the business. Used in meta tags and the footer.",
  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    primary: { label: "Get Started", href: "#contact" },
    secondary: { label: "Our Work", href: "#work" },
  },
  contact: {
    phone: "+00 000 000 000",
    phoneHref: "tel:+0000000000",
    email: "hello@studio.com",
    location: "City, Country",
  },
  social: {
    instagram: "",
    linkedin: "",
    twitter: "",
  },
} as const;
