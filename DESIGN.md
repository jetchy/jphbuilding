# JPH Building — Design System & Specification (Design.md)

## 1. Brand Identity & Overview

- **Brand Name**: JPH Building Ltd
- **Tagline / Value Proposition**: "Your Local Cheltenham Builder — Complete Craftsmanship Under One Trusted Roof"
- **Domain / Vertical**: High-end residential & commercial building contractor, structural alterations, extensions, roofing, and bespoke joinery in Cheltenham & Gloucestershire.
- **Design Philosophy**: **Architectural Blueprint Hybrid** — Merging structural engineering precision (crisp blueprint grid background, technical indexing, monospaced metadata, sharp corners) with warm, premium residential trust and high-conversion customer clarity.

---

## 2. Color Palette & Tokens

### Primary & Accent Colors

- **Brand Blue (`primary`)**: `#156aa6`
  - _Usage_: Framing architectural lines, section accents, active borders, trade category dividers, iconography, and navigational active states.
- **Safety Construction Orange (`accent` / `cta`)**: `#EA580C` / `#F25100` (Hover: `#C2410C`)
  - _Usage_: Primary conversion buttons ("ENQUIRE NOW", "Send Free Enquiry", "FAST RESPONSE" badges), interactive arrow highlights.
- **Deep Navy Blueprint Base (`neutral-dark`)**: `#0A192F` / `#0B132B`
  - _Usage_: Master page footer, top utility bar background, high-contrast dark surfaces.

### Neutral & Background Tones

- **Canvas White**: `#FFFFFF`
  - _Usage_: Primary body background, card interior surfaces, form field backgrounds, navigation bar surface.
- **Technical Tint / Blueprint Wash**: `#F0F4F8` / `#EFF6FF`
  - _Usage_: Subtle blueprint grid background pattern, hero consultation form direct call banner (`#EFF6FF`), info alert card background.
- **Subtle Structural Border**: `#E2E8F0` / `rgba(21, 106, 166, 0.2)`
  - _Usage_: Form field boundaries (`#CBD5E1`), subtle card rules, header bottom divider.
- **Text Colors**:
  - **Headings**: `#0F172A` (Slate 900)
  - **Subheadings / Accents**: `#156aa6`
  - **Body Copy**: `#334155` (Slate 700) / `#475569` (Slate 600)
  - **Engineering Metadata & Technical Labels**: `#156aa6` / `#64748B` (Slate 500)

---

## 3. Typography Hierarchy

- **Primary Sans-Serif**: `Plus Jakarta Sans`, `Inter`, `system-ui`, `-apple-system`, `sans-serif`
  - Modern geometric sans used for all primary headlines, body text, and interactive elements.
- **Technical Monospace**: `JetBrains Mono`, `ui-monospace`, `Courier New`, `monospace`
  - Used for architectural markers, drawing reference numbers (`REF: JPH-REG-GL50`, `SCALE: 1:50 @ A1`, `FORM REF: JPH-T500`), division tags (`DIV-ROOF`, `DIV-TIMBER`, `DIV-FITOUT`, `DIV-CIVILS`), and numbered navigation indices (`01/`, `02/`, etc.).

### Type Scale

- **Display / Hero H1**: `text-4xl` to `text-5xl` (36px – 48px), `font-extrabold`, tracking tight (`tracking-tight`), `#0F172A`.
- **Hero Localized Subtitle**: `text-2xl` to `text-3xl`, `font-bold`, `#156aa6`.
- **Section Heading H2**: `text-2xl` to `text-3xl` (28px – 34px), `font-bold`, leading tight, centered or left-aligned depending on scope.
- **Card / Subsection Heading H3**: `text-lg` to `text-xl` (18px – 20px), `font-bold`, `#0F172A`.
- **Sub-labels / Overlines**: `text-xs` (11px – 12px), `font-bold`, uppercase, tracking widest (`tracking-wider` to `tracking-widest`), `#156aa6`.
- **Body Copy**: `text-sm` to `text-base` (14px – 16px), regular / medium, leading relaxed (`leading-relaxed`), `#334155`.
- **Metadata & Technical Annotations**: `text-[10px]` to `text-xs` (10px – 12px), monospace, uppercase, `#156aa6` or `#64748B`.

