import { aerospaceAndDefence } from "./data/aerospaceAndDefence";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const AerospaceAndDefence = () => {
    return (
        <>
            <HeroSection data={aerospaceAndDefence.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={aerospaceAndDefence.expertsQA} />
            <PerspectivesSection data={aerospaceAndDefence.perspectives} />
            <ResourcesSection data={aerospaceAndDefence.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default AerospaceAndDefence;
