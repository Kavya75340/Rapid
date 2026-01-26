import { Database, Shield, Lightbulb } from "lucide-react";

export const digitalEngineeringManufacturingPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Digital Engineering & Manufacturing",
    subtitle:
      "Enabling secure, scalable digital engineering adoption to accelerate innovation, agility, and manufacturing growth",
    backgroundVideo: "/assets/video-digital-manufacturing.webm",
    cards: [
      {
        title:
          "Accelerate digital engineering transformation with enterprise-grade strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your manufacturing strategy built for scale, resilience, and efficiency?",
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
    heading: "Drive digital engineering–led modernization and manufacturing agility",
    description:
      "Support manufacturers in adopting and optimizing digital engineering platforms through secure architectures, smart factory programs, and managed manufacturing operations.",
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
        "Building secure, scalable, and future-ready digital engineering foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Digital engineering strategy and transformation",
        description:
          "Define and execute digital engineering strategies that improve agility, scalability, and manufacturing alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Manufacturing platforms and engineering modernization",
        description:
          "Design and modernize resilient, cost-optimized manufacturing and Industry 4.0 platforms",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep digital engineering and manufacturing expertise",
        description:
          "Leverage global experience across smart manufacturing, automation, and complex industrial environments",
      },
      {
        icon: Shield,
        title: "Secure and future-ready manufacturing foundations",
        description:
          "Build manufacturing systems designed for security, compliance, and long-term scalability",
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
        question: "What are digital engineering and manufacturing services?",
        answer:
          "Digital engineering and manufacturing services enable organizations to upgrade products, modernize factories, and streamline operations to enhance efficiency, resilience, and long-term business value.",
      },
      {
        question: "Why do enterprises adopt digital engineering?",
        answer:
          "Enterprises adopt digital engineering to accelerate product innovation, reduce operational bottlenecks, strengthen production quality, and achieve scalable manufacturing outcomes.",
      },
      {
        question: "How can we start with digital engineering transformation?",
        answer:
          "Teams can begin digital engineering transformation by assessing current processes, defining modernization priorities, selecting the right technologies, and executing a phased roadmap aligned with business goals.",
      },
    ]
    
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Digital engineering and manufacturing insights",
    items: [
      {
        category: "Blog",
        title: "Scaling digital manufacturing transformation",
        description:
          "How manufacturers are adopting digital engineering to drive smarter, faster production.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why digital engineering defines smart factories",
        description:
          "How organizations build resilience using Industry 4.0 technologies.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of digital manufacturing innovation",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};