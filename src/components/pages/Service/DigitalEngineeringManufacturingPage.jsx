import { digitalEngineeringManufacturingPage } from "./pages/digital-E-M.js";
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
const DigitalEngineeringManufacturingPage = () => {
    return (
        <>
            <HeroSection data={digitalEngineeringManufacturingPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection
                data={digitalEngineeringManufacturingPage.whatWeDo}
            />
            <HowWeHelpSection
                data={digitalEngineeringManufacturingPage.howWeHelp}
            />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={digitalEngineeringManufacturingPage.faqs} />
        </>
    );
};
export default DigitalEngineeringManufacturingPage;
