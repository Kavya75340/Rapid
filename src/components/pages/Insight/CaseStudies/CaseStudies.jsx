import { useState } from "react";
import CaseStudiesFilter from "./section/CaseStudiesFilter";
import CaseStudiesHero from "./section/CaseStudiesHero";
import IndustryShowcase from "./section/IndustryShowcase";
import CaseStudiesGrid from "./section/CaseStudiesGrid";
import Featured from "../Featured";
import ExpertiseSection from "../ExpertiseSection";

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
            <Featured />
            <IndustryShowcase />
            <CaseStudiesGrid filters={filters} />
            <ExpertiseSection />
        </>
    );
};
export default CaseStudies;
