// hero section component

// displays a responsive hero image with text overlay and call-to-action button
export default function HeroSection() {
  return (
    // main container with background color
    <div className="relative bg-tan">
      {/* hero image container */}
      <div className="relative w-full">
        <picture>
          {/* desktop image source with media query */}
          <source srcSet="/images/landingpage/shared/new-hero-desktop.jpg" media="(min-width: 768px)" />
          {/* mobile image (default) */}
          <img
            src="/images/landingpage/shared/new-hero-mobile.jpg"
            alt="A woman happily smiling."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div
        className="relative pt-[45px] pb-[20px] px-[30px] lg:px-[100px] 
                      md:p-12 md:absolute md:inset-0 md:flex md:items-center md:justify-start z-10"
      >
        <div className="md:w-[55%] lg:w-[55%] xl:w-[50%] 2xl:w-[45%] md:max-w-7xl md:pr-8">
          {/* main headline */}
          <h1 className="font-reckless not-italic font-normal text-[40px] leading-[44px] text-pink mb-[17px] md:text-2xl xl:text-5xl 2xl:text-[62px] 2xl:leading-[68px]">
            Finally – primary care that listens.
          </h1>

          {/* subheadline */}
          <h2 className="font-untitled not-italic font-medium text-[24px] leading-[30px] text-darkPink mb-[21px] md:text-[20px] md:leading-[26px] lg:text-[22px] lg:leading-[28px] xl:text-[30px] xl:leading-[37px]">
            Care built for women in this stage of life, with more time, more answers, and a team
            that follows through.
          </h2>

          {/* Service highlights with checkmarks */}
          <ul className="mb-[30px] space-y-4 pl-0 font-untitled not-italic font-bold text-[18px] leading-[22px] text-darkPink md:text-[15px] md:leading-[19px] lg:text-[16px] lg:leading-[20px] xl:text-[21px] xl:leading-[26px]">
            {[
              'Longer visits and care built around your needs.',
              'Support for prevention, ongoing health concerns, and what comes next.',
              'Coverage questions? We can help guide you.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <img
                  src="/images/landingpage/shared/checkmark-pink.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-[19px] h-[14px]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* call-to-action button */}
          <button
            className="w-full md:w-auto h-[67px] bg-purple text-white font-untitled not-italic font-normal text-[22px] leading-[27px] text-center cursor-pointer md:text-[19px] md:leading-[24px] lg:text-[20px] lg:leading-[25px] xl:text-[22px] xl:leading-[27px]
                       px-[37px] rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300 mb-8"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
