import React from "react";
import { ArrowRight } from "lucide-react";

const SupportBanner = () => {
    return (
        <section className="bg-secondary py-8">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-foreground text-lg">
                    Looking for Rapidcode support?
                </p>

                <a
                    href="#support"
                    className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
                >
                    Go to Rapidcode Support
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default SupportBanner;
