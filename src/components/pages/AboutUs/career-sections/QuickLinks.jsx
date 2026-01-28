import { Briefcase, GraduationCap, Heart, ArrowRight } from "lucide-react";

const links = [
    {
        icon: Briefcase,
        title: "Technology & Consulting",
        description:
            "Discover opportunities within our core consulting practices and support enterprises as they modernize and transform their technology ecosystems.",
        href: "#consulting",
    },
    {
        icon: GraduationCap,
        title: "Early Careers",
        description:
            "Launch your professional journey through internships, graduate programs, and entry-level roles built for emerging professionals.t.",
        href: "#early-careers",
    },
    {
        icon: Heart,
        title: "Life at Rapidcode",
        description:
            "Succeed in a culture that champions innovation, inclusion, and continuous growth. Experience what sets Rapidcode apart..",
        href: "#life",
    },
];

const QuickLinks = () => {
    return (
        <section className=" px-6 lg:px-10 mb-10 bg-background">
            <div className="max-w-full mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                    {links.map((link, index) => {
                        const Icon = link.icon;

                        return (
                            <div
                                key={index}
                                className="group p-6 hover:border-primary transition-all duration-300 cursor-pointer bg-white"
                            >
                                {/* <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div> */}

                                <h3 className="text-xl font-light text-foreground mb-3">
                                    {link.title}
                                </h3>

                                <p className="text-muted-foreground mb-4">
                                    {link.description}
                                </p>

                                <a
                                    href={link.href}
                                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                                >
                                    Learn more
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
