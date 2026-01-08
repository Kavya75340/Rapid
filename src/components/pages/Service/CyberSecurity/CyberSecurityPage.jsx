import { cybersecurityPage } from "@/data/pages/cybersecurity";
import HeroSection from "@/sections/Service/PageDesign/HeroSection.jsx";
import WhatWeDoSection from "@/sections/Service/PageDesign/WhatWeDoSection.jsx";
import HowWeHelpSection from "@/sections/Service/PageDesign/HowWeHelpSection.jsx";
import FAQSection from "@/sections/Service/PageDesign/FAQSection.jsx";
import JumpToNav from "@/sections/Service/data-artificial/JumpToNav.jsx";
import MarqueeBanner from "@/sections/Service/data-artificial/MarqueeBanner.jsx";
import AwardsSection from "@/sections/Service/data-artificial/AwardsSection.jsx";
import AIAssessmentBanner from "@/sections/Service/data-artificial/AIAssessmentBanner.jsx";
import InsightsSection from "@/sections/Service/data-artificial/InsightsSection.jsx";
import CustomersSection from "@/sections/Service/data-artificial/CustomersSection.jsx";
import ExpertVoicesSection from "@/sections/Service/data-artificial/ExpertVoicesSection.jsx";
import PartnersSection from "@/sections/Service/data-artificial/PartnersSection.jsx";

const CyberSecurityPage = () => {
    return (
        <>
            <HeroSection data={cybersecurityPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={cybersecurityPage.whatWeDo} />
            <HowWeHelpSection data={cybersecurityPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={cybersecurityPage.faqs} />
        </>
    );
};
export default CyberSecurityPage;
