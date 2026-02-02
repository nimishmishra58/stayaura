import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ServicePage = ({ content }) => {
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="service-hero">
        <img src={content.hero.image} alt={content.hero.title} />
        <div className="service-hero-overlay" />
        <div className="service-hero-content">
          <h1>{content.hero.title}</h1>
          <p className="hero-sub">{content.hero.subtitle}</p>
          <p className="hero-desc">{content.hero.description}</p>
          <a href={content.hero.cta.link} className="primary-btn">
            {content.hero.cta.label}
          </a>
        </div>
      </section>

      {/* SECTIONS */}
      {content.sections.map((section, index) => (
        <section
          key={index}
          className={`service-section ${
            section.light ? "section-light" : "section-dark"
          }`}
        >
          <motion.div
            className="section-container"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >

            {/* CENTER TEXT */}
            {section.type === "text" && (
              <div className="section-center">
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            )}

            {/* SPLIT LIST */}
            {section.type === "list" && (
              <div
                className={`split-layout ${
                  section.imagePosition === "right" ? "reverse" : ""
                }`}
              >
                <div className="split-text">
                  <h2>{section.heading}</h2>
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="split-image">
                  <img src={section.image} alt={section.heading} />
                </div>
              </div>
            )}

            {/* CARDS */}
            {section.type === "cards" && (
              <>
                <div className="section-header center">
                  <h2>{section.heading}</h2>
                </div>

                <div className="cards-grid">
                  {section.items.map((card, i) => (
                    <motion.div
                      key={i}
                      className="service-card"
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* TABLE */}
            {section.type === "table" && (
              <>
                <div className="section-header center">
                  <h2>{section.heading}</h2>
                </div>

                <div className="comparison-table">
                  <div className="table-head">
                    {section.columns.map((col, i) => (
                      <div key={i}>{col}</div>
                    ))}
                  </div>

                  {section.rows.map((row, i) => (
                    <div className="table-row" key={i}>
                      {row.map((cell, j) => (
                        <div key={j}>{cell}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* STATS */}
            {section.type === "stats" && (
              <>
                <div className="section-header center">
                  <h2>{section.heading}</h2>
                </div>

                <div className="stats-grid">
                  {section.stats.map((stat, i) => (
                    <div key={i} className="stat-box">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* FAQ */}
            {section.type === "faq" && (
              <>
                <div className="section-header center">
                  <h2>{section.heading}</h2>
                </div>

                <div className="faq-list">
                  {section.items.map((faq, i) => (
                    <details key={i}>
                      <summary>{faq.q}</summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}

          </motion.div>
        </section>
      ))}

      {/* CTA */}
      <section className="service-cta">
        <motion.div
          className="cta-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>{content.cta.title}</h3>
          <p>{content.cta.text}</p>
          <a href={content.cta.link} className="primary-btn">
            {content.cta.button}
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default ServicePage;
