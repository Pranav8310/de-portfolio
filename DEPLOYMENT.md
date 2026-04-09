# Deployment Guide

## Deploying to GitHub Pages

This portfolio is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Steps

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/de-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to **Pages** section in the left sidebar
   - Under **Source**, select **GitHub Actions**

3. **The site will automatically build and deploy** when you push to the main branch

4. **Your site will be available at:**
   ```
   https://YOUR_USERNAME.github.io/de-portfolio/
   ```

### Local Development

To run the site locally:

```bash
# Install dependencies
npm install

# Fix gatsby binary (if needed)
sed -i '' 's|require(`./dist/bin/gatsby.js`)|require(`../gatsby/dist/bin/gatsby.js`)|g' node_modules/.bin/gatsby

# Start development server
npm run dev
```

Visit `http://localhost:8000` to view your site.

### Building for Production

```bash
npm run build
npm run serve
```

### Updating Content

- **Profile Image:** Replace `src/images/pranav_image.jpg`
- **Resume:** Replace `static/Cv.pdf`
- **Bio:** Edit `src/components/About.js`
- **Projects:** Edit `src/components/Projects.js`
- **Skills:** Edit `src/components/Skills.js`
- **Contact Info:** Edit `src/components/Contact.js` and `src/components/Hero.js`

### Troubleshooting

If the Gatsby build fails with "Cannot find module './dist/bin/gatsby.js'", run:

```bash
sed -i '' 's|require(`./dist/bin/gatsby.js`)|require(`../gatsby/dist/bin/gatsby.js`)|g' node_modules/.bin/gatsby
```

Or on Linux:
```bash
sed -i 's|require(`./dist/bin/gatsby.js`)|require(`../gatsby/dist/bin/gatsby.js`)|g' node_modules/.bin/gatsby
```
