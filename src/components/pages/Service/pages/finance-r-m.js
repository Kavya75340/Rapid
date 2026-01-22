import { Database, Shield, Lightbulb } from "lucide-react";

export const financeRiskManagementPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Finance & Risk Management",
    subtitle:
      "Enabling secure, scalable finance and risk capabilities to strengthen governance, agility, and enterprise growth",
    backgroundVideo: "/assets/video-finance-risk.webm",
    cards: [
      {
        title:
          "Accelerate finance and risk transformation with enterprise-grade strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your finance and risk strategy built for compliance, scale, and resilience?",
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
    heading: "Drive finance-led modernization and risk-aware operations",
    description:
      "Support enterprises in modernizing finance and risk functions through secure platforms, regulatory compliance programs, and managed risk operations.",
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
      heading:
        "Building secure, scalable, and future-ready finance and risk foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Finance and risk strategy transformation",
        description:
          "Define and execute finance and risk strategies that enhance agility, governance, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Digital finance platforms and risk engineering",
        description:
          "Design and modernize resilient, cost-efficient finance and risk management platforms",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep finance and risk domain expertise",
        description:
          "Leverage global experience across financial operations, risk management, and regulatory environments",
      },
      {
        icon: Shield,
        title: "Secure and compliant financial foundations",
        description:
          "Build finance and risk environments designed for security, compliance, and long-term scalability",
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
        question: "What are finance and risk management services?",
        answer:
          "Finance and risk management services help organizations manage financial performance, mitigate risk, ensure compliance, and drive sustained business value.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Finance and risk management insights",
    items: [
      {
        category: "Blog",
        title: "Scaling digital finance and risk transformation",
        description:
          "How enterprises are modernizing finance and risk functions using digital platforms.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why risk-aware finance drives resilience",
        description:
          "How organizations strengthen governance through modern risk management strategies.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of finance and risk operations",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};