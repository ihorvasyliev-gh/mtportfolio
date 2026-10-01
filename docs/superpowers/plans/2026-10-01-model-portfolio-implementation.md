# Mariia Troian (@rebel_in_cork) Model Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, responsive, minimalist luxury fashion model portfolio website for Mariia Troian (@rebel_in_cork) with React, Vite, and Tailwind CSS, featuring interactive lookbooks, fullscreen lightbox, comp card with metric/imperial toggle, casting digitals, and booking channels, running live on localhost.

**Architecture:** A single-page luxury editorial application structured into modular React components driven by a centralized data layer (`src/data/portfolioData.js`). The UI features sticky glassmorphic navigation, magazine cover Hero, filterable masonry gallery, keyboard-navigable fullscreen Lightbox, agency-standard Comp Card with real-time measurement unit conversion, raw casting digitals, press ticker, booking modal, and direct contact options including Instagram `@rebel_in_cork`.

**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React, Node.js v24 (using `npm.cmd` / `npx.cmd` on Windows).

**Spec:** `docs/superpowers/specs/2026-10-01-model-portfolio-design.md`

## Global Constraints

- Platform: Windows PowerShell (always invoke `npm.cmd` / `npx.cmd` to respect PowerShell execution policy).
- Language: English (international standard for fashion model scouting and bookings).
- Brand / Instagram handle: `@rebel_in_cork` with link `https://instagram.com/rebel_in_cork`.
- Base location: Cork, Ireland (available worldwide).
- Data decoupling: 100% of text content, photos, measurements, and links must reside in `src/data/portfolioData.js` so Mariia can easily update her profile later.
- Curated imagery: High-fashion, high-resolution editorial photography from reliable Unsplash CDNs with appropriate aspect ratios and fashion styling.

---

### Task 1: Project Scaffolding & Tailwind CSS Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/index.css`
- Create: `src/main.jsx`

**Interfaces:**
- Consumes: Node.js & npm runtime.
- Produces: Functional Vite + React + Tailwind CSS environment ready for component rendering.

- [ ] **Step 1: Initialize package.json and install dependencies**

Run:
```powershell
npm.cmd init -y
npm.cmd install react react-dom lucide-react
npm.cmd install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

- [ ] **Step 2: Create vite.config.js and index.html**

Write `vite.config.js` configured with `@vitejs/plugin-react` and port 5173.
Write `index.html` with title "Mariia Troian | Fashion Model · @rebel_in_cork", meta description, and Google Fonts preconnect (`Cormorant Garamond`, `Playfair Display`, `Plus Jakarta Sans`).

- [ ] **Step 3: Configure Tailwind and PostCSS**

Create `postcss.config.js` with `tailwindcss` and `autoprefixer`.
Create `tailwind.config.js` with custom color palette:
- `noir`: `{ 950: '#080809', 900: '#0e0e11', 800: '#16161a', 700: '#222228' }`
- `ivory`: `{ 50: '#fdfdfc', 100: '#f8f8f5', 200: '#edece6' }`
- `champagne`: `{ 300: '#f3e8d2', 400: '#e5d1ab', 500: '#c5b396' }`
- `gold`: `{ 400: '#d4af37', 500: '#c29b27' }`
And font families:
- `serif`: `['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif']`
- `sans`: `['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif']`

- [ ] **Step 4: Create src/index.css and src/main.jsx**

Write `src/index.css` with `@tailwind base; @tailwind components; @tailwind utilities;`, smooth scrolling (`scroll-behavior: smooth`), custom dark scrollbar, and editorial typography helper classes.
Write `src/main.jsx` mounting `App` to `#root`.

- [ ] **Step 5: Verify build passes and commit**

Run: `npm.cmd run build` (or `npx.cmd vite build`)
Expected: PASS with output in `dist/`.
Commit:
```powershell
git add package.json vite.config.js index.html tailwind.config.js postcss.config.js src/index.css src/main.jsx
git commit -m "chore: scaffold vite react tailwind project with high-fashion design tokens"
```

---

### Task 2: Central Portfolio Data Layer

**Files:**
- Create: `src/data/portfolioData.js`
- Test: `scripts/test-data.mjs`

**Interfaces:**
- Consumes: None (pure data model).
- Produces: `portfolioData` exported object consumed by all UI components.

- [ ] **Step 1: Write data integrity test script**

Create `scripts/test-data.mjs` validating that `portfolioData` exports required fields:
- `personal`: name, title, handle, instagram, location, bio, heroImage
- `measurements`: heightCm, heightIn, bustCm, bustIn, waistCm, waistIn, hipsCm, hipsIn, shoeEu, shoeUs, eyes, hair, dressEu, dressUs
- `categories`: array with id and label ('all', 'editorial', 'fashion', 'beauty', 'commercial', 'runway')
- `shoots`: array of 12+ items with id, title, category, image, photographer, year, publication
- `digitals`: array of 4 items (Front, Left Profile, Right Profile, Full Length) with clean natural casting photos
- `press`: array of publication brand names and quotes
- `agencies`: direct booking and representation details

