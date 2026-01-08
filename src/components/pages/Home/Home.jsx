import Navbar from "../../layout/Navbar";
import HeroSection from "../../sections/home/HeroSection";
import InsideEdgeSection from "../../sections/home/InsideEdgeSection";
import JumpToNavSection from "../../sections/home/JumpToNavSection";
import WhoWeAreSection from "../../sections/home/WhoWeAreSection";
import HowWeHelpSection from "../../sections/home/HowWeHelpSection";
import HeadLine from "../../sections/home/Headline";
import CustomerStoriesSection from "../../sections/home/CustomerStoriesSection";
import TrendsInsightsSection from "../../sections/home/TrendsInsightsSection";
import ExpertiseSection from "../../sections/home/ExpertiseSection";
import CultureCareersSection from "../../sections/home/CultureCareersSection";
import QASection from "../../sections/home/QASection";
import ContactSection from "../../sections/home/ContactSection";
import Footer from "../../layout/Footer";

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
