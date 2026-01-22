import { Database, Shield, Lightbulb } from "lucide-react";

export const supplyChainPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Supply Chain Services",
    subtitle:
      "Enabling secure, scalable supply chain transformation to enhance visibility, agility, and enterprise growth",
    backgroundVideo: "/assets/video-supply-chain.webm",
    cards: [
      {
        title:
          "Accelerate supply chain transformation with enterprise-grade strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your supply chain strategy built for scale, resilience, and efficiency?",
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
    heading: "Drive digital supply chain modernization and operational agility",
    description:
      "Support enterprises in designing and optimizing supply chains through secure digital platforms, modernization initiatives, and managed supply chain operations.",
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
      heading: "Building resilient, scalable, and future-ready supply chain foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Supply chain strategy and transformation",
        description:
          "Define and execute supply chain strategies that improve visibility, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Digital platforms and supply chain engineering",
        description:
          "Design and implement resilient, cost-efficient supply chain and logistics platforms",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep supply chain and industry expertise",
        description:
          "Leverage global experience across manufacturing, logistics, and complex enterprise ecosystems",
      },
      {
        icon: Shield,
        title: "Secure and resilient supply chain foundations",
        description:
          "Build supply chain environments designed for security, compliance, and long-term scalability",
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
        question: "What are supply chain services?",
        answer:
          "Supply chain services help organizations design, manage, and optimize end-to-end supply chains to improve resilience, efficiency, and sustained business value.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Supply chain transformation insights & perspectives",
    items: [
      {
        category: "Blog",
        title: "Scaling digital supply chains",
        description:
          "How enterprises are building agile supply chains using digital and data-driven approaches.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why resilient supply chains win",
        description:
          "How organizations strengthen operations through modern supply chain strategies.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of supply chain innovation",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};