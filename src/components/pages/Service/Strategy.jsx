import { strategyPage } from "./pages/strategy";
import HeroSection from "@/sections/service/HeroSection";
import WhatWeDoSection from "@/sections/service/WhatWeDoSection";
import HowWeHelpSection from "@/sections/service/HowWeHelpSection";
import FAQSection from "@/sections/service/FAQSection";
import JumpToNav from "@/sections/service/JumpToNav";
import MarqueeBanner from "@/sections/service/MarqueeBanner";
import AwardsSection from "@/sections/service/AwardsSection";
import AIAssessmentBanner from "@/sections/service/AIAssessmentBanner";
import InsightsSection from "@/sections/service/InsightsSection";
import CustomersSection from "@/sections/service/CustomersSection";
import ExpertVoicesSection from "@/sections/service/ExpertVoicesSection";
import PartnersSection from "@/sections/service/PartnersSection";
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
