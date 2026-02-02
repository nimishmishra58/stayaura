import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="property-detail"
    >
      <div className="pd-hero">
        <img src={`/public/Property${id}.png`} alt="Property" />
      </div>

      <div className="pd-content">
        <h1>Luxury Serviced Apartment</h1>
        <p>Comfortable, fully furnished stay in a prime location.</p>

        <button className="primary-btn">
          Book This Stay
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyDetail;
