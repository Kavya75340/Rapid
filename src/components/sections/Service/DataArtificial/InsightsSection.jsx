import { ArrowRight } from "lucide-react";

const insights = [
    {
        category: "Blog",
        title: "5 best practices for implementing Copilot for Microsoft 365 at scale",
        description:
            "Unlock the full potential of Copilot for Microsoft 365 by preparing data, strategizing, collaborating with Microsoft, adopting responsible AI, and refining continuously.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        href: "#",
    },
    {
        category: "Podcast",
        title: "How to successfully scale production-level generative AI projects",
        description:
            "Hear our experts discuss the future of generative AI in telecom, the role of AI agents in network operations, and the need for ethical AI practices.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        href: "#",
    },
    {
        category: "Article",
        title: "How AI eliminates tech debt and unlocks new software possibilities",
        description:
            "The article highlights AI's role in reducing technical debt, improving code quality, and enabling new development approaches.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        href: "#",
    },
];

function InsightsSection() {
    return (
        <section
            id="trends-and-insights"
            className="py-20 lg:py-28 bg-background"
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                        Trends and insights
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Data and AI news and perspectives
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Featured Insight */}
                    <a
                        href={insights[0].href}
                        className=" group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={insights[0].image}
                                alt={insights[0].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6 lg:p-8">
                            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                                {insights[0].category}
                            </span>

                            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {insights[0].title}
                            </h3>

                            <p className="text-muted-foreground mb-4">
                                {insights[0].description}
                            </p>

                            <span className="text-primary text-sm font-medium inline-flex items-center">
                                Read more
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>

                    {/* Other Insights */}
                    <div className="flex flex-col gap-6">
                        {insights.slice(1).map((insight) => (
                            <a
                                key={insight.title}
                                href={insight.href}
                                className="group flex bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
                            >
                                <div className="w-40 lg:w-48 flex-shrink-0 overflow-hidden">
                                    <img
                                        src={insight.image}
                                        alt={insight.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-4 lg:p-6 flex flex-col justify-center">
                                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                        {insight.category}
                                    </span>

                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {insight.title}
                                    </h3>

                                    <span className="text-primary text-sm font-medium inline-flex items-center">
                                        {insight.category === "Podcast"
                                            ? "Listen to the podcast"
                                            : "Read more"}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InsightsSection;
