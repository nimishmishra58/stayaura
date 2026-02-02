import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  );
};

export default Layout;