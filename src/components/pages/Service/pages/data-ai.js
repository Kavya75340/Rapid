import { Database, Shield, Lightbulb } from "lucide-react";

export const dataAIPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Data & AI Services",
    subtitle:
      "Unlocking secure, scalable data and AI capabilities to drive innovation, intelligence, and enterprise growth",
    backgroundVideo: "/assets/video-data-ai.webm",
    cards: [
      {
        title:
          "Accelerate data and AI transformation with enterprise-grade strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your data and AI strategy ready for scale, trust, and impact?",
        linkText: "View the insights report",
        href: "#",
      },
    ],
  },

  /* ================= WHAT WE DO ================= */
  whatWeDo: {
    sectionMeta: {
      id: "what-we-do",
      eyebrow: "What we do",
    },
    heading: "Enable data-driven modernization and intelligent operations",
    description:
      "Help enterprises build, modernize, and scale data and AI platforms through secure architectures, advanced analytics, and managed AI operations.",
    video: {
      enabled: false,
      label: "",
    },
  },

  /* ================= HOW WE HELP ================= */
  howWeHelp: {
    sectionMeta: {
      id: "how-we-help",
      eyebrow: "How Rapidcode helps",
      heading: "Building trusted, scalable, and future-ready data and AI foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Data and AI strategy",
        description:
          "Define and deliver data and AI strategies that improve insight, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Data platforms and AI engineering",
        description:
          "Design and deploy resilient, cost-efficient data platforms and AI-driven solutions",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep data, AI, and industry expertise",
        description:
          "Apply global experience across analytics, AI, and complex enterprise ecosystems",
      },
      {
        icon: Shield,
        title: "Secure and responsible AI foundations",
        description:
          "Build data and AI environments designed for security, governance, and long-term scalability",
      },
    ],
  },

  /* ================= FAQ ================= */
  faqs: {
    sectionMeta: {
      heading: "You have questions. We have answers.",
    },
    items: [
      {
        question: "What are data and AI services?",
        answer:
          "Data and AI services help organizations collect, manage, and transform data into intelligent insights that drive agility, efficiency, and sustained business value.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Data and AI transformation insights",
    items: [
      {
        category: "Blog",
        title: "Scaling data and AI modernization",
        description:
          "How enterprises are unlocking value using modern data platforms and AI models.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why AI-led enterprises are pulling ahead",
        description:
          "How organizations use AI to drive resilience and smarter decisions.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of data and AI automation",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};