---

## 4. Geometry, Elevation & Corner Radius

- **Corner Radius**: **Strictly 0px (`rounded-none`)**
  - All containers, image wrappers, interactive buttons, form input fields, stat boxes, and cards maintain sharp, razor-clean architectural corners to reflect drafting sheets and structural timber/steel joints.
- **Borders & Line Weights**:
  - **Solid Blueprint Border**: `2px solid #156aa6` (Brand Blue). Applied consistently across:
    - Hero Carpentry/Roofing pill tag (`■ CARPENTRY • ROOFING • GENERAL BUILDING`)
    - Consultation Form sheet
    - Showcase Cards ("Gallery & Recent Work" and "Our Services")
    - Expertise Trade Cards (Roofing & Leadwork, Carpentry & Joinery, Kitchens & Bathrooms, Extensions & Driveways)
    - Testimonial Review Cards
  - **Header Logo**: Clean appearance **without** outer borders.
  - **Hero Guarantee Cards**: Clean white cards with subtle border `#E2E8F0` / `border-slate-200` to avoid visual clutter alongside the primary consultation form.
  - **Form Inputs**: `1px solid #CBD5E1` / `#E2E8F0`, focusing to `1px solid #156aa6` with minimal blueprint glow.
- **Shadows & Elevation**:
  - Flat to minimal architectural drop (`shadow-sm` on the main consultation form).
  - Avoid heavy floating blurred shadows; maintain drafting-paper flatness.

---

## 5. Responsive Behavior & Breakpoints

- **Top Utility Strip (`#0A192F`)**:
  - **Mobile Viewport (`< 768px`)**: Hidden (`hidden`), allowing the clean navigation bar with logo and primary contact/action buttons to sit directly at the top of the mobile screen.
  - **Tablet & Desktop Viewports (`≥ 768px`)**: Visible (`md:block`), displaying localized credentials (`Cheltenham & Throughout Gloucestershire`, `Established Local Builder • Over 30 Years Experience`), email (`info@jphbuilding.co.uk`), and direct line (`TEL: 07951 838362`).
- **Main Header & Navigation**:
  - **Mobile (`< 768px`)**: Clean white surface with the classic JPH logo on the left, an orange "ENQUIRE NOW" button (`#ea580c`), and a minimal blueprint hamburger menu button with sharp borders.
  - **Desktop (`≥ 768px`)**: Full technical indexed navigation (`01/ About`, `02/ Why JPH`, `03/ Services`, `04/ Gallery`, `05/ Testimonials`).
- **Hero Layout**:
  - **Desktop (`lg:grid-cols-12` or `lg:flex`)**: 60/40 split with copy, 3-up guarantees, and trust banner on the left, and technical consultation form sheet on the right.
  - **Mobile/Tablet**: Stacked vertically with comfortable spacing (`gap-8` to `gap-12`).
