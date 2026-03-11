# PRD — Cosmic Portfolio Web App

## 1. Product summary

Build a portfolio web app with a cinematic hero section inspired by a dreamy night sky. The hero shows a stylized seated figure seen from behind, representing the creator, looking up at interactive stars. The sky itself acts as portfolio navigation.

The experience should feel magical, polished, and modern while remaining simple to understand and fast to use.

## 2. Core concept

* The seated figure is a symbolic representation of the creator.
* The figure is not photorealistic.
* The figure is viewed from the back only.
* Hair should read as black and curly.
* The pose should feel calm, curious, and reflective.
* The hero contains 3 featured project stars and several smaller supporting stars.
* Hovering or tapping a featured star reveals project info.
* Clicking a star opens the related project page.

## 3. Goals

### Primary goals

* Present the creator as thoughtful, imaginative, and technically strong.
* Make the top 3 projects instantly accessible from the hero.
* Create a visually distinctive portfolio identity.
* Keep the site readable and recruiter-friendly.
* Support future animation using CSS and/or Three.js.

### Secondary goals

* Support GitHub-driven project content.
* Support live demo links and repository links.
* Create a reusable visual system for additional projects.

## 4. Non-goals

* Do not build a complex game.
* Do not require heavy scene interaction to navigate the site.
* Do not make the hero visually noisy.
* Do not rely on a modal-only experience.
* Do not use copyrighted character IP.

## 5. Target users

* Recruiters
* Hiring managers
* Potential clients
* Technical peers

## 6. Information architecture

## Home page

1. Hero section with seated figure and project stars
2. Brief intro/about strip
3. Projects section with full project list
4. Skills / stack section
5. Contact / footer

## Project detail pages

* `/projects/[slug]`
* Dedicated page per project
* Includes hero image, summary, screenshots, stack, repo, live link, and related projects

## 7. UX strategy

### Hero behavior

* Full-screen hero section
* Dark dreamy sky with subtle nebula texture
* Stylized seated figure at lower center-left or lower center
* 3 featured project stars placed in a balanced triangular composition
* Smaller stars around the sky for supporting projects and ambient depth
* Hover on desktop shows logo, title, and one-line description
* Tap on mobile reveals a small info card or bottom sheet
* Click navigates to project detail page

### Content behavior

* The hero is discovery-first and emotionally engaging
* The full projects section below the fold is utility-first and scannable
* Project detail pages provide deeper case studies

## 8. Visual direction

### Tone

* Dreamy
* Elegant
* Cosmic
* Warm curiosity
* Premium, not childish

### Style

* Stylized painterly / illustrated
* Not photorealistic
* Back view only for the seated figure
* Soft glows and atmospheric depth
* Minimal UI chrome over the hero

### Avoid

* Cartoonish excess
* Busy planets everywhere
* Overly saturated neon
* Hard sci-fi UI
* Cluttered text in the hero

## 9. Hero composition spec

### Canvas / layout intent

Use a landscape hero optimized for desktop first, with graceful mobile cropping.

Suggested working layout reference:

* Width: 1440–1600px
* Height: 900–1000px equivalent
* Safe center area reserved for main star composition
* Bottom area reserved for figure and minimal intro text

### Figure placement

* Position: lower center-left or lower center
* Orientation: seated, facing upward into sky
* Face: not visible; back/three-quarter back only
* Hair: black curly hair silhouette, softly lit by ambient sky glow
* Body language: wonder, calm focus, aspiration

### Featured star placement

Use 3 major stars.

#### Star A — primary featured project

* Position: upper center
* Visual weight: largest and brightest
* Purpose: flagship project
* Reserve surrounding negative space for hover card

#### Star B — secondary featured project

* Position: upper left quadrant
* Visual weight: medium-large
* Slightly lower or offset from Star A

#### Star C — secondary featured project

* Position: upper right quadrant
* Visual weight: medium-large
* Balanced against Star B

### Supporting stars

* 5–10 smaller stars
* Scatter near left edge, right edge, and mid sky
* Use for secondary projects or atmospheric support
* They should not compete with the 3 featured stars

### Suggested relative composition map

```text
                [Star B]      [Star A]      [Star C]

         . small star       . small star       . small star

                . support             . support


                      seated figure looking upward
```

## 10. Interaction design

### Desktop

* Hover featured star:

  * increase glow
  * show tooltip / floating card
  * reveal logo + title + one-line summary
* Click featured star:

  * navigate to `/projects/[slug]`
* Hover supporting star:

  * optional tiny label only

### Mobile

* No hover assumptions
* Tap featured star:

  * show compact card or bottom sheet
* Second tap or CTA:

  * navigate to project page

### Suggested microinteractions

* slow pulsing star glow
* subtle twinkle animation
* slight parallax in background stars
* faint shimmer trail on hover
* extremely subtle camera drift only if using Three.js

## 11. Navigation and page flow

### Hero CTAs

