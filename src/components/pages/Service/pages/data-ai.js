import { Brain, Database, Shield, Lightbulb } from "lucide-react";

export const dataAIPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Data and Artificial Intelligence Services",
    subtitle:
      "Unlocking value from data and AI faster to help you scale and transform your digital business",
    backgroundVideo: "/assets/video4.webm",
    cards: [
      {
        title:
          "Realize business value with end-to-end data and AI transformation",
        linkText: "Read the solution brief",
        href: "#",
      },
      {
        title: "Are you at the readiness tipping point?",
        linkText: "Read the report",
        href: "#",
      },
      {
        title: "RapidCode named a Leader in Data Center Outsourcing Services",
        linkText: "Learn more",
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
    heading: "Improve the use of data insights in decision-making",
    description: `
Gather business insights at scale with a robust data foundation,
modernization, and platform management. Our global expertise—
combined with the latest innovations from technology partners and
hyperscalers—prepares your business for artificial intelligence.
We integrate reliable, modular, and scalable solutions with your
existing data architecture to accelerate your data modernization
journey, enabling faster data preparation through automated
workflows and a modern data fabric.
    `,
    video: {
      enabled: true,
      label: "Watch the video",
    },
  },

  /* ================= HOW WE HELP ================= */
  howWeHelp: {
    sectionMeta: {
      id: "how-we-help",
      eyebrow: "How RapidCode helps",
      heading:
        "Delivering scalable business insights with AI-ready data modernization",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Brain,
        title: "AI and generative AI",
        description: "Innovate and drive value for your enterprise",
        href: "#",
      },
      {
        icon: Database,
        title: "Data modernization",
        description:
          "Modernize your data estate for transformative business value",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Global expertise",
        description:
          "Gain access to global expertise for future-ready solutions through our people, intellectual property and partnerships",
      },
      {
        icon: Database,
        title: "Future-ready solutions",
        description:
          "Build a modern foundation with a data fabric blueprint, leveraging automated tools and workflows",
      },
      {
        icon: Shield,
        title: "Simplified data operations",
        description:
          "Reduce the complexity of your data estate with data governance strategy and a unified console",
      },
    ],
  },

  /* ================= FAQ ================= */
  faqs: {
    sectionMeta: {
      heading: "You have questions. We have answers."
    },
    items: [
      {
        question: "What are data and artificial intelligence services?",
        answer:
          "Data and artificial intelligence (AI) services encompass a wide range of solutions designed to help organizations leverage data and AI technologies to generate business value.",
      },
      {
        question:
          "How can AI-powered data services improve customer experiences?",
        answer:
          "AI-powered data services enhance customer experiences by personalizing interactions and increasing efficiency.",
      },
      {
        question:
          "How does RapidCode support businesses in adopting generative AI?",
        answer:
          "RapidCode's AI-readiness program prepares businesses for generative AI integration, emphasizing innovation and data management.",
      },
    ],
  },
};
