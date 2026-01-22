import React from "react";
import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container mx-auto lg:pl-12 bg-gray-200">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in ">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-hero-text leading-tight">
                            Rapidcode Global Strategic Alliances
                        </h1>

                        <p className="text-lg text-hero-subtext max-w-xl leading-relaxed">
                            The freedom to harness extraordinary potential with
                            our alliances and partnerships unleashes decades of
                            mission-critical IT expertise and technology for our
                            customers
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                        <img
                            src={heroImage}
                            alt="Business professionals in a meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