- [ ] **Step 2: Run test to verify it fails before data file exists**

Run: `node scripts/test-data.mjs`
Expected: FAIL with module not found or assertion failure.

- [ ] **Step 3: Implement src/data/portfolioData.js**

Populate `src/data/portfolioData.js` with rich, high-resolution editorial imagery, complete specs for Mariia Troian, Instagram handle `@rebel_in_cork`, and Cork / Worldwide locations.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test-data.mjs`
Expected: PASS with "Portfolio data validation successful".

- [ ] **Step 5: Commit**

```powershell
git add src/data/portfolioData.js scripts/test-data.mjs
git commit -m "feat: implement centralized portfolio data layer with curated editorial imagery"
```

---

### Task 3: Navbar & Hero Section

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: `portfolioData.personal`, `portfolioData.measurements`, `onOpenBooking` callback.
- Produces: Top navigation header and magazine-cover Hero viewport.

- [ ] **Step 1: Implement Navbar.jsx**
- Sticky blurred backdrop (`backdrop-blur-md bg-noir-950/80 border-b border-noir-800/60`).
- Logo: "MARIIA TROIAN" with wide tracking and subtitle "REBEL IN CORK".
- Nav anchors: "Lookbooks", "Comp Card", "Digitals", "Press", "Contact".
- Action CTA: "Book Mariia" button opening the booking modal.
- Mobile hamburger menu drawer with smooth toggle.

- [ ] **Step 2: Implement Hero.jsx**
- Full viewport height (`min-h-screen`) editorial magazine layout.
- Large atmospheric background image with dark gradient overlay.
- Headline typography: "MARIIA TROIAN" in serif with gold/champagne accent.
- Tagline: "Editorial & High-Fashion Model · Cork, Ireland · Worldwide".
- Quick specs badge: Height 178 cm (5'10") · Eyes: Green · Hair: Chestnut.
- Two CTA buttons: "Explore Lookbooks" (scrolls to `#gallery`) and "View Comp Card" (scrolls to `#comp-card`).

- [ ] **Step 3: Verify and commit**

Run: `npx.cmd vite build`
Commit:
```powershell
git add src/components/Navbar.jsx src/components/Hero.jsx
git commit -m "feat: implement luxury Navbar and Hero components"
```

---

### Task 4: Interactive Gallery & Fullscreen Lightbox

**Files:**
- Create: `src/components/Gallery.jsx`
- Create: `src/components/Lightbox.jsx`

**Interfaces:**
- Consumes: `portfolioData.categories`, `portfolioData.shoots`.
- Produces: Interactive filterable editorial gallery and modal lightbox viewer with keyboard navigation.

- [ ] **Step 1: Implement Lightbox.jsx**
- Fullscreen fixed overlay (`z-50 bg-black/95 backdrop-blur-xl`).
- High-res image display with zoom/fit styling.
- Previous / Next navigation buttons with feather icons.
- Keyboard listeners: `ArrowLeft` (prev), `ArrowRight` (next), `Escape` (close).
- Top bar with index counter (e.g. `04 / 16`) and close button.
- Bottom metadata overlay: Shoot title, category tag, photographer credit, publication.

- [ ] **Step 2: Implement Gallery.jsx**
- Category filter buttons (`All`, `Editorial`, `High Fashion`, `Beauty`, `Commercial`, `Runway`) with active state indicator.
- Responsive masonry / editorial grid layout (1 col mobile, 2 col tablet, 3-4 col desktop).
- Image cards with smooth hover zoom, subtle dark overlay, and bottom caption revealing title and photographer.
- Click handler triggers `onOpenLightbox(shootIndex)`.

- [ ] **Step 3: Verify and commit**

Run: `npx.cmd vite build`
Commit:
```powershell
git add src/components/Gallery.jsx src/components/Lightbox.jsx
git commit -m "feat: implement filterable Gallery and fullscreen Lightbox viewer"
```

---

### Task 5: Comp Card (Model Composite) with Metric/Imperial Toggle

**Files:**
- Create: `src/components/CompCard.jsx`

**Interfaces:**
- Consumes: `portfolioData.personal`, `portfolioData.measurements`, `portfolioData.compCardImages`.
- Produces: Professional agency comp card with interactive unit switcher and print-ready view.

- [ ] **Step 1: Implement CompCard.jsx**
- Unit toggle: `Metric (cm)` ⇄ `Imperial (in)` state.
- Composite layout:
  - Left/Hero: Primary full-length headshot.
  - Right: 3 editorial supporting shots + clean typography measurements grid.
