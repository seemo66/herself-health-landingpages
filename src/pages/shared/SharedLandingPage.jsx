import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import HeroSection from '../../components/shared/HeroSection';
import GuideSection from '../../components/shared/GuideSection';
import ServicesSection from '../../components/shared/ServicesSection';
import InsuranceSection from '../../components/shared/InsuranceSection';
import MembershipSection from '../../components/shared/MembershipSection';
import WaitingListSection from '../../components/shared/WaitingListSection';

function SharedLandingPage({ formConfig, excludeSections = [], phone = '(888) 290-1209', phoneHref = 'tel:18882901209', phoneSubtitle = '' }) {
  function FormSection() {
    return <WaitingListSection formConfig={{ ...formConfig, phone, phoneHref }} />;
  }

  const allSections = [
    { Component: HeroSection },
    { Component: GuideSection },
    { Component: ServicesSection },
    { Component: InsuranceSection, props: { phone, phoneHref } },
    { Component: MembershipSection },
    { Component: FormSection },
  ].filter(({ Component }) => !excludeSections.includes(Component.name || Component.displayName));

  return (
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      <Header phone={phone} phoneHref={phoneHref} phoneSubtitle={phoneSubtitle} />

      <main className="max-w-[1728px] mx-auto" role="main">
        {allSections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
        ))}
      </main>

      <Footer topPadding />
    </div>
  );
}

export default SharedLandingPage;
