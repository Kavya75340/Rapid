import React from "react";
import heroImage from "@/assets/hero-contact.jpeg"; // path apne project ke hisaab se adjust karo

const HeroSection = () => {
    return (
        <>
            <section className="hidden lg:flex relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
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
                <div className="relative z-10 container px-6 lg:px-12">
                    <div className="max-w-lg">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 leading-tight tracking-tight">
                            Connect With Rapidcode Experts
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Get answers to your questions about anything
                            Rapidcode, your trusted partner for insights,
                            innovation, and smarter decisions
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative lg:hidden flex items-center overflow-hidden">
                <div className="container mx-auto lg:pl-12 pt-5 lg:pt-0  bg-gray-200">
                    <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="space-y-6 animate-fade-in m-7">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-hero-text leading-tight">
                                Connect With Rapidcode Experts
                            </h1>

                            <p className="text-lg text-hero-subtext max-w-xl leading-relaxed">
                                Get answers to your questions about anything
                                Rapidcode, your trusted partner for insights,
                                innovation, and smarter decisions
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
        </>
    );
};

export default HeroSection;
