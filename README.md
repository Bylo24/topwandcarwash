# Agency Website Template

A clean, monochrome, ultra-versatile base template for client websites. Built with React, Vite, Tailwind, shadcn/ui, and Lovable Cloud-ready. Designed to be remixed into anything: agency, SaaS, portfolio, restaurant, trades, hospitality, e-commerce, B2B.

## 60-second remix

1. **`src/config/site.ts`** — change brand, nav, CTAs, contact, **and all section content** (services list, team, projects, testimonials, etc.). Single source of truth.
2. **`src/config/theme.ts`** — preset palettes + font pairings. Copy any block into `src/index.css`.
3. **`src/index.css`** — active HSL color tokens, font imports, radius. All components use semantic tokens (no hardcoded colors).
4. **`src/pages/Index.tsx`** — comment out any section to remove it from the page.
5. **`src/assets/`** — drop in real images and import where the placeholder boxes are.

## Section inventory

| Section | File | Purpose | Safe to remove? |
|---|---|---|---|
| Navbar | `Navbar.tsx` | Top nav + CTA | No |
| Hero | `Hero.tsx` | Headline + CTAs + trust strip | No |
| Services | `Services.tsx` | 3–6 offerings grid | Yes |
| About | `About.tsx` | Story + team grid | Yes |
| Work | `Work.tsx` | Portfolio grid | Yes |
| Testimonials | `Testimonials.tsx` | Carousel (mobile) + grid (desktop) | Yes |
| CTA | `CTA.tsx` | Full-bleed conversion band | Yes |
| Contact | `Contact.tsx` | Form + contact info | Usually no |
| Footer | `Footer.tsx` | Brand + nav + contact | No |
| MobileStickyBar | `MobileStickyBar.tsx` | Persistent mobile CTA | Yes |

Each component starts with a JSDoc header describing intent, what to edit, and whether it's safe to drop.

## Customization resources

### Color palettes (in `src/config/theme.ts`)
- **Monochrome** (default) — agency, editorial
- **Editorial Cream** — warm, premium, hospitality
- **Midnight Blue** — SaaS, tech, fintech
- **Forest Studio** — wellness, sustainability, organic brands
- **Brutalist Yellow** — bold, attention-grabbing, fashion
- **Soft Pastel** — beauty, lifestyle, DTC

### Font pairings (in `src/config/theme.ts`)
- **Bebas Neue + Inter** (default) — bold display, clean body
- **Instrument Serif + DM Sans** — editorial, premium
- **Space Grotesk + Space Mono** — technical, modern SaaS
- **Playfair Display + Lora** — luxury, hospitality
- **Archivo Black + Archivo** — sport, agency, bold
- **Fraunces + Manrope** — warm, friendly

### Density
Change `--radius` in `src/index.css` to flip the whole site between sharp/brutalist (`0`), default (`0.375rem`), soft (`0.75rem`), or pill (`1.25rem`).

## Responsive

- All sections scale fluidly from 320px → 1920px.
- `min-h-[80svh]` on hero uses small-viewport units to avoid mobile-browser jump.
- Grids collapse: 3-col → 2-col → 1-col at `lg` / `sm` breakpoints.
- `MobileStickyBar` only renders below `sm` and respects iOS safe-area insets.
- All anchored sections use `scroll-mt-20` so the sticky navbar never overlaps the heading.

## Notes for future chats

- **Contact form** is a front-end shell — wire to Lovable Cloud (an edge function or a `contact_messages` table) when needed. Marked with a `TODO` in `Contact.tsx`.
- All copy is placeholder. Search for `Studio Name`, `Team Member`, `Project One`, `Client Name` to bulk-replace.
- Lovable Cloud is enabled on this template; backend can be added without extra setup.
