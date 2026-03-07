// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSection() {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] pt-[50px] py-[40px] xl:flex-row-reverse m-w-[1400px] lg:gap-16 lg:px-[90px] md:pt-[200px] xl:pb-[90px]">
      {/* Responsive service image */}
      <picture className="block xl:w-1/2">
        <source
          srcSet="/images/landingpage/membership/membership-details-desktop.webp"
          media="(min-width: 768px)"
        />
        <img
          src="/images/landingpage/membership/membership-details-mobile.webp"
          alt="A lady, at home, sitting at a desk, on a laptop."
          className="h-full w-full rounded-[10px] object-cover max-h-[950px]"
        />
      </picture>

      {/* Text content */}
      <div className="xl:w-1/2">
        <h2 className="mb-4 xl:mb-8 font-reckless text-[40px] leading-tight text-pink xl:text-[60px]">
          Important Details About Your Membership
        </h2>

        <p className="mb-5 font-untitled text-[18px] font-medium leading-6 text-[#1D2534] xl:text-[25px]">
          How your membership works with insurance
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-5 font-untitled text-[18px] leading-6 text-[#1D2534] xl:text-[21px] xl:mb-10">
          <li>You keep your current insurance.</li>
          <li>We bill your insurance for covered medical services, just like we do today.</li>
          <li>Many HSA and FSA plans may be used for membership fees.</li>
          <li>Standard copays and deductibles still apply.</li>
          <li>
            Your membership supports services that most plans do not cover for women under 65,
            including longer visits, personalized screening and prevention plans, and coordinated
            support.
          </li>
        </ul>

        <p className="mb-5 font-untitled text-[18px] font-medium leading-6 text-[#1D2534] xl:text-[25px]">
          If you choose the monthly plan
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-5 font-untitled text-[18px] leading-6 text-[#1D2534] xl:text-[21px] xl:mb-10">
          <li>You can cancel in the first 30 days of your first year if it's not the right fit.</li>
          <li>
            If you complete a screening during that time, we will bill your insurance if it is
            covered or charge the standard cash price.
          </li>
          <li>After the first 30 days, the membership continues for the full year.</li>
        </ul>

        <p className="mb-5 font-untitled text-[18px] font-medium leading-6 text-[#1D2534] xl:text-[25px]">
          If you choose the annual plan
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-5 font-untitled text-[18px] leading-6 text-[#1D2534] xl:text-[21px] xl:mb-10">
          <li>Annual memberships are nonrefundable.</li>
          <li>This option offers the lowest total price for the full year of care. </li>
        </ul>

        <p className="mb-5 font-untitled text-[18px] font-medium leading-6 text-[#1D2534] xl:text-[25px]">
          Renewal
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-5 font-untitled text-[18px] leading-6 text-[#1D2534] xl:text-[21px] xl:mb-0">
          <li>Membership renews once a year.</li>
          <li>We will always send a reminder at least 30 days before your renewal date.</li>
        </ul>
      </div>
    </section>
  );
}
