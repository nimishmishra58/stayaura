import { motion } from "framer-motion";

/* ================================
   ANIMATION VARIANTS
================================ */

const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const leftPanelVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const CorporateHousing = () => {
  return (
    <motion.section
      className="corporate-section section section-light"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background overlay */}
      <div className="corporate-bg-overlay" />

      <div className="section-container">

        {/* HEADER */}
        <div className="section-header">
          <h2>Corporate & Contractor Accommodation</h2>
          <p>
            Flexible, fully managed accommodation solutions designed for
            companies, contractors, and project-based teams.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="corporate-layout">

          {/* LEFT PANEL */}
          <motion.div
            className="corporate-left"
            variants={leftPanelVariant}
          >
            <div className="corporate-left-panel">

              <ul className="corporate-points">
                <li>Ideal for construction, infrastructure & engineering projects</li>
                <li>Cost-effective alternative to long hotel stays</li>
                <li>Fully furnished, move-in ready homes</li>
                <li>Flexible durations aligned with project timelines</li>
                <li>Dedicated account & guest support</li>
              </ul>

              <div className="corporate-metrics">
                <div>
                  <strong>100+</strong>
                  <span>Properties</span>
                </div>
                <div>
                  <strong>30+</strong>
                  <span>Corporate Clients</span>
                </div>
                <div>
                  <strong>UK-Wide</strong>
                  <span>Coverage</span>
                </div>
              </div>

              <div className="corporate-button">
                <button className="primary-btn">
                  Enquire for Corporate Stays
                </button>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            className="corporate-right"
            variants={cardContainerVariant}
          >
            <motion.div
              className="corporate-card"
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h4>For Contractors</h4>
              <p>
                Comfortable accommodation close to site locations,
                ideal for rotating teams and long-term projects.
              </p>
            </motion.div>

            <motion.div
              className="corporate-card"
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h4>For Companies</h4>
              <p>
                Centralised billing, predictable pricing,
                and consistent quality across all stays.
              </p>
            </motion.div>

            <motion.div
              className="corporate-card"
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h4>For Relocation & HR Teams</h4>
              <p>
                Hassle-free accommodation for employees,
                consultants, and temporary assignments.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default CorporateHousing;
