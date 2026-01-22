import { Briefcase, GraduationCap, Heart, ArrowRight } from "lucide-react";

const links = [
    {
        icon: Briefcase,
        title: "IT Consulting",
        description:
            "Explore opportunities in our core consulting practice and help businesses transform their technology landscape.",
        href: "#consulting",
    },
    {
        icon: GraduationCap,
        title: "Early Careers",
        description:
            "Jumpstart your career with internships, graduate programs, and entry-level positions designed for emerging talent.",
        href: "#early-careers",
    },
    {
        icon: Heart,
        title: "Life at Rapidcode",
        description:
            "Thrive in a culture that values innovation, diversity, and continuous learning. Discover what makes us unique.",
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
