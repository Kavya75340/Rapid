import React from "react";

const CTASection = () => {
    return (
        <section className="cta-section bg-gray-300 ">
            <div className="container mx-auto px-6 lg:px-12 py-20 text-center">
                <h2 className="text-3xl text-blue-500 md:text-4xl font-bold mb-4">
                    Connect with Rapidcode
                </h2>

                <p className="text-xl  opacity-90 mb-8">
                    Together we can make sure the world thrives.
                </p>

                <a
                    href="/contact"
                    className="inline-block border-3 text-white border-primary-foreground px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors"
                >
                    Contact us
                </a>
            </div>
        </section>
    );
};

export default CTASection;
