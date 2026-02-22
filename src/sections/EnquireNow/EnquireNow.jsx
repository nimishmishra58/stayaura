import { useState } from "react";
import "./EnquireNow.css";
import { apiUrl } from "../../config/api";
import StatusPopup from "../../components/StatusPopup/StatusPopup";
import { getErrorMessage } from "../../utils/http";

const EnquireNow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bedrooms: "",
    address: "",
    city: "",
    postcode: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // append text fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });
      formData.append("enquiryType", "guest");
      formData.append("emailSubject", "New Guest Enquiry");

      const res = await fetch(apiUrl("/api/enquiry"), {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setPopup({
          open: true,
          type: "success",
          title: "Enquiry Sent",
          message: "Your enquiry has been sent successfully.",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          bedrooms: "",
          address: "",
          city: "",
          postcode: "",
          notes: "",
        });
      } else {
        const errorMessage = await getErrorMessage(res, "Error sending enquiry");
        setPopup({
          open: true,
          type: "error",
          title: "Submission Failed",
          message: errorMessage,
        });
      }
    } catch (err) {
      console.error(err);
      setPopup({
        open: true,
        type: "error",
        title: "Server Error",
        message: "Could not submit your enquiry right now. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="enquire-section" id="enquire-now">
      <div className="container">
        <div className="enquire-header">
          <h2>Enquire Now</h2>
          <p>
            Tell us what you need and we will help you secure the right stay.
          </p>
        </div>

        <div className="enquire-layout">
          <div className="enquire-left">
            <h3>Plan Your Stay with StayAura</h3>
            <p>
              Share your requirements and our team will help you find the right
              serviced accommodation quickly.
            </p>

          <ul className="enquire-benefits">
            <li>✔ Flexible short and extended stays</li>
            <li>✔ Fully furnished, professionally managed homes</li>
            <li>✔ Suitable for business, relocation, and leisure</li>
            <li>✔ Fast response from the StayAura team</li>
          </ul>
          </div>

          <form className="enquire-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <input
              name="name"
              placeholder="Full Name*"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <select name="bedrooms" value={form.bedrooms} onChange={handleChange}>
              <option value="">Accommodation Type</option>
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>2 Bedroom</option>
              <option>3 Bedroom</option>
              <option>4+ Bedroom</option>
            </select>
          </div>

          <input
            className="full"
            name="address"
            placeholder="Preferred Area / Address*"
            value={form.address}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />

            <input
              name="postcode"
              placeholder="Postcode"
              value={form.postcode}
              onChange={handleChange}
            />
          </div>

          <textarea
            className="full"
            name="notes"
            placeholder="Additional Notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
          />

            <button className="enquire-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
      <StatusPopup
        open={popup.open}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={() => setPopup((prev) => ({ ...prev, open: false }))}
      />
    </section>
  );
};

export default EnquireNow;
