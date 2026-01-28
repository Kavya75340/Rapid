import { Bell, Upload } from "lucide-react";

const ResumeSection = () => {
    return (
        <section id="resume" className="py-16 lg:py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                        Stay Connected
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Keep in touch with Rapidcode. Sign up for job alerts or
                        share your resume for future opportunities
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        type="button"
                        className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-md transition"
                    >
                        <Bell className="mr-2 h-5 w-5" />
                        Sign up for job alerts
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-md transition"
                    >
                        <Upload className="mr-2 h-5 w-5" />
                        Upload your resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
