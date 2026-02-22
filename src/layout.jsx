import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer/Footer";
import Navbar from "./sections/Navbar/Navbar";
import ChatbotWidget from "./components/ChatbotWidget/ChatbotWidget";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default Layout;
