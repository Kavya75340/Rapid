import { useState } from "react";
import CaseStudiesFilter from "./section/CaseStudiesFilter";
import CaseStudiesHero from "./section/CaseStudiesHero";
import FeaturedCaseStudy from "./section/FeaturedCaseStudy";
import IndustryShowcase from "./section/IndustryShowcase";
import CaseStudiesGrid from "./section/CaseStudiesGrid";

const CaseStudies = () => {
    const [filters, setFilters] = useState({
        industry: "All Industries",
        solution: "All Solutions",
        search: "",
    });
    return (
        <>
            <CaseStudiesHero />
            <CaseStudiesFilter onFilterChange={setFilters} />
            <FeaturedCaseStudy />
            <IndustryShowcase />
            <CaseStudiesGrid filters={filters} />
        </>
    );
};
export default CaseStudies;
