import { Compass, Users, TrendingUp, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Compass,
        title: "Discover your path",
        description:
            "Explore a wide range of career paths and find opportunities aligned with your expertise and ambitions.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    },
    {
        icon: Users,
        title: "Inclusive culture",
        description:
            "Join a workplace where diversity is valued and every perspective is respected.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    },
    {
        icon: TrendingUp,
        title: "Learn and grow",
        description:
            "Benefit from world-class learning, mentorship, and continuous development programs designed to help you thrive.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    },
];

const LifeSection = () => {
    return (
        <section id="life" className="py-16 lg:py-24 bg-secondary">
            <div className="max-w-full mx-0 px-6 lg:px-0">
                {/* Heading */}
                <div className="text-right mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-blue-400 mr-10">
                        Life at Rapidcode
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group overflow-hidden bg-background transition-all duration-300 "
                            >
                                {/* Image */}
                                <div className="relative h-90 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                                        <h3 className="p-6 text-2xl font-semibold text-white">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-[3vh] text-muted-foreground mb-4">
                                        {feature.description}
                                    </p>

                                    <a
                                        href="#"
                                        className="p-2 inline-flex items-center text-primary font-medium hover:underline"
                                    >
                                        Explore
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LifeSection;
