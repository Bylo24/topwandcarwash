/**
 * THEME PRESETS
 *
 * Plug-and-play visual identities. To activate a preset, copy its CSS
 * variable block into the `:root` selector in `src/index.css` and (if
 * needed) swap the Google Fonts import + the `body` / `h1-h6` font
 * declarations.
 *
 * All colors are HSL (no `hsl()` wrapper) so Tailwind tokens resolve
 * correctly. Keep the variable names — only change the values.
 *
 * --------------------------------------------------------------------
 *  PALETTE PRESETS  (drop into src/index.css :root { ... })
 * --------------------------------------------------------------------
 *
 *  ▸ Monochrome (default)
 *      --background: 0 0% 100%;   --foreground: 0 0% 6%;
 *      --muted: 0 0% 96%;         --muted-foreground: 0 0% 35%;
 *      --primary: 0 0% 6%;        --primary-foreground: 0 0% 100%;
 *      --accent:  0 0% 6%;        --border: 0 0% 88%;
 *
 *  ▸ Editorial Cream
 *      --background: 36 38% 96%;  --foreground: 20 14% 10%;
 *      --muted: 36 24% 92%;       --muted-foreground: 20 8% 38%;
 *      --primary: 14 78% 42%;     --primary-foreground: 36 38% 98%;
 *      --accent:  14 78% 42%;     --border: 30 14% 84%;
 *
 *  ▸ Midnight Blue
 *      --background: 222 30% 8%;  --foreground: 210 20% 96%;
 *      --muted: 222 22% 14%;      --muted-foreground: 215 14% 65%;
 *      --primary: 199 89% 60%;    --primary-foreground: 222 30% 8%;
 *      --accent:  199 89% 60%;    --border: 222 18% 20%;
 *
 *  ▸ Forest Studio
 *      --background: 60 20% 98%;  --foreground: 150 18% 10%;
 *      --muted: 80 16% 92%;       --muted-foreground: 150 10% 32%;
 *      --primary: 152 48% 22%;    --primary-foreground: 60 20% 98%;
 *      --accent:  42 84% 52%;     --border: 90 14% 84%;
 *
 *  ▸ Brutalist Yellow
 *      --background: 54 100% 62%; --foreground: 0 0% 4%;
 *      --muted: 54 80% 56%;       --muted-foreground: 0 0% 18%;
 *      --primary: 0 0% 4%;        --primary-foreground: 54 100% 62%;
 *      --accent:  0 0% 4%;        --border: 0 0% 4%;
 *
 *  ▸ Soft Pastel
 *      --background: 320 60% 98%; --foreground: 280 30% 14%;
 *      --muted: 300 40% 94%;      --muted-foreground: 280 14% 40%;
 *      --primary: 280 64% 56%;    --primary-foreground: 320 60% 98%;
 *      --accent:  340 80% 64%;    --border: 300 30% 88%;
 *
 * --------------------------------------------------------------------
 *  FONT PAIRING PRESETS  (Google Fonts URL + CSS rules)
 * --------------------------------------------------------------------
 *
 *  ▸ Bebas Neue + Inter   (default — bold display, clean body)
 *      family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800
 *      h1-h6: 'Bebas Neue';   body: 'Inter';
 *
 *  ▸ Instrument Serif + DM Sans   (editorial, premium)
 *      family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300..700
 *      h1-h6: 'Instrument Serif';   body: 'DM Sans';
 *
 *  ▸ Space Grotesk + Space Mono   (technical, modern SaaS)
 *      family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700
 *      h1-h6: 'Space Grotesk';   body: 'Space Mono';
 *
 *  ▸ Playfair Display + Lora      (luxury, hospitality)
 *      family=Playfair+Display:wght@400;600;800&family=Lora:wght@400;500;600
 *      h1-h6: 'Playfair Display';  body: 'Lora';
 *
 *  ▸ Archivo Black + Archivo      (sport, agency, bold)
 *      family=Archivo+Black&family=Archivo:wght@300;400;500;600;700
 *      h1-h6: 'Archivo Black';   body: 'Archivo';
 *
 *  ▸ Fraunces + Manrope           (warm, friendly, editorial-modern)
 *      family=Fraunces:opsz,wght@9..144,400;9..144,700&family=Manrope:wght@300;400;500;600;700
 *      h1-h6: 'Fraunces';   body: 'Manrope';
 *
 * --------------------------------------------------------------------
 *  RADIUS / DENSITY  (in src/index.css :root)
 * --------------------------------------------------------------------
 *
 *  ▸ Sharp / brutalist:   --radius: 0;
 *  ▸ Subtle (default):    --radius: 0.375rem;
 *  ▸ Soft / friendly:     --radius: 0.75rem;
 *  ▸ Pill / playful:      --radius: 1.25rem;
 */
export {};
