import { technologyTransformationPage } from "./pages/technology-t.js";
import HeroSection from "@/sections/HeroSection.jsx";
import WhatWeDoSection from "@/sections/WhatWeDoSection.jsx";
import HowWeHelpSection from "@/sections/HowWeHelpSection.jsx";
import FAQSection from "@/sections/FAQSection.jsx";
import JumpToNav from "@/sections/JumpToNav.jsx";
import MarqueeBanner from "@/sections/MarqueeBanner.jsx";
import AwardsSection from "@/sections/AwardsSection.jsx";
import AIAssessmentBanner from "@/sections/AIAssessmentBanner.jsx";
import InsightsSection from "@/sections/InsightsSection.jsx";
import CustomersSection from "@/sections/CustomersSection.jsx";
import ExpertVoicesSection from "@/sections/ExpertVoicesSection.jsx";
import PartnersSection from "@/sections/PartnersSection.jsx";
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
