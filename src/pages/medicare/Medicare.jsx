import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import HeroSection from '../../components/shared/HeroSection';
import HeroHighlightsBar from '../../components/shared/HeroHighlightsBar';
import ServicesSection from '../../components/shared/ServicesSection';
import MembershipSection from '../../components/shared/MembershipSection';
import WaitingListSection from '../../components/medicare/WaitingListSection';

function MedicareServicesSection() {
  return <ServicesSection showMedicareCoverageCopy />;
}

function MedicareMembershipSection() {
  return <MembershipSection bottomPaddingClass="md:pb-[160px]" />;
}

function Medicare() {
  const sections = [
    HeroSection,
    HeroHighlightsBar,
    MedicareServicesSection,
    MedicareMembershipSection,
    WaitingListSection,
  ];

  const highlightsSectionIndex = sections.findIndex((Section) => Section === HeroHighlightsBar);

  return (
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      <Header phone="877-487-4554" phoneHref="tel:18774874554" />

      <main className="max-w-[1728px] mx-auto" role="main">
        {sections.map((Section, index) => (
          <div key={index} className={index === highlightsSectionIndex + 1 ? 'lg:pt-[70px]' : ''}>
            <Section />
          </div>
        ))}
      </main>

      <Footer
        topPadding
        topPaddingClass="md:pt-[170px]"
        mobilePaddingClass="pt-[45px] pb-[10px]"
      />
    </div>
  );
}

export default Medicare;