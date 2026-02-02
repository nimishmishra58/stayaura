const partners = [
  "booking",
  "airbnb",
  "expedia",
  "vrbo",
  "google",
];

const BookingPartners = () => {
  return (
    <section className=" section section-light">
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
            <div key={partner} className="partner-logo">
              <img
                src={`/partners/${partner}.png`}
                alt={`${partner} logo`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookingPartners;
