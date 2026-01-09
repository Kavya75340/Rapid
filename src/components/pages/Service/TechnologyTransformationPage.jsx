import { technologyTransformationPage } from "./pages/technology-t.js";
import HeroSection from "@/sections/common/HeroSection.jsx";
import WhatWeDoSection from "@/sections/common/WhatWeDoSection.jsx";
import HowWeHelpSection from "@/sections/common/HowWeHelpSection.jsx";
import FAQSection from "@/sections/common/FAQSection.jsx";
import JumpToNav from "@/sections/common/JumpToNav.jsx";
import MarqueeBanner from "@/sections/common/MarqueeBanner.jsx";
import AwardsSection from "@/sections/common/AwardsSection.jsx";
import AIAssessmentBanner from "@/sections/common/AIAssessmentBanner.jsx";
import InsightsSection from "@/sections/common/InsightsSection.jsx";
import CustomersSection from "@/sections/common/CustomersSection.jsx";
import ExpertVoicesSection from "@/sections/common/ExpertVoicesSection.jsx";
import PartnersSection from "@/sections/common/PartnersSection.jsx";
const TechnologyTransformationPage = () => {
    return (
        <>
            <HeroSection data={technologyTransformationPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={technologyTransformationPage.whatWeDo} />
            <HowWeHelpSection data={technologyTransformationPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={technologyTransformationPage.faqs} />
        </>
    );
};
export default TechnologyTransformationPage;
