const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-col brand">
            <img src="/logo.png" alt="StayAura" className="footer-logo" />
            <p>
              StayAura provides premium serviced accommodation for
              guests, contractors, and corporate clients across the UK.
            </p>
          </div>

          {/* Guests */}
          <div className="footer-col">
            <h4>Guests</h4>
            <ul>
              <li><a href="/properties">Browse Properties</a></li>
              <li><a href="/corporate">Corporate Stays</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Landlords */}
          <div className="footer-col">
            <h4>Landlords</h4>
            <ul>
              <li><a href="/landlords">List Your Property</a></li>
              <li><a href="/management">Property Management</a></li>
              <li><a href="/guaranteed-rent">Guaranteed Rent</a></li>
              <li><a href="/landlord-faqs">Landlord FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-phone" />
                020 4538 0200
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                info@stayaura.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot" />
                United Kingdom
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} StayAura. All rights reserved.</span>

          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookie">Cookie Policy</a>
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com/stay.aura.ltd?igsh=MTR4cjVzcmVjYjBqcQ%3D%3D&utm_source=qr"><i className="fa-brands fa-instagram" /></a>
            <a href="#"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
