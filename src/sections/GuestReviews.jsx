import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Daniel R.",
    role: "Contractor",
    rating: 5,
    source: "booking",
    text: "Great experience for our site team. Comfortable stays and reliable support throughout.",
  },
  {
    name: "Priya S.",
    role: "Extended Stay Guest",
    rating: 5,
    source: "airbnb",
    text: "Staying with StayAura for six weeks was effortless. Everything was managed professionally.",
  },
  {
    name: "Mark T.",
    role: "Corporate Traveller",
    rating: 4,
    source: "google",
    text: "Clean apartments, responsive support, and great locations. Would definitely stay again.",
  },
];


const slideVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const GuestReviews = () => {
  const [active, setActive] = useState(0);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setActive((active - 1 + reviews.length) % reviews.length);
  const next = () => setActive((active + 1) % reviews.length);

  const review = reviews[active];

  return (
    <section className="guest-reviews section section-light">
      <div className="section-container">

        {/* Header */}
        <div className="section-header">
          <h2>What Our Guests Say</h2>
          <p>Real experiences from guests who stayed with StayAura.</p>
        </div>

        {/* Review Card */}
        <div className="review-single-wrapper">
          <button className="review-arrow outside left" onClick={prev}>
            <i className="fa-solid fa-chevron-left" />
          </button>
       <AnimatePresence mode="wait">
  <motion.div
    key={active}
    className="review-single source-style"
    variants={slideVariant}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {/* TOP ROW */}
    <div className="review-top">
      {/* Partner */}
      <div className="review-source">
        <img
          src={`/partners/${review.source}.png`}
          alt={`${review.source} logo`}
        />
      </div>

      {/* Rating */}
      <div className="review-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < review.rating ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
      </div>
    </div>

    {/* Review text */}
    <p className="review-text">{review.text}</p>

    {/* Author */}
    <div className="review-author">
      <strong>{review.name}</strong>
      <span>{review.role}</span>
    </div>
  </motion.div>
</AnimatePresence>


          <button className="review-arrow outside right" onClick={next}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        {/* Dots */}
        <div className="review-dots">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Schema.org Reviews (SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "StayAura",
            "review": reviews.map((r) => ({
              "@type": "Review",
              "reviewBody": r.text,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating,
                "bestRating": "5",
              },
              "author": {
                "@type": "Person",
                "name": r.name,
              },
            })),
          })}
        </script>

      </div>
    </section>
  );
};

export default GuestReviews;
