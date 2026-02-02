import { motion } from "framer-motion";

/* Animation variants */
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhoStays = () => {
  return (
    <section className="who-stays section section-dark">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Who Stays With StayAura</h2>
          <p>
            Accommodation designed for professionals, teams, and families
            who value comfort, flexibility, and reliability.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="who-stays-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {[
            {
              title: "Contractors & Project Teams",
              desc: "Practical, fully furnished accommodation close to work sites, ideal for short and long-term projects.",
              img: "/who/contractors.png",
            },
            {
              title: "Corporate & Business Travellers",
              desc: "Reliable, professionally managed stays for business trips, consulting work, and temporary placements.",
              img: "/who/corporate.png",
            },
            {
              title: "Extended Stay Guests",
              desc: "Guests staying for several weeks or months who prefer the comfort and space of a home over hotels.",
              img: "/who/extended-stay.png",
            },
            {
              title: "Families & Leisure Guests",
              desc: "Spacious homes ideal for family stays, city breaks, and longer leisure visits.",
              img: "/who/family.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="who-card"
              variants={cardVariant}
              whileHover={{ y: -6 }}
            >
              <div className="who-image">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="who-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Trust line */}
        <motion.div
          className="who-stays-trust"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Supporting <strong>short stays, long stays & project-based accommodation</strong> across the UK
        </motion.div>

      </div>
    </section>
  );
};

export default WhoStays;
