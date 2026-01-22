import { Linkedin, ArrowRight } from "lucide-react";

function ExpertVoicesSection() {
    return (
        <section id="our_expertise" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                            alt="Expert portrait"
                            className="w-full aspect-[4/3] object-cover rounded-lg"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                            Expert Voices
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Transforming Enterprises Across 10 Core Service
                            Lines
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            At Rapidcode, we combine Cloud, Cybersecurity, Data
                            & Artificial Intelligence, Digital Engineering &
                            Manufacturing, Emerging Technology, Finance & Risk
                            Management, Managed Services, Strategy, Supply
                            Chain, and Technology Transformation into one
                            unified approach. Our Responsible AI and
                            enterprise-grade frameworks ensure every solution is
                            secure, scalable, and future-ready.
                            <br />
                            <br />
                            From modernizing legacy systems to deploying
                            AI-driven insights, enhancing supply chain
                            resilience, securing digital ecosystems, and
                            reshaping technology foundations, we empower
                            organizations to innovate responsibly and operate
                            with confidence.
                        </p>

                        {/* Expert Details */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-foreground">
                                    Ritesham Shastri
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Director | Cloud, Cybersecurity, AI,
                                    Strategy & Transformation
                                </p>
                                <p className="text-primary text-sm font-medium">
                                    Rapidcode
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <a
                                    href="#"
                                    className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center"
                                >
                                    View profile
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/ritesham"
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExpertVoicesSection;
