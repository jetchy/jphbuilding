# AGENTS.md

## Project

Static website built with Astro. Follow Astro conventions for routing and component structure:

- Components: `src/components`, one folder per component holding its `.astro` file and CSS (`src/components/SiteHeader/SiteHeader.astro`)
- Pages: `src/pages`
- Layouts: `src/layouts`
- Images: `src/images`, rendered with Astro's `<Image />` from `astro:assets`
- Icons: `src/components/Icons`, one inline-SVG component per icon (`ArrowRightIcon.astro`), all wrapping the shared `Icon.astro`. Don't use icon fonts or CDN icon libraries. To add an icon, copy an existing icon file and swap the paths. Icons are `1em` square and use `currentColor`, so size and colour them through the parent's `font-size` and `color`.

### Single-page site

The site is currently one landing page (`src/pages/index.astro`) built from section components. Navigation links point to section anchors (`#about`, `#expertise`, `#testimonials`, `#consultation`), not to separate pages. When you add a section, give it the matching `id` and add it to `navItems` in `src/data/site.ts`.

- **Nav numbering:** the `01/`, `02/` … indexes in `navItems` must stay sequential. Renumber them whenever an item is added, removed or restored.
- **Parked content:** these are deliberately hidden, not forgotten. Don't restore them unless asked.
  - The "Why JPH" and "Gallery" nav and footer links are commented out in `src/data/site.ts` until those sections are written.
  - The `Craftsmanship` section (with `CraftsmanshipCards`) is built but not used on the page. Re-add `<Craftsmanship />` after `<Hero />` in `index.astro` to bring it back. Note that it carries `id="services"`.

### Component structure and naming

- **One component per section:** `Hero`, `Craftsmanship`, `Expertise`, `Testimonials`, `SiteHeader`, `UtilityBar`, `SiteFooter`.
- **Repeated or reusable parts are their own components**, named after what they are:

  | Component            | What it is                                                        |
  | -------------------- | ----------------------------------------------------------------- |
  | `Lozenges`           | Small guarantee badge in the hero (icon, mono title, short text)   |
  | `Alert`              | Blue-wash notice: `variant="banner"` (hero) or `"compact"` (form phone line) |
  | `ContactForm`        | Consultation enquiry form (anchor `#consultation`)                  |
  | `CraftsmanshipCards` | Photo card with badge, title, text and arrow link                   |
  | `ExpertiseCards`     | Trade card with icon box, title and text                            |
  | `TestimonialCards`   | Client quote card with name and location                            |
  | `SectionHeading`     | Overline, `h2`, orange rule and optional intro                      |

- Each card component renders a single card; the section component lays out the grid.
- Name new components after the part they represent, in PascalCase, and use a matching kebab-case BEM block for their CSS classes (`TestimonialCards` → `.testimonial-card`, `.testimonial-card__name`).
- Component CSS is imported in frontmatter, so it is global, not scoped. Always prefix class names with the component's block name to avoid collisions.
- Pass icons into components through a named `icon` slot (`<ShieldCheckIcon slot="icon" />`).
- **Testimonials** live in `src/data/testimonials.ts`.
  - They are verbatim excerpts from the current live site (jphbuilding.co.uk/testimonials/). Never reword, "tidy up" or invent a testimonial or client name.
  - Mark any skipped text with "…".
  - The `Testimonials` section shows them as a CSS marquee. Only entries marked `featured` appear there (5 at most, around 27 words each); the rest are kept for a future testimonials page. The list is rendered three times and slides left by one copy, and hovering a card pauses it. With reduced motion, the duplicate copy is hidden and the row becomes a manual horizontal scroll instead.
- Shared utilities live in `src/styles/global.css`: `.container`, `.blueprint-grid` (grid-paper background), `.technical-corner` (drafting corner brackets on blueprint cards) and `.visually-hidden`.
- Write CSS mobile first: base styles target small screens, then add `min-width` media queries.

Put styles in a separate CSS file in the same directory as the page or component that uses it, and import it with its `$` alias (see Code style).

## Commands

- `npm install` – install dependencies
- `npm run dev` – local dev server
- `npm run build` – production build (output in `dist/`)
- `npm run lint` – ESLint
- `npm run format` – Prettier
- `npm run check` – Astro check

## Code style

