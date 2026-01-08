import { ArrowRight } from "lucide-react";

const featuredItems = [
    {
        id: 1,
        title: "Rapidcode and FNBO recognized by IDC for digital lending innovation",
        category: "Press Release",
        href: "/newsroom/fnbo-idc",
        color: "from-blue-bright to-primary",
    },
    {
        id: 2,
        title: "Why AI in the workflow is essential to unlocking value for organizations",
        category: "Article",
        href: "/insights/ai-workflow",
        color: "from-primary to-navy",
    },
    {
        id: 3,
        title: "Forbes Technology Council: Breaking the AI pilot trap",
        category: "Article",
        href: "/insights/ai-pilot-trap",
        color: "from-navy to-blue-dark",
    },
    {
        id: 4,
        title: "Rapidcode releases sixth annual Sustainability Report",
        category: "Report",
        href: "/sustainability-report",
        color: "from-blue-dark to-primary",
    },
];

export const FeaturedContent = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
                    Featured content
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`h-40 bg-gradient-to-br ${item.color}`}
                            />

                            <div className="p-6">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    {item.category}
                                </span>

                                <h3 className="mt-2 text-lg font-semibold text-foreground line-clamp-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
                                    <span>Explore more</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
