import { useEffect, useState } from "react";
import "./LandlordEnquiryModal.css";
import { apiUrl } from "../../config/api";
import StatusPopup from "../StatusPopup/StatusPopup";
import { getErrorMessage } from "../../utils/http";

const LandlordEnquiryModal = ({
  isOpen,
  onClose,
  heading = "Landlord Enquiry",
  description = "Share your property details and upload images if available.",
  service = "Landlord Services",
}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
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
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImagesChange = (e) => {
    setImages(Array.from(e.target.files || []));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("enquiryType", "landlord");
      formData.append("emailSubject", "New Landlord Enquiry");
      formData.append("service", service);
      images.forEach((file) => formData.append("images", file));

      const res = await fetch(apiUrl("/api/enquiry"), {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorMessage = await getErrorMessage(res, "Failed to submit enquiry");
        throw new Error(errorMessage);
      }

      setPopup({
        open: true,
        type: "success",
        title: "Enquiry Sent",
        message: "Your landlord enquiry has been submitted.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        propertyAddress: "",
        notes: "",
      });
      setImages([]);
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
    <div className="landlord-modal-overlay" onClick={onClose}>
      <div
        className="landlord-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={heading}
      >
        <button
          className="landlord-modal-close"
          type="button"
          aria-label="Close enquiry form"
          onClick={onClose}
        >
          ×
        </button>

        <h3>{heading}</h3>
        <p>{description}</p>

        <form className="landlord-modal-form" onSubmit={handleSubmit}>
          <div className="landlord-modal-row">
            <input
              name="name"
              placeholder="Full Name*"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="landlord-modal-row">
            <input
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              name="propertyAddress"
              placeholder="Property Address*"
              value={form.propertyAddress}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="notes"
            rows={4}
            placeholder="Additional Notes"
            value={form.notes}
            onChange={handleChange}
          />

          <label className="landlord-file-label" htmlFor="landlord-modal-images">
            Property Images (optional)
          </label>
          <input
            id="landlord-modal-images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImagesChange}
          />

          {images.length > 0 && (
            <p className="landlord-file-help">{images.length} image(s) selected</p>
          )}

          <button className="primary-btn landlord-modal-submit" disabled={loading}>
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
      <StatusPopup
        open={popup.open}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={() => {
          const shouldCloseModal = popup.type === "success";
          setPopup((prev) => ({ ...prev, open: false }));
          if (shouldCloseModal) onClose();
        }}
      />
    </div>
  );
};

export default LandlordEnquiryModal;
