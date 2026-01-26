import { Database, Shield, Lightbulb } from "lucide-react";

export const emergingTechPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Services",
      href: "#",
    },
    title: "Emerging Technologies",
    subtitle:
      "Accelerating secure, scalable adoption of emerging technologies to drive innovation, agility, and enterprise growth",
    backgroundVideo: "/assets/video-emerging-tech.webm",
    cards: [
      {
        title:
          "Fast-track emerging technology transformation with enterprise-ready strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your technology strategy ready for scale, security, and future resilience?",
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
    heading: "Drive emerging technology–led modernization and operational agility",
    description:
      "Help enterprises adopt, integrate, and optimize emerging technologies through secure architectures, innovation programs, and managed technology operations.",
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
      heading: "Building secure, scalable, and future-ready technology foundations",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Emerging technology strategy and transformation",
        description:
          "Define and deliver technology strategies that enhance agility, scalability, and business alignment",
        href: "#",
      },
      {
        icon: Database,
        title: "Platform engineering and modernization",
        description:
          "Design and implement resilient, cost-efficient platforms across cloud, AI, and digital ecosystems",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep emerging tech and industry expertise",
        description:
          "Leverage experience across AI, cloud, automation, and complex enterprise environments",
      },
      {
        icon: Shield,
        title: "Secure and future-proof technology foundations",
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
        question: "What are emerging technology services?",
        answer:
          "Emerging technology services enable organizations to embrace, operationalize, and scale next-generation technologies to enhance agility, efficiency, and long-term business value.",
      },
      {
        question: "Why do companies invest in emerging technologies?",
        answer:
          "Organizations invest in emerging technologies to drive innovation, automate key processes, strengthen competitiveness, and unlock new revenue opportunities across digital ecosystems.",
      },
      {
        question: "How can we start with emerging technology adoption?",
        answer:
          "Teams can begin emerging technology adoption by analyzing current capabilities, identifying high-impact use cases, selecting the right platforms, and executing a phased strategy aligned with business goals.",
      },
    ]
    
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Emerging technology insights & perspectives",
    items: [
      {
        category: "Blog",
        title: "Scaling emerging technology adoption",
        description:
          "How enterprises are leveraging AI, automation, and digital platforms to innovate faster.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why emerging technologies define future-ready enterprises",
        description:
          "How organizations build resilience using next-generation technologies.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "The future of emerging technology innovation",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};