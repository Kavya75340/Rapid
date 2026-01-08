import { Shield, Lightbulb } from "lucide-react";

export const cybersecurityPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Cybersecurity Services",
    subtitle:
      "Strengthening enterprise security postures to protect critical assets, data, and digital operations",
    backgroundVideo: "/assets/video-cybersecurity.webm",
    cards: [
      {
        title:
          "Enhance cyber resilience through comprehensive security transformation",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your security strategy prepared to address evolving cyber threats?",
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
    heading: "Enable proactive and resilient cybersecurity operations",
    description:
      "Support enterprises in securing digital environments through risk-based strategies, advanced security technologies, and continuous threat management.",
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
        "Protecting digital enterprises with scalable, intelligent security solutions",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The RapidCode difference" },
    ],
    services: [
      {
        icon: Shield,
        title: "Security strategy and risk management",
        description:
          "Identify, assess, and mitigate cyber risks to strengthen enterprise security governance",
        href: "#",
      },
      {
        icon: Shield,
        title: "Threat detection and security operations",
        description:
          "Implement advanced monitoring and response capabilities to protect against evolving threats",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep cybersecurity and industry expertise",
        description:
          "Leverage global experience across security frameworks, threat landscapes, and regulatory environments",
      },
      {
        icon: Shield,
        title: "Integrated and future-ready security architecture",
        description:
          "Build scalable, secure architectures designed to adapt to emerging threats",
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
        question: "What are cybersecurity services?",
        answer:
          "Cybersecurity services help organizations protect digital assets, manage cyber risk, and improve resilience against evolving security threats.",
      },
    ],
  },
};
