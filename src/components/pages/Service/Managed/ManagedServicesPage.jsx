import { Route, Routes } from "react-router-dom";
import Home from "@/components/pages/Home/Home.jsx";
import DataAndArtificialPage from "@/components/pages/Service/Data-Artificial/DataAndArtificialPage.jsx";
import CyberSecurity from "@/components/pages/Service/CyberSecurity/CyberSecurity.jsx";
import EmergingTechnologyPage from "@/components/pages/Service/Emerging/EmergingTechnologyPage.jsx";
import DigitalEngineeringManufacturingPage from "@/components/pages/Service/DigitalEM/DigitalEngineeringManufacturingPage.jsx";
import FinanceRiskManagementPage from "@/components/pages/Service/FinanceRisk/FinanceRiskManagementPage.jsx";
import ManagedServicesPage from "@/components/pages/Service/Managed/ManagedServicesPage.jsx";
import StrategyPage from "@/components/pages/Service/Strategy/Strategy.jsx";
import SupplyChainPage from "@/components/pages/Service/SuppyChain/SuppyChain.jsx";
import TechnologyTransformationPage from "@/components/pages/Service/Technology/TechnologyTransformationPage.jsx";
import CloudPage from "@/components/pages/Service/Cloud/CloudPage.jsx";

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
        </Routes>
    );
};
export default AppRoutes;
