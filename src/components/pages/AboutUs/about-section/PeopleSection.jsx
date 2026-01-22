import { ArrowRight, Users, Heart, Briefcase } from "lucide-react";
import diversityImage from "@/assets/diversity-team.jpg";

const PeopleSection = () => {
    const links = [
        {
            icon: Briefcase,
            title: "Careers",
            description:
                "Join our global team and shape the future of technology",
        },
        {
            icon: Heart,
            title: "Kinship",
            description:
                "Discover our employee resource groups and communities",
        },
        {
            icon: Users,
            title: "Leadership",
            description: "Meet the people leading our company forward",
        },
    ];

    return (
        <section className="max-w-screen mx-auto p-10 pl-40 bg-Rapidcode-light-gray">
            <div className="container-wide">
                <div className="flex items-center">
                    {/* Left Content */}
                    <div>
                        <div className="w-[90vh] mb-25">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                People-powered
                            </h2>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                At Rapidcode, our people are at the heart of
                                everything we do. We are empowered to pursue our
                                passions, embrace new challenges, and create
                                value for our customers and each other.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div>
                            <div className="flex space-x-10">
                                {links.map((link) => {
                                    const Icon = link.icon;

                                    return (
                                        <a
                                            key={link.title}
                                            href="#"
                                            className="flex items-start gap-4 group w-100 h-70 p-10 border-b hover:border-gray-500 hover:bg-gray-100"
                                        >
                                            <div className="flex-1">
                                                <h3 className="text-3xl font-medium text-foreground transition-colors flex items-center mb-5">
                                                    {link.title}
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {link.description}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleSection;
