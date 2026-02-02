import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SideNav = ({ open, onClose }) => {
  const [landlordsOpen, setLandlordsOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="sidenav-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.aside
        className="sidenav"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
            {/* Header */}
            <div className="sidenav-header">
              <span className="sidenav-logo">StayAura</span>
              <button className="sidenav-close" onClick={onClose}>
                <i className="fas fa-xmark"></i>
              </button>

            </div>

            <nav className="sidenav-nav">

              <a href="#about">
                <i className="fas fa-circle-info"></i>
                <span>About Us</span>
              </a>

              {/* LANDLORDS DROPDOWN */}
              <button
                className="dropdown-toggle"
                onClick={() => setLandlordsOpen(!landlordsOpen)}
              >
                <div className="nav-left">
                  <i className="fas fa-house-user"></i>
                  <span>Landlords</span>
                </div>
                <i
                  className={`fas fa-chevron-down arrow ${landlordsOpen ? "open" : ""
                    }`}
                ></i>
              </button>

              <AnimatePresence>
                {landlordsOpen && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <a href="/guaranteed-rent">
                      <i className="fas fa-shield-halved"></i>
                      Guaranteed Rent
                    </a>

                    <a href="#airbnb">
                      <i className="fab fa-airbnb"></i>
                      Airbnb Management
                    </a>

                    <a href="#holiday-let">
                      <i className="fas fa-umbrella-beach"></i>
                      Holiday Let Management
                    </a>

                    <a href="#short-let">
                      <i className="fas fa-clock"></i>
                      Short Let Management
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              <a href="#faq">
                <i className="fas fa-circle-question"></i>
                <span>FAQs</span>
              </a>

              <a href="#contact">
                <i className="fas fa-envelope"></i>
                <span>Contact Us</span>
              </a>

            </nav>


            {/* CTA */}
            <div className="sidenav-cta">
              <button className="primary-btn full">
                Let Your Property
              </button>
              <button className="primary-btn full">
                Book Your Stay
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
