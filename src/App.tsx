// App.tsx
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signupf1 from "./pages/Signupf1";
import "./App.css";
import BarNavigation from "./components/NavigationBar";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VehicleReport from "./pages/VehicleReportPage";
import PassengerReportPage from "./pages/PassengerReportPage";
import DriversReport from "./pages/DriversReportPage";
import IssuesReport from "./pages/IssuesReportPage";
import DashboardPage from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Passengers from "./pages/Passengers";
import Vehicles from "./pages/Vehicles";

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signupf1 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/myTestCompany" element={<BarNavigation />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reports/vehicle-details" element={<VehicleReport />} />
        <Route path="/reports/passenger-details" element={<PassengerReportPage />} />
        <Route path="/reports/driver-details" element={<DriversReport />} />
        <Route path="/reports/issues-details" element={<IssuesReport />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  );
};

export default App;
