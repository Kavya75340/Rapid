import React from "react";

const locations = [
    {
        id: "chandigarh",
        country: "India - Chandigarh",
        details: [
            "Rapidcode Technologies",
            "Tower A, IT Park",
            "Sector 17-C",
            "Chandigarh, 160017",
            "India",
        ],
    },
    {
        id: "bangalore",
        country: "India - Bangalore",
        details: [
            "Rapidcode Technologies",
            "Embassy Tech Village",
            "Outer Ring Road, Devarabisanahalli",
            "Bangalore, Karnataka 560103",
            "India",
        ],
    },
    {
        id: "dubai",
        country: "UAE - Dubai",
        details: [
            "Rapidcode Technologies DMCC",
            "Jumeirah Lakes Towers",
            "Cluster Y, Tower 2",
            "Dubai, United Arab Emirates",
            "P.O. Box 500001",
        ],
    },
];

const LocationsGrid = () => {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {locations.map((location, index) => (
                        <article
                            key={location.id}
                            className="mb-10 lg:mb-0"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                                {location.country}
                            </h3>
                            <div className="w-12 h-1 bg-primary mb-6" />
                            <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                                {location.details.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </address>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationsGrid;
