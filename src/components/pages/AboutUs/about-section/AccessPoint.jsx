import { ArrowRight } from "lucide-react";

const AccessPoint = () => {
    return (
        <section className="Rapidcode-section bg-background">
            <div className="Rapidcode-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Image */}
                    <div className="p-20">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                            alt="Modern innovation center"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                            Innovation
                        </span>

                        <h2 className="Rapidcode-heading-lg mb-6">
                            Rapidcode Access Point
                        </h2>

                        <p className="Rapidcode-text-lg mb-8">
                            Experience our innovation centers where we bring
                            together customers, partners, and experts to
                            co-create solutions that drive business
                            transformation. Our Access Points are designed to
                            inspire collaboration and accelerate your digital
                            journey.
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                        >
                            Learn more
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessPoint;
