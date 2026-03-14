import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./FeaturedProperties.css";

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
    title: "Lovely 2 Bed & 2 Bath in Brentford",
    location: "Brentford, Greater London",
    price: "2 Bed & 2 Bath 10 min to Stadium",
    image: "/properties/tw8-featured.jpeg",
    tag: "Book Direct",
    bookingUrl:
      "https://bookingatstayaura.com/en/2bdr-apartment-in-london-by-stay-aura-short-lets-agency"
  },
  {
    id: 2,
    title: "Luxury 2 Bedroom with En Suite",
    location: "Brighton and Hove",
    price: "Spacious 2 Bed Flat close to Beach",
    image: "/properties/bn1-featured.jpeg",
    tag: "Book Direct",
    bookingUrl:
      "https://bookingatstayaura.com/en/2-bedroom-flat-by-stay-aura-short-lets-agency-brighton"
  },
  {
    id: 3,
    title: "Flat 3 - 68 Marine Parade",
    location: "Brighton and Hove",
    price: "Marine Parade - Beach Front View",
    image: "/properties/bn2-featured.jpeg",
    tag: "Book Direct",
    bookingUrl:
      "https://bookingatstayaura.com/en/premium-beach-front-with-balcony-in-brighton"
  },
];

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const handlePropertyClick = (property) => {
    if (property.bookingUrl) {
      window.location.href = property.bookingUrl;
      return;
    }

    navigate(`/property/${property.id}`);
  };

  return (
    <motion.section
      id="featured-stays"
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
              onClick={() => handlePropertyClick(property)}
            >
              <div className="fp-image">
                {property.code ? (
                  <span className="fp-postcode">{property.code}</span>
                ) : null}
                <img
                  src={property.image}
                  alt={property.title}
                />
              </div>

              <div className="fp-content">
                <span className="fp-tag">{property.tag}</span>
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
            onClick={() =>
            (window.location.href =
              "https://bookingatstayaura.com/en/all-properties")
            }
          >
            Explore All Properties
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FeaturedProperties;
