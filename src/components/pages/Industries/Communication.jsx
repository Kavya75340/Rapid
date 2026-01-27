import { communication } from "./data/communication";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Communication = () => {
    return (
        <>
            <HeroSection data={communication.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={communication.expertsQA} />
            <PerspectivesSection data={communication.perspectives} />
            <ResourcesSection data={communication.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Communication;
