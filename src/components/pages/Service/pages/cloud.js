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
      "Powering secure, scalable cloud adoption to fuel innovation, agility, and enterprise growth",
    backgroundVideo: "/assets/video-cloud.webm",
    cards: [
      {
        title:
          "Fast-track cloud transformation with enterprise-ready strategy and execution",
        linkText: "Explore the solution overview",
        href: "#",
      },
      {
        title:
          "Is your cloud strategy designed for scale, security, and resilience?",
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
    heading: "Enable cloud-driven modernization and business agility",
    description:
      "Help enterprises adopt, optimize, and manage cloud ecosystems through secure architectures, modernization initiatives, and managed cloud services.",
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
      heading: "Creating secure, scalable, and future-ready cloud platforms",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode advantage" },
    ],
    services: [
      {
        icon: Database,
        title: "Cloud strategy and transformation",
        description:
          "Shape and deliver cloud strategies that enhance agility, scalability, and business outcomes",
        href: "#",
      },
      {
        icon: Database,
        title: "Cloud migration and platform engineering",
        description:
          "Architect and migrate workloads to resilient, cost-efficient cloud and hybrid platforms",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Proven cloud and industry expertise",
        description:
          "Apply deep experience across hyperscalers, industries, and complex enterprise landscapes",
      },
      {
        icon: Shield,
        title: "Secure and scalable cloud foundations",
        description:
          "Deliver cloud environments built for security, compliance, and long-term growth",
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
          "Cloud services empower enterprises to create, govern, and scale cloud ecosystems, enabling higher agility, operational excellence, and sustainable business impact.",
      },
      {
        question: "Why do companies rely on cloud transformation?",
        answer:
          "Businesses adopt cloud transformation to accelerate innovation, reduce infrastructure overhead, strengthen security, and unlock faster time-to-market advantages.",
      },
      {
        question: "How can we start with cloud adoption?",
        answer:
          "Teams can begin cloud adoption by assessing current workloads, defining migration priorities, selecting the right cloud strategy, and executing a phased rollout aligned with business goals.",
      },
    ]
    
  },

  /* ================= INSIGHTS ================= */
  insights: {
    eyebrow: "Trends and insights",
    heading: "Cloud transformation insights & updates",
    items: [
      {
        category: "Blog",
        title: "Scaling cloud modernization",
        description:
          "How enterprises are accelerating application modernization using cloud-native approaches.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        href: "/blog",
      },
      {
        category: "Article",
        title: "Why multi-cloud is the new enterprise norm",
        description:
          "How organizations leverage multi-cloud for resilience and flexibility.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        href: "/case-studies",
      },
      {
        category: "Case Study",
        title: "What’s next in cloud automation",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        href: "/case-studies",
      },
    ],
  },
};