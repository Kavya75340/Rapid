import { healthcare } from "./data/healthcare";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "./common/MarqueeSection";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const HealthCare = () => {
    return (
        <>
            <HeroSection data={healthcare.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={healthcare.expertsQA} />
            <PerspectivesSection data={healthcare.perspectives} />
            <ResourcesSection data={healthcare.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default HealthCare;
