import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

const industries = [
    "All Industries",
    "Healthcare",
    "Banking & Finance",
    "Retail",
    "Manufacturing",
    "Telecommunications",
    "Energy & Utilities",
    "Government",
];

const solutions = [
    "All Solutions",
    "Cloud Modernization",
    "Data & AI",
    "Digital Workplace",
    "Security & Resiliency",
    "Network & Edge",
    "Core Enterprise",
];

const CaseStudiesFilter = ({ onFilterChange }) => {
    const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
    const [selectedSolution, setSelectedSolution] = useState("All Solutions");
    const [searchQuery, setSearchQuery] = useState("");
    const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
    const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);

    const handleIndustrySelect = (industry) => {
        setSelectedIndustry(industry);
        setShowIndustryDropdown(false);
        onFilterChange({
            industry,
            solution: selectedSolution,
            search: searchQuery,
        });
    };

    const handleSolutionSelect = (solution) => {
        setSelectedSolution(solution);
        setShowSolutionDropdown(false);
        onFilterChange({
            industry: selectedIndustry,
            solution,
            search: searchQuery,
        });
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onFilterChange({
            industry: selectedIndustry,
            solution: selectedSolution,
            search: value,
        });
    };

    return (
        <section className="sticky top-[0px] z-40 bg-gray-50 border-b border-gray-200 py-4 lg:py-8 ">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                    {/* SEARCH */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search case studies..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                        />
                    </div>

                    {/* FILTERS */}
                    <div className="flex gap-4">
                        {/* INDUSTRY FILTER */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowIndustryDropdown(
                                        !showIndustryDropdown
                                    );
                                    setShowSolutionDropdown(false);
                                }}
                                className="flex items-center justify-between gap-2 px-4 py-3 min-w-[180px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition"
                            >
                                <span className="flex items-center gap-2 text-sm text-gray-700">
                                    <Filter className="w-4 h-4 text-gray-400" />
                                    {selectedIndustry}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-gray-400 transition-transform ${
                                        showIndustryDropdown ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {showIndustryDropdown && (
                                <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    {industries.map((industry) => (
                                        <button
                                            key={industry}
                                            onClick={() =>
                                                handleIndustrySelect(industry)
                                            }
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
                                                selectedIndustry === industry
                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                    : "text-gray-800"
                                            }`}
                                        >
                                            {industry}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* SOLUTION FILTER */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowSolutionDropdown(
                                        !showSolutionDropdown
                                    );
                                    setShowIndustryDropdown(false);
                                }}
                                className="flex items-center justify-between gap-2 px-4 py-3 min-w-[180px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition"
                            >
                                <span className="text-sm text-gray-700">
                                    {selectedSolution}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-gray-400 transition-transform ${
                                        showSolutionDropdown ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {showSolutionDropdown && (
                                <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    {solutions.map((solution) => (
                                        <button
                                            key={solution}
                                            onClick={() =>
                                                handleSolutionSelect(solution)
                                            }
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
                                                selectedSolution === solution
                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                    : "text-gray-800"
                                            }`}
                                        >
                                            {solution}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesFilter;
