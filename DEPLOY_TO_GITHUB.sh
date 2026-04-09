#!/bin/bash

# Data Engineer Portfolio - GitHub Deployment Script
# This script will push your portfolio to GitHub and set it up for GitHub Pages

echo "🚀 Deploying Data Engineer Portfolio to GitHub..."
echo ""

# Set your GitHub username
GITHUB_USERNAME="Pranav8310"
REPO_NAME="de-portfolio"

echo "📋 Configuration:"
echo "   GitHub Username: $GITHUB_USERNAME"
echo "   Repository: $REPO_NAME"
echo "   Site URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME/"
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Git remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Add the remote
echo "🔗 Adding GitHub remote..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code has been pushed to GitHub."
echo ""
echo "📝 Next Steps:"
echo "   1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "   2. Click 'Settings' → 'Pages'"
echo "   3. Under 'Source', select 'GitHub Actions'"
echo "   4. Wait 2-3 minutes for the deployment to complete"
echo ""
echo "🌐 Your site will be live at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
