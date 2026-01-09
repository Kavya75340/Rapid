import { Database, Lightbulb } from "lucide-react";

export const technologyTransformationPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Technology Transformation Services",
    subtitle:
      "Modernizing enterprise technology landscapes to improve agility, resilience, and business performance",
    backgroundVideo: "/assets/video-technology-transformation.webm",
    cards: [
      {
        title:
          "Accelerate enterprise modernization through technology transformation",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your technology foundation ready to support future growth?",
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
      "Enable scalable and resilient technology transformation",
    description:
      "Support organizations in evolving technology environments through modernization programs, cloud adoption, and platform-led transformation initiatives.",
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
        "Driving sustainable enterprise modernization through technology excellence",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Application and platform modernization",
        description:
          "Modernize legacy systems and platforms to improve scalability, performance, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title:
          "Enterprise architecture and transformation execution",
        description:
          "Design and implement technology roadmaps that enable sustainable enterprise transformation",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Proven technology transformation expertise",
        description:
          "Leverage global experience delivering complex, large-scale technology transformations",
      },
      {
        icon: Database,
        title: "Future-ready technology foundations",
        description:
          "Build secure, scalable platforms designed to support continuous innovation and change",
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
        question:
          "What are technology transformation services?",
        answer:
          "Technology transformation services help organizations modernize technology environments to improve agility, resilience, and long-term business outcomes.",
      },
    ],
  },
};
