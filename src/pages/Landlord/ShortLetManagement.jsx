import LandlordServicePage from "./LandlordServicePage";

const content = {
  hero: {
    title: "Short Let Management",
    subtitle: "Flexible short-let strategy backed by full operations.",
    description:
      "StayAura helps landlords run short lets with predictable systems, strong guest experience, and proactive property care.",
    cta: "Enquire About Short Lets",
    image: "/Property3.png",
  },
  overview: {
    title: "Structured Short-Let Management",
    paragraphs: [
      "Short lets can outperform traditional rentals when executed properly. We manage each stage from pricing and bookings to in-stay support.",
      "Our service is built for consistency, compliance, and operational efficiency across different stay durations.",
    ],
    points: [
      "Demand-led pricing and minimum-stay control",
      "Guest screening and communication",
      "Check-in, turnover, and maintenance coordination",
      "Consistent reporting and owner support",
    ],
    image: "/properties/bn2-featured.jpeg",
  },
  idealFor: {
    title: "Ideal For",
    subtitle: "Suitable for owners seeking flexibility with professional management.",
    items: [
      { title: "Urban Property Owners", text: "Use high-demand city locations for shorter, higher-value stays." },
      { title: "Landlords Between Tenancies", text: "Monetise vacant periods without long-term lock-in." },
      { title: "Developers & Investors", text: "Operate new units with stronger control and premium positioning." },
      { title: "Relocation Accommodation", text: "Target medium-duration guests needing furnished stays." },
      { title: "Corporate-Linked Demand", text: "Support project and business stays with reliable standards." },
      { title: "Growth-Oriented Portfolios", text: "Scale operations with standardised systems and team support." },
    ],
  },
  why: {
    title: "Why Choose StayAura for Short Lets",
    subtitle: "Operational discipline and guest quality that protect long-term performance.",
    items: [
      { title: "Balanced Occupancy", text: "We optimise both nightly rate and occupancy across demand periods." },
      { title: "Professional Guest Journey", text: "Fast support, clear communication, and smooth stay delivery." },
      { title: "Asset Protection", text: "House rules, checks, and maintenance processes reduce avoidable wear." },
      { title: "Channel Strategy", text: "We position listings where demand quality and value are strongest." },
      { title: "Clear Commercial Reporting", text: "Know how your short-let is performing each month." },
      { title: "Low-Drag Ownership", text: "Hands-off management with consistent standards from day one." },
    ],
  },
  process: {
    title: "Short-Let Onboarding in 4 Steps",
    subtitle: "A straightforward rollout with ongoing optimisation.",
    steps: [
      { title: "Assessment", text: "We review fit, expected demand, and setup priorities." },
      { title: "Launch Preparation", text: "Listing, pricing, and service workflows are configured." },
      { title: "Bookings & Operations", text: "We manage guests, turnovers, and day-to-day execution." },
      { title: "Continuous Improvement", text: "Performance is reviewed and refined over time." },
    ],
  },
  cta: {
    title: "Ready to Launch Your Short Let?",
    text: "Talk to our team about a practical strategy tailored to your property.",
    button: "Request Short-Let Plan",
  },
};

const ShortLetManagement = () => <LandlordServicePage content={content} />;

export default ShortLetManagement;