- ESLint and Prettier enforce style. Config lives in `eslint.config.js` and `.prettierrc`. Don't override or disable rules without asking.
- **Import with the `$` path aliases** defined in `tsconfig.json`. Don't use relative paths (`../`) to reach another top-level folder in `src/`:

  | Alias           | Resolves to         |
  | --------------- | ------------------- |
  | `$components/*` | `src/components/*`  |
  | `$data/*`       | `src/data/*`        |
  | `$images/*`     | `src/images/*`      |
  | `$layouts/*`    | `src/layouts/*`     |
  | `$pages/*`      | `src/pages/*`       |
  | `$styles/*`     | `src/styles/*`      |

  ```astro
  import Layout from "$layouts/Layout.astro";
  import SiteHeader from "$components/SiteHeader/SiteHeader.astro";
  import { navItems } from "$data/site";
  ```

  **No `./` or `../` imports at all, even for files in the same folder.** That includes sibling components (`$layouts/BaseLayout.astro`, `$components/Icons/Icon.astro`) and CSS. Import a component's own stylesheet through its alias too. The same goes for CSS `@import` inside stylesheets:

  ```astro
  import "$components/SiteHeader/SiteHeader.css";   // ✅
  import "./SiteHeader.css";                        // ❌
  ```

  ```css
  @import "$styles/tokens.css"; /* ✅ */
  ```

  If you add a new top-level folder under `src/`, add a matching `$` alias to `tsconfig.json` and to this table.
- Before finishing any task, run lint and format, and make sure `npm run build` passes.

## Design system

`DESIGN.md` is the source of truth for visual design. Read it before building or restyling any UI. Its Tailwind class names describe intent only; this project uses plain CSS, not Tailwind.

- **Use tokens, never raw values.** All colours, fonts, sizes, spacing, borders, shadows and motion come from the custom properties in `src/styles/tokens.css`. Don't hard-code hex values, px sizes or font names in component CSS. If a value you need is missing, add a token there (and update `DESIGN.md` if it changes the design) instead of inlining it.
- **Prefer semantic tokens** (`--color-text-body`, `--border-blueprint`) over primitives (`--slate-700`, `--blue-600`).
- **Every page uses `Layout`** (`$layouts/Layout.astro`), the site shell with the utility bar, header, footer and a `<main>` slot. It wraps `BaseLayout`, which loads `global.css`, the tokens and the fonts. Navigation, contact details and the services list live in `src/data/site.ts`. Edit them there, not in components.
- Wrap page content in `.container` for the standard max width and gutters.
- **Square corners only.** `--radius` is `0`. No `border-radius` anywhere: buttons, inputs, cards, images, badges, the hamburger button.
- **Borders:** blueprint cards (consultation form, showcase, trade, testimonial cards, hero trade tag) use `--border-blueprint` (2px brand blue). Hero guarantee cards use `--border-subtle`. Inputs use `--border-input`, switching to `--border-input-focus` plus `--focus-ring` on focus. The logo has no border or frame.
- **Near-flat elevation.** Shadows are limited to:
  - `--shadow-lg` on the contact form;
  - `--shadow-md` on its submit button;
  - `--shadow-sm` on the header, lozenges, photo badges and testimonial cards.

  Don't add shadows anywhere else, and don't add hover shadows.
- **Colour roles:**
  - Orange (`--color-accent`, with `--color-accent-hover` on hover) is for conversion CTAs, the "FAST RESPONSE" badge, arrow text links, the hero tag marker, the section-heading rule, the footer's top rule and phone icons. Don't use it anywhere else.
  - Brand blue (`--color-primary`) is for lines, accents, icons and active states.
  - Navy (`--color-surface-dark`) is for the top utility strip and the footer only.
- **Typography:**
  - `--font-sans` (Plus Jakarta Sans) for headings, body and controls.
  - `--font-mono` (JetBrains Mono) for technical text: navigation, utility bar, overlines, form labels, badges, lozenge titles, footer link lists and the legal strip.
  - Overlines are `--text-overline`, bold, uppercase, `--tracking-widest`, `--color-text-subheading`.
- **No pixel units.** Use `rem` for sizes, spacing, borders, shadows and offsets, so everything scales with the user's browser font-size setting. Prefer tokens, which are already in `rem`.
  - Media queries use `em` instead, which works more reliably across browsers.
  - The only allowed `px` is the `1px` in `.visually-hidden`, the standard screen-reader-only technique.
  - Showing pixel equivalents in comments is fine.
- **Breakpoints** (mobile-first `min-width` queries in `em`): `sm` `40em` (640px), `md` `48em` (768px), `lg` `64em` (1024px), `xl` `80em` (1280px). Use the same values in JS `matchMedia` and `<Image sizes>`. The utility strip is hidden below `md`. The indexed nav shows at `md` and up.
- **Grids:**
  - Showcase and testimonials: 1 column, then 2 from `md`.
  - Trade cards: 1, then 2 from `sm`, then 4 from `lg`.
  - Hero: stacked below `lg`, then a 60/40 split.
- **Accessibility:**
  - Keep visible focus states.
  - Respect `prefers-reduced-motion`.
  - Give photography meaningful `alt` text.
  - White on orange is about 3.6:1 contrast, so keep CTA text bold and uppercase as specified. Never put orange text on white for body-size copy.
- **Stay on-brand.** Don't add colours, fonts, gradients, rounded corners or decorative effects that `DESIGN.md` doesn't call for. Ask first.

## Git and deployment

- Work on a feature branch and open a PR. Never commit directly to `main`.
- Merging to `main` triggers a production deploy on Netlify. Each PR also gets a Netlify deploy preview.

## Documentation

Astro docs: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)