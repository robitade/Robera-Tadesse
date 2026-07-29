export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  date: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "\"Robbie's design work moved our conversion by 34% in the first month. Sharp instincts, faster than anyone I've worked with.\"",
    author: "Biruk Girma",
    role: "CEO and Co-founder at Sumuni",
    company: "Sumuni",
    date: "Jan 2025",
    avatar: "/images/Biruk (2).png",
  },
  {
    quote:
      "\"The kind of designer who thinks like a PM and ships like an engineer. Our design system is finally something the team fights for.\"",
    author: "Natnael Endale",
    role: "Product Manager @ Capital One",
    company: "Capital One",
    date: "Oct 2024",
    avatar: "/images/Natnael.png",
  },
  {
    quote:
      "\"Rare mix of taste and rigor. Every screen felt inevitable by the time we saw the third round.\"",
    author: "Bereket Mitiku",
    role: "CEO @ Possible Technology",
    company: "Possible Technology",
    date: "Feb 2026",
    avatar: "/images/Beki.png",
  },
  {
    quote:
      "Robbie brought a rare combination of speed, polish, and genuine curiosity to every project we worked on together. Whether it was untangling a complex user flow for a fintech product or shaping the visual identity of a platform from scratch.",
    author: "Yared Girma",
    role: "Service: Software Developer",
    company: "Possible Technology",
    date: "Jan 2025",
    avatar: "/images/Screenshot_28-7-2026_164550_yared-girma.vercel.app.jpeg",
  },
];
