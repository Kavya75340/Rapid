import IndustryShowcase from "./section/IndustryShowcase";
import Featured from "../Featured";
import WhitePaperFilter from "./section/WhitePaperFilter";
import WhitePapersHero from "./section/WhitePaperHero";
import WhitePaperGrid from "./section/WhitePaperGrid";
import { useState } from "react";

const WhitePaper = () => {
    const [filters, setFilters] = useState({
        industry: "All Industries",
        solution: "All Solutions",
        search: "",
    });
    return (
        <>
            <WhitePapersHero />
            <WhitePaperFilter onFilterChange={setFilters} />
            <Featured />
            <IndustryShowcase />
            <WhitePaperGrid filters={filters} />
        </>
    );
};
export default WhitePaper;
