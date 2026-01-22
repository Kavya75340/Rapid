import { ArrowRight, Quote } from "lucide-react";
import healthcareImage from "@/assets/case-studies/case-study-healthcare.jpg";

const FeaturedCaseStudy = () => {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Heading */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                        Featured Success Story
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Healthcare Transformation
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src={healthcareImage}
                            alt="Global Healthcare Provider Digital Transformation"
                            className="w-full aspect-[4/3] object-cover rounded-xl"
                        />

                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-xl hidden lg:block shadow-lg">
                            <span className="text-4xl font-bold text-white">
                                40%
                            </span>
                            <p className="text-white/80 text-sm mt-1">
                                Cost Reduction
                            </p>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                        {/* Quote */}
                        <div className="bg-gray-100 p-6 rounded-xl mb-8">
                            <div className="flex items-start gap-4">
                                <Quote className="w-10 h-10 text-blue-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg text-gray-900 italic leading-relaxed">
                                        “RapidCode's AI-powered solutions
                                        transformed our patient care operations.
                                        We've seen unprecedented improvements in
                                        efficiency and patient outcomes.”
                                    </p>

                                    <div className="mt-4">
                                        <p className="font-semibold text-gray-900">
                                            Dr. Sarah Mitchell
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Chief Digital Officer, Global Health
                                            Network
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Global Health Network Achieves Digital Excellence
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A leading healthcare provider serving 50+ million
                            patients modernized its legacy systems with
                            RapidCode’s data and AI solutions. The
                            transformation delivered a 40% reduction in
                            operational costs, 60% faster patient data
                            processing, and improved regulatory compliance.
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-4 bg-gray-100 rounded-xl">
                                <span className="text-2xl font-bold text-blue-600">
                                    50M+
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    Patients Served
                                </p>
                            </div>

                            <div className="text-center p-4 bg-gray-100 rounded-xl">
                                <span className="text-2xl font-bold text-blue-600">
                                    60%
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    Faster Processing
                                </p>
                            </div>

                            <div className="text-center p-4 bg-gray-100 rounded-xl">
                                <span className="text-2xl font-bold text-blue-600">
                                    99.9%
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    System Uptime
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="/case-studies/healthcare"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition group"
                        >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;
