import { ArrowRight } from "lucide-react";

const customers = [
    {
        title: "Large Global Convenience Store Chain",
        subtitle:
            "Enabling resilient digital banking services for a diversified economy",
        description:
            "RapidCode developed an ESL-controlled dynamic pricing solution that competitively prices expiring stocks. The successful pilot led to further deployment across 12,000 stores.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        href: "#",
    },
    {
        title: "Arizona Motor Vehicle Division",
        subtitle: "Putting citizens at the heart of government services",
        description:
            "RapidCode transformed Arizona's Motor Vehicle Division with modern systems and technology for faster, more efficient, and friendly customer service.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
        href: "#",
    },
    {
        title: "United Arab Bank",
        subtitle: "Data transformation for excellent customer experience",
        description:
            "RapidCode helps United Arab Bank to transform its data assets, complementing the bank's efforts to enhance customer experiences and boost employee productivity.",
        image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80",
        href: "#",
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
                        We're invested in customer success
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customers.map((customer) => (
                        <a
                            key={customer.title}
                            href={customer.href}
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

                                <p className="text-muted-foreground text-lg line-clamp-3">
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
