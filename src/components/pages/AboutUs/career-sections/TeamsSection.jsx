import { ArrowRight } from "lucide-react";

const teams = [
    {
        title: "Mainframe",
        description:
            "Power the backbone of enterprise computing. Work with cutting-edge mainframe technologies that run the world's most critical systems.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        jobs: 45,
    },
    {
        title: "Cybersecurity",
        description:
            "Protect organizations from evolving threats. Join our team of security experts defending digital assets worldwide.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
        jobs: 78,
    },
    {
        title: "IT Consulting",
        description:
            "Transform businesses through strategic technology guidance. Help clients navigate their digital transformation journey.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        jobs: 120,
    },
    {
        title: "Agentic AI",
        description:
            "Build the future of artificial intelligence. Create intelligent systems that autonomously solve complex business challenges.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        jobs: 35,
    },
];

const TeamsSection = () => {
    return (
        <section id="teams" className="py-16 lg:py-24 bg-background">
            <div className="max-w-full mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className=" text-3xl md:text-4xl lg:text-7xl outline-text font-extrabold text-white">
                        Join our growing teams
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore opportunities across our specialized practice
                        areas and find where your expertise can make the biggest
                        impact.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {teams.map((team, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden transition-all duration-300 cursor-pointer bg-white"
                        >
                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={team.image}
                                    alt={team.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                                        {team.jobs} jobs
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-2xl font-medium text-foreground mb-2">
                                    {team.title}
                                </h3>
                                <p className="text-lg font-medium text-muted-foreground mb-4 line-clamp-3">
                                    {team.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                                >
                                    Search jobs
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamsSection;
