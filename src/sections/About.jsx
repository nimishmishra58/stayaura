import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

const About = () => {
  return (
    <motion.section
      className="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>Your Trusted Property Management Partner</h2>
      <p>
        Stay Aura specialises in guaranteed rent and hands-free
        property management solutions for landlords.
      </p>
      <p>
        We manage every aspect of your property while maximising returns.
      </p>
    </motion.section>
  );
};

export default About;
