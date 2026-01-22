import { ArrowRight, Calendar } from "lucide-react";

const news = [
    {
        title: "Rapidcode Launches New AI-Powered Solutions for Enterprise",
        date: "January 10, 2025",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    },
    {
        title: "How We're Building a More Inclusive Workplace",
        date: "January 8, 2025",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
    {
        title: "Rapidcode Expands Operations to 15 New Markets",
        date: "January 5, 2025",
        category: "Growth",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
];

const NewsSection = () => {
    return (
        <section id="resources" className="py-16 lg:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                            What's new
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Stay updated with the latest news and insights from
                            Rapidcode.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="hidden md:inline-flex items-center text-primary font-medium hover:underline"
                    >
                        View all news
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>

                {/* News Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden transition-all duration-300 cursor-pointer bg-white"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center text-sm text-muted-foreground mb-3">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {item.date}
                                </div>

                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <a
                        href="#"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        View all news
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
