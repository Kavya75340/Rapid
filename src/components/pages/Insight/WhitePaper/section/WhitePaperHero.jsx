import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/video/hero5.mp4"; // adjust path as per your project

const heroCards = [
    {
        title: "38% operational cost optimization driven by AI automation",
        link: "Read white paper",
        href: "/white-papers/ai-automation",
    },
    {
        title: "Cloud-first transformation delivers 99.99% platform availability",
        link: "Download white paper",
        href: "/white-papers/cloud-modernization",
    },
    {
        title: "Advanced analytics enable 25% revenue uplift at scale",
        link: "Access white paper",
        href: "/white-papers/data-analytics",
    },
];

const WhitePapersHero = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex overflow-hidden flex-col lg:flex-row">
            {/* LEFT VIDEO AREA */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={heroImage}
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="relative w-full lg:w-[65%] flex items-stretch">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-32">
                    {/* Breadcrumb */}
                    <div className="mb-6 text-sm text-white/80">
                        <a
                            href="/"
                            className="hover:text-white border-b border-white/40"
                        >
                            Home
                        </a>
                        <span className="mx-2 text-white/60">/</span>
                        <span className="text-white font-medium">
                            White Papers
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-xl leading-tight mb-6">
                        Strategic Technology White Papers
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm md:text-xl text-white/90 max-w-lg">
                        Gain actionable insights on digital innovation, cloud,
                        data, and AI through Rapidcode’s expert research.
                    </p>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-10 mt-10">
                        <div>
                            <span className="text-xl lg:text-4xl font-bold text-white">
                                50+
                            </span>
                            <p className="text-white/70 text-xs mt-1">
                                Published White Papers
                            </p>
                        </div>
                        <div>
                            <span className="text-xl lg:text-4xl font-bold text-white">
                                10+
                            </span>
                            <p className="text-white/70 text-xs mt-1">
                                Industry Verticals
                            </p>
                        </div>
                        <div>
                            <span className="text-xl lg:text-4xl font-bold text-white">
                                Global
                            </span>
                            <p className="text-white/70 text-xs mt-1">
                                Enterprise Reach
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT DESKTOP CARDS */}
            <div className="flex lg:w-[35%] w-full bg-gray-700/80 flex-col z-20">
                {heroCards.map((card, index) => (
                    <a
                        key={index}
                        href={card.href}
                        className="flex-1 p-8 xl:p-10 flex flex-col justify-center border-b border-white/10 hover:bg-white/5 transition group"
                    >
                        <h3 className="text-xl xl:text-2xl font-semibold text-white mb-4 leading-snug">
                            {card.title}
                        </h3>

                        <span className="text-sm text-white/70 inline-flex items-center group-hover:text-white">
                            {card.link}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default WhitePapersHero;
