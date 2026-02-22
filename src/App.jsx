import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import GuaranteedRent from "./pages/GuaranteedRent/GuaranteedRent";
import AirbnbManagement from "./pages/Landlord/AirbnbManagement";
import HolidayLetManagement from "./pages/Landlord/HolidayLetManagement";
import ShortLetManagement from "./pages/Landlord/ShortLetManagement";
import PrivacyPolicy from "./sections/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "./sections/CookiePolicy/CookiePolicy";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/guaranteed-rent" element={<GuaranteedRent />} />
        <Route path="/airbnb-management" element={<AirbnbManagement />} />
        <Route path="/holiday-let-management" element={<HolidayLetManagement />} />
        <Route path="/short-let-management" element={<ShortLetManagement />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
};

export default App;
