import { ArrowRight } from "lucide-react";

const customers = [
    {
        title: "International Ecomm",
        subtitle:
            "End-to-End Digital Transformation for a Global Retail Enterprise",
        description:
            "Rapidcode drove enterprise-scale digital transformation using cloud, AI-driven demand forecasting, and secure digital engineering. Smart automation and managed services boosted global efficiency and revenue.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
    {
        title: "Aviation Services",
        subtitle: "AI-Powered Operations and Secure Cloud Modernization",
        description:
            "Rapidcode enabled AI-powered cloud modernization and predictive operations for a global aviation services provider. Digital engineering and strategic transformation improved reliability, compliance, and efficiency across airport ecosystems.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    },
    {
        title: "Hospitals Network",
        subtitle:
            "Next-Gen Healthcare Platform Powered by AI, Cloud, and Secure Automation",
        description:
            "Rapidcode built a secure, AI-driven digital healthcare platform on the cloud. Intelligent automation and managed services enhanced patient care, operational performance, and system scalability.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
];

function CustomersSection() {
    return (
        <section id="our-customers" className="py-20 lg:py-28 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                        Our customers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        We focus on customer success
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customers.map((customer) => (
                        <div
                            key={customer.title}
                            className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CustomersSection;
