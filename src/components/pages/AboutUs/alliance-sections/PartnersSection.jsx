import { useState } from "react";
import { ChevronRight } from "lucide-react";

const industries = [
    {
        name: "Aerospace & Defence",
        logo: "https://www.svgrepo.com/show/533972/airplane.svg",
    },
    {
        name: "Automotive",
        logo: "https://www.svgrepo.com/show/533718/car.svg",
    },
    {
        name: "Banking & Finance",
        logo: "https://www.svgrepo.com/show/533361/bank.svg",
    },
    {
        name: "Chemicals",
        logo: "https://www.svgrepo.com/show/533556/lab.svg",
    },
    {
        name: "Communication & Media",
        logo: "https://www.svgrepo.com/show/533208/chat.svg",
    },
    {
        name: "Energy",
        logo: "https://www.svgrepo.com/show/532620/energy.svg",
    },
    {
        name: "Healthcare",
        logo: "https://www.svgrepo.com/show/533431/health.svg",
    },
    {
        name: "High Tech",
        logo: "https://www.svgrepo.com/show/533509/cpu.svg",
    },
    {
        name: "Life Sciences",
        logo: "https://www.svgrepo.com/show/533660/dna.svg",
    },
    {
        name: "Software & Platforms",
        logo: "https://www.svgrepo.com/show/533197/cloud.svg",
    },
];

const PartnersSection = () => {
    const [selectedPartner, setSelectedPartner] = useState(null);

    const handlePartnerClick = (partner) => {
        if (!partner.hasDetails) return;

        setSelectedPartner(
            selectedPartner?.name === partner.name ? null : partner
        );
    };

    return (
        <section className="py-16 px-6 lg:px-12 bg-background">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h5 className="text-3xl font-semibold mb-4">
                        Explore our expanding partner ecosystem
                    </h5>
                    <p className="text-muted-foreground max-w-4xl">
                        At Rapidcode, we co-innovate with strategic alliances
                        that deliver the greatest impact for our customers,
                        spanning the full breadth of modern technology stacks.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
                    {partners.map((partner) => (
                        <a
                            key={partner.name}
                            href="#"
                            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 lg:h-20 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>

                {/* Partner Details */}
                {selectedPartner && (
                    <div className="partner-detail-card animate-fade-in">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-primary mb-4 uppercase">
                                    {selectedPartner.name}
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {selectedPartner.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">
                                    Solutions
                                </h4>
                                <ul className="space-y-2">
                                    {selectedPartner.solutions?.map(
                                        (solution, idx) => (
                                            <li key={idx} className="text-sm">
                                                • {solution}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        {selectedPartner.related?.length > 0 && (
                            <div className="mt-8 pt-8 border-t">
                                <h4 className="font-semibold mb-4">Related</h4>
                                <ul className="space-y-3">
                                    {selectedPartner.related.map(
                                        (item, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={item.link}
                                                    className="link-blue text-sm flex gap-2 hover:underline"
                                                >
                                                    <ChevronRight className="w-4 h-4 mt-0.5" />
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PartnersSection;
