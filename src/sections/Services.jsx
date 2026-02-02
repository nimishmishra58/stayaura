import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

const Services = () => {
  return (
    <section className="services">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Property Management Services
      </motion.h2>

      {[
        ["Guaranteed Rent Scheme", "Fixed monthly rent with zero stress."],
        ["Full Property Management", "End-to-end property handling."],
        ["Compliance & Maintenance", "Legal compliance and 24/7 support."]
      ].map(([title, desc], i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>{title}</h3>
          <p>{desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
