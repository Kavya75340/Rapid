import { Database, Lightbulb } from "lucide-react";

export const supplyChainPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Supply Chain Services",
    subtitle:
      "Transforming end-to-end supply chains to enhance visibility, resilience, and operational performance",
    backgroundVideo: "/assets/video-supply-chain.webm",
    cards: [
      {
        title:
          "Elevate supply chain performance through intelligent transformation",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your supply chain equipped to respond to continuous disruption?",
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
    heading: "Drive resilient, insight-led supply chain operations",
    description:
      "Enable enterprises to modernize supply chain operations using digital platforms, advanced analytics, and integrated execution frameworks.",
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
        "Building agile, intelligent, and future-ready supply chains",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Supply chain planning and optimization",
        description:
          "Enhance demand forecasting, inventory control, and planning precision across extended networks",
        href: "#",
      },
      {
        icon: Database,
        title: "Digital supply chain platforms",
        description:
          "Deploy scalable platforms that improve visibility, coordination, and operational governance",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Comprehensive supply chain expertise",
        description:
          "Apply global experience across sourcing, production, logistics, and distribution ecosystems",
      },
      {
        icon: Database,
        title: "Technology-led transformation",
        description:
          "Establish future-ready supply chains driven by analytics, automation, and cloud technologies",
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
        question: "What do supply chain services deliver?",
        answer:
          "Supply chain services enable organizations to transform and optimize supply chain operations for greater resilience, efficiency, and long-term business continuity.",
      },
    ],
  },
};
