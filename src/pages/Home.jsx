import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import About from "../sections/About";
import WhyUs from "../sections/WhoStays";
import Services from "../sections/Services";
import HowItWorks from "../sections/HowItWorks";
import Properties from "../sections/Properties";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";
import FeaturedProperties from "../sections/FeaturedProperties";
import WhyStay from "../sections/WhyStay";
import GuestReviews from "../sections/GuestReviews";
import ContactUs from "../sections/ContactUs";
import BookingPartners from "../sections/BookingPartners";
import CorporateHousing from "../sections/CorporateHousing";
import WhoStays from "../sections/WhoStays";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhoStays />

        <BookingPartners />

      <WhyStay />
      <CorporateHousing />
      <GuestReviews />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default Home;
