import { energy } from "./data/energy";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Energy = () => {
    return (
        <>
            <HeroSection data={energy.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={energy.expertsQA} />
            <PerspectivesSection data={energy.perspectives} />
            <ResourcesSection data={energy.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Energy;
