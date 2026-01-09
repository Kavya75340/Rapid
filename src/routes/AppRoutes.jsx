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
