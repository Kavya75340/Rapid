import { travel } from "./data/travel";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Travel = () => {
    return (
        <>
            <HeroSection data={travel.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={travel.expertsQA} />
            <PerspectivesSection data={travel.perspectives} />
            <ResourcesSection data={travel.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Travel;
