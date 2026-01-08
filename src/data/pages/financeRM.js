import { Database, Shield } from "lucide-react";

export const financeRiskManagementPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Finance and Risk Management Services",
    subtitle:
      "Strengthening financial control and risk governance to enhance resilience, compliance, and business confidence",
    backgroundVideo: "/assets/video-finance-risk.webm",
    cards: [
      {
        title:
          "Advance financial performance and risk governance through digital transformation",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your finance and risk framework prepared for regulatory and market change?",
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
    heading: "Enable data-driven finance and integrated risk management",
    description:
      "Support enterprises in modernizing finance and risk functions through digital platforms, advanced analytics, and controlled execution models.",
    video: {
      enabled: false,
      label: "",
    },
  },

  /* ================= HOW WE HELP ================= */
  howWeHelp: {
    sectionMeta: {
      id: "how-we-help",
      eyebrow: "How RapidCode helps",
      heading:
        "Strengthening financial governance with intelligent, compliant, and scalable solutions",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Digital finance transformation",
        description:
          "Improve financial planning, reporting accuracy, and operational efficiency through modern finance solutions",
        href: "#",
      },
      {
        icon: Shield,
        title: "Enterprise risk and compliance management",
        description:
          "Strengthen risk identification, regulatory compliance, and governance across the organization",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Database,
        title: "Proven finance and risk domain expertise",
        description:
          "Leverage global experience across financial operations, risk frameworks, and regulatory environments",
      },
      {
        icon: Shield,
        title: "Technology-enabled control frameworks",
        description:
          "Build secure, scalable finance and risk platforms aligned with evolving regulations",
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
          "Finance and risk management services help organizations modernize finance operations and manage risk more effectively to improve compliance, resilience, and long-term business performance.",
      },
    ],
  },
};
