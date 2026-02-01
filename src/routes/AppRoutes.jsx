import { Routes, Route } from "react-router-dom";

// Home
import Home from "../components/pages/Home/Home";

// Service Pages
import CloudPage from "../components/pages/Service/CloudPage";
import CyberSecurity from "../components/pages/Service/CyberSecurity";
import DataAndArtificialPage from "../components/pages/Service/DataAndArtificialPage";
import EmergingTechnologyPage from "../components/pages/Service/EmergingTechnologyPage";
import DigitalEngineeringManufacturingPage from "../components/pages/Service/DigitalEngineeringManufacturingPage";
import FinanceRiskManagementPage from "../components/pages/Service/FinanceRiskManagementPage";
import ManagedServicesPage from "../components/pages/Service/ManagedServicesPage";
import StrategyPage from "../components/pages/Service/Strategy";
import SupplyChainPage from "../components/pages/Service/SuppyChain";
import TechnologyTransformationPage from "../components/pages/Service/TechnologyTransformationPage";

// Industries
import AerospaceAndDefence from "../components/pages/Industries/AerospaceAndDefence";
import Automotive from "../components/pages/Industries/Automotive";
import Banking from "../components/pages/Industries/Banking";
import Chemical from "../components/pages/Industries/Chemical";
import Communication from "../components/pages/Industries/Communication";
import Energy from "../components/pages/Industries/Energy";
import HealthCare from "../components/pages/Industries/Healthcare";
import HighTech from "../components/pages/Industries/HighTech";
import LifeSciences from "../components/pages/Industries/LifeScience";
import Software from "../components/pages/Industries/Software";
import Travel from "../components/pages/Industries/Travel";

// About
import Career from "../components/pages/AboutUs/Career";
import Alliance from "../components/pages/AboutUs/Alliance";
import ContactUs from "../components/pages/AboutUs/ContactUs";
import GlobalPresence from "../components/pages/AboutUs/GlobalPresence";
import AboutUs from "../components/pages/AboutUs/AboutUs";

// Insights
import BlogPage from "../components/pages/Insight/BlogSection/BlogPage";
import SingleBlog from "../components/pages/Insight/BlogSection/SingleBlog";
import CaseStudies from "../components/pages/Insight/CaseStudies/CaseStudies";
import WhitePaper from "../components/pages/Insight/WhitePaper/WhitePaper";

// Policies
import PrivacyPolicy from "../components/pages/Policy/PrivacyPolicy";
import TermsAndCondition from "../components/pages/Policy/Terms&Condition";
import CookiePolicy from "../components/pages/Policy/CookiePolicy";
import RefundAndCancellationPolicy from "../components/pages/Policy/Refund&CancellationPolicy";
import Accessibility from "../components/pages/Policy/Accessibilty";

// Layouts (For Nested Routing)
import ServiceLayout from "../layout/ServiceLayout";
import IndustriesLayout from "../layout/IndustriesLayout";
import AboutLayout from "../layout/AboutLayout";
import PolicyLayout from "../layout/PolicyLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* ---------------- SERVICES ---------------- */}
            <Route path="/service" element={<ServiceLayout />}>
                <Route path="cloud" element={<CloudPage />} />
                <Route path="cyber-security" element={<CyberSecurity />} />
                <Route path="data-ai" element={<DataAndArtificialPage />} />
                <Route
                    path="emerging-tech"
                    element={<EmergingTechnologyPage />}
                />
                <Route
                    path="digital-e-m"
                    element={<DigitalEngineeringManufacturingPage />}
                />
                <Route
                    path="finance-risk"
                    element={<FinanceRiskManagementPage />}
                />
                <Route path="managed-s" element={<ManagedServicesPage />} />
                <Route path="strategy" element={<StrategyPage />} />
                <Route path="supplychain" element={<SupplyChainPage />} />
                <Route
                    path="technology"
                    element={<TechnologyTransformationPage />}
                />
            </Route>

            {/* ---------------- INDUSTRIES ---------------- */}
            <Route path="/industries" element={<IndustriesLayout />}>
                <Route path="aerospace" element={<AerospaceAndDefence />} />
                <Route path="automotive" element={<Automotive />} />
                <Route path="banking" element={<Banking />} />
                <Route path="chemicals" element={<Chemical />} />
                <Route path="communication" element={<Communication />} />
                <Route path="energy" element={<Energy />} />
                <Route path="healthcare" element={<HealthCare />} />
                <Route path="hightech" element={<HighTech />} />
                <Route path="lifescience" element={<LifeSciences />} />
                <Route path="software" element={<Software />} />
                <Route path="travel" element={<Travel />} />
            </Route>

            {/* ---------------- ABOUT US ---------------- */}
            <Route path="/about" element={<AboutLayout />}>
                <Route index element={<AboutUs />} />
                <Route path="career" element={<Career />} />
                <Route path="alliance" element={<Alliance />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="location" element={<GlobalPresence />} />
            </Route>

            {/* ---------------- INSIGHTS ---------------- */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/whitepaper" element={<WhitePaper />} />

            {/* ---------------- POLICY ---------------- */}
            <Route path="/policy" element={<PolicyLayout />}>
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="term-condition" element={<TermsAndCondition />} />
                <Route path="cookie-policy" element={<CookiePolicy />} />
                <Route
                    path="refund-cancellation"
                    element={<RefundAndCancellationPolicy />}
                />
                <Route path="accessibility" element={<Accessibility />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
