import { motion } from "framer-motion";
import {
  heroContainer,
  heroItem,
  heroOverlay
} from "../../animations/heroMotion";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  const navigate=useNavigate();
  const scrollToEnquireNow = () => {
    const section = document.getElementById("enquire-now");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
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
              <button
                className="primary-btn outline"
                onClick={() =>
                  navigate(
                    "https://booking.stayaura.com/listings?city=&check_in=&check_out=&number_of_guests=1&min_price=&max_price="
                  )
                }
              >
                Explore Properties
              </button>
            </motion.div>

            <motion.div
              className="hero-landlord-link"
              variants={heroItem}
            >
              Need help finding the right stay?
              <span onClick={scrollToEnquireNow}> Enquire with StayAura</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
