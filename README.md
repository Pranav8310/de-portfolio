# Data Engineer Portfolio

A modern, minimalist portfolio website built with Gatsby, React, and Styled Components. Inspired by the clean, developer-centric aesthetic of Brittany Chiang's v4 portfolio, this site showcases data engineering projects, system architectures, and technical skills.

## Features

- **Dark-themed, minimalist design** with smooth scrolling
- **System Design section** for showcasing data architectures
- **Featured Projects** highlighting BigQuery, Dataproc, Iceberg, and Spark on Kubernetes
- **Categorized Skills** (Cloud/GCP, Processing, Automation)
- **Responsive design** optimized for all devices
- **Performance-optimized** with Gatsby for fast loading

## Tech Stack

- **Gatsby** - Static site generator
- **React** - UI library
- **Styled Components** - CSS-in-JS styling
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## Project Structure

```
de-portfolio/
├── src/
│   ├── components/
│   │   ├── Layout.js        # Main layout wrapper
│   │   ├── Nav.js           # Navigation bar
│   │   ├── Hero.js          # Landing section
│   │   ├── About.js         # About section
│   │   ├── SystemDesign.js  # System architecture showcase
│   │   ├── Projects.js      # Featured projects
│   │   ├── Skills.js        # Categorized skills
│   │   ├── Contact.js       # Contact section
│   │   ├── Footer.js        # Footer
│   │   ├── Social.js        # Social sidebar
│   │   └── Email.js         # Email sidebar
│   ├── config/
│   │   └── content.js       # Site content (projects, skills, etc.)
│   ├── styles/
│   │   ├── GlobalStyle.js   # Global CSS
│   │   └── theme.js         # Theme configuration
│   ├── pages/
│   │   └── index.js         # Main page
│   └── images/              # Image assets
├── static/                  # Static files
├── gatsby-config.js         # Gatsby configuration
└── package.json

```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd de-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8000](http://localhost:8000) in your browser

### Build for Production

```bash
npm run build
npm run serve
```

## Customization

### Update Personal Information

1. **Edit `src/config/content.js`** to update:
   - Projects and their descriptions
   - Skills and technologies
   - System design examples
   - Social media links
   - Navigation links

2. **Edit `src/styles/theme.js`** to customize:
   - Colors
   - Fonts
   - Spacing
   - Animations

3. **Update personal details** in:
   - `src/components/Hero.js` - Name and intro
   - `src/components/Email.js` - Email address
   - `src/components/Footer.js` - Footer text
   - `gatsby-config.js` - Site metadata

### Add Your Profile Image

Place your profile image in `src/images/` and update the reference in `src/components/About.js`.

### Add Resume

Place your resume PDF in the `static/` folder as `resume.pdf`.

## Key Sections

### System Design
Showcases data architecture patterns and design decisions. Each card includes:
- Architecture description
- Key components
- Technologies used

### Featured Projects
Highlights major data engineering projects with:
- Detailed descriptions
- Architecture patterns
- Tech stack
- GitHub and demo links

### Skills
Organized into three categories:
- **Cloud (GCP)**: BigQuery, Dataproc, Cloud Composer, etc.
- **Processing**: Spark, DuckDB, Iceberg, Airflow, etc.
- **Automation**: GitLab CI/CD, Terraform, Docker, Kubernetes, etc.

## Deployment

This site can be deployed to:
- **Netlify**: `netlify deploy --prod`
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Configure with `gh-pages` package
- **AWS S3 + CloudFront**: Build and upload to S3

## Performance Optimizations

- Server-side rendering with Gatsby
- Image optimization with gatsby-plugin-image
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- CSS-in-JS with styled-components for scoped styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Acknowledgments

Design inspired by [Brittany Chiang's portfolio](https://brittanychiang.com)
