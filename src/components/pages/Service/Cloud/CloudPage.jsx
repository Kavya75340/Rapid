import { cloudPage } from "@/data/pages/cloud";
import HeroSection from "@/sections/Service/pagedesign/HeroSection.jsx";
import WhatWeDoSection from "@/sections/Service/pagedesign/WhatWeDoSection.jsx";
import HowWeHelpSection from "@/sections/Service/pagedesign/HowWeHelpSection.jsx";
import FAQSection from "@/sections/Service/pagedesign/FAQSection.jsx";
import JumpToNav from "@/sections/Service/data-artificial/JumpToNav.jsx";
import MarqueeBanner from "@/sections/Service/data-artificial/MarqueeBanner.jsx";
import AwardsSection from "@/sections/Service/data-artificial/AwardsSection.jsx";
import AIAssessmentBanner from "@/sections/Service/data-artificial/AIAssessmentBanner.jsx";
import InsightsSection from "@/sections/Service/data-artificial/InsightsSection.jsx";
import CustomersSection from "@/sections/Service/data-artificial/CustomersSection.jsx";
import ExpertVoicesSection from "@/sections/Service/data-artificial/ExpertVoicesSection.jsx";
import PartnersSection from "@/sections/Service/data-artificial/PartnersSection.jsx";

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
