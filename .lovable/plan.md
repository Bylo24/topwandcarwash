
# Agency Website Template — Conversion Plan

Goal: turn the existing 2 Brothers Flooring site into a polished, neutral, ultra-clean **base template** to remix for any future client. Every section becomes generic, modular, and easy for a future Lovable chat to keep, drop, or rewrite without untangling client-specific code.

## 1. Visual direction

- Hero flips to **plain white background, black text, black solid buttons** (white-text outline secondary). Remove the dark image background.
- Keep the existing monochrome black/white token system in `index.css` — already neutral, just tighten:
  - Slightly softer muted text, cleaner border tone.
  - Confirm one accent = pure black so future remixes can swap a single token to rebrand the entire site.
- Typography: keep Bebas Neue (display) + Inter (body) as a strong, neutral default pairing. Documented as swappable.
- Spacing: standardize all sections on `section-spacing` and `section-container`; remove ad-hoc paddings.
- Animations: keep `reveal-up`, `fade-in`. No new motion libs.

## 2. Section inventory (modular, each independently removable)

Each section becomes a self-contained component with placeholder copy and a top-of-file comment describing intent so future chats know whether to keep it.

```text
<Navbar/>          Logo + nav links + CTA
<Hero/>            White bg, black text, headline + sub + 2 CTAs + trust strip
<Services/>        6-item grid (icons + numbered)
<About/>           (renamed from OriginStory) image + story + team cards
<Work/>            (renamed from Blog) Portfolio/feed slot — generic placeholder, no Instagram embed by default
<Testimonials/>    Reviews carousel (mobile) + grid (desktop)
<CTA/>             NEW small full-width call-to-action band (optional)
<Contact/>         Info column + form
<Footer/>          Brand + nav + contact
<MobileStickyBar/> CTA + Call
```

- Remove the Instagram embed from `Work` (client-specific). Replace with a 3-up image/video placeholder grid using `/placeholder.svg`.
- Remove hard-coded team photo import (`../../TeamPhoto.png`) — switch to a placeholder asset in `src/assets/`.
- Remove all NZ-specific phone numbers, locations, names, review quotes, service descriptions.

## 3. Placeholder content rules

- Headlines: short, generic ("Built for what's next.", "What we do.", "Our story.", "Selected work.", "What clients say.", "Let's talk.").
- Body copy: 1–2 short sentences of lorem-style but readable filler relevant to the section purpose.
- All names → "Team Member One / Two", roles → "Role Title", phone → "+00 000 000 000", location → "City, Country".
- Punctuation rule from prior turns (only `.` and `,`) is dropped for the template — apostrophes and standard punctuation allowed since this is a base for any client.
- Brand name everywhere → **"Studio Name"**.

## 4. Asset cleanup

- Delete client photos: `src/assets/hero-flooring.jpg`, `team.jpg`, `van.jpg`, `the-bros.png`, root `TeamPhoto.png`, `src/assets/logo.png`.
- Add neutral placeholders:
  - `src/assets/placeholder-hero.jpg` (light, abstract — or skip image entirely on hero since it's now white).
  - `src/assets/placeholder-team.jpg`
  - `src/assets/placeholder-work-1/2/3.jpg`
  - `src/assets/logo-placeholder.svg` (simple wordmark).
- Hero will be image-free by default (pure white) but include a commented-out `<img>` slot showing how to add a background image for future remixes.

## 5. Hero redesign (white)

- Background: `bg-background` (white).
- Massive black display headline, muted-foreground subhead.
- Primary CTA: solid black (`bg-foreground text-background`).
- Secondary CTA: outline black (`border border-foreground text-foreground hover:bg-foreground hover:text-background`).
- Trust strip below: 3 short uppercase labels separated by thin dividers.
- Remove dark gradients, remove image overlays.

## 6. Code hygiene

- Delete unused files: `src/App.css` (Vite default leftovers), `src/components/NavLink.tsx` if unused.
- Fix Contact form: remove `console.log`, leave a clearly-marked TODO comment so future chats know to wire it (e.g. to Lovable Cloud).
- Remove all hard-coded `tel:` numbers; centralize template config (see below).
- Add a single config file `src/config/site.ts` exporting:
  ```ts
  export const site = {
    name: "Studio Name",
    tagline: "...",
    nav: [...],
    contact: { phone, email, location },
    cta: { primary, secondary },
  };
  ```
  Every section reads from this. **One file to edit when remixing.**
- Add `README.md` template-usage notes at the top describing: section list, how to remove sections from `Index.tsx`, where to swap config, where to swap assets, token locations.
- Each section component gets a top-of-file JSDoc:
  ```tsx
  /**
   * SECTION: Services
   * PURPOSE: Showcase 3–6 service offerings.
   * REMIX: Safe to remove for portfolio/SaaS sites. Swap icons via lucide-react.
   */
  ```

## 7. SEO + meta

- Generic `<title>`: "Studio Name — Tagline goes here."
- Generic description.
- Remove "No sad stories" line from `index.html`.
- Keep single H1 in Hero.

## 8. Files to change

- Edit: `src/components/{Navbar,Hero,Services,OriginStory→About,Blog→Work,Testimonials,Contact,Footer,MobileStickyBar}.tsx`, `src/pages/Index.tsx`, `src/index.css`, `index.html`, `tailwind.config.ts` (font tokens already extended, verify).
- Create: `src/config/site.ts`, `src/assets/` placeholders, updated `README.md`.
- Delete: client photos, root `TeamPhoto.png`, `src/App.css`, unused components.
- Rename components (`OriginStory.tsx` → `About.tsx`, `Blog.tsx` → `Work.tsx`) and update imports.

## 9. Out of scope

- No backend wiring, no auth, no Lovable Cloud changes (template ships clean).
- No new animation libraries, no new UI kits.

---

### Quick clarifier

A couple of small choices that affect the result — happy to default if you don't care:

1. Hero image: leave it **fully white with no image** (most versatile, cleanest), or keep an optional subtle placeholder image slot?
2. Keep the Testimonials section in the default template, or move it to an "optional" section commented out in `Index.tsx` so remixes start leaner?

If you don't answer I'll go with: **no hero image** + **testimonials kept in by default**.
