import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-hero text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                            Watch our CEO and experts discuss generative AI
                        </h2>
                        <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg">
                            You want to power growth using generative AI,
                            turning data into insights, and digitally
                            transforming your operations. We want to help.
                        </p>

                        <Button
                            variant="hero"
                            size="lg"
                            className="mt-8 gap-2"
                            asChild
                        >
                            <a href="/video">
                                <Play className="w-5 h-5" />
                                Watch video
                            </a>
                        </Button>
                    </div>

                    {/* Video Preview */}
                    <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden bg-navy-light shadow-elevated">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                                <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Blurs */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
