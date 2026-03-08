import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import HeroSection from '../../components/shared/HeroSection';
import HeroHighlightsBar from '../../components/shared/HeroHighlightsBar';
import GuideSection from '../../components/shared/GuideSection';
import ServicesSection from '../../components/shared/ServicesSection';
import InsuranceSection from '../../components/shared/InsuranceSection';
import MembershipSection from '../../components/shared/MembershipSection';
import WaitingListSection from '../../components/shared/WaitingListSection';

function SharedLandingPage({
  formConfig,
  excludeSections = [],
  phone = '(888) 290-1209',
  phoneHref = 'tel:18882901209',
  phoneSubtitle = '',
  phoneSubtitleClass,
  centerSubtitleOnMobile,
  mobileHeaderHeightClass,
  mobileTopOffsetClass = 'mt-[102px]',
}) {
  function FormSection() {
    return <WaitingListSection formConfig={{ ...formConfig, phone, phoneHref }} />;
  }

  const allSections = [
    { id: 'HeroSection', Component: HeroSection },
    { id: 'HeroHighlightsBar', Component: HeroHighlightsBar },
    { id: 'GuideSection', Component: GuideSection },
    { id: 'ServicesSection', Component: ServicesSection },
    { id: 'MembershipSection', Component: MembershipSection },
    { id: 'InsuranceSection', Component: InsuranceSection, props: { phone, phoneHref } },
    { id: 'FormSection', Component: FormSection },
  ].filter(({ id, Component }) => {
    const runtimeName = Component.name || Component.displayName;
    return !excludeSections.includes(id) && !excludeSections.includes(runtimeName);
  });

  const highlightsSectionIndex = allSections.findIndex(
    ({ Component }) => Component === HeroHighlightsBar
  );

  return (
    <div className={`mx-auto ${mobileTopOffsetClass} lg:mt-[78px]`}>
      <Header
        phone={phone}
        phoneHref={phoneHref}
        phoneSubtitle={phoneSubtitle}
        phoneSubtitleClass={phoneSubtitleClass}
        centerSubtitleOnMobile={centerSubtitleOnMobile}
        mobileHeaderHeightClass={mobileHeaderHeightClass}
      />

      <main className="max-w-[1728px] mx-auto" role="main">
        {allSections.map(({ Component, props = {} }, index) => (
          <div key={index} className={index === highlightsSectionIndex + 1 ? 'lg:pt-[70px]' : ''}>
            <Component {...props} />
          </div>
        ))}
      </main>

      <Footer
        topPadding
        topPaddingClass="md:pt-[225px]"
        mobilePaddingClass="pt-[45px] pb-[10px]"
      />
    </div>
  );
}

export default SharedLandingPage;
