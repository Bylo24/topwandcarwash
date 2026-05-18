import { Car, CircleGauge, ClipboardList, HeartHandshake, MapPin, PackageCheck, Store, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const site = {
  name: "Topwand Car and Truck Wash",
  tagline: "Vehicle wash facility in Taber.",
  description:
    "Topwand Car and Truck Wash provides self serve wash bays, big truck access, and onsite convenience items in Taber, Alberta.",

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
  ],

  cta: {
    primary: { label: "Call Now", href: "tel:+14032230397" },
    secondary: { label: "View Services", href: "#services" },
  },

  contact: {
    phone: "403 223 0397",
    phoneHref: "tel:+14032230397",
    email: "topwand@telus.net",
    location: "6306 Fifty Five Street, Taber, AB, Canada, T1G 2H4",
  },

  social: {
    instagram: "",
    linkedin: "",
    twitter: "",
  },
} as const;

export const hero = {
  eyebrow: "Taber Alberta",
  headline: "A professional vehicle wash facility built for cars and big trucks.",
  subhead:
    "The facility offers self serve wash bays alongside a convenience store for daily essentials and automotive supplies.",
  trustSignals: ["Self Serve Wash Bays", "Big Truck Access", "Taber Alberta"],
} as const;

export const services: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: { num: string; icon: LucideIcon; title: string; description: string }[];
} = {
  eyebrow: "Our Facility",
  heading: "Services for every vehicle.",
  intro:
    "Topwand Car and Truck Wash supports daily drivers, commercial vehicles, and long distance travel stops.",
  items: [
    { num: "01", icon: Car, title: "Car Wash Bays", description: "Self serve bays feature high pressure wands and quality soaps for everyday vehicles." },
    { num: "02", icon: Truck, title: "Big Truck Wash", description: "Large bays are designed specifically to accommodate semi trucks, commercial fleets, and recreational vehicles." },
    { num: "03", icon: Store, title: "Convenience Store", description: "The onsite store stocks snacks, cold drinks, hot coffee, and essential travel items." },
    { num: "04", icon: ClipboardList, title: "Fleet Accounts", description: "Local businesses can set up regular commercial accounts for simplified monthly fleet vehicle cleaning." },
    { num: "05", icon: CircleGauge, title: "Vacuum Stations", description: "High powered interior vacuum stations are available on site to clean vehicle carpets and upholstery." },
    { num: "06", icon: PackageCheck, title: "Travel Supplies", description: "Drivers can purchase basic automotive fluids, cleaning wipes, and road trip necessities." },
  ],
};

export const about = {
  eyebrow: "About Us",
  heading: "Serving the Taber community.",
  paragraphs: [
    "Topwand Car and Truck Wash provides practical vehicle cleaning solutions for local residents and commercial drivers. The facility is equipped to handle everything from standard passenger cars to large transport trucks.",
    "An onsite convenience store ensures that drivers can restock and refresh while cleaning their vehicles. The business focuses on straightforward service and reliable facility upkeep.",
  ],
  team: [
    { name: "Convenient Location", role: "Situated easily on Fifty Five Street in Taber.", initials: "CL", icon: MapPin },
    { name: "Community Focused", role: "Supporting local organizations and animal shelter initiatives.", initials: "CF", icon: HeartHandshake },
  ],
} as const;

export const work = {
  eyebrow: "Gallery",
  heading: "The facility.",
  intro: "",
  projects: [],
} as const;

export const testimonials = {
  eyebrow: "Feedback",
  heading: "What customers say.",
  intro: "Customers describe the site as practical for everyday vehicle cleaning and larger truck access.",
  reviews: [
    { name: "Local Driver", role: "Customer", quote: "The big truck wash bays are spacious and have excellent water pressure for larger commercial rigs." },
    { name: "Regular Customer", role: "Customer", quote: "It is a clean facility with good soaps and the convenience store makes it easy to grab a coffee while washing." },
    { name: "Taber Resident", role: "Customer", quote: "The self serve setup is simple to use and the bays are always kept tidy by the management." },
    { name: "Transport Company", role: "Commercial Customer", quote: "Commercial fleet washing is efficient here and the location is highly accessible for big trucks." },
    { name: "Community Member", role: "Customer", quote: "Friendly people and great service including support for local community causes and pet societies." },
    { name: "Area Farmer", role: "Customer", quote: "Highly recommend this wash for anyone needing to clean a trailer or large farm equipment." },
  ],
} as const;

export const ctaBand = {
  heading: "Visit the facility.",
  subhead: "Stop by the location to use the self serve bays or contact the team directly to discuss commercial fleet accounts.",
} as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Visit the facility.",
  intro: "Stop by the location to use the self serve bays or contact the team directly to discuss commercial fleet accounts.",
} as const;
