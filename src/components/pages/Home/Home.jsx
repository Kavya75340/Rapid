import HeroSection from "./sections/HeroSection";
import InsideEdgeSection from "./sections/InsideEdgeSection";
import JumpToNavSection from "./sections/JumpToNavSection";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import HowWeHelpSection from "./sections/HowWeHelpSection";
import HeadLine from "./sections/Headline";
import CustomerStoriesSection from "./sections/CustomerStoriesSection";
import TrendsInsightsSection from "./sections/TrendsInsightsSection";
import ExpertiseSection from "./sections/ExpertiseSection";
import CultureCareersSection from "./sections/CultureCareersSection";
import QASection from "./sections/QASection";
import ContactSection from "./sections/ContactSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <InsideEdgeSection />
            <JumpToNavSection />
            <WhoWeAreSection />
            <HowWeHelpSection />
            <HeadLine />
            <CustomerStoriesSection />
            <TrendsInsightsSection />
            <ExpertiseSection />
            <CultureCareersSection />
            <QASection />
            <ContactSection />
        </>
    );
};
export default Home;
