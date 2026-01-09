import { managedServicesPage } from "./pages/managed-s.js";
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
const ManagedServicesPage = () => {
    return (
        <>
            <HeroSection data={managedServicesPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={managedServicesPage.whatWeDo} />
            <HowWeHelpSection data={managedServicesPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={managedServicesPage.faqs} />
        </>
    );
};
export default ManagedServicesPage;
