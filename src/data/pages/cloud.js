import { Database, Shield, Lightbulb } from "lucide-react";

export const cloudPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Cloud Services",
    subtitle:
      "Enabling secure, scalable cloud adoption to accelerate innovation, agility, and enterprise growth",
    backgroundVideo: "/assets/video-cloud.webm",
    cards: [
      {
        title:
          "Accelerate cloud transformation with enterprise-grade strategies and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your cloud strategy built for scale, security, and resilience?",
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
    heading: "Drive cloud-led modernization and operational agility",
    description:
      "Support enterprises in adopting and optimizing cloud environments through secure architectures, modernization programs, and managed cloud operations.",
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
        "Building secure, scalable, and future-ready cloud foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Cloud strategy and transformation",
        description:
          "Define and execute cloud strategies that improve agility, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Cloud migration and platform engineering",
        description:
          "Design and migrate workloads to resilient, cost-optimized cloud and hybrid platforms",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep cloud and industry expertise",
        description:
          "Leverage global experience across hyperscalers, industries, and complex enterprise environments",
      },
      {
        icon: Shield,
        title: "Secure and future-ready cloud foundations",
        description:
          "Build cloud environments designed for security, compliance, and long-term scalability",
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
        question: "What are cloud services?",
        answer:
          "Cloud services enable organizations to adopt, manage, and optimize cloud environments to drive agility, efficiency, and sustained business value.",
      },
    ],
  },
};
