import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import GuaranteedRent from "./pages/GuaranteedRent/GuaranteedRent";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import CookiePolicy from "./sections/CookiePolicy";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/guaranteed-rent" element={<GuaranteedRent />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
};

export default App;
