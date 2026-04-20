# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to GitHub and Vercel.

## Table of Contents

1. [Deploy to GitHub](#deploy-to-github)
2. [Deploy to Vercel](#deploy-to-vercel)
3. [Configure Custom Domain](#configure-custom-domain)
4. [CI/CD Pipeline](#cicd-pipeline)
5. [Troubleshooting](#troubleshooting)

---

## Deploy to GitHub

### Prerequisites

- GitHub account (create one at [github.com](https://github.com))
- Git installed on your computer
- The portfolio project ready

### Step 1: Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name it `aqsa-portfolio` (or your preferred name)
3. Add a description: "My SEO Portfolio Website"
4. Choose **Public** (so it's visible)
5. Do NOT initialize with README (we have one)
6. Click **Create repository**

### Step 2: Initialize Git and Push Code

```bash
# Navigate to your project folder
cd aqsa-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/aqsa-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

Visit `https://github.com/YOUR_USERNAME/aqsa-portfolio` to confirm your code is uploaded.

---

## Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your `aqsa-portfolio` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: `Next.js` (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (pre-filled)
   - Output Directory: `.next` (pre-filled)
   - Environment Variables: Leave empty for now
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site
   - This usually takes 2-3 minutes
   - You'll see a success message with your live URL

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (opens browser)
vercel login

# Deploy your project
cd aqsa-portfolio
vercel

# Follow the prompts:
# - Confirm project name
# - Select scope (personal account)
# - Confirm build settings
# - Choose not to override `package.json`

# For future deployments:
vercel --prod
```

---

## Configure Custom Domain

### Step 1: Get a Domain

- Providers: Namecheap, GoDaddy, Google Domains, etc.
- Recommended: Keep it simple (e.g., aqsamumtaz.com)

### Step 2: Add to Vercel

1. **In Vercel Dashboard**
   - Select your project
   - Go to Settings → Domains
   - Click "Add"
   - Enter your domain name
   - Click "Add Domain"

2. **Configure DNS Records**
   - Vercel shows DNS records you need to add
   - Log in to your domain provider
   - Go to DNS settings
   - Add Vercel's nameservers or A records:
     ```
     Name: @
     Type: A
     Value: 76.76.19.165
     
     Name: www
     Type: CNAME
     Value: cname.vercel.com
     ```
   - DNS propagation takes 24-48 hours

3. **Verify**
   - Vercel will auto-verify within 24 hours
   - You'll see "Domain Connected" in Vercel

---

## CI/CD Pipeline

Vercel automatically deploys every time you push to GitHub:

```
Git Push → GitHub → Vercel Auto-Deploy → Live Site Updated
```

### Deploy Automatically

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Vercel automatically builds and deploys
4. Check Vercel dashboard for deployment status

### Deploy Manually

- Visit Vercel dashboard
- Select your project
- Click "Deploy" button at the top
- Or use: `vercel --prod`

---

## Environment Variables

1. **In Vercel Dashboard**
   - Select your project
   - Settings → Environment Variables
   - Add variables (e.g., analytics IDs)
   - Click "Save"

2. **Redeploy Required**
   - After adding env vars, trigger new deployment:
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push origin main
   ```

---

## Troubleshooting

### Build Fails

**Check Logs:**
- Vercel Dashboard → Deployments → Click failed deployment
- Look for error messages
- Common issues: Missing dependencies, TypeScript errors

**Solution:**
```bash
# Locally verify build works
npm run build

# Check for TypeScript errors
npm run build

# Ensure all dependencies installed
npm ci
```

### Site Shows Default Next.js Page

**Solution:**
- Verify `app/page.tsx` is updated
- Check that all components are in `/components`
- Check that data file is in `/data`
- Force redeploy: `vercel --prod`

### Domain Not Working

**Check:**
- DNS records correctly added to your domain provider
- DNS propagation (wait 24-48 hours)
- Domain registered and active

**Vercel says:**
```
Pending - Waiting for DNS propagation
```

This is normal, takes up to 48 hours.

### Performance Issues

**Optimize:**
- Check Vercel Analytics
- Review images (use WebP)
- Minimize unused CSS
- Use `next/image` for images

---

## Project Status After Deployment

Once deployed, your portfolio will have:

✅ Live URL: `https://aqsa-portfolio.vercel.app` (or your custom domain)
✅ Auto SSL certificate
✅ Global CDN distribution
✅ Automatic HTTPS
✅ Analytics dashboard
✅ Preview deployments on PR

---

## Update Your Portfolio

Every time you update content or code:

1. **Local Update**
   ```bash
   # Edit files (e.g., data/portfolio.ts)
   # Test locally
   npm run dev
   ```

2. **Commit & Push**
   ```bash
   git add .
   git commit -m "Update portfolio projects"
   git push origin main
   ```

3. **Automatic Deploy**
   - Vercel automatically deploys
   - Check dashboard for status
   - Site updates in 1-2 minutes

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages for Personal Sites](https://docs.github.com/en/pages)

---

## Questions?

For help:
- Check Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Check Next.js docs: [nextjs.org](https://nextjs.org)
- GitHub issues in your repository

**Happy deploying! 🎉**
