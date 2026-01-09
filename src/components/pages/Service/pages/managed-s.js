import { Database, Shield } from "lucide-react";

export const managedServicesPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Managed Services",
    subtitle:
      "Proactively managing enterprise IT environments to improve performance, resilience, and business continuity",
    backgroundVideo: "/assets/video-managed-services.webm",
    cards: [
      {
        title:
          "Enhance operational efficiency through end-to-end managed services",
        linkText: "Explore the service overview",
        href: "#",
      },
      {
        title:
          "Is your IT operating model built for scale and reliability?",
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
    heading:
      "Strengthen IT operations with proactive managed services",
    description:
      "Support enterprises with continuous monitoring, optimization, and management across infrastructure, applications, and platforms.",
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
        "Delivering resilient, scalable, and outcome-driven managed services",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Infrastructure and application management",
        description:
          "Ensure stability, performance, and availability across critical enterprise systems",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cloud and platform operations",
        description:
          "Manage and optimize cloud and hybrid platforms to improve agility and cost control",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Database,
        title: "Global delivery and operational expertise",
        description:
          "Leverage experienced teams delivering consistent service across geographies",
      },
      {
        icon: Shield,
        title: "Resilient and scalable service models",
        description:
          "Operate secure, future-ready environments designed for business continuity",
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
        question: "What are managed services?",
        answer:
          "Managed services enable organizations to offload IT operations while improving reliability, efficiency, and long-term operational performance.",
      },
    ],
  },
};
