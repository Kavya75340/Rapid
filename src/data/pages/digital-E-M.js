import { Database, Lightbulb } from "lucide-react";

export const digitalEngineeringManufacturingPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Digital Engineering and Manufacturing Services",
    subtitle:
      "Advancing digital engineering and manufacturing to improve product innovation, efficiency, and operational resilience",
    backgroundVideo: "/assets/video-digital-engineering.webm",
    cards: [
      {
        title:
          "Accelerate product and manufacturing excellence through digital engineering",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your engineering and manufacturing model ready for digital scale?",
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
      "Enable intelligent, digitally connected engineering and manufacturing operations",
    description:
      "Support enterprises in modernizing engineering and manufacturing processes using digital platforms, data-driven insights, and integrated execution models.",
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
        "Transforming engineering and manufacturing with digital-first execution",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Digital product engineering and design",
        description:
          "Enhance product development, design quality, and time-to-market through digital engineering capabilities",
        href: "#",
      },
      {
        icon: Database,
        title: "Smart manufacturing and operations",
        description:
          "Implement connected manufacturing solutions to improve productivity, quality, and operational visibility",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep engineering and manufacturing expertise",
        description:
          "Leverage global experience across product engineering, manufacturing operations, and industrial ecosystems",
      },
      {
        icon: Database,
        title: "Technology-enabled industrial transformation",
        description:
          "Build future-ready engineering and manufacturing environments powered by data, automation, and cloud platforms",
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
          "What are digital engineering and manufacturing services?",
        answer:
          "Digital engineering and manufacturing services help organizations modernize product development and manufacturing operations to drive innovation, efficiency, and long-term operational performance.",
      },
    ],
  },
};
