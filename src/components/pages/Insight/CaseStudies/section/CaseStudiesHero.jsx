import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/video/hero5.mp4"; // adjust path as per your project

const heroCards = [
    {
        title: "38% reduction in operational costs with AI-powered automation",
        link: "Read case study",
        href: "/case-studies/healthcare",
    },
    {
        title: "Leading bank achieves 99.99% uptime with cloud modernization",
        link: "Explore success story",
        href: "/case-studies/banking",
    },
    {
        title: "Global retailer increases revenue 25% with data analytics",
        link: "View results",
        href: "/case-studies/retail",
    },
];

const CaseStudiesHero = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* LEFT IMAGE AREA */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={heroImage}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative w-full lg:w-[65%] flex  items-stretch">
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
                            Case Studies
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-xl leading-tight mb-6">
                        Customer Success Stories
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm md:text-xl text-white/90 max-w-lg">
                        Discover how leading organizations are transforming
                        their businesses with Rapidcode’s innovative solutions.
                    </p>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-10 mt-10">
                        <div>
                            <span className="text-xl lg:text-4xl font-bold text-white">
                                100+
                            </span>
                            <p className="text-white/70 text-xs mt-1">
                                Success Stories
                            </p>
                        </div>
                        <div>
                            <span className="text-xl lg:text-4xl font-bold text-white">
                                5+
                            </span>
                            <p className="text-white/70 text-xs mt-1">
                                Countries
                            </p>
                        </div>
                        <div>
                            <span className="text-xl lg:text-4xl font-bold text-white">
                                99%
                            </span>
                            <p className="text-white/70 text-xs mt-1">
                                Client Satisfaction
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

export default CaseStudiesHero;
