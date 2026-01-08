import { ArrowRight } from "lucide-react";
import heroImage from "../../../../assets/video4.webm";

function HeroSection({ data }) {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-stretch overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={heroImage}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Left Side */}
            <div className="relative w-full lg:w-[65%] min-h-[60vh] lg:min-h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-32">
                    {/* Breadcrumb */}
                    <div className="mb-6">
                        <a
                            href={data.breadcrumb.href}
                            className="text-white/80 hover:text-white text-sm font-medium border-b border-white/40 pb-1"
                        >
                            {data.breadcrumb.label}
                        </a>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-xl">
                        {data.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>
            </div>

            {/* Right Cards – Desktop */}
            <div className="hidden lg:flex w-[35%] bg-black/70 flex-col z-20">
                {data.cards.map((card, index) => (
                    <a
                        key={index}
                        href={card.href}
                        className="flex-1 p-8 xl:p-10 flex flex-col justify-center border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors group"
                    >
                        <h3 className="text-xl xl:text-2xl font-semibold text-white mb-4 leading-snug">
                            {card.title}
                        </h3>
                        <span className="text-white/70 text-sm font-medium inline-flex items-center group-hover:text-white">
                            {card.linkText}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                ))}
            </div>

            {/* Mobile Card */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-primary">
                {data.cards.slice(0, 1).map((card, index) => (
                    <a
                        key={index}
                        href={card.href}
                        className="block p-6 border-b border-white/10"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {card.title}
                        </h3>
                        <span className="text-white/70 text-sm font-medium inline-flex items-center">
                            {card.linkText}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default HeroSection;
