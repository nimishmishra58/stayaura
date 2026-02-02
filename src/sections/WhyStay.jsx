import { motion } from "framer-motion";

/* Animation variants */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const columnVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose section section-dark">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose StayAura</h2>
          <p>
            A trusted accommodation partner for both guests and property owners.
          </p>
        </motion.div>

        {/* Columns */}
        <motion.div
          className="why-choose-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Guests */}
          <motion.div
            className="why-column"
            variants={columnVariant}
          >
            <span className="why-label">For Guests</span>
            <h3 className="heading">Comfort, Reliability & Flexibility</h3>

            <ul>
              {[
                "Professionally managed, verified homes",
                "More space and privacy than hotels",
                "Flexible short and long-term stays",
                "Transparent pricing with no surprises",
                "Dedicated guest support throughout your stay",
              ].map((item, index) => (
                <motion.li key={index} variants={listItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Landlords */}
          <motion.div
            className="why-column"
            variants={columnVariant}
          >
            <span className="why-label">For Landlords</span>
            <h3 className="heading">Consistent Income, Hassle-Free Management</h3>

            <ul>
              {[
                "Access to corporate & contractor demand",
                "Professional property & guest management",
                "Consistent occupancy and reliable returns",
                "Carefully vetted guests",
                "Completely hands-off hosting experience",
              ].map((item, index) => (
                <motion.li key={index} variants={listItemVariant}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
