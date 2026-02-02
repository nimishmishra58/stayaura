import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* Animation variants */
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* Property data */
const properties = [
  {
    id: 1,
    title: "Modern Studio Apartment",
    location: "Central London",
    price: "From £95 / night",
    image: "/Property1.png",
  },
  {
    id: 2,
    title: "Luxury One Bed Apartment",
    location: "Canary Wharf",
    price: "From £120 / night",
    image: "/Property2.png",
  },
  {
    id: 3,
    title: "Serviced City Apartment",
    location: "Manchester City Centre",
    price: "From £85 / night",
    image: "/Property3.png",
  },
];

const FeaturedProperties = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="featured-properties section section-light"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-container">

        {/* Section header */}
        <motion.div className="section-header" variants={cardVariant}>
          <h2>Featured Stays</h2>
          <p>
            Carefully selected homes offering comfort, great locations,
            and a premium stay experience.
          </p>
        </motion.div>

        {/* Property grid */}
        <div className="fp-grid">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="fp-card"
              variants={cardVariant}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <div className="fp-image">
                <img
                  src={property.image}
                  alt={property.title}
                />
              </div>

              <div className="fp-content">
                <h3>{property.title}</h3>
                <span className="fp-location">
                  {property.location}
                </span>
                <span className="fp-price">
                  {property.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="fp-action"
          variants={cardVariant}
        >
          <button
            className="primary-btn"
            onClick={() => navigate("https://stayaura.com/properties")}
          >
            Explore All Properties
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FeaturedProperties;
