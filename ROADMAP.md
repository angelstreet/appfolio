# Appfolio Roadmap

## Project Overview
- **Stack:** Vite + React + TypeScript + Tailwind CSS + Framer Motion
- **Type:** Static portfolio web app
- **Hero:** Cinematic night sky with seated figure + interactive star navigation
- **Deploy:** Vercel → https://appfolio-omega.vercel.app/appfolio/
- **Dev:** pm2 `appfolio-frontend` on port 3016

---

## Tasks

### Phase 1: Setup & Infrastructure
- [x] 1.1 Create Vite + React + TS project
- [x] 1.2 Configure Tailwind CSS with cosmic color palette
- [x] 1.3 Set up project structure (components, pages, data, assets)
- [x] 1.4 Initialize Git repo (angelstreet/appfolio)
- [x] 1.5 Deploy to Vercel
- [x] 1.6 Register in pm2 as `appfolio-frontend`

### Phase 2: Hero Section
- [x] 2.1 Hero foundation artwork (seated figure + night sky)
- [x] 2.2 Layered hero composition (bg → image → nebula → stars → hotspots → UI)
- [x] 2.3 3 featured star hotspots (VirtualPyTest center, Konto left, Edulia right)
- [x] 2.4 20 supporting stars with varied sizes/brightness
- [x] 2.5 Hover cards with real project logos (desktop)
- [x] 2.6 Tap bottom sheet cards (mobile)
- [x] 2.7 Star animations (radial glow, cross-flare spikes, pulsing)
- [x] 2.8 Mouse-driven parallax across all layers
- [x] 2.9 Nebula clouds for atmospheric depth
- [x] 2.10 Shooting star effects (2 concurrent)
- [x] 2.11 Radial mask on hero image for seamless edge blending
- [x] 2.12 Cinematic vignette overlay
- [x] 2.13 "Explore" scroll CTA centered with creator info
- [x] 2.14 Gradient bridge hero→about transition

### Phase 3: Content & Data
- [x] 3.1 Project data model with logo images
- [x] 3.2 13 projects with real logos from each repo
- [x] 3.3 About strip with scroll-triggered animation
- [x] 3.4 Projects grid (center-aligned cards, staggered entrance, gold hover glow)
- [x] 3.5 Color-coded tech stack pills
- [x] 3.6 Footer

### Phase 4: Project Detail Pages
- [x] 4.1 Project detail page (`/projects/:slug`)
- [x] 4.2 Cosmic atmosphere (starfield bg, nebula blobs, glassmorphism)
- [x] 4.3 Related projects section with logo images
- [x] 4.4 AnimatePresence page transitions (fade between routes)

### Phase 5: Polish & Accessibility
- [x] 5.1 Keyboard navigation for star hotspots
- [x] 5.2 Reduced motion support (useReducedMotion throughout)
- [x] 5.3 Responsive design (desktop → tablet → mobile)
- [ ] 5.4 Hero image optimization (WebP conversion, lazy loading)
- [ ] 5.5 Lighthouse performance audit & fixes

### Phase 6: Enhancements
- [x] 6.1 Shooting star idle effect
- [ ] 6.2 Constellation lines on hover between stars
- [ ] 6.3 Category filter highlighting matching stars
- [ ] 6.4 Separate star images from hero (remove baked-in stars, use individual PNGs)
- [ ] 6.5 Star click/hover animations (pulse, rotate) with individual star assets
- [ ] 6.6 Ambient sound toggle
- [ ] 6.7 Page transitions that feel like moving through the sky

---

## Remaining Work (Priority Order)

1. **Hero image rework** — Remove 3 baked-in stars from hero.png, create separate star PNGs for independent animation
2. **Hero image optimization** — Convert to WebP, add lazy loading (currently 2.4MB)
3. **Category filter** — Filter projects grid + highlight matching stars in hero
4. **Constellation lines** — Connect featured stars with faint lines on hover
5. **Individual star animations** — Pulse/rotate on click/hover with real star assets
6. **Lighthouse audit** — Performance, accessibility, SEO scores

---

## Projects (13 total)

### Featured Stars (Hero)
| Star | Project | Position |
|------|---------|----------|
| Primary (center) | VirtualPyTest | x:50 y:18 |
| Secondary (left) | Konto | x:25 y:30 |
| Secondary (right) | Edulia | x:75 y:32 |

### All Projects
VirtualPyTest, Konto, Edulia, ClawsGames, RankingOfClaws, Kozy, ClawBox, VoiceBox, HeartClaws, EzPlanner, PikaBoard, SoulSprite, AfroMeet
