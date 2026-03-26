export default function ServicesSection() {
  

  return (
    <section className="m-auto flex flex-col items-center gap-[40px] bg-[#FCF7FB] px-[30px] pt-[50px] py-[40px] lg:py-28">
      <div className="lg:flex lg:flex-row-reverse lg:gap-14 lg:max-w-[1400px]">
        {/* Responsive service image */}
        <picture className="block w-full mb-10 lg:w-1/2">
          <source
            srcSet="/images/landingpage/membership/offers-section-desktop.webp"
            media="(min-width: 768px)"
          />
          <img
            src="/images/landingpage/membership/offers-section-mobile.png"
            alt="A group of 3 ladies smiling and looking at the camera."
            className="h-full w-full rounded-[10px] object-cover"
          />
        </picture>

        {/* Text content */}
        <div className="lg:w-1/2">
          <h2 className="mb-4 font-reckless text-[40px] leading-tight text-pink lg:text-[60px] lg:mb-8">
            Who is Eligible
          </h2>

          <p className="mb-[25px] font-untitled text-[18px] font-medium leading-tight text-[#1D2534] lg:text-[25px]">
            The Herself Health Membership is designed for women who:
          </p>

          <ul className="mb-[25px] space-y-1 pl-0 font-untitled text-[18px] lg:text-[20px] leading-6 text-[#1D2534] list-disc ml-7">
            <li>Are 50+</li>
            <li>
              Have health insurance through an employer, spouse, or individual plan that is in
              network with Herself Health
            </li>
            <li>Are not on a Medicare or Medicare Advantage plan</li>
            <li>
              Want a primary care partner who understands the realities of women’s midlife health
            </li>
          </ul>

          <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:text-[20px]">
            If you are 50+ and covered by Medicare or a Medicare Advantage plan we accept, you can
            receive care at Herself Health without a membership fee.
          </p>

          <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:text-[20px]">
            If you are already a Herself Health patient, our team can explain how the membership
            applies to your care.
          </p>

          <p className="mb-[25px] font-untitled text-[18px] font-medium leading-tight text-[#1D2534] lg:text-[25px]">
            Check with your insurance to confirm Herself Health is in your network.
          </p>
        </div>
      </div>

      {/* <div>
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:flex-wrap lg:gap-6 xl:px-16">
          <div className="w-full flex flex-col gap-4 border border-black rounded-lg bg-pink text-white px-[21px] py-[37px] lg:flex-1 lg:justify-center lg:gap-8 lg:px-[60px]">
            <h2 className="font-reckless text-[40px] leading-tight lg:text-[60px]">
              Membership Options
            </h2>
            <h4 className="font-bold text-[24px] lg:font-medium lg:text-[30px]">
              Select the membership payment option that works best for you
            </h4>
            <p className="font-medium text-[18px] lg:text-[21px]">
              <em>All providers are menopause certified</em>
            </p>
          </div>

          {memberships.map((membership) => (
            <MembershipCard key={membership.id} membership={membership} />
          ))}
        </div>

        <div className="flex flex-col gap-6 mb-12 lg:items-center">
          <button
            className="mx-auto w-[330px] md:w-[385px] lg:w-[594px]
               bg-purple text-white font-untitled text-[22px]
               py-4 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors"
            onClick={() => {
              document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule an Appointment
          </button>

          <p className="mb-[25px] font-untitled text-[18px] leading-6 text-[#1D2534] lg:text-[20px] text-left lg:text-center">
            Submit the form — a specialist will call to schedule your first visit and help you
            choose monthly vs annual.
          </p>
        </div>

        <div className="lg:flex lg:gap-6 lg:mt-20 lg:max-w-[1400px] lg:m-auto">
          <div className="lg:w-1/3">
            <h3 className="mb-4 font-medium text-darkPink text-[28px] lg:text-[35px]">
              Your Membership Includes:
            </h3>
          </div>

          <div className="lg:w-2/3 lg:flex lg:gap-6">
            <ul className="list-disc pl-8 space-y-2 font-medium text-darkPink text-[20px] leading-[28px] lg:text-[23px]">
              <li>Longer visits</li>
              <li>Same-day and next-day visits</li>
              <li>24/7 access to a nurse or on-call provider</li>
              <li>Menopause and midlife support</li>
              <li>Preferred scheduling with specialty partners</li>
              <li>Help with sleep, mood, and energy</li>
            </ul>

            <ul className="list-disc pl-8 space-y-2 font-medium text-darkPink text-[20px] leading-[28px] lg:text-[23px]">
              <li>Mental health care</li>
              <li>Weight and metabolic support</li>
              <li>Care coordination</li>
              <li>Annual DEXA and body composition scan at no extra cost</li>
              <li>Annual cholesterol and glucose screening at no extra cost</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
}
