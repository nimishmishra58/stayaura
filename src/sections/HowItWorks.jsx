import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/motion";

const HowItWorks = () => {
  return (
    <motion.section
      className="how-it-works"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeUp}>How Our Process Works</motion.h2>

      <ol>
        {["Free Rental Appraisal", "Sign Agreement", "Guaranteed Rent"].map(
          (step, i) => (
            <motion.li key={i} variants={fadeUp}>
              {step}
            </motion.li>
          )
        )}
      </ol>
    </motion.section>
  );
};

export default HowItWorks;
