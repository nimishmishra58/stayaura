import LandlordServicePage from "./LandlordServicePage";

const content = {
  hero: {
    title: "Airbnb Management for Landlords",
    subtitle: "Higher returns. Zero daily hassle.",
    description:
      "StayAura manages your Airbnb listing end-to-end, from pricing and guest communication to cleaning and compliance.",
    cta: "Enquire About Airbnb Management",
    image: "/Property1.png",
  },
  overview: {
    title: "A Fully Managed Airbnb Service",
    paragraphs: [
      "Our Airbnb Management solution is designed for owners who want strong short-stay income without the operational workload.",
      "We optimise occupancy, automate guest flow, and maintain a premium guest experience while protecting your property.",
    ],
    points: [
      "Dynamic pricing and occupancy strategy",
      "Professional listing setup and optimisation",
      "Guest messaging and support handled 24/7",
      "Cleaning, linen, and quality control",
    ],
    image: "/properties/tw8-featured.jpeg",
  },
  idealFor: {
    title: "Who This Is Best For",
    subtitle: "Ideal for landlords who want income growth without hosting stress.",
    items: [
      { title: "Hands-Off Owners", text: "Perfect if you prefer passive management while experts handle operations." },
      { title: "Busy Professionals", text: "Great for owners with limited time to manage bookings and guest turnover." },
      { title: "Remote Landlords", text: "Reliable local management even if you live outside the property area." },
      { title: "Yield-Focused Investors", text: "Built for investors aiming to improve cashflow vs standard long lets." },
      { title: "First-Time Hosts", text: "A simple way to enter short lets with compliance and systems in place." },
      { title: "Portfolio Owners", text: "Scalable model for multiple units with centralised operational control." },
    ],
  },
  why: {
    title: "Why Landlords Choose StayAura",
    subtitle: "A premium standard of management, guest care, and performance.",
    items: [
      { title: "Revenue Management", text: "Pricing strategy aligned with seasonality, demand, and local events." },
      { title: "Guest Experience", text: "Fast responses, smooth check-ins, and consistent stay quality." },
      { title: "Property Protection", text: "Routine checks and proactive maintenance to protect asset condition." },
      { title: "Operational Reliability", text: "Cleanings, turnovers, and logistics managed with clear processes." },
      { title: "Transparent Reporting", text: "Performance visibility with straightforward monthly statements." },
      { title: "Compliance Support", text: "Guidance around safety and legal requirements for short lets." },
    ],
  },
  process: {
    title: "How It Works",
    subtitle: "A clear onboarding process from setup to live bookings.",
    steps: [
      { title: "Property Review", text: "We assess suitability and define your income goals." },
      { title: "Setup & Positioning", text: "We optimise listing content, photos, and pricing foundations." },
      { title: "Go Live", text: "Your property is launched with active demand and booking controls." },
      { title: "Ongoing Management", text: "We handle guests, cleaning, maintenance, and performance." },
    ],
  },
  cta: {
    title: "Ready to Maximise Your Airbnb Returns?",
    text: "Speak with our team about a tailored Airbnb management plan for your property.",
    button: "Request Airbnb Assessment",
  },
};

const AirbnbManagement = () => <LandlordServicePage content={content} />;

export default AirbnbManagement;
