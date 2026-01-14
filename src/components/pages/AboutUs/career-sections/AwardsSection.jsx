import { useEffect, useRef } from "react";

const awards = [
    { name: "Best Place to Work 2024", image: "🏆" },
    { name: "Top Employer India", image: "🥇" },
    { name: "Great Place to Work", image: "⭐" },
    { name: "Forbes Best Employers", image: "🏅" },
    { name: "Diversity & Inclusion Award", image: "🌟" },
    { name: "Innovation Excellence", image: "💡" },
    { name: "Tech Company of the Year", image: "🎯" },
    { name: "Employee Choice Award", image: "❤️" },
];

const AwardsSection = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId;
        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const scroll = () => {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        const handleMouseEnter = () => cancelAnimationFrame(animationId);
        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(scroll);
        };

        scrollContainer.addEventListener("mouseenter", handleMouseEnter);
        scrollContainer.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
            scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-full mx-auto px-6 lg:px-0">
                {/* Heading */}
                <div className="text-center mb-12 ml-12">
                    <h2 className="outline-text text-3xl md:text-4xl lg:text-7xl font-extrabold text-primary-foreground">
                        People love working here
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                        We're proud to be recognized as one of the best places
                        to work in the technology industry.
                    </p>
                </div>

                {/* Scrolling Awards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden space-x-5 py-8"
                >
                    {[...awards, ...awards].map((award, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-60 h-60 bg-primary-foreground rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg"
                        >
                            <span className="text-5xl mb-3">{award.image}</span>
                            <span className="text-sm font-medium text-primary text-center">
                                {award.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
