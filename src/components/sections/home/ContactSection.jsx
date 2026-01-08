import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import warli from "../../../assets/image/warlinew2.png";

const ContactSection = () => {
    return (
        <section className="py-2 bg-[#1065bf]/10">
            <div className="container mx-auto pl-4 lg:pl-20">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">
                            Connect with us
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8">
                            Do you have a specific IT challenge, interest in a
                            career at Rapidcode, or simply want to connect?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="rounded-none bg-[#0264cf] hover:bg-[#0264cf]/80 text-white"
                                asChild
                            >
                                <a href="/contact">
                                    Let's talk
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-none bg-white text-black hover:bg-[#1059bf] hover:text-white"
                                asChild
                            >
                                <a href="/newsletter">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Subscribe to our newsletter
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={warli}
                            alt="Contact illustration"
                            className="max-w-80 h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
