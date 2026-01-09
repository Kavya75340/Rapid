import { cloudPage } from "./pages/cloud";
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

const CloudPage = () => {
    return (
        <>
            <HeroSection data={cloudPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={cloudPage.whatWeDo} />
            <HowWeHelpSection data={cloudPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={cloudPage.faqs} />
        </>
    );
};
export default CloudPage;
