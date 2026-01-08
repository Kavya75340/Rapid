import { ArrowRight } from "lucide-react";

const helpItems = [
    {
        number: "01",
        title: "Streamline Digital Tansformation",
        description:
            "Rapidcode Consult enables innovation and simplifies digital transformation through strategic visioning, architecture design, and organizational change management.",
        cta: { text: "Discover Rapidcode Consult", href: "/consulting" },
    },
    {
        number: "02",
        title: "Navigate Complex Business Challenges",
        description:
            "Our services blend deep industry expertise with modern capabilities and advanced technology to help you overcome business challenges and unlock new growth opportunities.",
        cta: { text: "Explore our services", href: "/services" },
    },
    {
        number: "03",
        title: "Orchestrate and Transform",
        description:
            "Rapidcode Bridge is an open integration platform built to orchestrate and transform your IT landscape, driving continuous learning and accelerating faster time to value.",
        cta: { text: "Learn about Rapidcode Bridge", href: "/platform" },
    },
    {
        number: "04",
        title: "Empower Hybrid IT Through Strategic Partnerships",
        description:
            "Make confident technology investments through global alliance partnerships that power today’s complex hybrid ecosystems.",
        cta: { text: "Explore our partners", href: "/partners" },
    },
];

const HowWeHelpSection = () => {
    return (
        <section id="how_we_help" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-[#377fcb] text-sm font-medium uppercase tracking-wider">
                        how rapidcode helps
                    </span>

                    <div className="mt-4 flex flex-wrap items-baseline gap-2">
                        <span className="text-3xl lg:text-5xl font-light text-foreground">
                            Continuous Innovation
                        </span>
                        <span className="text-3xl lg:text-5xl font-light text-[#2a86c7]">
                            + Operational Excellence
                        </span>
                    </div>
                </div>

                {/* Items */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {helpItems.map((item, index) => (
                        <div
                            key={item.number}
                            className="group animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex gap-6">
                                <span className="text-5xl lg:text-6xl font-light text-[#2a86c7]/30">
                                    {item.number}
                                </span>

                                <div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    <a
                                        href={item.cta.href}
                                        className="inline-flex items-center gap-2 text-[#2a86c7] font-medium hover:underline"
                                    >
                                        {item.cta.text}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default HowWeHelpSection;
