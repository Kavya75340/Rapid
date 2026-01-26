import {
    ArrowRight,
    Building2,
    Heart,
    ShoppingCart,
    Factory,
    Radio,
    Zap,
    Landmark,
} from "lucide-react";

const industries = [
    {
        icon: Heart,
        name: "Healthcare",
        count: 45,
        color: "bg-red-500/10 text-red-500",
        href: "/case-studies?industry=healthcare",
    },
    {
        icon: Landmark,
        name: "Banking & Finance",
        count: 62,
        color: "bg-blue-500/10 text-blue-500",
        href: "/case-studies?industry=banking",
    },
    {
        icon: ShoppingCart,
        name: "Retail",
        count: 38,
        color: "bg-green-500/10 text-green-500",
        href: "/case-studies?industry=retail",
    },
    {
        icon: Factory,
        name: "Manufacturing",
        count: 54,
        color: "bg-orange-500/10 text-orange-500",
        href: "/case-studies?industry=manufacturing",
    },
    {
        icon: Radio,
        name: "Telecommunications",
        count: 29,
        color: "bg-purple-500/10 text-purple-500",
        href: "/case-studies?industry=telecom",
    },
    {
        icon: Zap,
        name: "Energy & Utilities",
        count: 41,
        color: "bg-yellow-500/10 text-yellow-500",
        href: "/case-studies?industry=energy",
    },
    {
        icon: Building2,
        name: "Government",
        count: 33,
        color: "bg-slate-500/10 text-slate-500",
        href: "/case-studies?industry=government",
    },
];

const IndustryShowcase = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-full mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                        Industries We Serve
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Success Across Every Sector
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From healthcare to finance, our solutions drive
                        transformation across diverse industries
                    </p>
                </div>

                {/* Industry Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                    {industries.map((industry) => {
                        const Icon = industry.icon;

                        return (
                            <a
                                key={industry.name}
                                href={industry.href}
                                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500/30 transition-all text-center"
                            >
                                <div
                                    className={`w-14 h-14 rounded-full ${industry.color} flex items-center justify-center mx-auto mb-4`}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                                    {industry.name}
                                </h3>

                                <p className="text-xs text-gray-500">
                                    {industry.count} Case Studies
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustryShowcase;
