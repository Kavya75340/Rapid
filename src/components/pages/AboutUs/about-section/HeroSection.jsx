import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
    return (
        <section className="grid lg:grid-cols-2 min-h-[70vh]">
            {/* Left Content */}
            <div className="flex flex-col justify-center section-padding bg-background">
                <div className="max-w-xl animate-slide-up lg:px-10 p-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                        About us
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                        We design, build, manage, and modernize the world's
                        critical technology systems
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="bg-primary p-3 inline-flex items-center gap-2"
                        >
                            Read the story
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="#"
                            className="outline p-3 inline-flex items-center gap-2"
                        >
                            Read the 2024 report
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-full">
                <img
                    src={heroBg}
                    alt="Wind turbines in green field representing sustainable technology"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default HeroSection;
