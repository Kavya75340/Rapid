import { Database, Brain, Cog, ArrowRight } from "lucide-react";

const solutions = [
    {
        id: 1,
        icon: Database,
        title: "Data modernization",
        description:
            "Drive enterprise transformation with an AI-ready data foundation",
        href: "/solutions/data-modernization",
        gradient: "from-primary to-blue-bright",
    },
    {
        id: 2,
        icon: Brain,
        title: "Artificial intelligence",
        description:
            "Sharpen your competitive edge with AI and real-time analytics",
        href: "/solutions/ai",
        gradient: "from-blue-bright to-accent",
    },
    {
        id: 3,
        icon: Cog,
        title: "AI-powered operations",
        description:
            "Deliver results at speed and scale with AI in the workflow",
        href: "/solutions/ai-operations",
        gradient: "from-accent to-primary",
    },
];

const SolutionsSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl mb-12">
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">
                        Our solutions
                    </span>
                    <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                        Orchestrating data, AI and human expertise in enterprise
                        workflows
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <a
                            key={solution.id}
                            href={solution.href}
                            className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                            >
                                <solution.icon className="w-8 h-8 text-primary-foreground" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {solution.title}
                            </h3>

                            <p className="text-muted-foreground mb-6">
                                {solution.description}
                            </p>

                            <div className="flex items-center gap-2 text-primary font-medium">
                                <span>Explore more</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>

                            {/* Decorative element */}
                            <div
                                className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
