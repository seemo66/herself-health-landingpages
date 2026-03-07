// main entry point for the app
// imports top-level layout and section components
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import HeroSection from '../../components/membership/HeroSection';
// import GuideSection from '../../components/membership/GuideSection';
import ServicesSection from '../../components/membership/ServicesSection';
// import InsuranceSection from '../../components/membership/InsuranceSection';
import MembershipSection from '../../components/membership/MembershipSection';
// import FormGuideSectionDesktop from '../../components/membership/FormGuideSectionDesktop';
import WaitingListSection from '../../components/membership/WaitingListSection';
import ComparisonSection from '../../components/membership/ComparisonSection';
import OffersSection from '../../components/membership/OffersSection';
// import HerselfHealthLogoSection from '../../components/membership/HerselfHealthLogoSection';
import MembershipDetailsSection from '../../components/membership/MembershipDetailsSection';
import OurCareSection from '../../components/membership/OurCareSection';
import NextStepSection from '../../components/membership/NextStepSection';
import FaqSection from '../../components/membership/FaqSection';
import Testimonials from '../../components/membership/Testimonials';
import PricingSection from '../../components/membership/PricingSection';

function Membership() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    ServicesSection, // services offered by the company
    MembershipSection, // membership or subscription information
    ComparisonSection, // comparison of services
    OffersSection, // offers promotions
    OurCareSection,
    Testimonials,
    PricingSection,
    WaitingListSection, // waiting list or sign-up form
    MembershipDetailsSection,
    NextStepSection,
    FaqSection,
    Footer,
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      {/* site header, usually contains navigation */}
      <Header />

      {/* main content area, semantically marked as main */}
      <main className="max-w-[1728px] mx-auto" role="main">
        {sections.map((Section, index) => (
          // render each section in order
          <Section key={index} />
        ))}
      </main>
    </div>
  );
}

export default Membership;
