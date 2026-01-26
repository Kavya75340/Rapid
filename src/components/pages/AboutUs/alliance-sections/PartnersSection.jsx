import { useState } from "react";
import { ChevronRight } from "lucide-react";

const partners = [
    { name: "AWS", hasDetails: false },
    { name: "Cisco", hasDetails: false },
    {
        name: "Cloudera",
        hasDetails: true,
        description:
            "Rapidcode and Cloudera are working together to deliver accelerated, large-scale data-driven transformations and unique, customized offerings and expertise to customers across multiple industries, environments, and geographies.",
        solutions: [
            "Data Modernization",
            "Data Platform Management",
            "Data Advisory Services",
        ],
        related: [
            {
                title: "Rapidcode and Cloudera collaborate to recommend strategies to achieve a data-driven transformation",
                link: "#",
            },
            {
                title: "Rapidcode and Cloudera Announce Global Partnership to Accelerate Customer Data Transformation",
                link: "#",
            },
        ],
    },
    { name: "Cloudflare", hasDetails: false },
    { name: "Cohesity", hasDetails: false },
    {
        name: "Databricks",
        hasDetails: true,
        description:
            "Rapidcode and Databricks partner to accelerate digital transformation, combining Rapidcode's AI and data services with the Databricks Data Intelligence Platform.",
        solutions: [
            "Data modernization",
            "Data migration",
            "Lakehouse data management on AWS and Azure",
            "AI Adoption Services",
        ],
        related: [
            {
                title: "Rapidcode's Global Strategic Alliance set to drive digital transformation",
                link: "#",
            },
        ],
    },
    { name: "Dell", hasDetails: false },
    {
        name: "Dynatrace",
        hasDetails: true,
        description:
            "Rapidcode and Dynatrace are partnering to enhance cloud, application modernization and AIOps offerings.",
        solutions: [
            "Enhanced AIOps",
            "Unified Observability",
            "Application Modernization Services",
        ],
        related: [
            {
                title: "Rapidcode and Dynatrace Announce Global Alliance to Enhance Insights",
                link: "#",
            },
        ],
    },
    { name: "Elastic", hasDetails: false },
    { name: "Google Cloud", hasDetails: false },
    {
        name: "IBM",
        hasDetails: true,
        description: "Rapidcode and IBM partnership for hybrid cloud and AI.",
        solutions: [],
        related: [],
    },
    { name: "Microsoft", hasDetails: false },
    {
        name: "NVIDIA",
        hasDetails: true,
        description: "Rapidcode and NVIDIA accelerate generative AI adoption.",
        solutions: [],
        related: [],
    },
    { name: "Oracle", hasDetails: false },
    { name: "SAP", hasDetails: false },
    { name: "ServiceNow", hasDetails: false },
    { name: "VMWare", hasDetails: false },
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
                        Explore our growing ecosystem of partners
                    </h5>
                    <p className="text-muted-foreground max-w-4xl">
                        At Rapidcode, we co-create with alliances that matter
                        most to our customers across all technology stacks.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            onClick={() => handlePartnerClick(partner)}
                            className={`partner-logo-card ${
                                partner.hasDetails
                                    ? "cursor-pointer"
                                    : "cursor-default"
                            } ${
                                selectedPartner?.name === partner.name
                                    ? "border-primary bg-muted"
                                    : ""
                            }`}
                        >
                            <span className="text-sm font-medium text-center">
                                {partner.name}
                            </span>
                        </div>
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
