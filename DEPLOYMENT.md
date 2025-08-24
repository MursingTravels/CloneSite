# GitHub Pages Deployment Instructions

## Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push your changes:**
   \`\`\`bash
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   \`\`\`

3. **Wait for deployment:**
   - Check the "Actions" tab in your repository
   - The workflow will automatically build and deploy your site
   - Your site will be available at: `https://[username].github.io/CloneSite/`

## Troubleshooting:

- If the workflow fails, check the Actions tab for error details
- Make sure your repository name matches the basePath in next.config.mjs
- Ensure GitHub Pages is set to use "GitHub Actions" as the source

## Local Development:

\`\`\`bash
npm install
npm run dev
\`\`\`

The site will be available at `http://localhost:3000`
