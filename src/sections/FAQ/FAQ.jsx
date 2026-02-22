import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I book a stay with StayAura?",
    answer:
      "You can browse available properties, select your preferred dates, and complete your booking securely online in just a few steps.",
  },
  {
    question: "Are StayAura properties fully furnished?",
    answer:
      "Yes, all our properties are fully furnished and include essential amenities, fresh linens, and a comfortable living setup.",
  },
  {
    question: "Is there a minimum or maximum stay duration?",
    answer:
      "We offer flexible stay options ranging from short stays to extended stays, depending on the property you choose.",
  },
  {
    question: "What if I need help during my stay?",
    answer:
      "Our dedicated guest support team is available to assist you before, during, and after your stay.",
  },
  {
    question: "Are the properties verified and secure?",
    answer:
      "Yes, all properties listed on StayAura are verified and professionally managed to ensure a safe and reliable experience.",
  },
];

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{item.question}</span>
        <i className={`fas fa-chevron-${open ? "up" : "down"}`}></i>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="faq section section-dark">
      <div className="section-container">

        {/* Header */}
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know before booking your stay
            with StayAura.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
