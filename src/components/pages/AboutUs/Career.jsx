import AwardsSection from "./career-sections/AwardsSection";
import BecomeSection from "./career-sections/BecomeSection";
import FAQSection from "./career-sections/FAQSection";
import Hero from "./career-sections/Hero";
import JumpToNav from "./career-sections/JumpToNav";
import LifeSection from "./career-sections/LifeSection";
import NewsSection from "./career-sections/NewsSection";
import QuickLinks from "./career-sections/QuickLinks";
import ResumeSection from "./career-sections/ResumeSection";
import TeamsSection from "./career-sections/TeamsSection";

const Career = () => {
    return (
        <>
            <Hero />
            <QuickLinks />
            <JumpToNav />
            <BecomeSection />
            <LifeSection />
            <TeamsSection />
            <AwardsSection />
            <ResumeSection />
            <NewsSection />
            <FAQSection />
        </>
    );
};
export default Career;
