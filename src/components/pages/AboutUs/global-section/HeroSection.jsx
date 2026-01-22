import React from "react";
import heroImage from "@/assets/location.jpg"; // path apne project ke hisaab se adjust karo

const HeroSection = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 ">
                <img
                    src={heroImage}
                    alt="City skyline at sunset"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 max-w-xl mx-20 py-10 px-4 lg:px-10 w-full bg-gray-100">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-light text-foreground mb-2">
                        Rapidcode locations
                    </h1>

                    <div className="w-12 h-1 bg-primary mb-6"></div>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-foreground mb-3">
                            Global Headquarters
                        </h2>

                        <address className="not-italic text-foreground leading-relaxed">
                            <p>Tower A, Sector 17</p>
                            <p>IT Park</p>
                            <p>Chandigarh, 160017</p>
                        </address>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
