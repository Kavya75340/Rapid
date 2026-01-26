import React from "react";
import newsCloud from "@/assets/news-cloud.jpg";
import newsAlliance from "@/assets/news-alliance.jpg";
import newsAws from "@/assets/news-aws.jpg";

const newsItems = [
    {
        image: newsCloud,
        category: "Alliances and partnerships",
        title: "How Rapidcode cloud solutions help power customer success",
        date: "Article | 08-Jan-2026",
    },
    {
        image: newsAlliance,
        category: "Alliances and partnerships",
        title: "How Rapidcode's alliance strategy accelerates enterprise transformation",
        date: "Article | 09-Dec-2025",
    },
    {
        image: newsAws,
        category: "Alliances and partnerships",
        title: "Rapidcode and AWS: Driving innovation through partnership",
        date: "Article | 03-Dec-2025",
    },
];

const NewsSection = () => {
    return (
        <section className="py-16 px-6 lg:px-12 bg-background">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl font-bold">
                        Rapidcode Partner News
                    </h2>
                    <a
                        href="#"
                        className="link-blue font-bold hover:underline hidden md:block"
                    >
                        See all articles
                    </a>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <article
                            key={index}
                            className="news-card group animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-50 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-3 space-y-3">
                                <span className="link-blue text-sm font-medium">
                                    {item.category}
                                </span>

                                <h3 className="text-lg font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-news-date">
                                    {item.date}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile link */}
                <div className="mt-8 md:hidden">
                    <a
                        href="#"
                        className="link-blue font-medium hover:underline"
                    >
                        See all articles
                    </a>
                </div>

                {/* Service Partners Link */}
                <div className="flex justify-between mx-0 mt-16 p-3 py-8 border-t border-b border-border">
                    <p className="text-muted-foreground">
                        Rapidcode engagement modes with Service Partners
                    </p>
                    <a
                        href="#"
                        className="link-blue font-medium hover:underline"
                    >
                        See more
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
