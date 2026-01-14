import { highTech } from "./data/highTech";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "./common/MarqueeSection";
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
