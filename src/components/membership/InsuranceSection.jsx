// WaitingListSection Component
// Displays accepted insurance plans, fallback info, and contact details.

export default function WaitingListSection() {
  return (
    <section className="bg-pink">
      {/* Insurance Plans Banner */}
      <div className="mx-auto max-w-[1270px] px-[30px] pb-[62px] pt-[34px] md:pt-[62px] md:text-center">
        <h2
          className="mb-[35px] font-reckless text-[40px] leading-[45px] text-white 
                     md:mb-[50px] md:text-[50px] md:leading-[55px]"
        >
          We Accept Medicare and Many Medicare Advantage Plans, Including:
        </h2>
        <div className="flex flex-wrap items-center justify-start gap-10 md:justify-center lg:gap-14 lg:gap-x-20">
          <img
            src="/images/landingpage/shared/blue-cross-blue-shield-logo.svg"
            alt="Blue Cross Blue Shield insurance logo"
            className="h-[30px] w-auto"
          />
          <img
            src="/images/landingpage/shared/united-healthcare-logo.svg"
            alt="United Healthcare insurance logo"
            className="h-auto w-[130px]"
          />
          <img
            src="/images/landingpage/shared/allina-aetna-logo.svg"
            alt="Allina Aetna insurance logo"
            className="h-auto w-[324px]"
          />
          <img
            src="/images/landingpage/shared/ucare-logo.svg"
            alt="UCare insurance logo"
            className="h-auto w-[140px]"
          />
          <img
            src="/images/landingpage/shared/health-partners-logo.svg"
            alt="Health Partners insurance logo"
            className="h-auto w-[300px]"
          />
          <img
            src="/images/landingpage/shared/humana-logo.svg"
            alt="Humana insurance logo"
            className="h-auto w-[135px]"
          />
        </div>
      </div>

      {/* Coverage Fallback / Contact Section */}
      <div className="mx-auto max-w-[1728px] bg-darkPink px-[30px] py-[50px] text-white">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-3 font-reckless text-[40px] leading-tight  lg:mb-[30px] lg:text-[60px] lg:text-center">
            Don’t See Your Plan?
          </h2>

          <div className="flex flex-col lg:flex-row max-w-[1000px] lg:m-auto">
            <a href="tel:+18882901209" className="flex-shrink-0">
              <img
                src="/images/landingpage/shared/telephone-white.svg"
                alt="telephone icon"
                aria-hidden="true"
                className="h-auto w-[45px]"
              />
            </a>

            <p className="flex text-center items-center justify-start text-[26px] lg:text-[36px] font-bold lg:font-medium leading-tight mt-4 lg:mt-0">
              Call us at 888-290-1209 to confirm coverage - we’ll walk you through your options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
