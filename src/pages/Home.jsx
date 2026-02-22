import Hero from "../sections/Hero/Hero";
import FAQ from "../sections/FAQ/FAQ";
import FeaturedProperties from "../sections/FeaturedProperties/FeaturedProperties";
import WhyStay from "../sections/WhyStay/WhyStay";
import GuestReviews from "../sections/GuestReviews/GuestReviews";
import BookingPartners from "../sections/BookingPartners/BookingPartners";
import CorporateHousing from "../sections/CorporateHousing/CorporateHousing";
import WhoStays from "../sections/WhoStays/WhoStays";
import EnquireNow from "../sections/EnquireNow/EnquireNow";

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
      <EnquireNow />
    </>
  );
};

export default Home;
