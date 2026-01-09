import { emergingTechnologyPage } from "./pages/emerging-tech.js";
import HeroSection from "@/sections/common/HeroSection.jsx";
import WhatWeDoSection from "@/sections/common/WhatWeDoSection.jsx";
import HowWeHelpSection from "@/sections/common/HowWeHelpSection.jsx";
import FAQSection from "@/sections/common/FAQSection.jsx";
import JumpToNav from "@/sections/common/JumpToNav.jsx";
import MarqueeBanner from "@/sections/common/MarqueeBanner.jsx";
import AwardsSection from "@/sections/common/AwardsSection.jsx";
import AIAssessmentBanner from "@/sections/common/AIAssessmentBanner.jsx";
import InsightsSection from "@/sections/common/InsightsSection.jsx";
import CustomersSection from "@/sections/common/CustomersSection.jsx";
import ExpertVoicesSection from "@/sections/common/ExpertVoicesSection.jsx";
import PartnersSection from "@/sections/common/PartnersSection.jsx";

const EmergingTechnologyPage = () => {
    return (
        <>
            <HeroSection data={emergingTechnologyPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={emergingTechnologyPage.whatWeDo} />
            <HowWeHelpSection data={emergingTechnologyPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={emergingTechnologyPage.faqs} />
        </>
    );
};
export default EmergingTechnologyPage;
