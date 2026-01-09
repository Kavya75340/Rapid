import { cybersecurityPage } from "./pages/cybersecurity";
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
