import { useState } from "react";
import { Brain, Database, Shield, Lightbulb, ArrowRight } from "lucide-react";

const tabs = [
    { id: "services", label: "Our services" },
    { id: "difference", label: "The RapidCode difference" },
];

const services = [
    {
        icon: Brain,
        title: "AI and generative AI",
        description: "Innovate and drive value for your enterprise",
        href: "#",
    },
    {
        icon: Database,
        title: "Data modernization",
        description:
            "Modernize your data estate for transformative business value",
        href: "#",
    },
];

const differences = [
    {
        icon: Lightbulb,
        title: "Global expertise",
        description:
            "Gain access to global expertise for future-ready solutions through our people, intellectual property and partnerships",
    },
    {
        icon: Database,
        title: "Future-ready solutions",
        description:
            "Build a modern foundation with a data fabric blueprint, leveraging automated tools and workflows",
    },
    {
        icon: Shield,
        title: "Simplified data operations",
        description:
            "Reduce the complexity of your data estate with data governance strategy and a unified console",
    },
];

function HowWeHelpSection() {
    const [activeTab, setActiveTab] = useState("services");

    return (
        <section id="how-we-help" className="py-20 lg:py-28 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                        How RapidCode helps
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                        Delivering scalable business insights with AI-ready data
                        modernization
                    </h2>

                    {/* Tabs */}
                    <div className="flex border-b border-border">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pr-5 text-lg  font-medium relative transition-colors ${
                                    activeTab === tab.id
                                        ? "text-primary text-xl underline underline-offset-5 decoration-2 decoration-[#399cff]"
                                        : "text-muted-foreground hover:text-foreground "
                                }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services Tab */}
                {activeTab === "services" && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <a
                                key={service.title}
                                href={service.href}
                                className="group flex items-start p-6 lg:p-15 bg-card hover:shadow-lg transition-all"
                            >
                                <div className="flex-1">
                                    <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mr-6 flex-shrink-0">
                                        <service.icon className="w-15 h-15 text-primary" />
                                    </div>

                                    <h3 className="text-3xl font-light text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {service.description}
                                    </p>
                                    {/* <span className="text-primary text-sm font-medium inline-flex items-center">
                                        Learn more
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span> */}
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {/* Difference Tab */}
                {activeTab === "difference" && (
                    <div className="grid md:grid-cols-3 gap-8">
                        {differences.map((item) => (
                            <div
                                key={item.title}
                                className="text-center hover:shadow-lg p-15"
                            >
                                <div className="w-20 h-20  bg-primary/10 flex items-center justify-center mx-auto mb-6  ">
                                    <item.icon className="w-15 h-15 text-primary" />
                                </div>
                                <h3 className="text-3xl font-light text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className=" text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default HowWeHelpSection;
