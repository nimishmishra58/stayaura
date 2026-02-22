import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./GuaranteedRent.css";
import { apiUrl } from "../../config/api";
import StatusPopup from "../../components/StatusPopup/StatusPopup";
import { getErrorMessage } from "../../utils/http";

const benefits = [
  {
    icon: "fa-sterling-sign",
    title: "Guaranteed Monthly Income",
    text: "Fixed rent paid every month — even when the property is vacant."
  },
  {
    icon: "fa-handshake",
    title: "Fully Hands-Off Management",
    text: "We handle tenants, compliance, maintenance, and daily operations."
  },
  {
    icon: "fa-receipt",
    title: "No Hidden Costs",
    text: "Council tax, utilities, maintenance, and management are covered."
  },
  {
    icon: "fa-shield-check",
    title: "Professional Property Care",
    text: "Regular inspections and proactive upkeep protect your asset."
  },
  {
    icon: "fa-chart-line",
    title: "Predictable, Low-Risk Returns",
    text: "Stable income without voids, arrears, or surprise expenses."
  },
  {
    icon: "fa-clock",
    title: "Long-Term Peace of Mind",
    text: "Ideal for landlords who want reliability over constant involvement."
  }
];
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Property Assessment",
    text: "We assess your property and provide a guaranteed monthly rent offer based on location, size, and demand.",
    icon: "fa-house"
  },
  {
    step: "02",
    title: "Guaranteed Rent Offer",
    text: "You receive a fixed rent proposal with clear terms — no hidden fees or surprises.",
    icon: "fa-file-contract"
  },
  {
    step: "03",
    title: "Agreement Signed",
    text: "Once agreed, we sign a legal contract and take full responsibility for the property.",
    icon: "fa-pen-to-square"
  },
  {
    step: "04",
    title: "Full Management",
    text: "We manage tenants, maintenance, compliance, and day-to-day operations.",
    icon: "fa-screwdriver-wrench"
  },
  {
    step: "05",
    title: "Monthly Rent Paid",
    text: "You receive your guaranteed rent every month — even during void periods.",
    icon: "fa-money-bill-wave"
  }
];


