import { Database, Shield, Lightbulb } from "lucide-react";

export const cyberSecurityPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Cybersecurity Services",
    subtitle:
      "Enabling secure, scalable cybersecurity adoption to protect assets, reduce risk, and drive enterprise confidence",
    backgroundVideo: "/assets/video-cybersecurity.webm",
    cards: [
      {
        title:
          "Accelerate cybersecurity transformation with enterprise-grade strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your security strategy built for scale, compliance, and resilience?",
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
    heading: "Drive security-led modernization and operational resilience",
    description:
      "Support enterprises in strengthening cybersecurity postures through secure architectures, risk management programs, and managed security operations.",
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
      heading: "Building secure, scalable, and future-ready cybersecurity foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Cybersecurity strategy and transformation",
        description:
          "Define and execute security strategies that improve resilience, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Security engineering and modernization",
        description:
          "Design and implement resilient, cost-efficient security platforms across digital environments",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep cybersecurity and industry expertise",
        description:
          "Leverage global experience across security domains, regulations, and complex enterprise environments",
      },
      {
        icon: Shield,
        title: "Secure and compliant security foundations",
        description:
          "Build security environments designed for threat protection, compliance, and long-term scalability",
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
          "Cybersecurity services help organizations protect systems, data, and operations while improving resilience, compliance, and sustained business value.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Cybersecurity insights & perspectives",
    items: [
      {
        category: "Blog",
        title: "Scaling cybersecurity resilience",
        description:
          "How enterprises are strengthening security postures in an evolving threat landscape.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why Zero Trust is the new security standard",
        description:
          "How organizations reduce risk through modern cybersecurity strategies.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of cybersecurity operations",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};