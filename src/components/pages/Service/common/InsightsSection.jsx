import { ArrowRight } from "lucide-react";

function InsightsSection({ data }) {
    const featured = data.items[0];
    const others = data.items.slice(1);

    return (
        <section
            id={data.sectionId || "trends-and-insights"}
            className="py-20 lg:py-28 bg-background"
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                        {data.eyebrow}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {data.heading}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Featured Insight */}
                    <a
                        href={featured.href}
                        className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6 lg:p-8">
                            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                                {featured.category}
                            </span>

                            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {featured.title}
                            </h3>

                            <p className="text-muted-foreground mb-4">
                                {featured.description}
                            </p>

                            <span className="text-primary text-sm font-medium inline-flex items-center">
                                {featured.ctaText || "Read more"}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>

                    {/* Other Insights */}
                    <div className="flex flex-col gap-6">
                        {others.map((insight, index) => (
                            <a
                                key={index}
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
                                        {insight.ctaText || " Read more"}
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
