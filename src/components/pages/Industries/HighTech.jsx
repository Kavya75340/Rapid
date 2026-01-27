import { highTech } from "./data/hightech.js";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const HighTech = () => {
    return (
        <>
            <HeroSection data={highTech.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={highTech.expertsQA} />
            <PerspectivesSection data={highTech.perspectives} />
            <ResourcesSection data={highTech.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default HighTech;
