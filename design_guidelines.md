# LuxeJewels Jewelry Catalog - Design Guidelines

## Design Approach
**Reference-Based Luxury E-commerce**: Drawing inspiration from Tiffany & Co., Cartier, and modern luxury platforms like Net-a-Porter. This jewelry showcase demands premium aesthetics with emphasis on product presentation, visual sophistication, and trust-building elements.

## Typography System

**Primary Font**: Playfair Display (Google Fonts) - for headings and luxury branding
**Secondary Font**: Inter (Google Fonts) - for body text and UI elements

**Hierarchy**:
- Hero Headlines: Playfair Display, 4xl to 6xl, font-medium
- Section Titles: Playfair Display, 3xl to 4xl, font-normal
- Product Names: Inter, lg to xl, font-medium
- Body Text: Inter, base, font-normal, leading-relaxed
- Price Tags: Inter, xl to 2xl, font-semibold
- Labels/Badges: Inter, xs to sm, font-medium, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
**Container Strategy**: 
- Full-width sections with inner max-w-7xl
- Product grids: max-w-6xl
- Content sections: max-w-4xl for text-heavy areas

**Grid Patterns**:
- Product catalog: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Featured collections: grid-cols-1 lg:grid-cols-2
- Mobile: Always single column with generous padding

## Core Components

### Navigation Header
- Sticky top navigation with backdrop blur
- Logo (left), center navigation links, search + cart icons (right)
- Categories dropdown: Rings, Necklaces, Bracelets, Earrings, Collections
- Search bar expands on click with smooth transition
- Height: h-20, with shadow-sm on scroll

### Hero Section
- Full-width video background (1920x1080) showcasing jewelry in lifestyle context
- Centered overlay content with blurred background panel (backdrop-blur-md bg-white/20)
- Headline + subtext + primary CTA button
- Height: 85vh on desktop, 70vh on mobile
- Video: Subtle slow-motion jewelry showcase, muted autoplay

### Product Cards
- 3:4 aspect ratio image container with hover zoom effect
- White background with subtle shadow (shadow-md hover:shadow-xl)
- Badges: "Verified" (gold accent), "New" (subtle indicator) - positioned top-right
- Product name, price, rating stars below image
- Padding: p-4, rounded-lg borders
- Add to Cart button appears on hover (desktop only)

### 3D Model Viewer
- Canvas container with dark gradient background
- Orbital controls: rotate, zoom, pan enabled
- Control hints overlay: "Drag to rotate, scroll to zoom"
- Reset view button (top-right corner)
- Height: 500px to 600px, responsive
- Loading spinner with elegant animation

### Video Showcases
- 16:9 aspect ratio containers
- Featured collection videos with poster images
- Custom controls overlay (play/pause, mute)
- Rounded corners (rounded-xl)
- Section padding: py-16 to py-24

### Filter Sidebar
- Sticky positioning on scroll
- Category checkboxes with custom styled inputs
- Price range slider with dual handles
- Sort dropdown: Price, Newest, Popular
- Clear all filters link at bottom
- Width: w-64 on desktop, full-width drawer on mobile

### Product Detail Page
- Two-column layout: 3D viewer/gallery (left 60%), details (right 40%)
- Image gallery: Main 3D viewer + thumbnail strip below
- Product info: Name, price, rating, description, specifications
- Size/customization selector if applicable
- Add to Cart + Add to Wishlist buttons
- Trust badges: Authentic guarantee, return policy, warranty

### Featured Collections Section
- Large heading with decorative underline accent
- 2-column grid showcasing collection categories
- Each card: Background image, overlay text, "Explore" CTA
- Hover: Image slight zoom, overlay darkens
- Section: py-20 to py-32 spacing

### Footer
- Three-column layout: Company Info, Quick Links, Newsletter Signup
- Social media icons with hover lift effect
- Payment method icons (Visa, Mastercard, etc.)
- Background: Subtle gradient complementing site palette
- Padding: py-12 to py-16

## Images

### Required Images:

1. **Hero Video** (1920x1080): Cinematic slow-motion footage of jewelry being worn, close-up shots of diamonds reflecting light, elegant lifestyle scenes. Soft lighting, warm tones.

2. **Product Images** (800x1000, 3:4 ratio): Clean white background shots for catalog grid. Professional jewelry photography with proper lighting showing sparkle and detail. Minimum 12-16 unique pieces across categories.

3. **3D Models**: High-poly jewelry models (rings, necklaces, earrings) in GLB/GLTF format with PBR materials for realistic metal and gemstone rendering.

4. **Collection Video Backgrounds** (1920x1080): Two featured collection videos - one for diamond/gold pieces showing luxury context, one for timeless elegance showing classic designs. 10-15 seconds each, looped.

5. **Collection Card Backgrounds** (1200x800): Lifestyle imagery for "Premium Diamond Collection" and "Timeless Elegance" cards. Sophisticated styling with model wearing pieces.

### Large Hero Image: Yes - Video background with fallback poster image

## Visual Treatments

**Elevation**: Use subtle shadows (shadow-sm to shadow-xl) for depth hierarchy
**Borders**: Minimal use, prefer shadows. Where needed: border opacity 10-20%
**Rounded Corners**: Consistent use - rounded-lg for cards, rounded-xl for media
**Hover States**: Gentle scale transforms (scale-105), shadow elevation increases
**Transitions**: all duration-300 ease-in-out for smooth interactions
**Backdrop Effects**: Use backdrop-blur-md for overlays on images/videos

**Trust Elements**:
- Verified badges on products
- 5-star rating display with count
- Customer testimonials with photos (if included)
- Secure checkout badges in footer
- "Authenticity Guaranteed" messaging

**Spacing Rhythm**: Maintain generous whitespace - jewelry needs breathing room. Section padding py-16 to py-32. Card internal padding p-6 to p-8.