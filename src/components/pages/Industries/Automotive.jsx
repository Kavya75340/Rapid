import { automotive } from "./data/automotive.js";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "./common/MarqueeSection";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Automotive = () => {
    return (
        <>
            <HeroSection data={automotive.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={automotive.expertsQA} />
            <PerspectivesSection data={automotive.perspectives} />
            <ResourcesSection data={automotive.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Automotive;