- Measurements grid showing: Height, Bust, Waist, Hips, Dress, Shoes, Eyes, Hair.
- Direct links: Instagram `@rebel_in_cork`, mother agency, location.
- "Save / Print Comp Card" button triggering window print mode with print CSS `@media print` hide non-compcard elements.

- [ ] **Step 2: Verify and commit**

Run: `npx.cmd vite build`
Commit:
```powershell
git add src/components/CompCard.jsx
git commit -m "feat: implement agency Comp Card with metric/imperial toggle and print support"
```

---

### Task 6: Casting Digitals (Snaps) & Press Ticker

**Files:**
- Create: `src/components/Digitals.jsx`
- Create: `src/components/Press.jsx`

**Interfaces:**
- Consumes: `portfolioData.digitals`, `portfolioData.press`.
- Produces: Agency polaroid snaps section and luxury press ticker.

- [ ] **Step 1: Implement Digitals.jsx**
- Grid of 4 clean casting shots: Front, Profile Left, Profile Right, Full Length.
- Minimalist agency polaroid aesthetic with natural skin tones and clean studio backdrop.
- Industry scouting badge: *"Official Agency Digitals · Natural Light · Unretouched · Current Season"*.

- [ ] **Step 2: Implement Press.jsx**
- Editorial publications and runway credits ticker: *VOGUE*, *HARPER'S BAZAAR*, *ELLE*, *L'OFFICIEL*, *DUBLIN FASHION WEEK*, *MARIE CLAIRE*.
- Quotes / accolades cards with luxury serif typography.

- [ ] **Step 3: Verify and commit**

Run: `npx.cmd vite build`
Commit:
```powershell
git add src/components/Digitals.jsx src/components/Press.jsx
git commit -m "feat: implement Digitals (snaps) and Press ticker components"
```

---

### Task 7: Booking Modal, Contact Section & Footer

**Files:**
- Create: `src/components/BookingModal.jsx`
- Create: `src/components/Contact.jsx`
- Create: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: `isOpen`, `onClose` props for BookingModal, `portfolioData.contact`, `portfolioData.personal`.
- Produces: Interactive booking inquiry dialog, contact section, and footer.

- [ ] **Step 1: Implement BookingModal.jsx**
- Modal backdrop with smooth open/close.
- Form fields: Name, Company/Agency, Email, Shoot Type (Editorial, Commercial, Campaign, Runway, Fitting), Date, Location, Budget/Day Rate, Message.
- Interactive submission simulation: validates required fields, shows animated "Inquiry Received" success state, auto-closes or resets.

- [ ] **Step 2: Implement Contact.jsx**
- Big editorial headline: *"Let's Create Something Iconic"*.
- Direct contact cards:
  - Instagram: `@rebel_in_cork` (direct link `https://instagram.com/rebel_in_cork`)
  - Direct WhatsApp button (opens WhatsApp chat)
  - Direct Email button (`mailto:` link)
  - Location details: *"Based in Cork, Ireland · Direct flights to London, Paris, Milan, Berlin"*.
- Secondary "Direct Booking Inquiry" button opening `BookingModal`.

- [ ] **Step 3: Implement Footer.jsx**
- Copyright: `© 2026 Mariia Troian. All Rights Reserved. Rebel in Cork.`
- Minimalist links, back to top smooth scroll button, disclaimer.

- [ ] **Step 4: Verify and commit**

Run: `npx.cmd vite build`
Commit:
```powershell
git add src/components/BookingModal.jsx src/components/Contact.jsx src/components/Footer.jsx
git commit -m "feat: implement BookingModal, Contact section, and Footer"
```

---

### Task 8: App Integration, Production Build & Localhost Dev Server Launch

**Files:**
- Modify: `src/App.jsx`
- Verify: Full site flow, responsiveness, links, and interactions
- Launch: Background Vite dev server on `http://localhost:5173`

**Interfaces:**
- Consumes: All components from Tasks 1-7.
- Produces: Fully integrated, running live web application accessible on localhost.

- [ ] **Step 1: Assemble src/App.jsx**
- Import and render Navbar, Hero, Gallery, Lightbox, CompCard, Digitals, Press, Contact, BookingModal, Footer.
- Wire up state: `isBookingOpen`, `lightboxIndex`, `isLightboxOpen`.

- [ ] **Step 2: Execute production build**

Run: `npx.cmd vite build`
Expected: PASS with 0 errors.

- [ ] **Step 3: Launch dev server on localhost**

Run: `npm.cmd run dev` (with `--host --port 5173` if configured or default).
Verify: Server responds on `http://localhost:5173` with HTTP 200.

- [ ] **Step 4: Final commit and demonstration summary**

Commit:
```powershell
git add src/App.jsx
git commit -m "feat: complete Mariia Troian model portfolio application"
```
