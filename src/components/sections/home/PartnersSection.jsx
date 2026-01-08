import { ArrowRight } from "lucide-react";

const partners = [
    { name: "Google Cloud", logo: "G" },
    { name: "Microsoft", logo: "M" },
    { name: "AWS", logo: "AWS" },
    { name: "NVIDIA", logo: "N" },
    { name: "Snowflake", logo: "S" },
    { name: "Salesforce", logo: "SF" },
    { name: "ServiceNow", logo: "SN" },
    { name: "Databricks", logo: "DB" },
];

const PartnersSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-hero text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                        Our partners
                    </span>
                    <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
                        Creating value via strategic partnerships
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                                    {partner.logo}
                                </div>
                                <p className="text-xs text-primary-foreground/60 mt-2 hidden lg:block">
                                    {partner.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="/partnerships"
                        className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:gap-3 transition-all"
                    >
                        Explore our partnerships
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default PartnersSection;
