import "./BookingPartners.css";

const partners = [
  { name: "Airbnb", logo: "/partners/airbnb.png", key: "airbnb" },
  { name: "Booking.com", logo: "/partners/booking.png", key: "booking" },
  { name: "Expedia", logo: "/partners/expedia.png", key: "expedia" },
  { name: "VRBO", logo: "/partners/vrbo.png", key: "vrbo" },
  { name: "Google", logo: "/partners/google.png", key: "google" },
  { name: "Trip Advisor", logo: "/partners/tripadvisor-seeklogo.png", key: "tripadvisor" },
  { name: "Situ", logo: "/partners/situ.png", key: "situ" },
  { name: "Comfy Worker", logo: "/partners/comfyWorkers.png", key: "comfy-workers" },
  { name: "Silverdoor", logo: "/partners/silverdoor.png", key: "silverdoor" },
];

const BookingPartners = () => {
  return (
    <section id="booking-partners" className="booking-partners section">
      <div className="section-container">

        <div className="section-header">
          <h2>Available on Leading Booking Platforms</h2>
          <p>
            Book your StayAura accommodation through trusted global
            and corporate booking channels.
          </p>
        </div>

        <div className="partners-row">
          {partners.map((partner) => (
            <div key={partner.name} className={`partner-logo ${partner.key}`}>
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookingPartners;
