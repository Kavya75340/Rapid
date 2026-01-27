import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import warli from "@/assets/image/warlinew2.png";

const ContactSection = () => {
    return (
        <section className="py-2 bg-[#1065bf]/10">
            <div className="container mx-auto m-5 lg:m-0 pl-4 lg:pl-20">
                {/* Grid Layout */}
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">
                            Talk with us
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8">
                            Do you have a defined IT challenge, interest in a
                            career at Rapidcode, or wish to connect today?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mr-3">
                            <Button
                                size="lg"
                                className="rounded-none bg-[#0264cf] hover:bg-[#0264cf]/80 text-white"
                                asChild
                            >
                                <a href="/contact">
                                    Let's talk
                                    <ArrowRight className="w-4 h-4 ml-2 " />
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-none bg-white text-black hover:bg-[#1059bf] hover:text-white"
                                asChild
                            >
                                <a href="mailto:newsletter@rapidcode.co.in?subject=Newsletter Subscription&body=Please subscribe me to your newsletter.">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Subscribe to our newsletter
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hidden lg:flex justify-end">
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
