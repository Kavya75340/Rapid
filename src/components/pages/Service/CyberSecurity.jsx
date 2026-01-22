import { cyberSecurityPage } from "./pages/cybersecurity.js";
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

const CyberSecurity = () => {
    return (
        <>
            <HeroSection data={cyberSecurityPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={cyberSecurityPage.whatWeDo} />
            <HowWeHelpSection data={cyberSecurityPage.howWeHelp} />
            {/* <AwardsSection /> */}
            <InsightsSection data={cyberSecurityPage.insights} />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={cyberSecurityPage.faqs} />
        </>
    );
};
export default CyberSecurity;
