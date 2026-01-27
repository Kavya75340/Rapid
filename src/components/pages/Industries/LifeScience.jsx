import { lifeSciences } from "./data/lifeSciences";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const LifeSciences = () => {
    return (
        <>
            <HeroSection data={lifeSciences.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={lifeSciences.expertsQA} />
            <PerspectivesSection data={lifeSciences.perspectives} />
            <ResourcesSection data={lifeSciences.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default LifeSciences;
