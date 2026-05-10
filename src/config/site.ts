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

/* ------------------------------------------------------------------ */
/* SECTION CONTENT                                                    */
/* Each section pulls from one of these arrays/objects. Add, remove,  */
/* or reorder freely — the components map over what they receive.      */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: site.tagline,
  headline: "A bold headline that says exactly what you do.",
  subhead:
    "One or two sentences of supporting copy that sets the tone, builds trust, and invites the visitor to take the next step.",
  trustSignals: ["Trust Signal One", "Trust Signal Two", "Trust Signal Three"],
} as const;

export const services: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: { num: string; icon: LucideIcon; title: string; description: string }[];
} = {
  eyebrow: "What We Do",
  heading: "A clear section heading.",
  intro:
    "Use this paragraph to set context for the services below. Keep it short and benefit-focused.",
  items: [
    { num: "01", icon: Sparkles, title: "Service One", description: "A short, benefit-led description of this offering." },
    { num: "02", icon: Layers,   title: "Service Two", description: "Explain what the client gets and why it matters." },
    { num: "03", icon: Zap,      title: "Service Three", description: "Keep copy tight. One or two clear sentences." },
    { num: "04", icon: Compass,  title: "Service Four", description: "Speak to the outcome, not the process." },
    { num: "05", icon: Shield,   title: "Service Five", description: "Use plain language that anyone can understand." },
    { num: "06", icon: Heart,    title: "Service Six", description: "Close with the value the client walks away with." },
  ],
};

export const about = {
  eyebrow: "Our Story",
  heading: "A few words about us.",
  paragraphs: [
    "Use this paragraph to introduce the brand. Talk about the founding story, what drives the team, and what makes the approach different.",
    "A second paragraph can deepen the narrative. Mention values, milestones, or the kind of clients you love working with.",
  ],
  team: [
    { name: "Team Member One", role: "Role Title", initials: "TO" },
    { name: "Team Member Two", role: "Role Title", initials: "TT" },
  ],
} as const;

export const work = {
  eyebrow: "Selected Work",
  heading: "Recent projects.",
  intro: "A short line of context about the work below or a link to a fuller portfolio.",
  projects: [
    { title: "Project One",   category: "Category", href: "#" },
    { title: "Project Two",   category: "Category", href: "#" },
    { title: "Project Three", category: "Category", href: "#" },
  ],
} as const;

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "What clients say.",
  intro: "Real words from people we have worked with.",
  reviews: [
    { name: "Client Name One",   role: "Role, Company", quote: "A short, glowing quote that feels real and specific to the work delivered." },
    { name: "Client Name Two",   role: "Role, Company", quote: "Another testimonial that highlights a different angle of the value provided." },
    { name: "Client Name Three", role: "Role, Company", quote: "Keep quotes between one and three sentences. Avoid generic adjectives." },
    { name: "Client Name Four",  role: "Role, Company", quote: "A specific outcome or transformation makes a testimonial believable." },
    { name: "Client Name Five",  role: "Role, Company", quote: "Vary the tone across reviews so the section does not read repetitively." },
    { name: "Client Name Six",   role: "Role, Company", quote: "Close the set with a quote that invites the reader to take the next step." },
  ],
} as const;

export const ctaBand = {
  heading: "Ready to start something great?",
  subhead: "A short closing line that nudges the visitor to take the next step.",
} as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Let's talk.",
  intro: "Send a message and we will get back to you within one business day.",
} as const;
