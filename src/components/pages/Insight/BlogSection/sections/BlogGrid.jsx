import { useState } from "react";
import BlogCard from "./BlogCard";

import bankingImage from "@/assets/case-studies/case-study-banking.jpg";
import retailImage from "@/assets/case-studies/case-study-retail.jpg";
import manufacturingImage from "@/assets/case-studies/case-study-manufacturing.jpg";
import telecomImage from "@/assets/case-studies/case-study-telecom.jpg";
import energyImage from "@/assets/case-studies/case-study-energy.jpg";
import healthcareImage from "@/assets/case-studies/case-study-healthcare.jpg";

const caseStudies = [
    {
        id: 1,
        image: bankingImage,
        industry: "Banking & Finance",
        solution: "Cloud Modernization",
        title: "Leading Bank Achieves 99.99% Uptime with Cloud Transformation",
        description:
            "A top-10 global bank modernized their core banking infrastructure, achieving unprecedented reliability and 50% reduction in IT costs while enabling real-time transaction processing.",
        stats: [
            { value: "99.99%", label: "Uptime" },
            { value: "50%", label: "Cost Savings" },
            { value: "10x", label: "Faster Deploy" },
        ],
        href: "/case-studies/banking",
    },
    {
        id: 2,
        image: retailImage,
        industry: "Retail",
        solution: "Data & AI",
        title: "Global Retailer Increases Revenue 25% with AI-Powered Analytics",
        description:
            "A Fortune 500 retailer implemented advanced analytics to optimize inventory, personalize customer experiences, and boost revenue.",
        stats: [
            { value: "25%", label: "Revenue Growth" },
            { value: "35%", label: "Less Waste" },
            { value: "2x", label: "Engagement" },
        ],
        href: "/case-studies/retail",
    },
    {
        id: 3,
        image: manufacturingImage,
        industry: "Manufacturing",
        solution: "Data & AI",
        title: "Smart Factory Implementation Reduces Downtime by 70%",
        description:
            "An automotive manufacturer used IoT and AI-driven predictive maintenance to reduce downtime and improve quality control.",
        stats: [
            { value: "70%", label: "Less Downtime" },
            { value: "45%", label: "Quality Gain" },
            { value: "$20M", label: "Savings" },
        ],
        href: "/case-studies/manufacturing",
    },
    {
        id: 4,
        image: telecomImage,
        industry: "Telecommunications",
        solution: "Network & Edge",
        title: "Telecom Giant Accelerates 5G Rollout with Edge Computing",
        description:
            "A telecom leader deployed edge infrastructure across 1000+ sites, enabling ultra-low latency 5G services.",
        stats: [
            { value: "1000+", label: "Edge Sites" },
            { value: "5ms", label: "Latency" },
            { value: "3x", label: "Faster Rollout" },
        ],
        href: "/case-studies/telecom",
    },
    {
        id: 5,
        image: energyImage,
        industry: "Energy & Utilities",
        solution: "Security & Resiliency",
        title: "Energy Company Modernizes Grid with Secure Cloud Infrastructure",
        description:
            "A national energy provider migrated legacy systems to a secure cloud platform, improving grid reliability.",
        stats: [
            { value: "99.999%", label: "Availability" },
            { value: "0", label: "Breaches" },
            { value: "40%", label: "OpEx Savings" },
        ],
        href: "/case-studies/energy",
    },
    {
        id: 6,
        image: healthcareImage,
        industry: "Healthcare",
        solution: "Digital Workplace",
        title: "Hospital Network Enables Remote Care for 10M+ Patients",
        description:
            "A hospital network enabled telehealth services across 50+ facilities using modern digital workplace solutions.",
        stats: [
            { value: "10M+", label: "Patients" },
            { value: "50+", label: "Facilities" },
            { value: "80%", label: "Satisfaction" },
        ],
        href: "/case-studies/healthcare",
    },
];

const BlogGrid = ({ filters }) => {
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredStudies = caseStudies.filter((study) => {
        const matchesIndustry =
            filters.industry === "All Industries" ||
            study.industry === filters.industry;

        const matchesSolution =
            filters.solution === "All Solutions" ||
            study.solution === filters.solution;

        const matchesSearch =
            filters.search === "" ||
            study.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            study.description
                .toLowerCase()
                .includes(filters.search.toLowerCase());

        return matchesIndustry && matchesSolution && matchesSearch;
    });

    const visibleStudies = filteredStudies.slice(0, visibleCount);

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 block">
                        All Case Studies
                    </span>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Explore Our Success Stories
                        </h2>

                        <p className="text-gray-600">
                            Showing {visibleStudies.length} of{" "}
                            {filteredStudies.length}
                        </p>
                    </div>
                </div>

                {/* Empty State */}
                {filteredStudies.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">
                            No case studies found.
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Try changing filters or search keywords.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {visibleStudies.map((study) => (
                                <BlogCard key={study.id} {...study} />
                            ))}
                        </div>

                        {/* Load More */}
                        {visibleCount < filteredStudies.length && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={() =>
                                        setVisibleCount((prev) => prev + 6)
                                    }
                                    className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    Load More Case Studies
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default BlogGrid;
