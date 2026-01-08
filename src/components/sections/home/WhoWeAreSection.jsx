import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import video1 from "../../../assets/video1.webm";
import video3 from "../../../assets/video3.webm";
import video4 from "../../../assets/video4.webm";
import video5 from "../../../assets/video5.webm";
import video6 from "../../../assets/video6.webm";

const videos = [video1, video3, video4, video5, video6];
const WhoWeAreSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    return (
        <section id="who_we_are" className="bg-[#001f3c] text-white">
            <div className="container mx-auto ">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 px-8">
                        <span className="text-[#1065bf] text-sm font-medium uppercase tracking-wider">
                            Who we are
                        </span>

                        <h2 className="mt-4 text-3xl lg:text-5xl font-light leading-tight mb-6">
                            Continuous Innovation Meets Operational Excellence
                        </h2>

                        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                            We empower clients across every industry to ensure
                            their mission-critical systems perform when, where,
                            and how required. Rapidcode delivers data, insights,
                            and proven methodologies organizations need to
                            remain agile, resilient, and competitive.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                variant="outline"
                                className="rounded-none"
                                asChild
                            >
                                <a href="/about">
                                    Our Story{" "}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>

                            <Button
                                variant="ghost"
                                className="rounded-none"
                                asChild
                            >
                                <a href="/awards">
                                    Awards And Recognition{" "}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>

                            <Button
                                variant="ghost"
                                className="rounded-none"
                                asChild
                            >
                                <a href="/careers">
                                    Join Our Team{" "}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Video Area */}
                    <div className="order-1 lg:order-2">
                        <div className="relative bg-[#114171] overflow-hidden group">
                            <video
                                key={currentIndex}
                                src={videos[currentIndex]}
                                className="w-full h-120 object-cover"
                                autoPlay={true}
                                controls={true}
                                muted
                                onEnded={handleVideoEnd}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhoWeAreSection;
