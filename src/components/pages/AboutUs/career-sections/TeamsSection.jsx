import { ArrowRight } from "lucide-react";

const teams = [
    {
        title: "Mainframe",
        description:
            "Enable the core of enterprise computing. Work with advanced mainframe platforms that support the world’s most mission-critical systems.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        jobs: 45,
    },
    {
        title: "Cybersecurity",
        description:
            "Secure organizations against emerging risks. Join security specialists safeguarding digital assets across global enterprises.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
        jobs: 78,
    },
    {
        title: "IT Consulting",
        description:
            "Drive business outcomes through strategic technology advisory. Guide clients across every stage of their digital transformation.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        jobs: 120,
    },
    {
        title: "Agentic AI",
        description:
            "Shape the next era of artificial intelligence. Develop intelligent systems that autonomously address complex business challenges.",
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
                        Join our expanding teams
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore roles across specialized practice areas and
                        identify where your skills can create the greatest
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
