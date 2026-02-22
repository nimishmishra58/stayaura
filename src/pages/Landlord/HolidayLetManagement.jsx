import LandlordServicePage from "./LandlordServicePage";

const content = {
  hero: {
    title: "Holiday Let Management",
    subtitle: "Professional holiday-let operations, managed for you.",
    description:
      "From guest-ready presentation to seasonal pricing and turnover operations, StayAura manages your holiday let to a high standard.",
    cta: "Enquire About Holiday Lets",
    image: "/Property2.png",
  },
  overview: {
    title: "Turn Your Property Into a High-Performing Holiday Let",
    paragraphs: [
      "Holiday lets require consistent standards and fast operations. We run the full service so owners can focus on results, not tasks.",
      "Our approach blends hospitality quality with property management discipline to improve occupancy and guest satisfaction.",
    ],
    points: [
      "Seasonal strategy and calendar control",
      "End-to-end guest communications",
      "Housekeeping and turnover management",
      "Owner support with clear performance updates",
    ],
    image: "/properties/bn1-featured.jpeg",
  },
  idealFor: {
    title: "Best Fit For",
    subtitle: "Designed for owners who want holiday-let income without operational overhead.",
    items: [
      { title: "Second Home Owners", text: "Generate returns from your property when you are not using it." },
      { title: "Coastal & Leisure Locations", text: "Maximise high-demand seasonal windows with better planning." },
      { title: "Quality-Focused Hosts", text: "Maintain premium reviews through consistent guest delivery." },
      { title: "Time-Constrained Owners", text: "Avoid day-to-day hosting workload and vendor coordination." },
      { title: "Remote Owners", text: "Trusted management even when you cannot visit regularly." },
      { title: "Revenue-Conscious Landlords", text: "Improve performance with pricing and occupancy optimisation." },
    ],
  },
  why: {
    title: "What Makes Our Service Different",
    subtitle: "Reliable operations that protect your standards and your income.",
    items: [
      { title: "Hospitality-Led Standards", text: "Guest experience is treated as a core driver of repeat demand." },
      { title: "Efficient Turnovers", text: "Cleaning and preparation workflows built for quality and speed." },
      { title: "Smart Channel Management", text: "Listing positioning across the right booking channels." },
      { title: "Owner Visibility", text: "Clear updates on occupancy, rates, and overall performance." },
      { title: "Issue Resolution", text: "Guest and property issues managed quickly and professionally." },
      { title: "Brand-Aligned Presentation", text: "Listing quality and tone aligned with premium guest expectations." },
    ],
  },
  process: {
    title: "Our Management Process",
    subtitle: "Simple onboarding and consistent delivery throughout the year.",
    steps: [
      { title: "Initial Planning", text: "We review market fit, setup needs, and goals." },
      { title: "Listing & Operations Setup", text: "Content, pricing base, and service operations are configured." },
      { title: "Live Trading", text: "Bookings begin with active guest and calendar management." },
      { title: "Performance Optimisation", text: "We refine rates, stays, and service based on real data." },
    ],
  },
  cta: {
    title: "Scale Your Holiday Let with Confidence",
    text: "Get a tailored plan to improve occupancy, quality, and owner returns.",
    button: "Get Holiday Let Proposal",
  },
};

const HolidayLetManagement = () => <LandlordServicePage content={content} />;

export default HolidayLetManagement;
