import { ArrowRight } from "lucide-react";

export const AnnouncementBar = () => {
    return (
        <a
            href="/newsroom/data-launch"
            className="block bg-primary hover:bg-primary/90 transition-colors"
        >
            <div className="container mx-auto px-4 lg:px-8 py-3">
                <div className="flex items-center justify-center gap-3 text-primary-foreground">
                    <span className="text-sm md:text-base font-medium">
                        Rapidcode unveils Rapidcode.ai with launch partner
                        Databricks
                    </span>
                    <ArrowRight className="w-4 h-4 hidden sm:block" />
                </div>
            </div>
        </a>
    );
};