* Explore all projects
* LinkedIn
* GitHub
* Resume / CV

### Hero star actions

* Direct entry points into top 3 project pages

### Below-the-fold section

* Standard project cards/grid for full browsing
* Filter by category, stack, or status

## 12. Data model

```ts
export type Creator = {
  name: string
  role: string
  shortBio: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl?: string
}

export type Project = {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  logo: string
  repoUrl: string
  liveUrl?: string
  featured: boolean
  featuredOrder?: number
  starType: 'primary' | 'secondary' | 'support'
  category?: string
  tech: string[]
  screenshots?: string[]
}
```

## 13. Content strategy

### Featured projects

Exactly 3 featured projects for the hero.

Each featured project must have:

* logo
* title
* one-line description
* project page
* repo link
* optional live link

### Supporting projects

* visible in hero as small stars optionally
* fully visible in projects section below

## 14. Technical direction

### Recommended stack

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* React Three Fiber for optional hero sky layer
* Drei helpers if needed

### Rendering approach

Use a hybrid approach:

* Base hero image / illustration layer as background foundation
* DOM-based interactive star hotspots layered above
* CSS animations for glow, pulse, and twinkle
* Optional Three.js enhancement for subtle ambient star motion, particles, or parallax

### Why hybrid

* Better performance
* Easier responsiveness
* Easier accessibility
* Faster implementation than a full 3D-only hero

## 15. Hero implementation guidance

### Layer model

1. Background gradient / nebula layer
2. Foundation hero artwork layer
3. Twinkling support stars layer
4. Interactive featured star hotspots layer
5. UI content layer (name, role, links, CTA)

### Hotspot model

Each featured star should be positioned using percentages so it stays responsive.

Example structure:

```ts
const featuredStars = [
  { id: 'star-a', projectSlug: 'subagents-ai', x: '50%', y: '20%' },
  { id: 'star-b', projectSlug: 'project-two', x: '28%', y: '26%' },
  { id: 'star-c', projectSlug: 'project-three', x: '72%', y: '28%' },
]
```

### Animation guidance

#### CSS-first

* pulse scale 0.98 → 1.04
* opacity shimmer 0.75 → 1
* glow blur changes subtly over time

#### Optional Three.js enhancement

* ambient star particle field
* depth-based parallax
* subtle mouse-reactive drift
* no aggressive camera orbit

## 16. Accessibility

* All star hotspots must be keyboard-focusable
* Tooltips must have accessible text equivalents
* Maintain readable contrast for all text
* Provide a reduced-motion mode
* Ensure clickable stars have sufficient target size

## 17. Responsive behavior

### Desktop

* Show all 3 featured stars in the sky
* Supporting stars visible around edges
* Floating hover cards near stars

### Tablet

* Keep 3 featured stars
* Reduce supporting star count
* Simplify tooltip layout

### Mobile

* Preserve the emotional composition
* Reduce decorative stars
* Make featured stars larger touch targets
* Use tap cards or bottom sheet instead of hover tooltips

## 18. Hero image generation brief

Create a wide illustrated hero foundation image with these requirements:

* dreamy cosmic night sky
* seated figure viewed from the back only
* black curly hair
* youthful silhouette, but not explicitly a child-like toy style
* calm, contemplative pose similar to the reference composition
* large glowing star at upper center
* 2 additional visible featured stars at upper left and upper right
* several smaller faint stars distributed around the sky
* enough negative space around the main 3 stars to allow UI overlays and hover cards
* no visible text in image
* no copyrighted characters
* no logo embedded in image
* premium painterly aesthetic
* not photorealistic

## 19. Acceptance criteria

### Hero

* A seated back-view figure is visible and aesthetically central to the theme
* 3 featured project stars are clearly identifiable and comfortably spaced
* The image supports hotspot overlays without visual conflict
* Hover/tap on stars reveals project metadata
* Clicking a featured star opens a project page

### Site structure

* Home page contains hero plus scannable projects section
* Each project has its own detail page
* GitHub and LinkedIn links are visible in hero or header

### Performance

* Hero feels smooth on modern devices
* Degrades gracefully on mobile
* Motion remains subtle and non-blocking

## 20. Nice-to-have enhancements

* Constellation lines briefly appear on hover
* Ambient sound toggle
* Shooting star effect on idle
* Category filter that highlights matching stars
* Page transitions that feel like moving through the sky

## 21. Build order

1. Create hero foundation artwork
2. Build hero layout with overlay layers
3. Add featured star hotspot positions
4. Add hover/tap cards
5. Create project detail pages
6. Build full projects section
7. Add CSS animation polish
8. Add optional Three.js ambient layer
9. Add accessibility and reduced-motion support
10. Optimize for mobile

## 22. Output expected from the AI builder

The AI builder should produce:

* a Next.js app structure
* responsive home page
* responsive project detail page template
* hero section with layered star hotspots
* reusable project data model
* CSS and motion primitives for star animations
* placeholder content structure for projects
