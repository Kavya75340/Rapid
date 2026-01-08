import { strategyPage } from "../../../../data/pages/strategy";
import HeroSection from "../../../sections/Service/pagedesign/HeroSection";
import WhatWeDoSection from "../../../sections/Service/pagedesign/WhatWeDoSection";
import HowWeHelpSection from "../../../sections/Service/pagedesign/HowWeHelpSection";
import FAQSection from "../../../sections/Service/pagedesign/FAQSection";
import JumpToNav from "../../../sections/Service/data-artificial/JumpToNav";
import MarqueeBanner from "../../../sections/Service/data-artificial/MarqueeBanner";
import AwardsSection from "../../../sections/Service/data-artificial/AwardsSection";
import AIAssessmentBanner from "../../../sections/Service/data-artificial/AIAssessmentBanner";
import InsightsSection from "../../../sections/Service/data-artificial/InsightsSection";
import CustomersSection from "../../../sections/Service/data-artificial/CustomersSection";
import ExpertVoicesSection from "../../../sections/Service/data-artificial/ExpertVoicesSection";
import PartnersSection from "../../../sections/Service/data-artificial/PartnersSection";

const StrategyPage = () => {
    return (
        <>
            <HeroSection data={strategyPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={strategyPage.whatWeDo} />
            <HowWeHelpSection data={strategyPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={strategyPage.faqs} />
        </>
    );
};
export default StrategyPage;
