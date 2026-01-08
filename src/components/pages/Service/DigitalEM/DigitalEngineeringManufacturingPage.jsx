import { digitalEngineeringManufacturingPage } from "../../../../data/pages/digital-E-M";
import HeroSection from "../../../sections/Service/pagedesign/HeroSection";
import WhatWeDoSection from "../../../sections/Service/pagedesign/WhatWeDoSection";
import HowWeHelpSection from "../../../sections/Service/pagedesign/HowWeHelpSection";
import FAQSection from "../../../sections/Service/pagedesign/FAQSection";
import JumpToNav from "../../../sections/Service/data-artificial/JumpToNav";
import MarqueeBanner from "../../../sections/Service/data-artificial/MarqueeBanner";
import AwardsSection from "../../../sections/Service/data-artificial/AwardsSection";
import AIAssessmentBanner from "../../../sections/Service/data-artificial/AIAssessmentBanner";
import InsightsSection from "../../../sections/Service/data-artificial/InsightsSection";
import CustomersSection from "../../../sections/Service/data-artificial/CustomersSection";
import ExpertVoicesSection from "../../../sections/Service/data-artificial/ExpertVoicesSection";
import PartnersSection from "../../../sections/Service/data-artificial/PartnersSection";

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
