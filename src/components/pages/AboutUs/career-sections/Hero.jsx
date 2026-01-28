import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-secondary">
            <div className="max-w-full lg:mx-20">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="flex flex-col justify-center px-6 py-16 lg:py-24 lg:px-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                            Join Rapidcode and shape progress with purpose
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                            Become part of a global team helping organizations
                            evolve through advanced technology and high-impact
                            consulting.
                        </p>

                        <div className="mt-8">
                            <button className="group inline-flex items-center bg-gray-600 hover:bg-primary/90 text-primary-foreground lg:px-8 p-4 lg:py-6 text-lg font-semibold rounded-md transition">
                                Search Jobs
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[400px] lg:h-auto">
                        <div className="absolute inset-0 clip-diagonal-reverse lg:clip-diagonal">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
