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

function Midi() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    ServicesSection, // services offered by the company
    MembershipSection, // membership or subscription information
    ComparisonSection, // comparison of services
    OffersSection, // offers promotions
    OurCareSection,
    Testimonials,
    () => <PricingSection phoneNumber="(877) 523-4554" />,
    // Pass midi-specific props to WaitingListSection
    () => (
      <WaitingListSection
        form_name="midi"
        form_id="midi-form"
        form_source="midi"
        page_type="midi_landing"
        form_title="Midi"
        page_lead_source="Midi_long"
      />
    ),
    MembershipDetailsSection,
    () => <NextStepSection phoneNumber="(877) 523-4554" />,
    () => <FaqSection phoneNumber="(877) 523-4554" />,
    Footer,
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      {/* site header, usually contains navigation */}
      <Header phone="(877) 523-4554" phoneHref="tel:18775234554" />

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

export default Midi;