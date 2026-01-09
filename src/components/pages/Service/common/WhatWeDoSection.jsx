function WhatWeDoSection({ data }) {
    return (
        <section
            id={data.sectionMeta.id}
            className="py-20 lg:py-28 bg-background"
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Content */}
                    <div>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                            {data.sectionMeta.eyebrow}
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {data.heading}
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>

                    {/* Right – Video */}
                    {data.video?.enabled && (
                        <div className="relative aspect-video bg-kyndryl-navy rounded-lg overflow-hidden flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/20 transition-colors">
                                    <svg
                                        className="w-6 h-6 text-white ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="text-white/70 text-sm">
                                    {data.video.label}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default WhatWeDoSection;
