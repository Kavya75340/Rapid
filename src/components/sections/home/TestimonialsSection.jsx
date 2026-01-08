import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Mario Grande",
        company: "Hexagon",
        quote: "Faster results with data: Improved collections, efficiency, and satisfaction.",
        role: "Chief Data Officer",
    },
    {
        id: 2,
        name: "Mike Racer",
        company: "Sephora",
        quote: "Propelling digital transformation with advanced solutions and data-driven insights.",
        role: "VP of Technology",
    },
    {
        id: 3,
        name: "Orlando Gadea Ros",
        company: "Stanley Black & Decker",
        quote: "GenAI empowered agents to deliver richer, interactive, and more personalized CX.",
        role: "Director of Innovation",
    },
    {
        id: 4,
        name: "Chris Pollard",
        company: "Thames Water, UK",
        quote: "Transforming customer experience with people, data and partnership.",
        role: "Head of Digital",
    },
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <span className="text-primary text-sm font-medium uppercase tracking-wider">
                            Testimonials
                        </span>
                        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
                            Our clients' success is our success
                        </h2>
                    </div>

                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-border hover:bg-card hover:border-primary transition-colors flex items-center justify-center"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-border hover:bg-card hover:border-primary transition-colors flex items-center justify-center"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 ${
                                index === currentIndex
                                    ? "ring-2 ring-primary"
                                    : ""
                            }`}
                        >
                            <div className="relative h-48 bg-gradient-to-br from-primary to-accent rounded-xl mb-6 flex items-center justify-center group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                                </div>
                                <span className="absolute bottom-4 left-4 text-xs text-primary-foreground/80 font-medium">
                                    Watch Video
                                </span>
                            </div>

                            <div className="flex items-start gap-2 mb-4">
                                <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <p className="text-sm text-muted-foreground italic line-clamp-2">
                                    {testimonial.quote}
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-foreground">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {testimonial.role}
                                </p>
                                <p className="text-sm text-primary font-medium">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile navigation */}
                <div className="flex justify-center gap-3 mt-8 md:hidden">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-border hover:bg-card transition-colors flex items-center justify-center"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-border hover:bg-card transition-colors flex items-center justify-center"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                </div>
            </div>
        </section>
    );
};
export default TestimonialsSection;
