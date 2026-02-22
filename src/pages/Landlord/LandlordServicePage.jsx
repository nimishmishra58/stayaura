import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./LandlordServicePage.css";
import { apiUrl } from "../../config/api";
import StatusPopup from "../../components/StatusPopup/StatusPopup";
import { getErrorMessage } from "../../utils/http";

const LandlordServicePage = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [landlordForm, setLandlordForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    notes: "",
  });
  const [images, setImages] = useState([]);
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  useEffect(() => {
    if (!isModalOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLandlordChange = (e) => {
    setLandlordForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setImages(selectedFiles);
  };

  const handleLandlordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(landlordForm).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("enquiryType", "landlord");
      formData.append("emailSubject", "New Landlord Enquiry");
      formData.append("service", content.hero.title);

      images.forEach((file) => {
        formData.append("images", file);
      });

      const res = await fetch(apiUrl("/api/enquiry"), {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorMessage = await getErrorMessage(res, "Failed to send landlord enquiry");
        throw new Error(errorMessage);
      }

      setPopup({
        open: true,
        type: "success",
        title: "Enquiry Sent",
        message: "Your landlord enquiry has been submitted.",
      });
      setLandlordForm({
        name: "",
        email: "",
        phone: "",
        propertyAddress: "",
        notes: "",
      });
      setImages([]);
      closeModal();
    } catch (err) {
      console.error(err);
      setPopup({
        open: true,
        type: "error",
        title: "Submission Failed",
        message: err.message || "Error sending enquiry",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landlord-service-page">
      <section
        className="lsp-hero"
        style={{ backgroundImage: `url(${content.hero.image})` }}
      >
        <div className="lsp-hero-overlay" />
        <div className="lsp-container lsp-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {content.hero.title}
          </motion.h1>
          <p className="lsp-hero-sub">{content.hero.subtitle}</p>
          <p className="lsp-hero-desc">{content.hero.description}</p>
          <button className="primary-btn" onClick={openModal}>
            {content.hero.cta}
          </button>
        </div>
      </section>

      <section className="lsp-section light">
        <div className="lsp-container lsp-split">
          <div>
            <h3>{content.overview.title}</h3>
            {content.overview.paragraphs.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <ul className="lsp-points">
              {content.overview.points.map((point) => (
                <li key={point}>✔ {point}</li>
              ))}
            </ul>
          </div>
          <div className="lsp-split-image">
            <img src={content.overview.image} alt={content.overview.title} />
          </div>
        </div>
      </section>

      <section className="lsp-section soft">
        <div className="lsp-container">
          <div className="lsp-header">
            <h2>{content.idealFor.title}</h2>
            <p>{content.idealFor.subtitle}</p>
          </div>
          <div className="lsp-grid">
            {content.idealFor.items.map((item) => (
              <div className="lsp-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lsp-section dark">
        <div className="lsp-container">
          <div className="lsp-header">
            <h2>{content.why.title}</h2>
            <p>{content.why.subtitle}</p>
          </div>
          <div className="lsp-grid">
            {content.why.items.map((item) => (
              <div className="lsp-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lsp-section light">
        <div className="lsp-container">
          <div className="lsp-header">
            <h2>{content.process.title}</h2>
            <p>{content.process.subtitle}</p>
          </div>
          <div className="lsp-steps">
            {content.process.steps.map((step, index) => (
              <div className="lsp-step" key={step.title}>
                <div className="lsp-step-number">{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lsp-section soft">
        <div className="lsp-container">
          <div className="lsp-cta">
            <h3>{content.cta.title}</h3>
            <p>{content.cta.text}</p>
            <button className="primary-btn" onClick={openModal}>
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="lsp-modal-overlay" onClick={closeModal}>
          <div
            className="lsp-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Landlord enquiry form"
          >
            <button
              className="lsp-modal-close"
              onClick={closeModal}
              aria-label="Close enquiry form"
              type="button"
            >
              ×
            </button>

            <h3>Landlord Enquiry</h3>
            <p>Share your property details and upload images if available.</p>

            <form className="lsp-modal-form" onSubmit={handleLandlordSubmit}>
              <div className="lsp-modal-row">
                <input
                  name="name"
                  placeholder="Full Name*"
                  value={landlordForm.name}
                  onChange={handleLandlordChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  value={landlordForm.email}
                  onChange={handleLandlordChange}
                  required
                />
              </div>

              <div className="lsp-modal-row">
                <input
                  name="phone"
                  placeholder="Phone*"
                  value={landlordForm.phone}
                  onChange={handleLandlordChange}
                  required
                />
                <input
                  name="propertyAddress"
                  placeholder="Property Address*"
                  value={landlordForm.propertyAddress}
                  onChange={handleLandlordChange}
                  required
                />
              </div>

              <textarea
                name="notes"
                placeholder="Tell us about your property (beds, condition, location, timeline)"
                value={landlordForm.notes}
                onChange={handleLandlordChange}
                rows={4}
              />

              <label className="lsp-file-label" htmlFor="landlord-images">
                Property Images (optional)
              </label>
              <input
                id="landlord-images"
                name="images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImagesChange}
              />
              {images.length > 0 && (
                <p className="lsp-file-help">{images.length} image(s) selected</p>
              )}

              <button className="primary-btn lsp-modal-submit" disabled={loading}>
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
      <StatusPopup
        open={popup.open}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={() => setPopup((prev) => ({ ...prev, open: false }))}
      />
    </div>
  );
};

export default LandlordServicePage;
