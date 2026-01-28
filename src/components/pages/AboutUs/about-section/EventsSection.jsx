import { ArrowRight, Calendar } from "lucide-react";
import about from "@/assets/about.webp";

const EventsSection = () => {
    return (
        <section className=" bg-blue-100 ">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-15">
                    {/* Events */}
                    <div className="space-y-6 py-16 lg:py-24 lg:pl-40">
                        {/* Event Card */}
                        <h2 className="text-3xl lg:text-6xl font-medium text-foreground mb-8">
                            We can't wait to meet you
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Learn about Rapidcode events and webinars happening
                            around the world.
                        </p>
                    </div>

                    {/* Access Point */}

                    <div className="bg-gray-50 p-8 lg:p-12 m-5">
                        <a href="#nrf" className="block group p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h1 className="text-2xl lg:text-4xl mb-5">
                                        Upcomming events
                                    </h1>
                                    <img
                                        src={about}
                                        alt=""
                                        className="w-100 mb-5"
                                    />
                                    <p className="text-sm text-muted-foreground mb-2">
                                        January 12–14, 2026 • New York
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