const GuaranteedRent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    if (!isModalOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImagesChange = (e) => {
    const selected = Array.from(e.target.files || []);
    setImages(selected);
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
      formData.append("service", "Guaranteed Rent");
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
        message: "Your guaranteed rent enquiry has been submitted.",
      });
      setForm({
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
    <div className="service-page">

      {/* HERO */}
      <section
        className="service-hero-bg"
        style={{
          backgroundImage:
            "url('guaranteed-rent/hero.png')",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="container hero-bg-content">
          <h1>Guaranteed Rent for Landlords</h1>

          <p className="hero-sub">
            Fixed monthly income. No voids. No tenant hassle.
          </p>

          <p className="hero-desc">
            StayAura provides a fully managed Guaranteed Rent solution,
            giving landlords predictable income while we take complete
            responsibility for managing the property.
          </p>

          <button className="primary-btn" onClick={openModal}>
            Enquire About Guaranteed Rent
          </button>
        </div>
      </section>


      {/* WHAT IS */}
      <section className="service-section section-light">
        <div className="container what-gr-layout">

          {/* LEFT CONTENT */}
          <div className="what-gr-text">
            <span className="section-eyebrow">
              What Is Guaranteed Rent?
            </span>

            <h2>
              A Stress-Free Way to Earn Reliable Rental Income
            </h2>

            <p>
              Guaranteed Rent is a property management model where StayAura
              leases your property for a fixed term and pays you a
              pre-agreed monthly rent — regardless of occupancy.
            </p>

            <p>
              Unlike traditional letting, your income is protected from
              void periods, late payments, and tenant turnover. We take
              full responsibility for tenants, compliance, maintenance,
              and day-to-day management.
            </p>

            <ul className="what-gr-points">
              <li>✔ Fixed monthly rent paid on time</li>
              <li>✔ No void periods or tenant risk</li>
              <li>✔ Full property management included</li>
              <li>✔ Long-term stability and peace of mind</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="what-gr-image">
            <img
              src="/guaranteed-rent/managed-apartment.png"
              alt="Professionally managed serviced apartment"
            />
          </div>

        </div>
      </section>

      <section className="service-section section-dark">
        <div className="container">

          {/* SECTION HEADER */}
          <div className="section-header center">
            <h2>Who Is Guaranteed Rent Ideal For?</h2>
            <p>
              Our Guaranteed Rent solution is designed for landlords who want
              reliable income without the stress of traditional letting.
            </p>
          </div>

          {/* CARD GRID */}
          <div className="ideal-for-grid">

            <div className="ideal-card">
              <img
                src="/guaranteed-rent/BusyLandlord.png"
                alt="Busy landlord"
              />
              <h4>Busy Landlords</h4>
              <p>
                Ideal for landlords with limited time who want a fully
                hands-off solution and consistent income.
              </p>
            </div>

            <div className="ideal-card">
              <img
                src="/guaranteed-rent/Overseas.png"
                alt="Overseas property owner"
              />
              <h4>Overseas & Remote Owners</h4>
              <p>
                Perfect for landlords living abroad or outside the area who
                need reliable UK-based property management.
              </p>
            </div>

            <div className="ideal-card">
              <img
                src="/guaranteed-rent/PortfolioLandlord.png"
                alt="Property portfolio landlord"
              />
              <h4>Portfolio Landlords</h4>
              <p>
                Stable, predictable returns across multiple properties with
                reduced exposure to voids and tenant issues.
              </p>
            </div>

            <div className="ideal-card">
              <img
                src="/guaranteed-rent/AccidentalLandlord.png"
                alt="Accidental landlord"
              />
              <h4>Accidental Landlords</h4>
              <p>
                A stress-free option for those who became landlords unexpectedly
                and want peace of mind.
              </p>
            </div>

            <div className="ideal-card">
              <img
                src="/guaranteed-rent/VoidTired.png"
                alt="Landlord tired of tenant issues"
              />
              <h4>Landlords Tired of Voids</h4>
              <p>
                No missed rent, no late payments, and no tenant-related stress —
                just reliable monthly income.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="why-gr section-light">
        <div className="section-container">

          <div className="section-header center">
            <span className="section-eyebrow">Why Choose StayAura</span>
            <h2>Guaranteed Rent Without the Stress</h2>
            <p>
              A smarter alternative to traditional letting — designed for landlords
              who value stability, professionalism, and peace of mind.
            </p>
          </div>

          <div className="why-gr-grid">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="why-gr-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="why-gr-icon">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <section className="service-compare section-dark">
        <div className="section-container">

          <div className="section-header center">
            <h2>Guaranteed Rent vs Traditional Letting</h2>
            <p>A clearer, safer way to rent your property</p>
          </div>

          <div className="compare-table">

            <div className="compare-column guaranteed">
              <h3>Guaranteed Rent</h3>
              <ul>
                <li>Fixed monthly income</li>
                <li>No void periods</li>
                <li>No tenant management</li>
                <li>No council tax or utility bills</li>
                <li>Maintenance & compliance handled</li>
                <li>Predictable, low-risk returns</li>
              </ul>
            </div>

            <div className="compare-column traditional">
              <h3>Traditional Letting</h3>
              <ul>
                <li>Variable monthly income</li>
                <li>Void periods reduce earnings</li>
                <li>Tenant issues handled by landlord</li>
                <li>Bills payable during voids</li>
                <li>Maintenance & compliance responsibility</li>
                <li>Uncertain, higher-risk returns</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


     
    <section className="how-it-works section-light">
      <div className="section-container">

        <div className="section-header center">
          <h2>How Guaranteed Rent Works</h2>
          <p>A simple, transparent process designed for stress-free property ownership.</p>
        </div>

        <div className="how-steps">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="how-card">
              <div className="how-step">{item.step}</div>

              <div className="how-icon">
                <i className={`fa-solid ${item.icon}`} />
              </div>

              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
 

      {/* CTA */}
      <section className="cta-section">
  <div className="cta-overlay"></div>

  <div className="cta-container">
    <span className="cta-eyebrow">Guaranteed Rent</span>

    <h2>Secure Your Rental Income — Without the Stress</h2>

    <p>
      Let StayAura manage your property while you enjoy fixed monthly
      income, zero voids, and complete peace of mind.
    </p>

    <div className="cta-actions">
      <button className="primary-btn" onClick={openModal}>
        Get Your Guaranteed Rent Offer
      </button>
      <span className="cta-subtext">
        No obligation • Free property assessment
      </span>
    </div>
  </div>
</section>

      {isModalOpen && (
        <div className="gr-modal-overlay" onClick={closeModal}>
          <div
            className="gr-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Guaranteed rent enquiry form"
          >
            <button
              className="gr-modal-close"
              type="button"
              aria-label="Close enquiry form"
              onClick={closeModal}
            >
              ×
            </button>

            <h3>Guaranteed Rent Enquiry</h3>
            <p>Share your property details and upload images if available.</p>

            <form className="gr-modal-form" onSubmit={handleSubmit}>
              <div className="gr-modal-row">
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

              <div className="gr-modal-row">
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

              <label className="gr-file-label" htmlFor="gr-images">
                Property Images (optional)
              </label>
              <input
                id="gr-images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImagesChange}
              />
              {images.length > 0 && (
                <p className="gr-file-help">{images.length} image(s) selected</p>
              )}

              <button className="primary-btn gr-modal-submit" disabled={loading}>
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

export default GuaranteedRent;
