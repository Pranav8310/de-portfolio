# Data Engineer Portfolio - Quick Start

## 🚀 What's Fixed

✅ **Gatsby build errors** - Fixed the missing module issue
✅ **Profile image added** - Your image from `docu/pranav_image.jpg` is now in the About section
✅ **Resume added** - Your CV from `docu/Cv.pdf` is now available for download
✅ **GitHub Actions workflow** - Auto-deployment to GitHub Pages is configured

## 📋 Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository named `de-portfolio`
2. **Important:** Keep it public (required for GitHub Pages on free accounts)

### Step 2: Push Your Code

```bash
cd /tmp/de-portfolio

# Configure git (use your GitHub email and name)
git config user.email "pranavhingane07@gmail.com"
git config user.name "Pranav Hingane"

# Add all files and commit
git add .
git commit -m "Initial commit: Data Engineer Portfolio with image and resume"

# Connect to your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/de-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The site will automatically build and deploy!

### Step 4: Access Your Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/de-portfolio/
```

## 🛠️ Local Development

### Run Locally

```bash
# Install dependencies
npm install

# Fix gatsby binary (if needed on macOS/Linux)
sed -i '' 's|require(`./dist/bin/gatsby.js`)|require(`../gatsby/dist/bin/gatsby.js`)|g' node_modules/.bin/gatsby

# Start development server
npm run dev
```

Visit `http://localhost:8000`

### Build for Production

```bash
npm run clean
npm run build
npm run serve
```

## 📝 Customize Your Portfolio

### Update Personal Info
- **Name & Bio:** `src/components/Hero.js` and `src/components/About.js`
- **Email:** `src/components/Hero.js` (line 76) and `src/components/Contact.js`
- **Profile Image:** Replace `src/images/pranav_image.jpg`
- **Resume:** Replace `static/Cv.pdf`

### Update Content
- **Projects:** Edit `src/components/Projects.js`
- **Skills:** Edit `src/components/Skills.js`
- **System Designs:** Edit `src/components/SystemDesign.js`
- **Social Links:** Edit `src/components/Social.js`

### Update Site Metadata
- Edit `gatsby-config.js` to update site title, description, and URL

## 🔧 Troubleshooting

### Gatsby Build Error
If you see "Cannot find module './dist/bin/gatsby.js'":

**macOS:**
```bash
sed -i '' 's|require(`./dist/bin/gatsby.js`)|require(`../gatsby/dist/bin/gatsby.js`)|g' node_modules/.bin/gatsby
```

**Linux:**
```bash
sed -i 's|require(`./dist/bin/gatsby.js`)|require(`../gatsby/dist/bin/gatsby.js`)|g' node_modules/.bin/gatsby
```

### GitHub Actions Fails
- Check that you've enabled GitHub Pages in Settings → Pages
- Ensure the repository is public
- Check the Actions tab for detailed error logs

## 📁 Project Structure

```
de-portfolio/
├── src/
│   ├── components/     # React components
│   ├── images/         # Images (pranav_image.jpg)
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── config/         # Configuration
├── static/             # Static files (Cv.pdf, favicon)
├── .github/
│   └── workflows/      # GitHub Actions (deploy.yml)
├── gatsby-config.js    # Gatsby configuration
└── package.json        # Dependencies

```

## 🎨 Features

- ✨ Responsive design
- 🎭 Smooth animations and transitions
- 📱 Mobile-friendly
- 🖼️ Optimized images (WebP, AVIF)
- 📄 Resume download button
- 🚀 Fast loading with Gatsby
- 🔄 Auto-deploy with GitHub Actions

## 📞 Need Help?

Check the detailed guide in `DEPLOYMENT.md` or refer to the original `README.md`.

---

**Made with ❤️ by Pranav Hingane**
