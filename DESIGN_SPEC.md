# Intraplex.ai Design System Analysis

## Color Palette

### Primary Colors
- **Background (Main)**: `#ede7df` (warm light beige/cream)
- **Background (Sections)**: Alternates between `#ede7df` and slightly lighter variations
- **Text Primary**: `#1a1a1a` (near black)
- **Text Secondary**: `#666666` to `#888888` (medium gray)
- **Accent Orange**: `#b8774e` (warm terracotta/rust orange)

### Button Colors
- **Primary Button Background**: `#b8774e` (orange/rust)
- **Primary Button Text**: `#ffffff` (white)
- **Primary Button Hover**: `#a0664a` (darker orange)
- **Button Border Radius**: `6px`

## Typography

### Font Family
```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
```

### Hero Section Typography
```css
/* Main Headline */
h1 {
  font-size: 56px; /* approximately 3.5rem */
  font-weight: 400; /* Regular for "Powerful on-prem" */
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #1a1a1a;
}

/* Orange Accent Text in Headline */
h1 .accent {
  font-weight: 700; /* Bold */
  color: #b8774e; /* Orange */
}

/* Subtitle/Tagline */
.subtitle {
  font-size: 18px; /* 1.125rem */
  font-weight: 400;
  line-height: 1.6;
  color: #666666;
  margin-top: 24px;
}
```

### Section Headings
```css
h2 {
  font-size: 32px; /* 2rem */
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #1a1a1a;
}
```

## Layout Structure

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Hero Section Layout
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 50/50 split */
  gap: 80px; /* Large gap between text and image */
  align-items: center;
  padding: 80px 0 100px 0;
}

.hero-text {
  padding-right: 40px;
}

.hero-image {
  /* Image on right side */
}
```

### Header/Navigation
```css
header {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 500;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #b8774e;
  border-radius: 6px;
}

nav a {
  font-size: 15px;
  font-weight: 400;
  color: #4a4a4a;
  text-decoration: none;
  margin: 0 24px;
}
```

## Component Styles

### Buttons
```css
.btn-primary {
  padding: 12px 24px; /* Compact, not oversized */
  background: #b8774e;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background: #a0664a;
}
```

### Cards/Feature Boxes
```css
.card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
```

## Spacing System

### Vertical Spacing
- **Section Padding**: `80px 0` (top/bottom)
- **Element Margins**: Multiples of 8px (8, 16, 24, 32, 48, 64, 80)
- **Gap between hero columns**: `80px`

### Horizontal Spacing
- **Container Padding**: `24px` (left/right)
- **Nav item spacing**: `24px`

## Page Structure

### Overall Layout
```
1. Header (fixed/sticky)
   - Logo + Nav + CTA Button
   - Background: Same as body
   - Border bottom: Subtle line

2. Hero Section
   - 2 columns (text left, image right)
   - Large headline with orange accent
   - Subtitle
   - CTA button
   - Demo image/screenshot on right

3. Features Section
   - Alternating background color
   - Grid of feature cards

4. Additional Sections
   - Continue pattern of alternating backgrounds

5. Footer
   - Contact info
   - Links
```

## Key Design Principles

1. **Minimalist**: Clean, lots of white space, not cluttered
2. **Typography-focused**: Large, readable text with clear hierarchy
3. **Subtle colors**: Warm beige background, orange accent used sparingly
4. **Grid-based**: Strong use of CSS Grid for layouts
5. **Modern sans-serif**: System fonts for speed and clarity
6. **Generous spacing**: Breathing room between all elements

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0 60px 0;
  }

  h1 {
    font-size: 36px;
  }
}
```

## Implementation Notes

- Use CSS Grid for hero layout (NOT flexbox)
- Orange color is used ONLY for:
  - Accent text in headlines
  - Primary CTA buttons
  - Hover states on links
- Background is NOT pure white - it's a warm beige
- Font weights are light (400) for body, medium (500) for nav/buttons, bold (700) for accents
- Buttons are relatively small/compact, not oversized
- Large gap between text and image columns (80px+)
