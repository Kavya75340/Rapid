import React from "react";
import heroImage from "@/assets/hero-contact.jpeg"; // path apne project ke hisaab se adjust karo

const HeroSection = () => {
    return (
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
            {/* Full background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Left beige overlay with diagonal clip */}
            <div
                className="absolute inset-0 bg-hero bg-gray-100"
                style={{
                    clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 leading-tight tracking-tight">
                        Contact Rapidcode
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Get answers to your questions about anything Rapidcode
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
