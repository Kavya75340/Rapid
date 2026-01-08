import { Lightbulb, Database } from "lucide-react";

export const emergingTechnologyPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Emerging Technology Services",
    subtitle:
      "Accelerating adoption of next-generation technologies to drive innovation, resilience, and competitive advantage",
    backgroundVideo: "/assets/video-emerging-tech.webm",
    cards: [
      {
        title:
          "Transform enterprise capabilities with next-generation technology adoption",
        linkText: "Explore the solution brief",
        href: "#",
      },
      {
        title:
          "Is your organization prepared for the next wave of disruption?",
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
      "Enable smarter decisions through emerging technology innovation",
    description:
      "Help enterprises identify, adopt, and scale emerging technologies through secure architectures, modernization strategies, and platform-led execution.",
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
        "Driving innovation through scalable, future-ready emerging technologies",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Lightbulb,
        title: "AI, automation, and intelligent systems",
        description:
          "Leverage intelligent technologies to improve decision-making, efficiency, and business outcomes",
        href: "#",
      },
      {
        icon: Database,
        title: "Cloud-native and edge innovation",
        description:
          "Design and deploy scalable cloud and edge solutions to support next-generation use cases",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep industry and technology expertise",
        description:
          "Access global specialists with proven experience across emerging technology ecosystems",
      },
      {
        icon: Database,
        title: "Future-ready enterprise architecture",
        description:
          "Build secure, scalable foundations designed to support rapid technology evolution",
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
        question: "What are emerging technology services?",
        answer:
          "Emerging technology services enable organizations to evaluate, adopt, and scale next-generation technologies to enhance innovation, agility, and long-term business value.",
      },
    ],
  },
};
