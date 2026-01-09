import { cybersecurityPage } from "./pages/cybersecurity";
import HeroSection from "@/sections/common/HeroSection";
import WhatWeDoSection from "@/sections/common/WhatWeDoSection";
import HowWeHelpSection from "@/sections/common/HowWeHelpSection";
import FAQSection from "@/sections/common/FAQSection";
import JumpToNav from "@/sections/common/JumpToNav";
import MarqueeBanner from "@/sections/common/MarqueeBanner";
import AwardsSection from "@/sections/common/AwardsSection";
import AIAssessmentBanner from "@/sections/common/AIAssessmentBanner";
import InsightsSection from "@/sections/common/InsightsSection";
import CustomersSection from "@/sections/common/CustomersSection";
import ExpertVoicesSection from "@/sections/common/ExpertVoicesSection";
import PartnersSection from "@/sections/common/PartnersSection";

const CyberSecurity = () => {
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
export default CyberSecurity;
