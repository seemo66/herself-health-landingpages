// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSection({ phoneNumber = '888-290-1209' }) {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] pt-[50px] py-[40px] xl:flex-row m-w-[1400px] lg:gap-16 lg:px-[90px] lg:justify-center xl:py-[90px]">
      {/* Responsive service image */}
      <picture className="block xl:w-1/2">
        <source
          srcSet="/images/landingpage/membership/next-steps-desktop.webp"
          media="(min-width: 768px)"
        />
        <img
          src="/images/landingpage/membership/next-steps-mobile.webp"
          alt="A lady, leaning on a wall behind her, standing."
          className=" w-full rounded-[10px] object-cover max-h-[950px] lg:aspect-[645/566]"
        />
      </picture>

      {/* Text content */}
      <div className="xl:w-1/2">
        <h2 className="mb-4 xl:mb-8 font-reckless text-[40px] leading-tight text-pink 2xl:text-[60px]">
          Take the next step toward care that is built around you
        </h2>

        <p className="mb-5 text-[18px] leading-tight text-[#1D2534] xl:text-[21px] lg:mb-7">
          The Herself Health Membership gives you longer visits, same-day access, 24/7 support,
          menopause and midlife care, personalized prevention, and coordinated guidance across every
          part of your health. If you want care that supports you and fits your life, we are ready
          to help.
        </p>

        {/* call-to-action button */}
        <button
          className="mb-7 w-full md:w-[385px] h-auto bg-purple text-white font-untitled text-[22px] 
                       py-4 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
          onClick={() => {
            // scroll to waiting list section smoothly when button is clicked
            document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Become a Member
        </button>

        <p className="text-[18px] leading-tight text-[#1D2534] xl:text-[21px]">
          Have questions before joining? Call us at {phoneNumber} and our team will help you decide
          if the membership is a good fit.
        </p>
      </div>
    </section>
  );
}
