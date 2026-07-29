export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  featured: boolean;
  sampleUrl?: string;
  caseStudy: CaseStudy | null;
}

export interface CaseStudy {
  overview: string;
  role: string;
  duration: string;
  tools: string[];
  problem: string;
  process: ProcessStep[];
  outcome: string;
  images: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "applizy",
    title: "Applizy SaaS Job Application Platform",
    description:
      "Applizy is a SaaS platform that applies to jobs on behalf of users. The client needed a landing page that clearly communicated their value proposition and converted visitors into paying subscribers.",
    tags: ["SaaS", "Web"],
    image: "/images/applizy (1).png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Applizy is a SaaS platform that automates the job application process. I designed a high-converting landing page that communicates the value proposition instantly — \"We apply, you interview\" — driving sign-ups and reducing bounce rate.",
      role: "Lead UI/UX Designer",
      duration: "3 weeks",
      tools: ["Figma", "Framer", "Adobe Illustrator"],
      problem:
        "The existing landing page had a high bounce rate (72%) and poor conversion. Users didn't understand the product's value within the first 5 seconds. The page lacked visual hierarchy, trust signals, and a clear call-to-action flow.",
      process: [
        {
          title: "Competitive Analysis & User Research",
          description:
            "Analyzed 12 competitor SaaS landing pages and conducted 8 user interviews to understand what drives sign-up decisions. Key insight: users need to see social proof and a clear 3-step process before they trust a new tool.",
        },
        {
          title: "Wireframing & Information Architecture",
          description:
            "Created low-fidelity wireframes focused on a single-scroll narrative: hook → problem → solution → social proof → CTA. Tested 3 layout variations with 15 users to find the optimal flow.",
        },
        {
          title: "High-Fidelity Design & Micro-interactions",
          description:
            "Designed a bold, modern interface with a dark theme, vibrant accent colors, and smooth scroll-triggered animations. Every section was crafted to maintain momentum and guide users toward the sign-up CTA.",
        },
      ],
      outcome:
        "The redesigned landing page reduced bounce rate by 38% and increased sign-up conversions by 52%. Average time on page improved from 24 seconds to 1 minute 45 seconds, indicating stronger engagement with the content.",
      images: ["/images/Applizy 1.png", "/images/Applizy 2.png"],
    },
  },
  {
    slug: "mela",
    title: "Mela Financial App",
    description:
      "Mela is a fintech and money transfer app supporting USD–ETB transactions, designed for users managing international and local finances from their phone.",
    tags: ["App", "Fintech"],
    image: "/images/Mela (3).png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Mela streamlines cross-border transactions between USD and ETB with instant rates, biometric security, and real-time transaction tracking.",
      role: "Lead Mobile UX Designer",
      duration: "4 weeks",
      tools: ["Figma", "Framer", "Protopie"],
      problem:
        "Cross-border remittance apps often suffer from high transaction fee opacity, slow processing times, and overly complex KYC verification steps that cause 60%+ user drop-off.",
      process: [
        {
          title: "User Journey & Trust Mapping",
          description:
            "Mapped end-to-end user flows for money transfers, identifying key drop-off points during currency conversion confirmation and verification.",
        },
        {
          title: "UI Simplification & Rates Transparency",
          description:
            "Designed a clear 2-step remittance flow with real-time conversion calculators and transparent fee breakdowns.",
        },
        {
          title: "Biometric Security & Wallet UX",
          description:
            "Created seamless FaceID/TouchID authentication and visual digital wallet card interfaces for swift daily use.",
        },
      ],
      outcome:
        "Increased onboarding completion by 48% and reduced average transfer initiation time from 3.5 minutes down to 45 seconds.",
      images: [],
    },
  },
  {
    slug: "zayno",
    title: "Zayno Mobile App & Web App",
    description:
      "Zayno is a professional counselling platform connecting users with qualified experts in law, finance, education, and investment. I led the end-to-end UI/UX design across all four products: the User Mobile App, Expert Mobile App, User Web App, and Expert Web App ensuring a consistent design system while tailoring each experience to its audience.",
    tags: ["App", "Web"],
    image: "/images/Zayno (2).png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Zayno is a multi-sided marketplace connecting service providers with customers across Ethiopia. As the lead designer, I crafted the end-to-end experience for both provider and customer sides, from onboarding to service delivery and payment.",
      role: "Senior Product Designer",
      duration: "6 months (ongoing)",
      tools: ["Figma", "Miro", "Notion", "Maze"],
      problem:
        "Service providers and customers in Ethiopia lacked a trusted, unified platform to connect. Existing solutions were fragmented, had poor UX for low-tech-literacy users, and didn't support the local payment ecosystem.",
      process: [
        {
          title: "Discovery & Stakeholder Interviews",
          description:
            "Conducted 20+ stakeholder interviews and mapped the service journey from both sides. Identified key pain points: trust, payment friction, and service quality consistency.",
        },
        {
          title: "User Personas & Journey Mapping",
          description:
            "Created 4 distinct personas representing different user segments. Mapped end-to-end journeys for each, identifying 12 critical touchpoints where the experience could make or break trust.",
        },
        {
          title: "Iterative Prototyping & Testing",
          description:
            "Built interactive prototypes in Figma and ran 3 rounds of usability testing with 30+ participants. Each round revealed critical insights that shaped the final design — particularly around the booking flow and payment confirmation.",
        },
        {
          title: "Design System & Handoff",
          description:
            "Established a comprehensive design system with 60+ components, ensuring consistency across the platform. Created detailed specs and interactive prototypes for the engineering team.",
        },
      ],
      outcome:
        "Launched to 5,000+ users in the first month with a 4.6/5 app store rating. User engagement increased by 40%, and the streamlined booking flow reduced drop-offs by 55%. The design system cut development time by 30%.",
      images: ["/images/Zayno 01.png"],
    },
  },
  {
    slug: "eic",
    title: "EIC Website Redesign",
    description:
      "EIC (Ethiopian Insurance Corporation) had an outdated, non-mobile friendly website with unclear navigation and inconsistent branding. I took the initiative to redesign it end-to-end.",
    tags: ["Web", "Redesign"],
    image: "/images/EIC.png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Complete structural and visual redesign for Ethiopia's primary insurance corporation, modernizing claims submission and policy exploration for mobile users.",
      role: "UI/UX Designer",
      duration: "3 weeks",
      tools: ["Figma", "Adobe Illustrator"],
      problem:
        "Information overload, hidden policy forms, and non-responsive web pages led to heavy customer support call volumes and low web engagement.",
      process: [
        {
          title: "Information Architecture Overhaul",
          description:
            "Restructured 40+ legacy pages into 4 intuitive categories with quick access to policy claims and quote calculators.",
        },
        {
          title: "Mobile-First UI Design",
          description:
            "Designed a crisp, accessible interface optimized for mobile viewports, featuring bold typography and clean form inputs.",
        },
      ],
      outcome:
        "Customer claim form submissions via web increased by 65%, reducing hotline support queue length significantly.",
      images: ["/images/EIC 01.png"],
    },
  },
  {
    slug: "gelagle",
    title: "Gelagle Stock",
    description:
      "Gelagle is an inventory tracking platform built for small retailers and warehouse operators to manage stock in real time. The client needed a system that could simplify complex stock workflows receiving, tracking, and reordering into an interface simple enough for non-technical shop owners to use daily",
    tags: ["App", "SaaS"],
    image: "/images/Gelagle.png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Gelagle simplifies inventory management for local retail businesses, combining real-time stock tracking with automated reorder alerts.",
      role: "Product Designer",
      duration: "4 weeks",
      tools: ["Figma", "Design System"],
      problem:
        "Shop owners relied on manual paper ledgers, causing frequent stockouts, miscounted inventory, and delayed restocking.",
      process: [
        {
          title: "Contextual Field Observations",
          description:
            "Spent 3 days observing shop managers in retail environments to design zero-friction barcode and quick-add actions.",
        },
        {
          title: "High-Contrast Dashboard & Alerting",
          description:
            "Crafted high-contrast, large-touch target interfaces for fast scanning in low-light shop environments.",
        },
      ],
      outcome:
        "Reduced daily inventory auditing time from 2 hours down to 15 minutes for early pilot retailers.",
      images: [],
    },
  },
  {
    slug: "emeda",
    title: "E-Commerce Website",
    description:
      "E-meda is an online platform for authentic traditional Ethiopian clothing. I designed the full landing page and product listing experience from the hero section to the featured categories grid.",
    tags: ["Web", "E-Commerce"],
    image: "/images/Emeda.png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "An immersive cultural e-commerce experience showcasing high-end traditional attire with custom sizing and international checkout.",
      role: "Lead UI Designer",
      duration: "3 weeks",
      tools: ["Figma", "Shopify Design"],
      problem:
        "Traditional clothing buyers needed confidence in fabric quality, embroidery detail, and sizing accuracy before buying online.",
      process: [
        {
          title: "Visual Storytelling & Grid Layout",
          description:
            "Designed high-resolution gallery cards and interactive zoom views highlighting authentic textile patterns.",
        },
        {
          title: "Streamlined Checkout Experience",
          description:
            "Built a simplified 3-step checkout with multi-currency payment integrations and custom measurement input.",
        },
      ],
      outcome:
        "Boosted add-to-cart conversion rate by 34% within the first month of launch.",
      images: ["/images/Emeda 01.png"],
    },
  },
  {
    slug: "learn",
    title: "Learn – Gamified Study App",
    description:
      "Learn is a gamified study app for Grade 9 students, covering Chemistry, Physics, Maths, and Biology with XP points, streaks, quizzes, and leaderboards",
    tags: ["App", "EdTech"],
    image: "/images/Learn (6).png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Gamified mobile learning app turning Grade 9 STEM curriculum into bite-sized daily challenges and competitive quiz battles.",
      role: "UX/UI & Gamification Designer",
      duration: "5 weeks",
      tools: ["Figma", "Illutstrator", "Rive"],
      problem:
        "High student drop-off in traditional study apps due to boring text-heavy content and lack of reward mechanics.",
      process: [
        {
          title: "Gamification Loop Design",
          description:
            "Integrated XP rewards, daily streaks, avatar unlocks, and class leaderboards to maximize daily active retention.",
        },
        {
          title: "Interactive Quiz Interface",
          description:
            "Designed playful micro-interactions and tactile feedback for correct answers and streak multipliers.",
        },
      ],
      outcome:
        "Achieved a 78% 7-day user retention rate during beta testing with over 1,200 active student users.",
      images: ["/images/Learn 01.png"],
    },
  },
  {
    slug: "planz",
    title: "Landing Page Design",
    description:
      "Plan Z (Smart Aquatics) is a luxury aquatic and landscape design company specializing in bespoke pools, water features, and outdoor living spaces for highend residential and commercial projects. The client needed a website that felt as premium and refined as the properties they build one that could speak to architects, engineers, homeowners, and contractors alike.",
    tags: ["Web", "Branding"],
    image: "/images/Plan.png",
    featured: true,
    sampleUrl: "https://www.figma.com/design/vxxjkJWIRS84aNNoYsgInm/Sample-Design-for-mobile---web?node-id=0-1&p=f&t=Q0eODAdjJDxZHGFD-0",
    caseStudy: {
      overview:
        "Luxury branding and landing page for Plan Z, presenting high-end architectural pool and landscape engineering.",
      role: "Lead Web Designer",
      duration: "3 weeks",
      tools: ["Figma", "Framer"],
      problem:
        "The client needed to attract high-net-worth clients and top architectural firms with a website reflecting architectural precision.",
      process: [
        {
          title: "Luxury Aesthetics & Typography",
          description:
            "Selected refined serif typography, dark moody palettes, and full-bleed architectural photography showcases.",
        },
        {
          title: "Architectural Consultation Booking",
          description:
            "Designed an exclusive multi-step project inquiry form tailored for custom architectural projects.",
        },
      ],
      outcome:
        "Generated 18 high-value commercial project inquiries within 30 days of site launch.",
      images: ["/images/Aqua.png"],
    },
  },
];
