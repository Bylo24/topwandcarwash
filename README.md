# Agency Website Template

A clean, monochrome, ultra-versatile base template for client websites. Built with React, Vite, Tailwind, and shadcn/ui.

## Quick remix guide

1. **Edit `src/config/site.ts`** — brand name, tagline, nav, CTAs, contact info. One file changes the whole site.
2. **Edit copy** in each section component under `src/components/`. Every section starts with a JSDoc block describing its purpose and whether it's safe to remove.
3. **Add brand colors** by editing the HSL tokens in `src/index.css` (`--background`, `--foreground`, `--muted`, etc.). All components use semantic tokens — no hard-coded colors.
4. **Swap fonts** in `src/index.css` (Google Fonts import + `body` / `h1-h6` rules).
5. **Add or remove sections** in `src/pages/Index.tsx` — just comment out the line.
6. **Replace placeholder images** with files in `src/assets/` and import them in the relevant section.

## Section inventory

| Section | File | Purpose | Safe to remove? |
|---|---|---|---|
| Navbar | `Navbar.tsx` | Top nav + CTA | No |
| Hero | `Hero.tsx` | Headline + CTAs | No |
| Services | `Services.tsx` | 3–6 offerings grid | Yes |
| About | `About.tsx` | Story + team | Yes |
| Work | `Work.tsx` | Portfolio grid | Yes |
| Testimonials | `Testimonials.tsx` | Social proof | Yes |
| CTA | `CTA.tsx` | Conversion band | Yes |
| Contact | `Contact.tsx` | Form + info | Usually no |
| Footer | `Footer.tsx` | Brand + nav | No |
| MobileStickyBar | `MobileStickyBar.tsx` | Mobile CTA bar | Yes |

## Design system

- **Tokens** live in `src/index.css` (HSL only).
- **Tailwind** maps tokens to utility classes in `tailwind.config.ts`.
- **Default palette** is monochrome: pure white background, near-black foreground. Swap `--background`, `--foreground`, and `--muted-foreground` to rebrand.
- **Typography**: Bebas Neue (display) + Inter (body). Replace via the Google Fonts import.

## Notes for future chats

- The Contact form is not wired to a backend. Connect it to Lovable Cloud or an email service when needed.
- All copy is placeholder — search for "Studio Name", "Team Member", "Project One", etc. to replace.
