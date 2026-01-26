import { ArrowRight, Quote } from "lucide-react";
import healthcareImage from "@/assets/case-studies/case-study-healthcare.jpg";

const Featured = () => {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Heading */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                        Featured Insight
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Digital Innovation in Healthcare
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src={healthcareImage}
                            alt="Digital Healthcare Innovation"
                            className="w-full aspect-[4/3] object-cover rounded-xl"
                        />

                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-xl hidden lg:block shadow-lg">
                            <span className="text-4xl font-bold text-white">
                                38%
                            </span>
                            <p className="text-white/80 text-sm mt-1">
                                Efficiency Gain
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
                                        “Integrating intelligent automation into
                                        clinical workflows has enabled our teams
                                        to deliver faster, more accurate
                                        decisions—resulting in measurable
                                        improvements across patient operations.”
                                    </p>

                                    <div className="mt-4">
                                        <p className="font-semibold text-gray-900">
                                            Dr. Maya Reynolds
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Chief Medical Innovation Officer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Transforming Clinical Systems with Data & Automation
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A major healthcare organization modernized its
                            digital infrastructure using data-driven workflows
                            and AI-enabled automation. The initiative resulted
                            in improved decision-making speed, a reduction in
                            manual processing workload, and stronger compliance
                            across critical operations.
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-4 bg-gray-100 rounded-xl">
                                <span className="text-2xl font-bold text-blue-600">
                                    10K+
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    Users Supported
                                </p>
                            </div>

                            <div className="text-center p-4 bg-gray-100 rounded-xl">
                                <span className="text-2xl font-bold text-blue-600">
                                    55%
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    Faster Processing
                                </p>
                            </div>

                            <div className="text-center p-4 bg-gray-100 rounded-xl">
                                <span className="text-2xl font-bold text-blue-600">
                                    99.8%
                                </span>
                                <p className="text-sm text-gray-500 mt-1">
                                    System Reliability
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="/industries/healthcare"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition group"
                        >
                            Read Full Insight
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
