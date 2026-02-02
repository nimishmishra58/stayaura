import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="contact-us section section-light">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance?  
            Our team is here to help you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="contact-content">

          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <span>support@stayaura.com</span>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <span>+44 20 1234 5678</span>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <div>
                <strong>Office</strong>
                <span>London, United Kingdom</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button className="primary-btn">
              Send Message
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;
