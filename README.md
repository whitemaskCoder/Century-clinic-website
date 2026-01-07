# Century Clinic Website

A modern, attractive website for Century Clinic focusing on Dr. Theva's expertise in orthopaedic surgery and arthroplasty.

## Features

- **Doctor-Focused Design**: Emphasizes Dr. Theva's credentials and experience
- **Interactive Animations**: Uses Aceternity UI components for modern effects
- **Countdown Numbers**: Animated statistics display for surgery count
- **Surgical Gallery**: Display professional surgical procedure images
- **Responsive Design**: Works seamlessly on all devices
- **Medical Professional Color Scheme**: Blue and white color palette suitable for a clinic

## Adding Surgical Images

1. Place your surgical images in the `public/images/` directory:
   - `surgery-1.jpg` - Used in hero section background
   - `surgery-2.jpg` - Gallery image 1
   - `surgery-3.jpg` - Gallery image 2
   - `surgery-4.jpg` - Gallery image 3

2. Image recommendations:
   - Format: JPG, PNG, or WebP
   - Recommended size: 1200x800px or larger
   - Aspect ratio: 4:3 works best for gallery layout

The website will work without images (using fallback backgrounds), but adding the surgical photos will enhance the professional appearance.

## Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Aceternity UI components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```
