import React from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Talk to us */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-1">
                            Talk to us
                        </h2>
                        <div className="w-12 h-1 bg-primary mb-6" />

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-foreground">
                                    +1.855.596.3795 (+1.855.Rapidcode)
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Toll-free from United States and Canada
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-foreground">
                                    +1.929.769.4800
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Outside the United States and Canada
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Write to us */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-1">
                            Write to us
                        </h2>
                        <div className="w-12 h-1 bg-primary mb-6" />

                        <p className="text-muted-foreground text-sm mb-4">
                            (Email us or use the form below)
                        </p>

                        <div className="space-y-4">
                            <div>
                                <a
                                    href="mailto:sales@Rapidcode.com"
                                    className="font-semibold text-foreground hover:text-primary transition-colors"
                                >
                                    sales@Rapidcode.com
                                </a>
                                <p className="text-muted-foreground text-sm">
                                    To know more about Rapidcode services
                                </p>
                            </div>

                            <div>
                                <a
                                    href="mailto:inquiry@Rapidcode.com"
                                    className="font-semibold text-foreground hover:text-primary transition-colors"
                                >
                                    inquiry@Rapidcode.com
                                </a>
                                <p className="text-muted-foreground text-sm">
                                    For any other queries
                                </p>
                            </div>
                        </div>

                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 mt-6 text-foreground font-medium hover:text-primary transition-colors group"
                        >
                            Contact us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Visit us */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-1">
                            Visit us
                        </h2>
                        <div className="w-12 h-1 bg-primary mb-6" />

                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-foreground mb-2">
                                    Corporate Headquarters
                                </p>
                                <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                                    1 Vanderbilt Ave <br />
                                    15th Floor <br />
                                    New York, NY 10017 <br />
                                    United States
                                </address>
                            </div>

                            <div>
                                <p className="font-semibold text-foreground mb-2">
                                    Global Locations
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    View Rapidcode offices worldwide
                                </p>
                                <a
                                    href="#locations"
                                    className="inline-flex items-center gap-2 mt-2 text-foreground font-medium hover:text-primary transition-colors group"
                                >
                                    Find office locations
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
