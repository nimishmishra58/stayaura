import { Link } from "react-router-dom";
import "./Footer.css";
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
              <li>
                <a href="https://booking.stayaura.com/listings?city=&check_in=&check_out=&number_of_guests=1&min_price=&max_price=">
                  Browse Properties
                </a>
              </li>
              <li><a href="/#corporate-stays">Corporate Stays</a></li>
              <li><a href="/#guest-reviews">Guest Reviews</a></li>
              <li><a href="/#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Landlords */}
          <div className="footer-col">
            <h4>Landlords</h4>
            <ul>
              <li><a href="/guaranteed-rent">Guaranteed Rent</a></li>
              <li><a href="/airbnb-management">Airbnb Management</a></li>
              <li><a href="/holiday-let-management">Holiday Let Management</a></li>
              <li><a href="/short-let-management">Short Let Management</a></li>
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
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie">Cookie Policy</Link>
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com/stay.aura.ltd?igsh=MTR4cjVzcmVjYjBqcQ%3D%3D&utm_source=qr"><i className="fa-brands fa-instagram" /></a>
            <a href="https://www.facebook.com/share/1GYZq8xG1n/?mibextid=wwXIfr"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
