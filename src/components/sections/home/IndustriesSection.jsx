import {
    Building2,
    Briefcase,
    Radio,
    Zap,
    Heart,
    Shield,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";

const industries = [
    {
        icon: Building2,
        title: "Banking & Capital Markets",
        href: "/industries/banking",
    },
    {
        icon: Briefcase,
        title: "Business & Technology Services",
        href: "/industries/business",
    },
    { icon: Radio, title: "Communications & Media", href: "/industries/media" },
    { icon: Zap, title: "Energy & Infrastructure", href: "/industries/energy" },
    {
        icon: Heart,
        title: "Health & Life Sciences",
        href: "/industries/health",
    },
    { icon: Shield, title: "Insurance", href: "/industries/insurance" },
    {
        icon: ShoppingBag,
        title: "Retail & Consumer Products",
        href: "/industries/retail",
    },
];

export const IndustriesSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left content */}
                    <div>
                        <span className="text-primary text-sm font-medium uppercase tracking-wider">
                            Industry expertise
                        </span>

                        <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                            We deliver tailored AI and data-driven solutions
                            across industries
                        </h2>

                        <a
                            href="/insights"
                            className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Learn how our innovations are reshaping industries
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Industry list */}
                    <div className="space-y-4">
                        {industries.map((industry, index) => (
                            <a
                                key={industry.title}
                                href={industry.href}
                                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors animate-fade-in-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                    <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div>

                                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                                    {industry.title}
                                </span>

                                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
