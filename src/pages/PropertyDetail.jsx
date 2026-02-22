import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetail.css";

const PROPERTY_DATA = {
  "1": {
    title: "Lovely 2 Bed & 2 Bath in Brentford",
    subtitle: "Brentford, Greater London",
    description: "2 bed and 2 bath listing in Brentford, around 10 minutes from the stadium.",
    images: [
      "/properties/tw8/tw8-1.jpeg",
      "/properties/tw8/tw8-2.jpeg",
      "/properties/tw8/tw8-3.jpeg",
      "/properties/tw8/tw8-4.jpeg",
      "/properties/tw8/tw8-5.jpeg",
      "/properties/tw8/tw8-6.jpeg",
      "/properties/tw8/tw8-7.jpeg",
    ],
  },
  "2": {
    title: "Coastal Comfort Home",
    subtitle: "BN1, Brighton",
    description: "A professionally managed stay tailored for short breaks, business travel, and longer bookings.",
    images: [
      "/properties/bn1/bn1-1.jpeg",
      "/properties/bn1/bn1-2.jpeg",
      "/properties/bn1/bn1-3.jpeg",
      "/properties/bn1/bn1-4.jpeg",
      "/properties/bn1/bn1-5.jpeg",
      "/properties/bn1/bn1-6.jpeg",
      "/properties/bn1/bn1-7.jpeg",
    ],
  },
  "3": {
    title: "Modern Seaside Stay",
    subtitle: "BN2, Brighton",
    description: "Premium interiors, clean design, and dependable service for flexible guest stays.",
    images: [
      "/properties/bn2/bn2-1.jpeg",
      "/properties/bn2/bn2-2.jpeg",
      "/properties/bn2/bn2-3.jpeg",
      "/properties/bn2/bn2-4.jpeg",
      "/properties/bn2/bn2-5.jpeg",
      "/properties/bn2/bn2-6.jpeg",
      "/properties/bn2/bn2-7.jpeg",
    ],
  },
};

const PropertyDetail = () => {
  const { id } = useParams();
  const property = PROPERTY_DATA[id] || PROPERTY_DATA["1"];
  const [activeImage, setActiveImage] = useState(property.images[0]);

  useEffect(() => {
    setActiveImage(property.images[0]);
  }, [id, property.images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="property-detail"
    >
      <div className="pd-hero">
        <img src={activeImage} alt={property.title} />
      </div>

      <div className="pd-content">
        <h1>{property.title}</h1>
        <p className="pd-location">{property.subtitle}</p>
        <p>{property.description}</p>

        <div className="pd-gallery-meta">
          {property.images.length} photos available
        </div>

        <div className="pd-gallery-grid">
          {property.images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`pd-thumb ${activeImage === image ? "active" : ""}`}
              onClick={() => setActiveImage(image)}
              aria-label={`View property image ${index + 1}`}
            >
              <img src={image} alt={`${property.title} view ${index + 1}`} />
            </button>
          ))}
        </div>

        <button className="primary-btn">
          Book This Stay
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyDetail;
