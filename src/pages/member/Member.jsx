// main entry point for the app
// imports top-level layout and section components
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import HeroSection from '../../components/member/HeroSection';
import GuideSection from '../../components/member/GuideSection';
import ServicesSectionOne from '../../components/member/ServicesSectionOne';
import ServicesSectionTwo from '../../components/member/ServicesSectionTwo';
import WaitingListSection from '../../components/member/WaitingListSection';
import InPracticeSection from '../../components/member/InPracticeSection';

function Member() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    ServicesSectionOne, // services offered by the company
    ServicesSectionTwo, // services offered by the company
    GuideSection, // guide download section
    InPracticeSection,
    WaitingListSection, // waiting list or sign-up form
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      {/* site header, usually contains navigation */}
      <Header />

      {/* main content area, semantically marked as main */}
      <main className="mx-auto max-w-[1728px]" role="main">
        {sections.map((Section, index) => (
          // render each section in order
          <Section key={index} />
        ))}
      </main>

      <Footer topPadding topPaddingClass="md:pt-[250px]" />
    </div>
  );
}

export default Member;
