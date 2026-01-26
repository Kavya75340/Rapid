import whoweImg from "@/assets/image/whowesection-service.jpeg";
function WhatWeDoSection({ data }) {
    return (
        <section
            id="who_we_are"
            className="py-20 lg:py-0 lg:pl-10 bg-background"
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 block">
                            {data.sectionMeta.eyebrow}
                        </span>
                        <h2 className="ml-2 text-3xl md:text-4xl lg:text-3xl font-medium text-foreground mb-6 leading-tight">
                            {data.heading}
                        </h2>

                        <p className="ml-2 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>

                    {/* Right – Video */}

                    <div className="overflow-hidden flex items-center justify-center w-full ml-5 p-5">
                        <img
                            src={whoweImg}
                            alt="who-we-are"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDoSection;
