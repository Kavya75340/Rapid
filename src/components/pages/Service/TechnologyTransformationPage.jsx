import { technologyTransformationPage } from "./pages/technology-t.js";
import HeroSection from "./common/HeroSection.jsx";
import WhatWeDoSection from "./common/WhatWeDoSection.jsx";
import HowWeHelpSection from "./common/HowWeHelpSection.jsx";
import FAQSection from "./common/FAQSection.jsx";
import JumpToNav from "./common/JumpToNav.jsx";
import MarqueeBanner from "../CommonSection/MarqueeSection.jsx";
import AwardsSection from "./common/AwardsSection.jsx";
import InsightsSection from "./common/InsightsSection.jsx";
import CustomersSection from "./common/CustomersSection.jsx";
import ExpertVoicesSection from "./common/ExpertVoicesSection.jsx";
import PartnersSection from "./common/PartnersSection.jsx";
const TechnologyTransformationPage = () => {
    return (
        <>
            <HeroSection data={technologyTransformationPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={technologyTransformationPage.whatWeDo} />
            <HowWeHelpSection data={technologyTransformationPage.howWeHelp} />
            {/* <AwardsSection /> */}
            <InsightsSection data={technologyTransformationPage.insights} />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={technologyTransformationPage.faqs} />
        </>
    );
};
export default TechnologyTransformationPage;
