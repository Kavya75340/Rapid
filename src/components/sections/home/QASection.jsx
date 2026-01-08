"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = ["Rapidcode", "Investors", "Sustainability", "Careers"];

const qaData = {
    Rapidcode: [
        {
            id: 1,
            subcategory: "Rapidcode consulting",
            question: "Does Rapidcode offer consulting services?",
            answer: "Yes, Rapidcode Consult delivers outcome-focused technology consulting, acting as a strategic transformation partner across digital transformation strategy, enterprise architecture, organizational change management, and end-to-end solution design and execution.",
        },
        {
            id: 2,
            subcategory: "Rapidcode consulting",
            question:
                "Why should organizations choose Rapidcode for consulting?",
            answer: "Rapidcode brings proven operational expertise, seasoned specialists, and strategic alliances to redefine how enterprises align IT with business. Our global ecosystem of strategy consultants, architects, and engineers offers deep domain insight shaped by decades of experience across highly complex technology landscapes.",
        },
        {
            id: 3,
            subcategory: "Our platform",
            question: "What is Rapidcode’s open integration platform?",
            answer: "Rapidcode Bridge is an open integration platform that harnesses Rapidcode’s core capabilities—data-led intelligence and decades of expertise—to provide enterprises with unified visibility across technology environments and actionable insights to anticipate, optimize, and drive superior business results.",
        },
    ],
    Investors: [
        {
            id: 4,
            subcategory: "Investing in Rapidcode",
            question:
                "Where can I explore Rapidcode as an investment opportunity?",
            answer: "Rapidcode is a leading global IT infrastructure services organization supporting thousands of enterprise clients across more than 60 countries. The company architects, builds, operates, and modernizes complex, mission-critical systems that power the global economy daily.",
        },
    ],
    Sustainability: [
        {
            id: 5,
            subcategory: "Environmental impact",
            question: "How does Rapidcode support sustainability?",
            answer: "Rapidcode is dedicated to responsible and sustainable business practices, enabling clients to lower carbon impact through optimized IT operations, intelligent infrastructure, and cloud efficiency initiatives.",
        },
    ],
    Careers: [
        {
            id: 6,
            subcategory: "Rapidcode culture",
            question: "What is the work culture at Rapidcode?",
            answer: "At the heart of Rapidcode’s culture is an inclusive, engaging, and adaptable workplace. Our flexible work approach empowers employees to deliver strong business outcomes while maintaining a healthy work-life balance.",
        },
        {
            id: 7,
            subcategory: "Opportunities",
            question: "Does Rapidcode support early career talent?",
            answer: "Absolutely. Rapidcode offers graduates and interns an ideal platform to launch their careers, contribute meaningfully from day one, and access structured learning opportunities that build future-ready skills.",
        },
    ],
};
const QASection = () => {
    const [activeCategory, setActiveCategory] = useState("Rapidcode");
    const [openQuestion, setOpenQuestion] = useState(null);

    const currentQA = qaData[activeCategory] || [];

    return (
        <section id="qa" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-12">
                    <span className="text-muted-foreground text-sm">
                        Answers to questions about
                    </span>
                    <h2 className="mt-2 text-3xl lg:text-4xl text-[#1065bf] font-bold text-foreground">
                        Rapidcode
                    </h2>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Category Navigation */}
                    <div className="lg:col-span-1">
                        <nav className="space-y-1">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                        activeCategory === category
                                            ? "bg-[#1065bf]/80 text-white"
                                            : "text-foreground hover:bg-[#1065bf]/10"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Questions */}
                    <div className="lg:col-span-3">
                        {/* Subcategory pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[
                                ...new Set(currentQA.map((q) => q.subcategory)),
                            ].map((sub) => (
                                <span
                                    key={sub}
                                    className="px-3 py-1 text-sm bg-[#1065bf]/10 text-foreground rounded-full"
                                >
                                    {sub}
                                </span>
                            ))}
                        </div>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {currentQA.map((item) => (
                                <div key={item.id} className="overflow-hidden">
                                    <button
                                        onClick={() =>
                                            setOpenQuestion(
                                                openQuestion === item.id
                                                    ? null
                                                    : item.id
                                            )
                                        }
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                                    >
                                        <span className="font-medium text-foreground pr-4">
                                            {item.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-muted-foreground transition-transform ${
                                                openQuestion === item.id
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {openQuestion === item.id && (
                                        <div className="px-4 pb-4">
                                            <p className="text-black/50">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                    <hr className="text-gray-200" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default QASection;
