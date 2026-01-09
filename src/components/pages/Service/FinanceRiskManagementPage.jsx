import { financeRiskManagementPage } from "./pages/finance-r-m.js";
import HeroSection from "./common/HeroSection.jsx";
import WhatWeDoSection from "./common/WhatWeDoSection.jsx";
import HowWeHelpSection from "./common/HowWeHelpSection.jsx";
import FAQSection from "./common/FAQSection.jsx";
import JumpToNav from "./common/JumpToNav.jsx";
import MarqueeBanner from "./common/MarqueeBanner.jsx";
import AwardsSection from "./common/AwardsSection.jsx";
import AIAssessmentBanner from "./common/AIAssessmentBanner.jsx";
import InsightsSection from "./common/InsightsSection.jsx";
import CustomersSection from "./common/CustomersSection.jsx";
import ExpertVoicesSection from "./common/ExpertVoicesSection.jsx";
import PartnersSection from "./common/PartnersSection.jsx";

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
