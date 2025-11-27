# Pradharshini 25 - Space-Themed Cultural Event Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from premium space-themed experiences like SpaceX, NASA's interactive sites, and cosmic design trends in modern web applications. The design emphasizes immersive storytelling through cosmic aesthetics while maintaining functionality and clarity.

## Core Design Principles
- **Cosmic Immersion**: Deep space atmosphere with layered depth
- **Premium Dynamism**: Subtle animations that enhance rather than distract
- **Clear Hierarchy**: Information clarity despite dark theme
- **Cultural Fusion**: Space theme meets traditional cultural event energy

---

## Typography System

**Primary Font**: "Orbitron" (Google Fonts) - futuristic, space-age aesthetic for headings
**Secondary Font**: "Inter" (Google Fonts) - clean readability for body text

### Type Scale
- **Hero Heading**: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- **Section Headings**: text-4xl md:text-5xl, font-bold
- **Subsection Headings**: text-2xl md:text-3xl, font-semibold
- **Body Large**: text-lg md:text-xl, leading-relaxed
- **Body Standard**: text-base, leading-relaxed
- **Small Text**: text-sm, for captions and metadata

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm (p-4, m-8, gap-12, etc.)

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for optimal readability

**Section Padding**: py-16 md:py-24 lg:py-32 for major sections

---

## Page Structure & Components

### Landing Page (Multi-Section Approach)

**1. Hero Section** (100vh)
- Full viewport immersive entry point
- Large hero heading: "PRADHARSHINI 25" with cosmic glow effect
- Subheading: Event tagline/dates
- Dual CTAs: "Explore Events" (primary) + "Register Now" (secondary) with blurred glass backgrounds
- Background: Deep space starfield with subtle parallax layers
- Floating particles/stars animation in background
- **Hero Image**: YES - Use a cosmic nebula/galaxy background image with overlay gradient for text readability

**2. Countdown Section** (auto-height)
- Prominent event countdown timer
- 4-column grid (Days | Hours | Minutes | Seconds) on desktop, 2-column on mobile
- Each unit in glowing container with space-themed styling
- Include event date prominently

**3. About Pradharshini** (auto-height)
- 2-column layout (desktop): Left side - compelling narrative text, Right side - visual element (galaxy swirl or event logo with glow)
- Single column on mobile
- Include: Event history, mission, what makes it special, cultural significance
- Statistics bar: 3-4 column grid showing impressive numbers (Years running, Expected participants, Events, Prize pool)

**4. Featured Events Showcase** (auto-height)
- Grid of 6-8 event cards in 3-column layout (desktop), 2-column (tablet), 1-column (mobile)
- Each card: Event icon/image, category badge, event name, brief description, "Learn More" link
- Hover effect: subtle lift and glow
- Categories: Music, Dance, Drama, Art, Technical, Literary, etc.

**5. Event Highlights Timeline** (auto-height)
- Vertical timeline showing major event days/phases
- Alternating left-right layout for timeline items
- Each item: Date badge, event cluster description, visual icon
- Connecting line with glowing nodes

**6. Why Attend** (auto-height)
- 4-column grid of benefits/features
- Each card: Icon, heading, description
- Examples: "Network with 5000+ students", "Win prizes worth X", "Cultural immersion", "Celebrity performances"

**7. Past Edition Gallery** (auto-height)
- Masonry grid or carousel of previous event photos
- 3-4 columns on desktop
- Quick glimpse into the event's legacy and energy

**8. Contact & Registration CTA** (auto-height)
- 2-column split: Left - Contact form, Right - Event details (venue, dates, contact info, social links)
- Form fields: Name, Email, Phone, College, Message
- Prominent "Submit" button
- Map integration or location details
- Social media icon links (Instagram, Twitter, Facebook)

**9. Footer**
- 3-column layout: About/Links | Quick Links (Events, Register, Contact) | Social & Newsletter
- Newsletter signup field
- Copyright and organizer credits
- Floating back-to-top button

### About Us Page
- Hero banner with page title
- Detailed event history and evolution (timeline format)
- Organizing committee section with profiles (grid of cards)
- College information and cultural significance
- Photo gallery from past editions

### Events Page
- Filterable event grid by category
- Each event gets expanded card: Full description, schedule, rules, prizes, registration button
- Category navigation (Music, Dance, Drama, Technical, Art, Literary)
- Schedule view option (day-wise breakdown)

### Contact Us Page
- Large contact form as primary focus
- Location details with map integration
- Multiple contact methods (Email, Phone, Social)
- FAQ accordion section
- Office hours and response time expectations

---

## Component Library

### Navigation
- Sticky header with glass-morphism effect (blurred background)
- Logo left, nav links center/right
- Mobile: Hamburger menu with full-screen overlay
- Active state: subtle glow under current page

### Cards
- Semi-transparent dark containers with subtle border glow
- Rounded corners (rounded-xl)
- Hover: slight elevation and glow intensification
- Padding: p-6 md:p-8

### Buttons
**Primary**: Gradient background (cosmic purple to blue), white text, rounded-full, px-8 py-3
**Secondary**: Transparent with glowing border, white text
**On Images**: Blurred glass background (backdrop-blur-md, bg-white/20)

### Forms
- Input fields: Dark background with glowing border on focus
- Labels: Subtle text above fields
- Submit button: Primary button style
- Validation states with glow color changes

### Animations (Minimal & Strategic)
- **Hero only**: Floating particles, subtle parallax on scroll
- **Cards**: Gentle hover lift and glow
- **Page transitions**: Smooth fade-ins for sections on scroll-into-view
- **Avoid**: Excessive movement, spinning elements, distracting effects

---

## Images

**Hero Image**: Large cosmic nebula/galaxy background (deep purples, blues, hints of pink). Should be high-resolution, covering full viewport. Apply dark gradient overlay for text contrast.

**Section Backgrounds**: Subtle star-field patterns, constellation line art as decorative elements

**Event Cards**: Space-themed icons or photography relevant to each cultural event category

**Gallery**: Photos from previous Pradharshini events showing participants, performances, crowds

**About Section**: Event logo with cosmic glow treatment, organizational graphics

---

## Icons
**Library**: Font Awesome (via CDN) for consistent iconography
- Use solid style for primary icons
- Light/regular for secondary elements
- Examples needed: Calendar, Location, Email, Phone, Star, Trophy, Users, Music, Drama masks

---

## Accessibility
- Maintain WCAG AA contrast ratios despite dark theme (light text on dark backgrounds)
- Form labels properly associated
- Keyboard navigation support
- Focus states clearly visible with glow effects
- Alt text for all images

This premium space-themed design creates an immersive, memorable experience that matches the grandeur of Pradharshini 25 while maintaining usability and clear information architecture.