import { useEffect, useState } from "react";
import heroVideo from "../../../assets/video7.webm";
import TextType from "../../TextType";

const SLIDES = [
    {
        id: 1,
        accent: "Operational Excellence",
        title: "Deploy AI Agents — With Security And Scalability Built In.",
        description:
            "Leverage advanced analytics to drive operational efficiency. We combine industry expertise with data-led insights to optimize your business processes and reduce risk.",
        cta: "Explore Solutions",
    },
    {
        id: 2,
        accent: "AI & Machine Learning",
        title: "Technical Mastery With Strategic Foresight.",
        description:
            "By operating your mission-critical platforms internally and harnessing our deep sector expertise, we reinvent your business to lead tomorrow with confidence.",
        cta: "View AI Capabilities",
    },
    {
        id: 3,
        accent: "Strategic Consulting",
        title: "Elevate Your Enterprise Through Intelligent Automation.",
        description:
            "Harness advanced AI solutions to modernize operations and accelerate sustainable growth.",
        cta: "Meet Our Experts",
    },
];

const NavArrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/10 
    bg-black/20 backdrop-blur-sm text-white/70 hover:text-enterprise-orange 
    hover:bg-white/10 transition hidden lg:flex
    ${direction === "next" ? "right-12" : "left-12"}`}
    >
        <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
                transform: direction === "prev" ? "rotate(180deg)" : "none",
            }}
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    </button>
);
const ProgressBar = ({ active, onClick }) => (
    <button
        onClick={onClick}
        className={`h-1 rounded-full transition-all duration-500 ${
            active ? "w-12 bg-blue-600" : "w-8 bg-white/30 hover:bg-white/50"
        }`}
    />
);

const AbstractVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-enterprise-orange/10 to-blue-600/10 blur-[100px] animate-pulse-glow"></div>

        <div className="relative w-64 h-64 lg:w-96 lg:h-96 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rotate-45 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-enterprise-orange/30 rounded-lg p-4 flex flex-col justify-between">
                    <div className="h-1 w-1/3 bg-enterprise-orange/50 rounded-full" />
                    <div className="space-y-2">
                        <div className="h-1 w-full bg-white/20 rounded-full" />
                        <div className="h-1 w-2/3 bg-white/20 rounded-full" />
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="text-enterprise-orange font-bold text-xl">
                            01
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                            <div className="w-2 h-2 bg-enterprise-orange rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setCurrent((c) => (c + 1) % SLIDES.length),
            6000
        );
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[current];

    return (
        <section className="relative h-[90vh] top-0 bg-enterprise-dark text-white overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-br " />
            <div className="bg-noise" />
            <div className="relative z-10  h-full grid lg:grid-cols-1">
                <div className="flex flex-col justify-center px-10 lg:px-50">
                    <span className="text-enterprise-orange text-sm uppercase tracking-widest mb-4">
                        {slide.accent}
                    </span>
                    <TextType
                        key={slide.id} // 🔥 THIS IS THE FIX
                        className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6"
                        text={slide.title}
                        typingSpeed={100}
                        pauseDuration={4000}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                    {/* <h1 className="">{}</h1> */}

                    <p className="text-gray-400 max-w-lg mb-10">
                        {slide.description}
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 border border-enterprise-orange text-enterprise-orange hover:bg-enterprise-orange hover:text-white transition">
                            {slide.cta}
                        </button>
                        <button className="px-8 py-4 border border-white/20 hover:bg-white/10 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* <div className="flex items-center justify-center">
                    <AbstractVisual />
                </div> */}
            </div>

            <NavArrow
                direction="prev"
                onClick={() =>
                    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
                }
            />
            <NavArrow
                direction="next"
                onClick={() => setCurrent((c) => (c + 1) % SLIDES.length)}
            />
            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3">
                {SLIDES.map((_, i) => (
                    <ProgressBar
                        key={i}
                        active={i === current}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </section>
    );
}
