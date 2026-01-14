import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-secondary">
            <div className="max-w-7xl mx-20">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="flex flex-col justify-center px-6 py-16 lg:py-24 lg:px-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                            Join Rapidcode and drive progress with purpose
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                            Be part of a team that's transforming businesses
                            worldwide through innovative IT solutions and
                            consulting excellence.
                        </p>

                        <div className="mt-8">
                            <button className="group inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-md transition">
                                Search professional jobs
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
