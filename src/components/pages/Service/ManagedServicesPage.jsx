import { managedServicesPage } from "./pages/managed-s";
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
const ManagedServicesPage = () => {
    return (
        <>
            <HeroSection data={managedServicesPage.hero} />
            <JumpToNav />
            <MarqueeBanner />
            <WhatWeDoSection data={managedServicesPage.whatWeDo} />
            <HowWeHelpSection data={managedServicesPage.howWeHelp} />
            <AwardsSection />
            <AIAssessmentBanner />
            <InsightsSection />
            <CustomersSection />
            <ExpertVoicesSection />
            <PartnersSection />
            <FAQSection data={managedServicesPage.faqs} />
        </>
    );
};
export default ManagedServicesPage;
