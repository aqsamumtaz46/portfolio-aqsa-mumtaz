export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  tools?: string[];
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  achievements: string[];
  tools?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const experience: Experience[] = [
  {
    title: "SEO Executive/Content Writer",
    company: "Bytevia Solutions",
    location: "Lahore, Pakistan",
    duration: "September 2025 – Present",
    tools: ["Semrush", "Ahrefs", "Google Search Console", "Google Analytics", "Screaming Frog", "Trello", "Slack"],
    description: [
      "Led end-to-end SEO strategy (on-page, off-page, technical) for Shopify e-commerce store, producing all website content including product pages, category descriptions, and blogs",
      "Scaled organic impressions to 171,000+ over 3 months with 624 total clicks and average search position of 8.3",
      "Improved average ranking position from 41.1 → 8.3, demonstrating strong SERP visibility improvement",
      "Drove CTR improvement through metadata optimization and structured content, achieving 2.8% CTR on high-intent queries",
      "Authored 20+ SEO-optimized product and blog pages targeting commercial and informational keywords"
    ]
  },
  {
    title: "SEO Executive/Content Writer",
    company: "Growth Marvels",
    location: "Lahore, Pakistan",
    duration: "April 2023 – August 2025",
    tools: ["Trello", "Slack", "Semrush", "Google Search Console", "Google Analytics", "Ahrefs", "MozBar", "MS Excel"],
    description: [
      "Grew organic clicks from 16/month to 2,210+/month through consistent SEO content strategy and optimization",
      "Scaled total impressions from 122 → 411,000+, reflecting strong keyword ranking growth across health niche",
      "Maintained average search position of 10.1 → 12.9 as keyword portfolio expanded, with peak CTR of 13.1%",
      "Built 30+ quality backlinks through guest posting and niche directory submissions for competitive keywords",
      "Executed on-page SEO audits and content optimization across 15+ service pages"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "Wildland Blades",
    description: "Shopify-based e-commerce store specializing in knives and blades - Full-spectrum SEO strategy execution",
    achievements: [
      "Scaled organic impressions to 171,000+ over 3 months with 624 total clicks",
      "Improved average ranking position from 41.1 → 8.3 for target keywords",
      "Achieved 2.8% CTR on high-intent queries within first 7 days of optimization",
      "Authored 20+ SEO-optimized product and blog pages targeting commercial keywords",
      "Led end-to-end SEO strategy including on-page, off-page, and technical optimization"
    ],
    tools: ["Semrush", "Ahrefs", "Google Search Console", "Shopify", "Screaming Frog"]
  },
  {
    name: "Diabetes Telecare",
    description: "Health-focused website offering expert insights, blogs, and resources on diabetes management",
    achievements: [
      "Grew organic clicks from 16/month to 2,210+/month through consistent SEO strategy",
      "Scaled total impressions from 122 → 411,000+ representing strong keyword ranking growth",
      "Maintained average search position of 10.1 → 12.9 as keyword portfolio expanded",
      "Achieved peak CTR of 13.1% demonstrating high content-query relevance",
      "Produced 50+ long-form SEO blog posts on diabetes management topics"
    ],
    tools: ["Semrush", "Google Analytics", "Google Search Console", "WordPress"]
  },
  {
    name: "GenZed",
    description: "UK-based bookkeeping and accounting service provider for Gen Z entrepreneurs and small businesses",
    achievements: [
      "Executed on-page SEO audit and content optimization across 15+ existing service pages",
      "Built 30+ quality backlinks through guest posting and niche directory submissions",
      "Improved Google rankings for target service-page keywords through structured internal linking",
      "Implemented schema optimization and improved domain authority for competitive UK keywords"
    ],
    tools: ["Ahrefs", "Google Search Console", "Semrush", "Schema Markup"]
  },
  {
    name: "Cleaning Diaries",
    description: "Informational blog platform focused on car cleaning, detailing techniques, and product recommendations",
    achievements: [
      "Published 25+ SEO-optimized blog posts on car detailing targeting long-tail keywords",
      "Established consistent content calendar and topical cluster strategy",
      "Built topic authority in the car care niche through strategic content planning",
      "Implemented full on-page optimization including meta tags, headers, and internal links"
    ],
    tools: ["Semrush", "Google Analytics", "WordPress", "Keyword Planner"]
  },
  {
    name: "Growth Marvels",
    description: "Digital marketing agency offering SEO, content marketing, and branding services to U.S. audience",
    achievements: [
      "Authored 20+ SEO-optimized service pages, blogs, and case studies",
      "Implemented on-page SEO best practices including schema markup and canonical tags",
      "Improved search rankings and generated inbound leads for agency's digital presence",
      "Optimized URL structures and improved overall technical SEO implementation"
    ]
  },
  {
    name: "Fastline Legal Services",
    description: "Professional legal consultancy firm providing expert advice across various legal domains",
    achievements: [
      "Developed 15+ SEO-friendly service pages, FAQs, and blog posts simplifying complex legal topics",
      "Applied E-E-A-T content principles to build trust signals for legal content pages",
      "Improved user engagement and dwell time through quality legal content creation",
      "Enhanced Google's quality assessment of legal content through expertise-focused writing"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "SEO Expertise",
    items: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research & Mapping", "SEO Audits", "Guest Posting", "Link Building", "Content Strategy", "Topic Cluster Planning", "Meta Optimization", "Schema Markup", "Internal Linking"]
  },
  {
    category: "Content Creation",
    items: ["SEO Blog Writing", "Product Page Copywriting", "Service Page Writing", "Web Content", "Case Studies", "FAQ Writing", "Content Calendars", "Blog Optimization", "E-E-A-T Principles"]
  },
  {
    category: "Tools & Platforms",
    items: ["Semrush", "Ahrefs", "Google Search Console", "Google Analytics", "Screaming Frog", "MozBar", "MS Excel", "Trello", "Slack", "Shopify"]
  },
  {
    category: "Data & Reporting",
    items: ["Data-Driven Reporting", "Performance Analytics", "Keyword Tracking", "SERP Monitoring", "CTR Optimization", "Conversion Tracking"]
  },
  {
    category: "Soft Skills",
    items: ["Agile Workflow", "Project Management", "Cross-functional Collaboration", "Documentation", "Problem-Solving", "Strategic Planning"]
  }
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aqsa-mumtaz-a77254244",
  email: "aqsamumtaz531@gmail.com",
  phone: "+92 322 413 9643"
};
