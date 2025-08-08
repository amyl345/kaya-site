# Kaya Performance Website

A modern, dynamic single-page website showcasing Kaya performance gear with advanced scroll animations, parallax effects, and interactive elements.

## ✨ Key Features

### Dynamic Animations
- **GSAP ScrollTrigger**: Advanced scroll-based animations
- **Parallax Effects**: Background images move at different speeds
- **Stagger Animations**: Elements appear in sequence
- **3D Tilt Effects**: Cards respond to mouse movement
- **Magnetic Buttons**: Buttons follow cursor on hover
- **Counter Animations**: Numbers count up when in view

### Interactive Elements
- **Custom Cursor**: Follows mouse with smooth animation
- **Hero Background**: Parallax gym/training imagery
- **Product Cards**: Hover effects with image zoom
- **Testimonial Cards**: Real people with authentic photos
- **Form Validation**: Animated success/error messages

### Performance & UX
- **Mobile Optimized**: Touch-friendly, no animations on small screens
- **Reduced Motion**: Respects user accessibility preferences
- **Smooth Scrolling**: GSAP-powered smooth navigation
- **Image Optimization**: High-quality Unsplash images

## Brand Colors

- Kaya Blue: `#264653`
- Midnight Black: `#0F0F0F`
- Pure White: `#FFFFFF`
- Cool Gray: `#CCCCCC`
- Sky Tint: `#CDE4E8`

## Typography

- **Headings**: Montserrat Bold
- **Body Text**: Inter Regular
- **Accents**: Raleway Light/Medium

## File Structure

```
/kaya/
├── index.html          # Main website file
├── styles/
│   └── main.css       # All styling and animations
├── scripts/
│   └── main.js        # Interactive functionality
└── logos/             # Brand logo variations
    ├── 1Artboard 1@300x.png
    ├── 2Artboard 1 copy@300x.png
    ├── 3Artboard 1 copy 2@300x.png
    ├── 4Artboard 1 copy 3@300x.png
    └── 5Artboard 1 copy 4@300x.png
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance

- No external frameworks or heavy dependencies
- Optimized images and animations
- Smooth 60fps animations using CSS transforms
- Intersection Observer for efficient scroll detection

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- ARIA attributes where appropriate

## Setup

Simply open `index.html` in a web browser. No build process required.

For development, serve from a local server to avoid CORS issues with fonts and images.

## Customization

- Update brand colors in CSS custom properties at the top of `main.css`
- Replace logo files in the `logos/` directory
- Modify content in `index.html`
- Adjust animations in `scripts/main.js`