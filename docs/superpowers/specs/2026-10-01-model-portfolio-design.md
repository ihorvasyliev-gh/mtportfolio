# Specification: Mariia Troian (@rebel_in_cork) — Model Portfolio

- **Date:** 2026-10-01
- **Status:** Approved
- **Target Role:** High-Fashion & Editorial Model
- **Subject:** Mariia Troian
- **Brand / Social:** Rebel in Cork (`@rebel_in_cork`)
- **Location:** Cork, Ireland · Available Worldwide (Dublin, London, Paris, Milan)

---

## 1. Vision & Aesthetic Goals

The goal of this project is to create a high-impact, minimalist luxury / high-fashion editorial portfolio website for fashion model **Mariia Troian** (known as **Rebel in Cork**). 

The site will serve two primary audiences:
1. **Model Scouts, Agencies & Casting Directors:** Fast access to measurements (Comp Card), clean polaroids / digitals (snaps), and direct booking channels.
2. **Fashion Photographers, Stylists, Brands & Magazines:** Immersive lookbooks, editorial spreads, runway/beauty showcases, and visual storytelling.

### Visual Language & Tone:
- **Style:** Minimalist Luxury / High-Fashion Editorial (Vogue, Celine, Saint Laurent aesthetic).
- **Color Palette:**
  - Backgrounds: Deep Noir (`#0b0b0c`), Warm Charcoal (`#141416`), Ivory/Alabaster accents (`#f8f8f6`).
  - Text & Accents: Crisp Milk White (`#fafafa`), Muted Sand/Champagne (`#d4af37` / `#c5b396`), Subtle Editorial Gray (`#8e8e93`).
- **Typography:**
  - Headlines: Editorial Serif (`Playfair Display` or `Cormorant Garamond`).
  - Body & Specs: Clean, modern grotesque / sans-serif (`Inter` or `Plus Jakarta Sans`) with generous letter-spacing (`tracking-widest`).

---

## 2. System Architecture & Tech Stack

- **Framework:** React 18+ with Vite (blazing fast dev server and optimized static production bundle).
- **Styling:** Tailwind CSS with custom configuration for editorial fonts, aspect ratios, and luxury color tokens.
- **Icons:** Lucide React (minimalist feather-style icons for navigation, controls, social links).
- **Data Layer:** Centralized `src/data/portfolioData.js` data file containing all profile data, measurements, gallery shoots, polaroids, press features, and contact info. This enables 100% decoupling between UI markup and content, allowing Mariia to swap photos and update measurements in 5 minutes.
- **Local Dev Server:** Vite preview / dev server serving on `http://localhost:5173`.

---

## 3. Component Hierarchy & User Flow

```
App
├── Navbar
│   ├── Logo ("MARIIA TROIAN") + Brand Subtitle ("@rebel_in_cork")
│   ├── Navigation links (Works, Comp Card, Digitals, Press, Contact)
│   └── "Book Mariia" action button
├── Hero
│   ├── Magazine cover layout with full-bleed atmospheric imagery
│   ├── Big editorial typography headline
│   ├── Quick specs summary pill (Height, Eyes, Hair)
│   └── CTAs: "Explore Lookbooks" & "View Comp Card"
├── Gallery (Selected Works)
│   ├── Category filter tabs: All | Editorial | High Fashion | Beauty | Commercial | Runway
│   ├── Dynamic responsive masonry / editorial grid
│   ├── Hover effects displaying shoot title, photographer credit, and season
│   └── Click-to-open Lightbox
├── Lightbox (Fullscreen Image Viewer)
│   ├── Fullscreen high-res preview
│   ├── Next / Previous navigation buttons
│   ├── Keyboard controls (ArrowLeft, ArrowRight, Escape)
│   ├── Slide index counter (e.g. 03 / 16)
│   └── Details badge (Title, Category, Photographer)
├── CompCard (Model Composite Card & Measurements)
│   ├── Classic agency composite layout (Hero headshot + 3 editorial sub-portraits)
│   ├── Interactive Unit Switcher: Metric (cm) ↔ Imperial (inches)
│   ├── Full measurements list: Height, Bust, Waist, Hips, Dress, Shoe, Hair, Eyes
│   └── Print / Download Comp Card action
├── Digitals (Polaroids / Raw Casting Snaps)
│   ├── Natural light casting photos (Front, Profile Left, Profile Right, Full Length)
│   └── Agency scouting note ("Clean digitals, no retouching, natural light")
├── Experience & Press (Editorial Features)
│   ├── Infinite or clean monochrome press badges (Vogue, Harper's Bazaar, Elle, Fashion Week)
│   └── Notable campaign credits
├── Booking & Contact Section
│   ├── Interactive Booking Inquiry Form (Name, Agency/Client, Project Type, Date, Location, Message)
│   ├── Direct fast-action links:
│   │   ├── Instagram: @rebel_in_cork
│   │   ├── Direct WhatsApp link
│   │   └── Direct Email link
│   └── Representation / Mother agency details
└── Footer
    ├── Copyright, location (Cork, Ireland · International availability)
    └── Social & quick navigation links
```

---

## 4. Curated Mock Imagery Strategy

Since Mariia has not provided her personal photography yet, the site will feature a curated selection of 16+ high-resolution, magazine-grade fashion editorial photos (licensed from Unsplash fashion editorial collections with direct, fast CDN URLs):
- High-fashion editorial outdoor and studio portraits
- Runway and avant-garde styling shots
- Beauty & close-up macro portraits
- Clean casting digitals / polaroids for the snaps section
- Clean placeholder credit structure (`Photographer: Studio Editorial`, `Client: Spring Lookbook`, etc.)

---

## 5. Success Criteria & Verification

1. Fast startup: `npm run dev` boots without errors and serves on localhost.
2. Responsive layout: Looks stunning across mobile devices (375px+), tablets, and widescreen desktop monitors (1920px+).
3. Smooth interactivity:
   - Filter tabs switch gallery categories instantly without layout jank.
   - Lightbox opens cleanly, supports left/right arrows and ESC key.
   - Metric/Imperial toggle in Comp Card changes values dynamically.
   - Booking modal / form validates input and shows confirmation state.
   - Instagram link directs to `https://instagram.com/rebel_in_cork`.
