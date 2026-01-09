import { financeRiskManagementPage } from "./pages/finance-r-m.js";
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

const FinanceRiskManagementPage = () => {
    return (
        <>
            <HeroSection data={financeRiskManagementPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={financeRiskManagementPage.whatWeDo} />
            <HowWeHelpSection data={financeRiskManagementPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={financeRiskManagementPage.faqs} />
        </>
    );
};
export default FinanceRiskManagementPage;
