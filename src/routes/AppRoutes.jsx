import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import DataAndArtificialPage from "../components/pages/Service/DataAndArtificialPage";
import CyberSecurity from "../components/pages/Service/CyberSecurity";
import EmergingTechnologyPage from "../components/pages/Service/EmergingTechnologyPage";
import DigitalEngineeringManufacturingPage from "../components/pages/Service/DigitalEngineeringManufacturingPage";
import FinanceRiskManagementPage from "../components/pages/Service/FinanceRiskManagementPage";
import ManagedServicesPage from "../components/pages/Service/ManagedServicesPage";
import StrategyPage from "../components/pages/Service/Strategy";
import SupplyChainPage from "../components/pages/Service/SuppyChain";
import TechnologyTransformationPage from "../components/pages/Service/TechnologyTransformationPage";
import CloudPage from "../components/pages/Service/CloudPage";
import AerospaceAndDefence from "../components/pages/Industries/AerospaceAndDefence";
import Career from "../components/pages/AboutUs/Career";
import Alliance from "../components/pages/AboutUs/Alliance";
import ContactUs from "../components/pages/AboutUs/ContactUs";
import GlobalPresence from "../components/pages/AboutUs/GlobalPresence";
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
import Blog from "../components/pages/Insight/BlogSection/Blog";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import SingleBlog from "../components/pages/Insight/BlogSection/SingleBlog";
import CaseStudies from "../components/pages/Insight/CaseStudies/CaseStudies";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/cloud" element={<CloudPage />} />
            <Route path="/service/cyber-security" element={<CyberSecurity />} />
            <Route
                path="/service/data-ai"
                element={<DataAndArtificialPage />}
            />
            <Route
                path="/service/emerging-tech"
                element={<EmergingTechnologyPage />}
            />
            <Route
                path="/service/digital-e-m"
                element={<DigitalEngineeringManufacturingPage />}
            />
            <Route
                path="/service/finance-risk"
                element={<FinanceRiskManagementPage />}
            />
            <Route
                path="/service/managed-s"
                element={<ManagedServicesPage />}
            />
            <Route path="/service/strategy" element={<StrategyPage />} />
            <Route path="/service/supplychain" element={<SupplyChainPage />} />
            <Route
                path="/service/technology"
                element={<TechnologyTransformationPage />}
            />
            <Route
                path="/industries/aerospace"
                element={<AerospaceAndDefence />}
            />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/banking" element={<Banking />} />
            <Route path="/industries/chemicals" element={<Chemical />} />
            <Route
                path="/industries/communication"
                element={<Communication />}
            />
            <Route path="/industries/energy" element={<Energy />} />
            <Route path="/industries/healthcare" element={<HealthCare />} />
            <Route path="/industries/hightech" element={<HighTech />} />
            <Route path="/industries/lifescience" element={<LifeSciences />} />
            <Route path="/industries/software" element={<Software />} />
            <Route path="/industries/travel" element={<Travel />} />

            <Route path="/career" element={<Career />} />
            <Route path="/alliance" element={<Alliance />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/location" element={<GlobalPresence />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
    );
};
export default AppRoutes;
