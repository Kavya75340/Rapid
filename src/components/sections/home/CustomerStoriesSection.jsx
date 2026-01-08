import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import itImg from "../../../assets/image/It.webp";
import cloudImg from "../../../assets/image/645479.webp";
import aiImg from "../../../assets/image/Ai.webp";

const stories = [
    {
        id: 1,
        category: "IT modernization",
        title: "CreditAccess Grameen digitized its loan platform, accelerating services for 2.5 million rural borrowers and strengthening their economic growth",
        href: "/customer-stories/grameen",
        imageUrl: itImg,
    },
    {
        id: 2,
        category: "Cloud transformation",
        title: "Global retailer realized a 40% cost reduction through intelligent cloud migration and automated infrastructure management",
        href: "/customer-stories/retail",
        imageUrl: cloudImg,
    },
    {
        id: 3,
        category: "AI implementation",
        title: "Healthcare provider enhanced patient outcomes by 35% through AI-powered diagnostics and predictive analytics",
        href: "/customer-stories/healthcare",
        imageUrl: aiImg,
    },
];

const CustomerStoriesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const currentStory = stories[currentIndex];

    return (
        <section
            id="customer_stories"
            className="py-16 lg:py-24 bg-[#2a86c7]/10"
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-[#2a86c7]/100 text-sm font-medium uppercase tracking-wider">
                        stories that inspire
                    </span>
                    <h2 className="mt-4 text-3xl lg:text-4xl font-light text-foreground">
                        Customer Stories
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Driving progress for every customers
                    </p>
                    <p className="text-muted-foreground">
                        We collaborate closely with customers and strategic
                        partners to operate and transform their mission-critical
                        systems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Visual */}
                    <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                        <img
                            src={currentStory.imageUrl}
                            alt={currentStory.category}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-sm text-[#0070e0] font-medium">
                            {currentStory.category}
                        </span>

                        <h3 className="mt-2 text-2xl lg:text-3xl font-light text-foreground leading-tight">
                            {currentStory.title}
                        </h3>

                        <div className="mt-6 flex gap-4">
                            <a
                                href={currentStory.href}
                                className="inline-flex items-center gap-2 text-[#0070e0] font-medium hover:underline"
                            >
                                Highlights
                            </a>
                            <a
                                href={currentStory.href}
                                className="inline-flex items-center gap-2 text-[#0070e0] font-medium hover:underline"
                            >
                                Read full story
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border border-border border-black/10 hover:border-[#0070e0] hover:bg-white hover:bg-card transition-colors flex items-center justify-center"
                                aria-label="Previous story"
                            >
                                <ChevronLeft className="w-5 h-5 text-foreground" />
                            </button>

                            <div className="flex gap-2">
                                {stories.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium transition-colors ${
                                            index === currentIndex
                                                ? "border-[#0070e0] bg-[#0070e0] text-white"
                                                : "border-border hover:border-[#0070e0] text-muted-foreground"
                                        }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full border border-border border-black/10 hover:bg-white hover:border-[#0070e0] hover:bg-card transition-colors flex items-center justify-center"
                                aria-label="Next story"
                            >
                                <ChevronRight className="w-5 h-5 text-foreground" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CustomerStoriesSection;
