// ServicesSection Component (shared)
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSection({ showMedicareCoverageCopy = false }) {
  return (
    <section
      className="m-auto flex flex-col items-center gap-[40px] bg-white px-[30px] pt-[50px] py-[40px] 
                 xl:flex-row xl:items-center xl:justify-center xl:gap-[54px] xl:px-[155px] xl:py-[90px]"
    >
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] w-full md:aspect-auto md:w-[50%]">
        <source
          srcSet="/images/landingpage/shared/services-rectangle-6.jpg"
          media="(min-width: 768px)"
        />
        <img
          src="/images/landingpage/shared/services-rectangle-6.jpg"
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover lg:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:max-w-[605px]">
        <h2 className="mb-[16px] font-reckless text-[40px] leading-[100%] text-pink lg:text-[56px]">
          Care Built Around You
        </h2>

        <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-black">
          You've spent a lifetime caring for others-now it's time to focus on you. At Herself
          Health, we care for women 50+ with <strong>longer visits, real listening</strong>, and a
          plan around your goals.
        </p>

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-black">
          We'll coordinate with your specialists, stay on top of screenings, and help you feel
          confident about what comes next.
        </p>

        <p className="mb-[25px] font-reckless not-italic font-normal text-[30px] leading-[33px] text-pink">
          Because your best self deserves the best care
        </p>

        {/* Service highlights with checkmarks */}
        <ul className="mb-[25px] space-y-4 pl-0 font-untitled text-[20px] font-bold leading-6 text-[#6A0058]">
          {[
            'More time with your provider',
            'Help with prevention, screenings, and ongoing care',
            'Real follow-through and coordination with specialists',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              <img
                src="/images/landingpage/shared/checkmark-pink.svg"
                alt="" // decorative, so we leave empty alt
                aria-hidden="true"
                className="w-5 h-5"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {showMedicareCoverageCopy && (
          <>
            <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-black">
              <strong>Original Medicare (Parts A &amp; B) welcome.</strong>
            </p>

            <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-black">
              We'll confirm coverage in minutes.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
