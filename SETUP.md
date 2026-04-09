# Setup & Customization Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## Customization Checklist

### 1. Personal Information

**File: `src/config/content.js`**

Update the following:

```javascript
// Social media links
export const socialMedia = [
  { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/YOUR_USERNAME' },
  { name: 'Twitter', url: 'https://twitter.com/YOUR_USERNAME' },
];
```

**File: `src/components/Hero.js`**

```javascript
const two = <h2 className="big-heading">Your Name.</h2>;
```

**File: `src/components/Email.js`**

```javascript
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

**File: `gatsby-config.js`**

```javascript
siteMetadata: {
  title: "Your Name - Data Engineer",
  description: "Your description",
  author: "Your Name",
  siteUrl: "https://yoursite.com",
}
```

### 2. Content Updates

**Projects** (`src/config/content.js`)

Each project has:
- `title`: Project name
- `description`: Detailed description
- `techStack`: Array of technologies
- `architecture`: Array of architecture patterns (optional)
- `github`: GitHub link
- `external`: Live demo link

```javascript
{
  title: 'Your Project',
  description: 'Description here...',
  techStack: ['Tech1', 'Tech2', 'Tech3'],
  architecture: ['Pattern 1', 'Pattern 2'],
  github: 'https://github.com/...',
  external: 'https://...',
}
```

**System Designs** (`src/config/content.js`)

```javascript
{
  title: 'Architecture Name',
  description: 'Description...',
  components: ['Component 1', 'Component 2'],
  tools: ['Tool1', 'Tool2'],
}
```

**Skills** (`src/config/content.js`)

Organized into three categories:
- `cloud`: Cloud/GCP technologies
- `processing`: Data processing tools
- `automation`: CI/CD and automation tools

### 3. Color Theme

**File: `src/styles/theme.js`**

```javascript
colors: {
  darkNavy: '#0a192f',    // Background
  navy: '#112240',        // Card backgrounds
  lightNavy: '#172a45',   // Hover states
  green: '#64ffda',       // Accent color
  // ... customize as needed
}
```

### 4. Fonts

The portfolio uses:
- **Sans-serif**: Calibre (default), Inter, San Francisco
- **Monospace**: SF Mono, Fira Code, Roboto Mono

To change fonts, update `src/styles/theme.js`:

```javascript
fonts: {
  mono: '"Your Mono Font", monospace',
  sans: '"Your Sans Font", sans-serif',
}
```

### 5. Add Your Photo

1. Place your image in `src/images/profile.jpg`
2. Update `src/components/About.js`:

```javascript
import { StaticImage } from 'gatsby-plugin-image';

// Replace the placeholder div with:
<StaticImage
  src="../images/profile.jpg"
  alt="Your Name"
  className="img"
  quality={95}
  formats={['AUTO', 'WEBP', 'AVIF']}
/>
```

### 6. Add Resume

1. Place your PDF in `static/resume.pdf`
2. The nav automatically links to `/resume.pdf`

### 7. Create Favicon

1. Create a favicon image (recommended: 512x512 PNG)
2. Save as `static/favicon.png`
3. Already configured in `gatsby-config.js`

## Section Visibility

To hide/show sections, edit `src/pages/index.js`:

```javascript
<Layout>
  <Hero />
  <About />
  <SystemDesign />  {/* Comment out to hide */}
  <Projects />
  <Skills />
  <Contact />
</Layout>
```

## Navigation

To add/remove nav items, edit `src/config/content.js`:

```javascript
export const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  // Add more...
];
```

## Deployment

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `public/`

### Vercel

1. Import project from GitHub
2. Framework: Gatsby
3. Deploy

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
}
```

Run:
```bash
npm run deploy
```

## Performance Tips

1. **Optimize images**: Use WebP/AVIF formats
2. **Lazy loading**: Already configured with Intersection Observer
3. **Code splitting**: Automatic with Gatsby
4. **Analytics**: Add Google Analytics via `gatsby-plugin-google-analytics`

## Troubleshooting

### Port already in use

```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Or use different port
gatsby develop -p 3000
```

### Clear cache

```bash
npm run clean
npm run dev
```

### Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

## Adding Analytics

Install:
```bash
npm install gatsby-plugin-google-gtag
```

Update `gatsby-config.js`:
```javascript
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: ["GA_MEASUREMENT_ID"],
  },
}
```

## Environment Variables

Create `.env.development` and `.env.production`:

```
GATSBY_API_URL=your_api_url
```

Access in code:
```javascript
const apiUrl = process.env.GATSBY_API_URL;
```

## Need Help?

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Styled Components Docs](https://styled-components.com/docs)
- [React Documentation](https://react.dev/)
