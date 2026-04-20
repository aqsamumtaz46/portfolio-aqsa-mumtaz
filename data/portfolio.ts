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
      "Handled full-spectrum SEO (on-page, off-page, technical) for Wildland Blades e-commerce store",
      "Produced all website content including blogs, product pages, and category descriptions",
      "Optimized Shopify-based store for improved search rankings and organic traffic"
    ]
  },
  {
    title: "SEO Executive/Content Writer",
    company: "Growth Marvels",
    location: "Lahore, Pakistan",
    duration: "April 2023 – August 2025",
    tools: ["Trello", "Slack", "Semrush", "Google Search Console", "Google Analytics", "Ahrefs", "MozBar", "MS Excel"],
    description: [
      "Implemented on-page and off-page SEO strategies for multiple projects",
      "Created and optimized SEO-rich blog content for diverse industries",
      "Built quality backlinks through guest posting and directory submissions",
      "Improved search rankings across healthcare, finance, legal, and e-commerce sectors"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "Wildland Blades",
    description: "Shopify-based e-commerce store specializing in knives and blades",
    achievements: [
      "Handled full-spectrum SEO including on-page, off-page, and technical optimization",
      "Produced all website content including blogs, product pages, and category descriptions",
      "Improved search visibility and organic traffic through comprehensive SEO strategy"
    ],
    tools: ["Semrush", "Ahrefs", "Google Search Console", "Shopify"]
  },
  {
    name: "Diabetes Telecare",
    description: "Health-focused website offering expert insights, blogs, and resources on diabetes management",
    achievements: [
      "Wrote SEO-optimized blog content covering diabetes management topics",
      "Executed on-page and off-page SEO to achieve Google rankings",
      "Generated consistent organic traffic through quality content strategy"
    ],
    tools: ["Semrush", "Google Analytics", "WordPress"]
  },
  {
    name: "GenZed",
    description: "UK-based bookkeeping and accounting service provider for Gen Z entrepreneurs",
    achievements: [
      "Performed on-page SEO optimization and improved existing blog content",
      "Built quality backlinks through guest posting and directory submissions",
      "Enhanced Google rankings for financial services keywords"
    ],
    tools: ["Ahrefs", "Google Search Console", "Semrush"]
  },
  {
    name: "Cleaning Diaries",
    description: "Informative blog platform focused on car cleaning, detailing techniques, and product recommendations",
    achievements: [
      "Created and optimized SEO blog posts on car detailing techniques",
      "Implemented proper keyword usage, meta tags, and internal linking",
      "Improved search visibility for automotive care-related queries"
    ],
    tools: ["Semrush", "Google Analytics", "WordPress"]
  },
  {
    name: "Growth Marvels",
    description: "Digital marketing agency offering SEO, content marketing, and branding services",
    achievements: [
      "Wrote SEO-optimized service pages, blogs, and case studies",
      "Implemented on-page SEO to improve search rankings",
      "Attracted potential clients through content-driven strategy"
    ]
  },
  {
    name: "Fastline Legal Services",
    description: "Professional legal consultancy firm providing expert advice across various legal domains",
    achievements: [
      "Developed clear, SEO-friendly service pages and FAQs",
      "Created informative blogs to simplify legal topics",
      "Improved user trust and engagement through quality content"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "SEO & Optimization",
    items: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", "Link Building", "Local SEO"]
  },
  {
    category: "Content & Writing",
    items: ["SEO Content Writing", "Blog Writing", "Web Content Writing", "Articles", "Product Descriptions", "Meta Tags & Descriptions"]
  },
  {
    category: "Tools & Platforms",
    items: ["Semrush", "Ahrefs", "MozBar", "Google Search Console", "Google Analytics", "Screaming Frog", "WordPress", "Shopify"]
  },
  {
    category: "Project Management",
    items: ["Trello", "Slack", "Content Calendars", "MS Excel", "Documentation", "Team Collaboration"]
  },
  {
    category: "Professional Skills",
    items: ["Guest Posting", "Backlink Building", "Competitive Analysis", "Agile Methodology", "Problem-Solving", "Teamwork"]
  }
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aqsa-mumtaz-a77254244",
  email: "aqsamumtaz531@gmail.com",
  phone: "+92 322 413 9643"
};
