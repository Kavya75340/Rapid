import { ArrowRight, Linkedin } from "lucide-react";

const experts = [
    {
        id: 1,
        name: "Lingraju Sawkar",
        title: "President, Rapidcode India",
        topic: "Indian companies dominate AI investment and IT readiness",
        description:
            "We are powering industry transformation and executing mission-critical experiences with focus on customer service, people excellence and culture.",
        linkedin: "https://linkedin.com",
        articleHref: "/articles/ai-investment",
    },
    {
        id: 2,
        name: "Sreekrishnan Venkateswaran",
        title: "Rapidcode Fellow & Chief Technology Officer, India",
        topic: "Accelerating India’s technology evolution and AI future",
        description:
            "I am energized to lead technological excellence at the forefront of innovation at Rapidcode India.",
        linkedin: "https://linkedin.com",
        articleHref: "/articles/tech-evolution",
    },
    {
        id: 3,
        name: "Hussain Zaidi",
        title: "Vice President, Practice & General Management, Rapidcode India",
        topic: "Co-creating, scaling, and accelerating business transformation",
        description:
            "We co-create seamless customer experiences using data and AI to drive innovation and deliver superior outcomes for customers.",
        linkedin: "https://linkedin.com",
        articleHref: "/articles/business-transformation",
    },
];

const ExpertiseSection = () => {
    return (
        <section id="our_expertise" className="py-16 lg:py-24 bg-[#0070e0]/10">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-[#0070e0] text-sm font-medium uppercase tracking-wider">
                        rapidcode expertise
                    </span>
                    <h2 className="mt-4 text-3xl lg:text-4xl font-light text-foreground">
                        Trusted. Experienced. Skilled.
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl">
                        People are Rapidcode’s strength. For over 30 years, they
                        have leveraged deep domain expertise and relentless
                        curiosity to build and deliver innovation.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {experts.map((expert, index) => (
                        <div
                            key={expert.id}
                            className="bg-card bg-white rounded-lg p-6 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h3 className="text-lg font-semibold text-[#0070e0] mb-2">
                                {expert.topic}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                {expert.description}
                            </p>

                            <div className="border-t border-border pt-4">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                                    Article by
                                </p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {expert.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {expert.title}
                                        </p>
                                    </div>

                                    <a
                                        href={expert.linkedin}
                                        className="w-8 h-8 p-2 rounded-full bg-[#0070e0]/10 flex items-center justify-center hover:bg-[#0070e0] hover:text-[#0070e0]-foreground transition-colors"
                                        aria-label={`${expert.name}'s LinkedIn`}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <a
                                href={expert.articleHref}
                                className="inline-flex items-center gap-2 text-[#0070e0] font-medium text-sm mt-4 hover:underline"
                            >
                                Read article
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ExpertiseSection;
