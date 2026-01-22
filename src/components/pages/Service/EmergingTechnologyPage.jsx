import { emergingTechPage } from "./pages/emerging-tech.js";
import HeroSection from "./common/HeroSection.jsx";
import WhatWeDoSection from "./common/WhatWeDoSection.jsx";
import HowWeHelpSection from "./common/HowWeHelpSection.jsx";
import FAQSection from "./common/FAQSection.jsx";
import JumpToNav from "./common/JumpToNav.jsx";
import MarqueeBanner from "./common/MarqueeBanner.jsx";
import AwardsSection from "./common/AwardsSection.jsx";
import InsightsSection from "./common/InsightsSection.jsx";
import CustomersSection from "./common/CustomersSection.jsx";
import ExpertVoicesSection from "./common/ExpertVoicesSection.jsx";
import PartnersSection from "./common/PartnersSection.jsx";

const EmergingTechnologyPage = () => {
    return (
        <>
            <HeroSection data={emergingTechPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={emergingTechPage.whatWeDo} />
            <HowWeHelpSection data={emergingTechPage.howWeHelp} />
            {/* <AwardsSection /> */}
            <InsightsSection data={emergingTechPage.insights} />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={emergingTechPage.faqs} />
        </>
    );
};
export default EmergingTechnologyPage;
