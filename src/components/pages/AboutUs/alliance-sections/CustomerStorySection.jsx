import React from "react";
import customerStoryImage from "@/assets/customer-story.jpg";

const CustomerStorySection = () => {
    return (
        <section className="py-16 px-6 lg:px-12 bg-muted">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                        <img
                            src={customerStoryImage}
                            alt="Dow customer story"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 animate-fade-in">
                        <span className="text-sm text-muted-foreground uppercase tracking-wider">
                            Customer story
                        </span>

                        <h2 className="section-heading">TechCorp Global</h2>

                        <p className="text-muted-foreground leading-relaxed">
                            TechCorp partnered with Rapidcode to transform their
                            corporate device program, providing more choice in
                            type and timing of selection. Rapidcode manages the
                            global fleet to reduce issues for groups of users,
                            proactively offering available fixes through
                            cloud-based distribution.
                        </p>

                        <a
                            href="#"
                            className="link-blue font-medium inline-block hover:underline"
                        >
                            See more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerStorySection;
