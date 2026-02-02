import { motion } from "framer-motion";
import {
  heroContainer,
  heroItem,
  heroOverlay
} from "../animations/heroMotion";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate=useNavigate();
  return (
    <section className="hero hero-bg section">
      <div className="section-container">

        {/* Overlay */}
        <motion.div
          className="hero-overlay"
          variants={heroOverlay}
          initial="hidden"
          animate="visible"
        />

        {/* Content */}
        <motion.div
          className="hero-container"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content">
            <motion.h1 variants={heroItem}>
              Premium Serviced Apartments
              <br />
              Designed for Comfort
            </motion.h1>

            <motion.p variants={heroItem}>
              Fully furnished, professionally managed homes for
              business trips, vacations, and extended stays.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={heroItem}
            >
              <button className="primary-btn" onClick={()=>navigate("https://booking.stayaura.com/")}>
                Book Your Stay
              </button>
              <button className="primary-btn outline" onClick={()=>navigate("https://stayaura.com/properties")}>
                Explore Properties
              </button>
            </motion.div>

            <motion.div
              className="hero-landlord-link"
              variants={heroItem}
            >
              Are you a landlord?
              <span> Let your property with StayAura</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
