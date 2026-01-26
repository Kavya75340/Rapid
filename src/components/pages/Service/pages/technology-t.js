import { Database, Shield, Lightbulb } from "lucide-react";

export const technologyTransformationPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Technology Transformation",
    subtitle:
      "Enabling modern, scalable technology adoption to accelerate innovation, agility, and enterprise performance",
    backgroundVideo: "/assets/video-technology.webm",
    cards: [
      {
        title:
          "Accelerate technology transformation with enterprise-ready strategies and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your technology strategy built for scale, security, and resilience?",
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
    heading: "Drive technology-led modernization and operational agility",
    description:
      "Support enterprises in transforming and optimizing technology landscapes through secure architectures, modernization initiatives, and managed digital operations.",
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
        "Building secure, scalable, and future-ready technology foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Technology strategy and transformation",
        description:
          "Define and execute technology strategies that improve agility, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Platform modernization and engineering",
        description:
          "Design and modernize platforms to deliver resilient, cost-efficient, and hybrid digital ecosystems",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep technology and industry expertise",
        description:
          "Apply global experience across platforms, industries, and complex enterprise environments",
      },
      {
        icon: Shield,
        title: "Secure and future-ready technology platforms",
        description:
          "Build technology environments designed for security, compliance, and long-term scalability",
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
        question: "What is technology transformation?",
        answer:
          "Technology transformation enables organizations to modernize systems, upgrade processes, and evolve platforms to enhance agility, efficiency, and long-term business value.",
      },
      {
        question: "Why do enterprises prioritize technology transformation?",
        answer:
          "Enterprises prioritize technology transformation to reduce legacy constraints, accelerate innovation, strengthen security, and deliver better digital experiences at scale.",
      },
      {
        question: "How can we start with technology transformation?",
        answer:
          "Teams can begin technology transformation by evaluating existing architectures, defining modernization goals, selecting suitable technologies, and executing a structured roadmap aligned with business objectives.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Technology transformation insights & perspectives",
    items: [
      {
        category: "Blog",
        title: "Scaling technology modernization",
        description:
          "How enterprises are transforming platforms using modern digital architectures.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why technology transformation is a boardroom priority",
        description:
          "Enterprises investing in digital platforms for resilience and growth.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of enterprise technology",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};