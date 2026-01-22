import { useState } from "react";

const HeroSection = ({ data }) => {
    const [activeItem, setActiveItem] = useState(
        data.accordionItems.find((i) => i.isDefault)?.id
    );

    return (
        <section className="relative min-h-screen flex">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>

            {/* Left */}
            <div className="relative z-10 px-8 lg:px-16 py-32">
                <span className="text-white/80 uppercase text-sm border-l-2 pl-3">
                    {data.badge}
                </span>

                <h1 className="text-5xl font-bold text-white mt-6">
                    {data.title.main}
                    <br />
                    <span className="text-primary">{data.title.highlight}</span>
                </h1>

                <p className="text-white/80 mt-4 max-w-md">{data.subtitle}</p>
            </div>

            {/* Right Accordion */}
            <div className="ml-auto w-[40%] bg-black/80 z-20">
                {data.accordionItems.map((item) => (
                    <div key={item.id} className="border-b border-white/10">
                        <button
                            onClick={() => setActiveItem(item.id)}
                            className="w-full px-8 py-8 text-left text-white text-xl flex justify-between"
                        >
                            {item.title}
                        </button>

                        {activeItem === item.id && (
                            <div className="px-8 pb-6 text-white/70">
                                <p>{item.content}</p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        className="text-primary mt-3 inline-block"
                                    >
                                        Learn more
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default HeroSection;
