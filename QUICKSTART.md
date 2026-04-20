# Quick Start Guide

Welcome to your portfolio website! This guide will help you get started quickly.

## 🎯 First Steps

### 1. Customize Your Portfolio Content

Edit `/data/portfolio.ts` to update your information:

```typescript
// Update your experience
export const experience: Experience[] = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    duration: "Start Date – End Date",
    tools: ["Tool 1", "Tool 2"],
    description: ["Achievement 1", "Achievement 2"]
  }
];

// Update your projects
export const projects: Project[] = [
  {
    name: "Project Name",
    description: "Brief description",
    achievements: ["Achievement 1", "Achievement 2"],
    tools: ["Tool 1", "Tool 2"]
  }
];

// Update your skills
export const skills: Skill[] = [
  {
    category: "Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  }
];

// Update contact information
export const socialLinks = {
  linkedin: "Your LinkedIn URL",
  email: "your.email@example.com",
  phone: "Your phone number"
};
```

### 2. Preview Your Changes

```bash
npm run dev
```
Visit `http://localhost:3000` to see your portfolio in real-time. Changes update automatically!

### 3. Deploy to GitHub and Vercel

Follow [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions.

## 📝 Content Tips

### Experience Section
- List most recent jobs first
- Include quantifiable achievements
- Add relevant tools/technologies
- Keep descriptions concise but impactful

### Projects Section
- Highlight your best work
- Include specific results/metrics
- List tools and technologies used
- Add brief descriptions of your role

### Skills Section
- Group related skills together
- Prioritize important skills
- Include tools and methodologies
- Be honest about expertise level

## 🎨 Customization

### Colors & Branding

Edit `/app/globals.css` for global styles or modify Tailwind classes in components:

```tsx
// Example: Change header background
<header className="bg-blue-600">  // Change to your preferred color
```

### Add New Sections

To add a new section:

1. Create component in `/components/NewSection.tsx`
2. Add section in `/app/page.tsx`:

```tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <>
      {/* ... existing sections */}
      <NewSection />
    </>
  );
}
```

## 📱 Mobile Optimization

- Portfolio is responsive by default
- Test on mobile: `npm run dev` then visit on phone
- Tailwind's responsive classes are used throughout
- Use `sm:`, `md:`, `lg:` prefixes to customize for different screens

## 🚀 Optimization Tips

### Build Size
```bash
npm run build
# Check size output
```

### Performance
- Keep images optimized (use WebP)
- Minimize unused CSS
- Use lazy loading for images
- Consider adding Next.js Image component

### SEO
- Metadata is configured in `app/layout.tsx`
- Update OG tags for social sharing
- Keep content updated regularly
- Use semantic HTML (already done!)

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://react.dev)

## ❓ Common Questions

**Q: How do I add more projects?**
A: Edit the `projects` array in `/data/portfolio.ts`

**Q: How do I change colors?**
A: Modify Tailwind classes in components or `/app/globals.css`

**Q: How do I add my own domain?**
A: Follow the "Configure Custom Domain" section in [DEPLOYMENT.md](./DEPLOYMENT.md)

**Q: How often does the site update after I push to GitHub?**
A: Usually within 1-2 minutes automatically through Vercel

**Q: Can I add animations?**
A: Yes! Tailwind has animation utilities, or use Framer Motion

## 📊 Analytics

After deploying to Vercel, you can:
- View traffic analytics
- Monitor performance
- Check error logs
- Compare deployments

## 🆘 Troubleshooting

### Site looks broken locally
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Build errors
```bash
# Check for TypeScript errors
npm run build  # See detailed error messages
```

### Components not showing
- Check path imports (should be `/components/...`)
- Verify component exports from `/data/portfolio.ts`
- Check browser console for errors

## 🎓 Learn More

This portfolio is built as a learning project. To expand:
- Add blog functionality with MDX
- Add dark mode toggle
- Add animation with Framer Motion
- Add form backend (Formspree, Netlify Forms)
- Add TypeScript stricter mode
- Add testing with Jest

## 🎉 You're All Set!

Your portfolio is ready! Next steps:
1. Customize your content
2. Test locally
3. Push to GitHub
4. Deploy to Vercel
5. Share your link!

---

**Questions?** Check [DEPLOYMENT.md](./DEPLOYMENT.md) or the project README.

**Good luck with your portfolio! 🚀**
