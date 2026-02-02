import { motion } from "framer-motion";

const ServicePage = ({ hero, sections, cta }) => {
  return (
    <motion.main
      className="service-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >

      {/* HERO WITH BACKGROUND IMAGE */}
      <section
        className="section service-hero-image"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="hero-overlay" />
        <div className="section-container">
          <div className="section-header center light">
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`section ${section.light ? "section-light" : "section-dark"}`}
        >
          <div className="section-container">

            {/* SPLIT IMAGE + CONTENT */}
            {section.image && section.layout === "split" ? (
              <div
                className={`service-split ${
                  section.imagePosition === "right" ? "reverse" : ""
                }`}
              >
                <div className="service-content">
                  {section.heading && (
                    <div className="section-header">
                      <h2>{section.heading}</h2>
                      {section.subheading && <p>{section.subheading}</p>}
                    </div>
                  )}

                  {section.type === "text" && <p>{section.content}</p>}

                  {section.type === "list" && (
                    <ul className="service-list">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.type === "cards" && (
                    <div className="service-benefits-grid">
                      {section.items.map((card, i) => (
                        <div className="service-benefit-card" key={i}>
                          <h4>{card.title}</h4>
                          <p>{card.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="service-image">
                  <img src={section.image} alt={section.heading || ""} />
                </div>
              </div>
            ) : (
              <>
                {section.heading && (
                  <div className="section-header center">
                    <h2>{section.heading}</h2>
                    {section.subheading && <p>{section.subheading}</p>}
                  </div>
                )}

                {section.type === "text" && <p>{section.content}</p>}

                {section.type === "list" && (
                  <ul className="service-list">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.type === "cards" && (
                  <div className="service-benefits-grid">
                    {section.items.map((card, i) => (
                      <div className="service-benefit-card" key={i}>
                        <h4>{card.title}</h4>
                        <p>{card.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section section-light">
        <div className="section-container service-cta">
          <h3>{cta.title}</h3>
          <p>{cta.text}</p>
          <button className="primary-btn">{cta.button}</button>
        </div>
      </section>
    </motion.main>
  );
};

export default ServicePage;
