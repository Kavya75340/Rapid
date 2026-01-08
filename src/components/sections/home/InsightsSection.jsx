import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
    {
        id: 1,
        title: "2025 Rapidcode Enterprise AI Study: Driving AI execution at scale",
        category: "Digital",
        type: "Reports & research",
        href: "/insights/ai-study",
        gradient: "from-primary to-blue-bright",
    },
    {
        id: 2,
        title: "Healthcare needs a generative AI strategy",
        category: "Health",
        type: "Reports & research",
        href: "/insights/healthcare-ai",
        gradient: "from-blue-bright to-accent",
    },
    {
        id: 3,
        title: "Rapidcode named a Market Leader in HFS Horizons Customer Experience",
        category: "Analytics",
        type: "Reports & research",
        href: "/insights/hfs-horizons",
        gradient: "from-accent to-primary",
    },
];

const InsightsSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <span className="text-primary text-sm font-medium uppercase tracking-wider">
                            Insights
                        </span>
                        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
                            Explore the latest perspectives
                        </h2>
                    </div>

                    <Button
                        variant="outline"
                        className="hidden md:flex"
                        asChild
                    >
                        <a href="/insights">
                            View all insights
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {insights.map((insight, index) => (
                        <a
                            key={insight.id}
                            href={insight.href}
                            className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`h-48 bg-gradient-to-br ${insight.gradient}`}
                            />

                            <div className="p-6">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    {insight.category}
                                </span>

                                <h3 className="mt-3 text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-4">
                                    {insight.title}
                                </h3>

                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <span>View {insight.type}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" asChild>
                        <a href="/insights">
                            View all insights
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
