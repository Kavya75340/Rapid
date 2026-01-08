import { ArrowRight } from "lucide-react";

const featuredCards = [
    {
        id: 1,
        category: "AI readiness assessment",
        title: "How strong is your AI strategy?",
        href: "/insights/ai-assessment",
    },
    {
        id: 2,
        category: "The Global Cloud-Native Insights Report",
        title: "The inaugural enterprise customer experience benchmark",
        href: "/insights/cx-report",
    },
    {
        id: 3,
        category: "Banking and capital markets",
        title: "The future of intelligent banking begins today",
        href: "/insights/intelligent-banking",
    },
];

const InsideEdgeSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-6">
                    {featuredCards.map((card, index) => (
                        <a
                            key={card.id}
                            href={card.href}
                            className="group block p-6 hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-lg text-muted-foreground">
                                {card.category}
                            </div>

                            <h3 className="mt-7 h-30 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {card.title}
                            </h3>

                            <div className="mt-4 flex p-3 w-40 text-primary font-medium text-lg border-2 border-black hover:bg-black hover:text-white">
                                Read the article
                                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default InsideEdgeSection;
