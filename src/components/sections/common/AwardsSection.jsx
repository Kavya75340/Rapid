import { Award, ArrowRight } from "lucide-react";

const awards = [
    {
        title: "RapidCode is a Leader in RISE with SAP Implementation Partner",
        description:
            "RapidCode has been named a Leader in RISE with SAP Implementation Partner in the ISG Provider Lens SAP Ecosystem Report, Global, 2024.",
        href: "#",
    },
    {
        title: "Major Contender in Application Transformation Services",
        description:
            "RapidCode is positioned as a Major Contender in the Everest Application Transformation Services PEAK Matrix® Assessment 2024.",
        href: "#",
    },
];

function AwardsSection() {
    return (
        <section className="py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                    Awards and recognition
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
                    Discover why RapidCode is recognized as an application
                    services market leader
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {awards.map((award) => (
                        <a
                            key={award.title}
                            href={award.href}
                            className="group flex items-start p-6 lg:p-15 bg-card border border-border hover:shadow-lg transition-all"
                        >
                            <div className="flex-1">
                                <div className="w-15 h-15 rounded-lg bg-primary/10 flex items-center justify-center mr-5 flex-shrink-0">
                                    <Award className="w-10 h-10 text-primary" />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {award.title}
                                </h3>
                                <p className="flex text-muted-foreground text-sm">
                                    {award.description}

                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 ml-10" />
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AwardsSection;
