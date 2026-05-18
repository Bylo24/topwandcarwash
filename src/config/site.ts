/**
 * SITE CONFIG — single source of truth for content.
 *
 * Edit this file FIRST when remixing the template. Every section reads from
 * here, so updating brand, copy, services, work, testimonials, etc. only
 * happens in one place.
 *
 * For visual/theme customization (colors, fonts, radii) see:
 *   - src/config/theme.ts        (preset palettes + font pairings)
 *   - src/index.css              (active CSS tokens)
 */
import { Sparkles, Layers, Zap, Compass, Shield, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const site = {
  name: "J. Grimm Contracting",
  tagline: "Residential and commercial contracting in Edmonton.",
  description:
    "J. Grimm Contracting provides reliable residential and commercial contracting services in the Edmonton area.",

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],

  cta: {
    primary: { label: "Get a Quote", href: "#contact" },
    secondary: { label: "Our Work", href: "#work" },
  },

  contact: {
    phone: "",
    phoneHref: "",
    email: "",
    location: "Edmonton, Alberta",
  },

  social: {
    instagram: "",
    linkedin: "",
    twitter: "",
  },
} as const;

/* ------------------------------------------------------------------ */
/* SECTION CONTENT                                                    */
/* Each section pulls from one of these arrays/objects. Add, remove,  */
/* or reorder freely — the components map over what they receive.      */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: site.tagline,
  headline: "Contracting services for residential and commercial projects.",
  subhead:
    "J. Grimm Contracting provides reliable solutions from renovations to new construction, with quality workmanship for every project.",
  trustSignals: ["Residential Projects", "Commercial Work", "Edmonton Area"],
} as const;

export const services: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: { num: string; icon: LucideIcon; title: string; description: string }[];
} = {
  eyebrow: "What We Do",
  heading: "Contracting services in Edmonton.",
  intro:
    "Practical construction support for homeowners, property managers, and businesses.",
  items: [
    { num: "01", icon: Sparkles, title: "Residential Renovations", description: "Interior and exterior renovation work tailored to each property." },
    { num: "02", icon: Layers,   title: "Commercial Projects", description: "Structural and interior contracting work for businesses and commercial spaces." },
    { num: "03", icon: Zap,      title: "New Construction", description: "Construction support for new builds, additions, and property improvements." },
    { num: "04", icon: Compass,  title: "Project Management", description: "Clear coordination across scope, schedule, trades, and site requirements." },
    { num: "05", icon: Shield,   title: "Quality Workmanship", description: "Careful execution with attention to durability, finish, and details." },
    { num: "06", icon: Heart,    title: "General Contracting", description: "Reliable contracting services for a range of residential and commercial needs." },
  ],
};

export const about = {
  eyebrow: "About Us",
  heading: "J. Grimm Contracting.",
  paragraphs: [
    "J. Grimm Contracting is a reputable contracting business based in Edmonton, Alberta. The team offers professional construction solutions for residential and commercial clients.",
    "With a focus on quality workmanship and customer satisfaction, every project is planned around the specific requirements and timelines of the client.",
  ],
  team: [
    { name: "Service Area", role: "Edmonton and surrounding communities", initials: "SA" },
    { name: "Project Types", role: "Renovations and new construction", initials: "PT" },
  ],
} as const;

export const work = {
  eyebrow: "Selected Work",
  heading: "Completed projects.",
  intro: "A sample of residential and commercial contracting work.",
  projects: [
    { title: "Residential Renovation", category: "Residential", href: "#" },
    { title: "Commercial Interior", category: "Commercial", href: "#" },
    { title: "New Construction Support", category: "Construction", href: "#" },
  ],
} as const;

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "What clients say.",
  intro: "Feedback from residential and commercial clients.",
  reviews: [
    { name: "Local Business Owner", role: "Commercial Client", quote: "The project was handled professionally from start to finish, with clear communication throughout the work." },
    { name: "Homeowner in Edmonton", role: "Residential Client", quote: "The team kept the renovation organized and delivered quality workmanship on the details that mattered." },
    { name: "Property Manager", role: "Commercial Client", quote: "Reliable scheduling and practical problem solving made the construction process much easier to manage." },
    { name: "Retail Manager", role: "Commercial Client", quote: "The finished space met our operational needs and the team was responsive throughout the project." },
    { name: "Residential Client", role: "Home Renovation", quote: "They listened to the scope, respected the timeline, and produced a clean final result." },
    { name: "Edmonton Resident", role: "Residential Client", quote: "A dependable contractor with strong attention to workmanship and communication." },
  ],
} as const;

export const ctaBand = {
  heading: "Ready to discuss your project?",
  subhead: "Reach out to J. Grimm Contracting for residential and commercial contracting work in Edmonton.",
} as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Get a quote.",
  intro: "Send a message about your project requirements and the team will review the request.",
} as const;
