import teamImage from "@/assets/team-collaboration.jpg";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
    return (
        <section className="section-padding bg-gray-100 mb-10">
            <div className="max-w-screen">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Heading */}
                    <div className="animate-slide-in-right lg:px-10 lg:pt-20 p-10">
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
                            Inspired by our customers
                        </h2>
                        <p className="mb-10 text-lg">
                            Meeting our customers' complex challenges drives our
                            progess and innovation.
                        </p>
                        <a href="#" className="mb-5 hover:underline flex">
                            Explore customer stories
                            <ArrowRight className="w-4 h-4 mt-1 ml-2" />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mt-16">
                    <img
                        src={teamImage}
                        alt="Team collaboration"
                        className="w-full h-[80vh] mx-auto object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
