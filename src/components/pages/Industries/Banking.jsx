import { bankingAndFinance } from "./data/banking";
import CTASection from "./common/CTASection";
import ExpertsSection from "./section/ExpertsSection";
import HeroSection from "./section/HeroSection";
import MarqueeSection from "../CommonSection/MarqueeSection.jsx";
import PerspectivesSection from "./section/PerspectivesSection";
import ResourcesSection from "./section/ResourcesSection";
import StatsSection from "./common/StatsSection";

const Banking = () => {
    return (
        <>
            <HeroSection data={bankingAndFinance.heroAccordion} />
            <MarqueeSection />
            <StatsSection />
            <ExpertsSection data={bankingAndFinance.expertsQA} />
            <PerspectivesSection data={bankingAndFinance.perspectives} />
            <ResourcesSection data={bankingAndFinance.resources} />
            <CTASection />
            <MarqueeSection />
        </>
    );
};
export default Banking;