- **Showcase Cards Grid**: 2-column grid (`grid-cols-1 md:grid-cols-2`), full width of container.
- **Trade Expertise Grid**: 4-column grid on desktop (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`), adapting responsively.
- **Testimonials Grid**: 2-column grid (`grid-cols-1 md:grid-cols-2`).
- **Footer Layout**: Master registration CAD bar spanning full width on dark navy (`#0A192F`) with 3 responsive columns for Company Info, Quick Navigation, and Key Services, anchored by copyright and compliance bar.

---

## 6. Key UI Components & Patterns

### 1. Primary Action Buttons (Orange CTA)

- **Hero & Form CTA**:

```html
<button
  class="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3.5 px-6 rounded-none flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-colors duration-200"
>
  Send Free Enquiry
  <svg class="w-4 h-4" ...></svg>
</button>
```

- **Mobile Header Enquire Button**:

```html
<a
  href="#consultation"
  class="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-4 py-2 text-xs uppercase tracking-wider rounded-none"
>
  Enquire Now
</a>
```

### 2. Consultation Form Sheet

- **Style**: Technical CAD transmittal drawing box
- **Border**: `2px solid #156aa6`
- **Radius**: `rounded-none`
- **Header**: Monospace reference tag `FORM REF: JPH-T500` + orange badge `FAST RESPONSE` (`bg-[#ea580c]`)
- **Phone Direct Callout**: Light blue wash (`#EFF6FF`), sharp border, direct link to `07951 838362 (Jason Heseltine)`
- **Inputs**: Crisp `rounded-none`, `border-slate-300`, uppercase label overlines with asterisk for required fields
- **Footer Note**: Monospaced security note `SPEC: CAD-TRANSMITTAL` & `TRANSMISSION ENCRYPTED`

### 3. Blueprint Trade & Showcase Cards

- **Border**: `2px solid #156aa6`
- **Radius**: `rounded-none`
- **Trade Cards Header**: Blueprint icon box + technical monospace division code (`DIV-ROOF`, `DIV-TIMBER`, `DIV-FITOUT`, `DIV-CIVILS`)
- **Showcase Cards**: Full-width imagery with corner cropping/framing, top monospace highlight badge (`PORTFOLIO HIGHLIGHT`, `MASTER CARPENTRY`), and text link with directional arrow (`View Gallery & Case Studies →`).

### 4. Testimonial Endorsement Cards

- **Border**: `2px solid #156aa6`
- **Radius**: `rounded-none`
- **Header**: Monospace metadata `TESTIMONIAL RECORD` and verified ticket reference (`REF #VAL-01`, `REF #EVN-02`)
- **Quotation**: Italicized client testimonial praising punctuality, transparency, and building finish
- **Footer**: Client name and Cheltenham location label (`VALERIE DU MONCEAU / CHELTENHAM HOMEOWNER`)

---

## 7. Imagery & Media Guidelines

- **Photography Style**: High-resolution on-site imagery highlighting Cotswold stone masonry, modern glass & timber extensions, and authentic joinery craftsmanship.
- **Badges**: White semi-transparent monospace badges on top-left of photography (`PORTFOLIO HIGHLIGHT`, `MASTER CARPENTRY`).
- **Logos**: Original authentic JPH emblem displayed cleanly on white navigation surface without artificial frame boxes.

---

## 8. Reference Implementation (Google Stitch export)

The Google Stitch HTML export is the visual reference for the landing page. Where it differs from sections 1–7, the reference wins:

- **Single page**: navigation links point to section anchors on the landing page, not separate pages.
- **Hero H1**: 36px → 60px (`text-4xl` → `text-6xl`), `leading-none`.
- **Section H2**: 30px → 36px (`text-3xl` → `text-4xl`), `font-extrabold`.
- **Navigation**: set in monospace.
- **Orange accent**: also used for the 80×4px rule under centred section headings, the 8px marker in the hero tag, the 4px top border of the footer, uppercase arrow text links and phone icons.
- **Shadows**:
  - large shadow on the consultation form;
  - medium shadow on its submit button;
  - small shadow on the header, hero guarantee cards, photo badges and testimonial cards.
- **Technical corners**: blueprint cards (form, showcase, trade and testimonial cards) carry 8px drafting brackets on the top-left and bottom-right corners.
- **Hero ruler**: a faint drafting-ruler tick strip runs along the top edge of the hero.
- **Removed metadata**: the form reference tag, form footer note, trade division codes (`DIV-ROOF` …) and testimonial record references are not shown.
- **Footer logo**: sits on a white plate with a 2px blueprint border so it reads on navy.
- **Icons**: inline SVG components with square line caps (replacing Font Awesome).
