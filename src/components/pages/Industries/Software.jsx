import { softwareAndPlatforms } from "./data/softwareAndPlatforms";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Software = () => {
    return (
        <>
            <HeroSection data={softwareAndPlatforms.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={softwareAndPlatforms.expertsQA} />
            <PerspectivesSection data={softwareAndPlatforms.perspectives} />
            <ResourcesSection data={softwareAndPlatforms.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Software;
