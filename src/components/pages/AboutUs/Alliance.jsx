import HeroSection from "./alliance-sections/HeroSection";
import CTASection from "./alliance-sections/CTASection";
import CustomerStorySection from "./alliance-sections/CustomerStorySection";
import NewsSection from "./alliance-sections/NewsSection";
import PartnersSection from "./alliance-sections/PartnersSection";
import MarqueeBanner from "../CommonSection/MarqueeSection.jsx";

const Alliance = () => {
    return (
        <>
            <HeroSection />
            <PartnersSection />
            <CustomerStorySection />
            <NewsSection />
            <CTASection />
            <MarqueeBanner />
        </>
    );
};
export default Alliance;
