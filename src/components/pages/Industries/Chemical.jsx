import { chemicals } from "./data/chemicals";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "./common/MarqueeSection";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Chemical = () => {
    return (
        <>
            <HeroSection data={chemicals.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={chemicals.expertsQA} />
            <PerspectivesSection data={chemicals.perspectives} />
            <ResourcesSection data={chemicals.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Chemical;
