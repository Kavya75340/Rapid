import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = ["Corporate", "Cyber resilience", "Data & AI", "Hybrid IT"];

const insights = {
    Corporate: [
        {
            id: 1,
            title: "Are you prepared for future risks and technology transformation?",
            description:
                "Business leaders worldwide trust their current technology, yet remain concerned it may not be fully prepared for future risks and opportunities.",
            cta: { text: "Read the 2024 report", href: "/reports/readiness" },
        },
    ],
    "Cyber resilience": [
        {
            id: 2,
            title: "How zero trust enables banks to adapt",
            description:
                "Many banks and financial services providers are adopting a zero trust model. Often defined as deny by default, zero trust enforces stronger controls over asset access",
            cta: { text: "Read the article", href: "/articles/zero-trust" },
        },
    ],
    "Data & AI": [
        {
            id: 3,
            title: "The next major evolution of automotive telematics",
            description:
                "Telematics is driving significant progress across the automotive industry, spanning vehicle design and supply chain optimization to enhanced driver safety.",
            cta: { text: "Read the article", href: "/articles/telematics" },
        },
    ],
    "Hybrid IT": [
        {
            id: 4,
            title: "3 ways to revive hospital IT systems",
            description:
                "Back-office operations are critical to patient care and hospital financial health, yet their IT systems are often outdated and exposed.",
            cta: { text: "Read the article", href: "/articles/hospital-it" },
        },
    ],
};

const TrendsInsightsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Corporate");

    // ✅ JS-safe access
    const currentInsights = insights[activeCategory] || [];

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-12">
                    <span className="text-[#0070e0] text-sm font-medium uppercase tracking-wider">
                        Trends & Insights
                    </span>
                    <h2 className="mt-4 text-3xl lg:text-4xl font-light text-foreground">
                        Ideas That Drive Transformation
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                activeCategory === category
                                    ? "bg-[#0070e0] text-white"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Insights Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {currentInsights.map((insight) => (
                        <div key={insight.id} className="lg:col-span-2">
                            <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4">
                                {insight.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl">
                                {insight.description}
                            </p>
                            <a
                                href={insight.cta.href}
                                className="inline-flex items-center gap-2 text-[#0070e0] font-medium hover:underline"
                            >
                                {insight.cta.text}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Featured News */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="bg-[#0070e0]/10 rounded-lg p-6 lg:p-8">
                        <span className="text-xs uppercase tracking-wider text-[#0070e0] font-semibold">
                            Featured
                        </span>
                        <h3 className="mt-2 text-xl font-semibold text-foreground">
                            Rapidcode recognized as a Global Top 100 Most Loved
                            Workplace for the second year
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                            Rapidcode cultivates a dynamic, service-driven
                            workplace through “The Rapidcode Way,” strengthening
                            collaboration, delivering value, and enabling global
                            knowledge exchange.
                        </p>
                        <a
                            href="/news/most-loved-workplace"
                            className="inline-flex items-center gap-2 text-[#0070e0] font-medium mt-4 hover:underline"
                        >
                            Learn more
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TrendsInsightsSection;
