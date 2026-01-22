import { Database, Shield, Lightbulb } from "lucide-react";

export const managedServicesPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Managed Services",
    subtitle:
      "Delivering secure, scalable managed services to optimize operations, improve resilience, and drive enterprise growth",
    backgroundVideo: "/assets/video-managed-services.webm",
    cards: [
      {
        title:
          "Optimize IT operations with enterprise-grade managed services and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Are your managed services designed for scale, security, and reliability?",
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
    heading: "Enable managed service–led efficiency and operational excellence",
    description:
      "Support enterprises by managing, monitoring, and optimizing IT environments through secure operations, continuous improvement, and proactive service management.",
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
      heading: "Building reliable, scalable, and future-ready managed service operations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Managed services strategy and operations",
        description:
          "Define and deliver managed service models that improve efficiency, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Platform management and optimization",
        description:
          "Manage and optimize platforms to ensure performance, resilience, and cost efficiency across environments",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep managed services and industry expertise",
        description:
          "Leverage proven experience across IT operations, platforms, and complex enterprise environments",
      },
      {
        icon: Shield,
        title: "Secure and resilient service delivery",
        description:
          "Operate environments built for security, compliance, and long-term operational stability",
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
        question: "What are managed services?",
        answer:
          "Managed services enable organizations to outsource, operate, and optimize IT environments to improve reliability, efficiency, and sustained business value.",
      },
    ],
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Managed services insights & perspectives",
    items: [
      {
        category: "Blog",
        title: "Scaling managed services operations",
        description:
          "How enterprises are improving performance through proactive managed service models.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why managed services are key to operational resilience",
        description:
          "How organizations leverage managed services for stability and growth.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of managed service delivery",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};