

import AuthLayout from "../../src/Layout/AuthLayout"
import MainLayout from "../../src/Layout/MainLayout"

import { HomePage, CustomersPage, PricingPage, InspectionPage, IntegrationPage, AssetsPage, MonitoringPage, TrainingPage, PlatformPage, LoneworkerPage, MarketplacePage, InsurancePage, DocumentationPage, MiningPage, ConstructionPage, ManufacturingPage, FacilitiesPage, HospatalityPage, TransportPage, SustainabilityPage, HealthandSafetyPage, RiskandCompliancePage, OperationalPage, RetailPage, EnterprisePage, HelpCenterPage, ContactusPage, CommunityPage, SignupPage, LoginPage } from "../pages/index"
import { Route,  Routes } from "react-router-dom"




const AppRouter: React.FC = () => {
    return (
        
        <>
            
            <Routes>
                <Route element={<MainLayout />} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/customers" element={<CustomersPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/inspection" element={<InspectionPage />} />
                    <Route path="/assets" element={<AssetsPage />} />
                    <Route path="/integration" element={<IntegrationPage />} />
                    <Route path="/monitoring" element={<MonitoringPage />} />
                    <Route path="/training" element={<TrainingPage />} />
                    <Route path="/platform" element={<PlatformPage />} />
                    <Route path="/lone-worker" element={<LoneworkerPage />} />
                    <Route path="/safetyculture-marketplace" element={<MarketplacePage />} />
                    <Route path="/safetyculture-care" element={<InsurancePage />} />
                    <Route path="/safety-docs" element={<DocumentationPage />} />
                    <Route path="/construction" element={<ConstructionPage />} />
                    <Route path="/manufacturing" element={<ManufacturingPage />} />
                    <Route path="/facilities-management" element={<FacilitiesPage />} />
                    <Route path="/hospatality" element={< HospatalityPage />} />
                    <Route path="/retail" element={<RetailPage />} />
                    <Route path="/transport-and-logistics" element={< TransportPage />} />
                    <Route path="/mining" element={<MiningPage />} />
                    <Route path="/operational-excellence" element={<OperationalPage />} />
                    <Route path="/risk-management-and-compliance" element={<RiskandCompliancePage />} />
                    <Route path="/health-and-safety" element={<HealthandSafetyPage />} />
                    <Route path="/esg-and-sustainability" element={<SustainabilityPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                    <Route path="/safetyculture-help-center" element={<HelpCenterPage />} />
                    <Route path="/safetyculture-contact-us" element={<ContactusPage />} />
                    <Route path="/safetyculture-community" element={<CommunityPage />} />
                </Route>
                <Route element={<AuthLayout />}>
                    
                    <Route path="/sign-up" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />

                </Route>

            </Routes>
        </>

       

    )
}

export default AppRouter