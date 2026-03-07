// main entry point for the app
// imports top-level layout and section components
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import HeroSection from '../../components/medicare/HeroSection';
import GuideSection from '../../components/shared/GuideSection';
import ServicesSection from '../../components/medicare/ServicesSection';
// import InsuranceSection from '../../components/shared/InsuranceSection';
import MembershipSection from '../../components/shared/MembershipSection';
// import FormGuideSectionDesktop from '../../components/shared/FormGuideSectionDesktop';
import WaitingListSection from '../../components/medicare/WaitingListSection';

function MedicareMembershipSection() {
  return <MembershipSection bottomPaddingClass="md:pb-[400px]" />;
}

function Medicare() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    GuideSection, // guide download section
    ServicesSection, // services offered by the company
    // InsuranceSection, // insurance information
    MedicareMembershipSection, // membership or subscription information
    // FormGuideSectionDesktop, // desktop version of the form guide section
    WaitingListSection, // waiting list or sign-up form
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      {/* site header, usually contains navigation */}
      <Header phone="877-487-4554" phoneHref="tel:18774874554" />

      {/* main content area, semantically marked as main */}
      <main className="max-w-[1728px] mx-auto" role="main">
        {sections.map((Section, index) => (
          // render each section in order
          <Section key={index} />
        ))}
      </main>

      {/* site footer, contains copyright, links, etc. */}
      <Footer topPadding topPaddingClass="md:pt-[375px]" />
    </div>
  );
}

export default Medicare;