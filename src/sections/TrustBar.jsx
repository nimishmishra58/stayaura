import { motion } from "framer-motion";

const TrustBar = () => (
  <motion.section
    className="trust"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span>✔ Guaranteed Rent</span>
    <span>✔ No Void Periods</span>
    <span>✔ Fully Managed</span>
    <span>✔ Trusted by Landlords</span>
  </motion.section>
);

export default TrustBar;
