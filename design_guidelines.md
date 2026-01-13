# Design Guidelines: Premium Tool Reselling Platform

## Design Approach
**Reference-Based Approach** drawing from premium SaaS leaders: Stripe's refined elegance + Linear's bold typography + Vercel's sophisticated dark/light balance + Framer's animation excellence.

**Core Principle:** Every element must feel deliberately crafted and exclusive. Avoid anything that resembles template-based design.

---

## Typography System

**Primary Font:** Inter (via Google Fonts) - Clean, modern, excellent at all sizes
**Accent Font:** Space Grotesk - For headlines and impact moments

**Hierarchy:**
- Hero Headings: 4xl to 6xl, font-bold, Space Grotesk
- Section Headings: 3xl to 4xl, font-semibold
- Card/Tool Titles: xl to 2xl, font-semibold
- Body Text: base to lg, font-normal, leading-relaxed
- Captions/Meta: sm to base, reduced opacity

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-7xl

**Grid Strategy:**
- Tools Page: 3-column grid (lg:grid-cols-3 md:grid-cols-2)
- Blog Grid: 2-column for featured, 3-column for archives
- Dashboard: Asymmetric layouts with mixed column spans

---

## Page-Specific Layouts

### Home Page
**Hero Section (100vh):**
- Split layout: 60% content (left) / 40% visual (right)
- Large hero image: Abstract 3D rendered AI visualization or premium tech aesthetic
- Gradient overlay behind text for depth
- Primary CTA with backdrop-blur background
- Animated statistics ticker below hero

**Storytelling Sections (4-6 sections):**
1. **Value Proposition:** 2-column split with feature highlights
2. **Tool Showcase:** Horizontal scroll gallery of tool cards
3. **Differentiation:** Full-width statement with animated metrics
4. **Trust Indicators:** Staggered grid of proof points
5. **How It Works:** Timeline-style progression
6. **CTA Section:** Centered, dramatic with supporting visuals

### Tools Page
**Layout:** Premium card grid with hover-lift effects
- Each card: Tool icon/image, name, 2-line description, price badge, "View Details" button
- Filters sidebar (left, 20% width): Categories, price ranges, search
- Main grid (right, 80% width): 3-column responsive grid

**Tool Detail Modal:** Full-screen overlay with:
- Large product image (left 40%)
- Details scroll area (right 60%)
- Fixed bottom bar with price and "Add to Cart"

### Blog Page
**Featured Section:** Large card spanning 2 columns
**Grid Layout:** Cards with thumbnail images, category badges, read time
**Filter Tabs:** Horizontal pill-style category filters at top

### Dashboard (Owner/Admin)
**Sidebar Navigation (fixed left, 240px):**
- Logo at top
- Navigation items with icons
- Role badge at bottom

**Main Content Area:**
- Stats cards grid: 4-column on desktop
- Charts section: Mixed widths (8-col + 4-col layouts)
- Data tables: Full-width with alternating row backgrounds
- Action buttons: Floating at section headers

---

## Component Library

**Buttons:**
- Primary: Solid background, medium rounded, px-6 py-3, font-medium
- Secondary: Border style with transparent background
- Ghost: Text only with hover background
- All with smooth hover scale and opacity transitions

**Cards:**
- Border style with subtle shadow
- Rounded-lg to rounded-xl
- Hover: Lift effect (translate-y + shadow increase)
- Backdrop blur for glass-morphism effect where appropriate

**Forms:**
- Floating labels on focus
- Rounded-lg inputs with border focus states
- Grouped multi-field layouts with consistent spacing

**Data Tables:**
- Sticky header row
- Striped rows with hover highlights
- Sortable columns with arrow indicators
- Action menus in last column

**Modals/Overlays:**
- Full-screen backdrop with blur
- Centered content box with max-w-4xl
- Slide-up animation on entry

**Status Badges:**
- Pending: Amber background
- Accepted: Green background  
- Rejected: Red background
- Processing: Blue background
- Completed: Purple background
- Rounded-full, px-3 py-1, text-xs font-medium

---

## Animations & Interactions

**Scroll Animations (minimal, strategic):**
- Fade-up on section entry (hero elements only)
- Parallax effect on hero background (subtle, 0.5 speed)

**Hover States:**
- Cards: Scale 1.02 + shadow elevation
- Buttons: Opacity 0.9 or slight scale
- Links: Underline animation from left

**Page Transitions:** Fade effect, 200ms duration

**Loading States:** Skeleton screens with shimmer effect for data-heavy sections

---

## Images

**Hero Image:** Full-bleed abstract visualization of AI/technology - think geometric 3D shapes, neural network visualizations, or premium tech aesthetic. Gradient overlay from dark at bottom to transparent at top for text legibility.

**Tool Cards:** Each tool requires an icon or representative image (200x200px minimum). Use recognizable tool logos where available.

**Blog Thumbnails:** 16:9 ratio images for article headers (1200x675px optimal).

**About Page:** Team or platform visualization - can be illustration-based rather than photo.

**Dashboard:** Data visualization graphics, chart placeholders - no decorative images needed.

---

## Dark/Light Hybrid Theme Structure

**Light Mode Dominance:** Marketing pages (Home, Tools, Blog, About) primarily light
**Dark Mode Sections:** Dashboard, tool detail modals, pricing comparison tables
**Hybrid Approach:** Dark navigation bars on light pages, light content cards on dark backgrounds for contrast