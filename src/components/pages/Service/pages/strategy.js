import { Database, Shield, Lightbulb } from "lucide-react";

export const strategyPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Strategy & Consulting",
    subtitle:
      "Enabling data-driven strategy and execution to accelerate growth, agility, and enterprise value",
    backgroundVideo: "/assets/video-strategy.webm",
    cards: [
      {
        title:
          "Accelerate strategic transformation with insight-led planning and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your business strategy designed for scale, resilience, and impact?",
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
    heading: "Drive strategy-led transformation and operational excellence",
    description:
      "Help enterprises define, execute, and sustain business strategies through data-driven insights, operating model design, and transformation programs.",
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
        "Building scalable, resilient, and future-focused strategic foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Enterprise strategy and transformation",
        description:
          "Define and execute strategies that improve growth, agility, and alignment with business objectives",
        href: "#",
      },
      {
        icon: Database,
        title: "Operating model and execution excellence",
        description:
          "Design scalable operating models and execution frameworks that deliver measurable outcomes",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep strategy and industry expertise",
        description:
          "Apply cross-industry insights and proven methodologies across complex enterprise landscapes",
      },
      {
        icon: Shield,
        title: "Resilient and future-ready strategies",
        description:
          "Build strategies designed for risk management, sustainability, and long-term value creation",
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
        question: "What are strategy and consulting services?",
        answer:
          "Strategy and consulting services help organizations define direction, optimize execution, manage risk, and drive sustainable business growth.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Strategy transformation insights & perspectives",
    items: [
      {
        category: "Blog",
        title: "Strategy execution in a digital-first world",
        description:
          "How organizations turn strategic intent into measurable business outcomes.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why agile strategy is the new competitive advantage",
        description:
          "Enterprises adopting adaptive strategies to stay resilient and relevant.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of enterprise strategy",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};