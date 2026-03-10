# Appfolio Roadmap

## Project Overview
- **Stack:** Vite + React + TypeScript + Tailwind CSS + Framer Motion
- **Type:** Static portfolio web app
- **Hero:** Cinematic night sky with seated figure + interactive star navigation

---

## Tasks

### Phase 1: Setup & Infrastructure
- [x] 1.1 Create Vite + React + TS project in `~/shared/projects/appfolio/`
- [x] 1.2 Configure Tailwind CSS
- [x] 1.3 Set up project structure (components, pages, data, assets)
- [x] 1.4 Initialize Git repo and connect to GitHub (angelstreet/appfolio)
- [x] 1.5 Add to Vercel (static deploy) → https://appfolio-omega.vercel.app

### Phase 2: Hero Section
- [x] 2.1 Generate/create hero foundation artwork (seated figure + night sky)
- [x] 2.2 Build hero layout with layered composition
- [x] 2.3 Position featured star hotspots (3 stars - primary secondary right)
-, secondary left, [x] 2.4 Add supporting stars layer
- [x] 2.5 Implement hover tooltips for featured stars (desktop)
- [x] 2.6 Implement tap cards for featured stars (mobile)
- [x] 2.7 Add CSS animations (pulse, glow, twinkle)
- [x] 2.8 Add CTA buttons (Explore, GitHub, LinkedIn, Resume)

### Phase 3: Content & Data
- [ ] 3.1 Define project data model (from PRD)
- [ ] 3.2 Create projects data file with placeholder content
- [ ] 3.3 Build "about" strip section
- [ ] 3.4 Build full projects grid section
- [ ] 3.5 Build skills/stack section
- [ ] 3.6 Build contact/footer

### Phase 4: Project Detail Pages
- [ ] 4.1 Create project detail page template (`/projects/:slug`)
- [ ] 4.2 Implement project page layout (hero, summary, screenshots, stack, links)
- [ ] 4.3 Add related projects section

### Phase 5: Polish & Accessibility
- [ ] 5.1 Keyboard navigation for star hotspots
- [ ] 5.2 Reduced motion support
- [ ] 5.3 Responsive design (desktop → tablet → mobile)
- [ ] 5.4 Performance optimization

### Phase 6: Optional Enhancements (Nice-to-have)
- [ ] 6.1 Constellation lines on hover
- [ ] 6.2 Shooting star idle effect
- [ ] 6.3 Category filter highlighting stars

---

## Progression Checklist

- [ ] All Phase 1 tasks complete
- [ ] All Phase 2 tasks complete
- [ ] All Phase 3 tasks complete
- [ ] All Phase 4 tasks complete
- [ ] All Phase 5 tasks complete
- [ ] Deployed to Vercel and working

---

## Dependencies
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "framer-motion": "^11.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

---

## Questions for Jo

1. **Hero image:** Do you have an image already, or should I generate one (Sora or external) based on the PRD brief?

2. **Featured projects:** Which 3 projects should be the stars?
   - Current candidates: PikaBoard, Konto, AfroMeet, SoulSprite, etc.
   - Or placeholders for now?

3. **Content:**
   - What's your name/role for the "Creator" data?
   - Short bio for the about strip?
   - LinkedIn, GitHub, Resume URLs?

4. **Colors:** Any specific palette preference, or stick to "dreamy cosmic" (dark blues, purples, gold accents)?

5. **Timeline:** Any deadline or milestone?
