import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./GuestReviews.css";

const reviews = [
  {
    name: "Ayush",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "Honestly this is literally what we wanted, pristine and immaculate. The apartment is very big and open, and the host helped us with late check-in. The YouTube check-in details were very clear. I am definitely coming back.",
  },
  {
    name: "Shruti Umakant",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Best apartment in London for the price. Clean and tidy, great location near Sloane Square and South Kensington, well-equipped kitchen and bathroom, and a perfect setup for a family of 4.",
  },
  {
    name: "Jon",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "Very professional, responsible and friendly host. The whole process was flawless. Location is superb and the apartment is very large and high quality.",
  },
  {
    name: "Jill",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Excellent value for money in the heart of beautiful Chelsea. Beautiful building in a superb location, close to shops, bars and restaurants.",
  },
  {
    name: "Holly",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "I booked this with a group of 6 friends and we all had a very comfortable stay. The apartment is beautiful and spacious with great shops and restaurants nearby. Aura was a great host, very welcoming, helpful and responsive.",
  },
  {
    name: "Liam",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Perfect value for money. Fantastic house for a big group and great location for events. Thank you to the hosts for making our time in London special.",
  },
  {
    name: "Ndy",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "Such a lovely two-bed apartment: super clean, comfy beds and great Wi-Fi. Quiet area with easy access to the city centre. Free parking for multiple cars was a big plus and we will definitely be back.",
  },
  {
    name: "Narda",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Great property and perfect for families. The host went above and beyond, the home was clean and well-equipped, and the location made travel into central London quick and easy.",
  },
  {
    name: "Frankie",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "The unit is beautifully decorated and the kitchen utensils are fully equipped and tidy. The terrace view is pleasant and feels like home. The owner's quick response was very satisfactory and I will definitely come again.",
  },
  {
    name: "David",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "This apartment is amazing, very comfortable and feels like home. Very clean and well-equipped, comfy beds, quick Wi-Fi, peaceful cul-de-sac, and helpful friendly residents.",
  },
  {
    name: "Teanny",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "Amazing apartment, brand new and equipped. Everything was extremely clean and organized. The host was very helpful and attentive, and my stay was amazing.",
  },
  {
    name: "Xavier",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Exceptional stay. The flat is in a convenient location close to shops, restaurants and attractions. Nicely decorated with everything needed, and I would love to come again.",
  },
  {
    name: "Amruthanandh",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "We had a wonderful stay at this Airbnb. The place was clean, comfortable and exactly as described. The host was responsive and helpful, making the entire experience smooth and stress-free.",
  },
  {
    name: "Vaishnav",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Best place in Brighton. Great city-centre location near the beach, immaculate apartment, very comfortable beds, and a lovely open-plan kitchen with smart TV and Netflix.",
  },
  {
    name: "Kayley",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "Lovely place with good-sized rooms and comfortable beds. Close enough to the centre for easy access but far enough to avoid the noise and hustle. Would definitely recommend.",
  },
  {
    name: "Elizabeth",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Pleasant stay. Apartment was lovely and spacious, beds were comfortable and kitchen was well stocked.",
  },
  {
    name: "Ojevwe Princess",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "We had a lovely stay at the apartment. It was comfortable, as described, quiet, super clean and had good amenities with clear instructions. We have it down as our go-to place whenever we visit Newcastle.",
  },
  {
    name: "Toby",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Excellent value for money and we will definitely stay again. Fantastic location near bars, restaurants and shops, yet surprisingly quiet and very safe.",
  },
  {
    name: "Adam",
    role: "Airbnb Guest",
    rating: 5,
    source: "airbnb",
    text: "Me and a few friends stayed for the weekend. The host was very responsive and flexible with check-in times. Quiet street with quick access to the city centre. Great for larger groups and we will return.",
  },
  {
    name: "Kc",
    role: "Booking.com Guest",
    rating: 5,
    source: "booking",
    text: "Beautiful flat in the heart of the village and great for families. Amazing and beautifully lit apartment with an efficient and friendly host.",
  },
];


const slideVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const GuestReviews = () => {
  const [orderedReviews] = useState(() =>
    [...reviews].sort(() => Math.random() - 0.5)
  );
  const [active, setActive] = useState(0);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % orderedReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [orderedReviews.length]);

  const prev = () =>
    setActive((prevActive) => (prevActive - 1 + orderedReviews.length) % orderedReviews.length);
  const next = () =>
    setActive((prevActive) => (prevActive + 1) % orderedReviews.length);

  const review = orderedReviews[active];

  return (
    <section id="guest-reviews" className="guest-reviews section section-light">
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
          {orderedReviews.map((_, i) => (
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
            "review": orderedReviews.map((r) => ({
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
