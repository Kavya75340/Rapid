import { Play } from "lucide-react";

const BecomeSection = () => {
    return (
        <section id="become" className=" bg-background m-0">
            <div className="relative max-w-full mx-0 px-0 lg:px-0">
                {/* Heading */}
                <div className="absolute z-20 bottom-0 left-0 text-center mb-10 ml-10">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white">
                        Become a Rapidcode
                    </h2>
                </div>

                {/* Video Preview */}
                <div className="relative aspect-video max-w-full overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop"
                        alt="Team meeting"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                        <button
                            type="button"
                            className="w-20 h-20 border border-white rounded-full bg-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                        >
                            <Play
                                className="h-8 w-8 text-white"
                                fill="currentColor"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeSection;
