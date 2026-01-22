import { ArrowRight } from "lucide-react";

const customers = [
    {
        title: "International Ecomm",
        subtitle:
            "End-to-End Digital Transformation for a Global Retail Enterprise",
        description:
            "Rapidcode partnered with GlobalMart to execute a full-scope transformation across cloud migration, cybersecurity revamp, and AI-driven demand forecasting. We modernized 1,200+ retail outlets using digital engineering for automated checkout, introduced blockchain-based supply chain traceability, and deployed IoT sensors across warehouses. Financial controls were strengthened through real-time risk scoring, while a new strategy roadmap optimized store operations in 14 countries. Our managed services team ensured 24/7 operational reliability with a 99.98% uptime SLA. Overall, GlobalMart reduced inventory waste by 42%, improved supply chain speed by 31%, and increased annual revenue by USD 180M through technology transformation initiatives.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
        href: "#",
    },
    {
        title: "Aviation Services",
        subtitle: "AI-Powered Operations and Secure Cloud Modernization",
        description:
            "Rapidcode guided AeroLink through a multi-year modernization program covering cloud-native flight scheduling, cybersecurity hardening, and predictive maintenance using Data & AI. Digital engineering improved aircraft assembly monitoring, while emerging technologies such as AR-assisted technician workflows reduced repair time by 35%. A comprehensive finance & risk module helped the airline comply with global aviation regulations. Managed services stabilized operations with proactive system monitoring. Strategic planning restructured their technology ecosystem, supply chain optimization reduced fuel wastage by 22%, and a complete technology transformation improved passenger experience with real-time flight insights. The result: a 28% boost in operational efficiency across 24 airports.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        href: "#",
    },
    {
        title: "Hospitals Network",
        subtitle:
            "Next-Gen Healthcare Platform Powered by AI, Cloud, and Secure Automation",
        description:
            "Rapidcode transformed HealthSphere’s 300+ hospital network with a unified cloud healthcare platform enabling seamless patient data access. Cybersecurity and zero-trust architecture ensured HIPAA-grade protection. Data & AI enabled early disease detection with 89% predictive accuracy, while digital engineering improved patient onboarding time by 40%. Emerging technologies such as virtual care, connected medical IoT devices, and robotics-assisted pharmacy automation elevated care quality. Finance & risk models supported accurate billing and fraud detection. With managed services providing continuous monitoring, strategy teams redesigned clinical workflows, supply chain optimization improved medicine delivery speed by 37%, and full technology transformation established HealthSphere as a leading digital hospital ecosystem.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        href: "#",
    },
];

function CustomersSection() {
    return (
        <section id="customer_stories" className="py-20 lg:py-28 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                        Our customers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        We're invested in customer success
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customers.map((customer) => (
                        <a
                            key={customer.title}
                            href={customer.href}
                            className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg  transition-all"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={customer.image}
                                    alt={customer.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {customer.title}
                                </h3>

                                <p className="text-primary text-xl font-medium mb-3">
                                    {customer.subtitle}
                                </p>

                                <p className="text-muted-foreground text-lg line-clamp-5">
                                    {customer.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CustomersSection;
