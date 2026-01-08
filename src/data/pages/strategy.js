import { Lightbulb, Database } from "lucide-react";

export const strategyPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Strategy Services",
    subtitle:
      "Defining clear, outcome-driven strategies to accelerate growth, resilience, and long-term enterprise value",
    backgroundVideo: "/assets/video-strategy.webm",
    cards: [
      {
        title:
          "Align business strategy with technology and operating models",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your strategy built to adapt to constant market change?",
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
      "Enable enterprise strategy with clarity and execution focus",
    description:
      "Support organizations in defining and executing business and technology strategies through data-driven insights, operating models, and transformation roadmaps.",
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
        "Turning strategic vision into measurable business outcomes",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Business and technology strategy",
        description:
          "Develop integrated strategies that align growth objectives, technology investments, and execution priorities",
        href: "#",
      },
      {
        icon: Lightbulb,
        title: "Operating model and transformation design",
        description:
          "Design scalable operating models to support organizational change and sustained performance",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep strategic and industry expertise",
        description:
          "Leverage cross-industry experience to address complex strategic and operational challenges",
      },
      {
        icon: Database,
        title: "Outcome-focused transformation approach",
        description:
          "Deliver pragmatic, execution-ready strategies aligned to measurable business outcomes",
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
        question: "What are strategy services?",
        answer:
          "Strategy services help organizations define, align, and execute strategies that drive growth, adaptability, and long-term enterprise success.",
      },
    ],
  },
};
