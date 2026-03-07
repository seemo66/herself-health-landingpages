// hero section component

// displays a responsive hero image with text overlay and call-to-action button
export default function HeroSection() {
  return (
    // main container with background color
    <div className="relative bg-tan">
      {/* hero image container */}
      <div className="relative max-h-[638px] w-full">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet="/images/landingpage/member/hero-desktop.webp"
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src="/images/landingpage/member/hero-mobile.webp"
            alt="A woman in workout clothes smiling, with a water bottle in hand."
            className="block w-full object-cover md:min-h-[525px]"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div className="relative z-10 px-[30px] py-[35px] pb-[48px] md:absolute md:inset-0 md:flex md:items-center md:justify-start md:p-12 lg:px-[100px]">
        <div className="flex flex-col gap-4 md:w-[55%] lg:w-[50%] xl:w-[50%] 2xl:w-[48%]">
          {/* main headline */}
          <h1 className="title-font md:text-[35px] md:leading-[45px] 2xl:text-[66px] 2xl:leading-[72px]">
            A Primary Care Membership Designed For Women 50+
          </h1>

          {/* subheadline */}
          <h2 className="subtitle-font md:text-[20px]!">
            Herself Health is comprehensive primary care for women 50+, designed to connect the dots
            across hormones, sleep, mood, energy, heart health, and bone health. We focus on
            prevention, longer visits, and coordinated care with your broader care team—so you can
            move forward with clarity and confidence.
          </h2>

          {/* call-to-action button */}
          <button
            className="button-font mt-4 h-[67px] w-full rounded-lg bg-purple shadow-lg transition-colors duration-300 hover:bg-purple-dark md:w-[355px]"
            onClick={() => {
              // scroll to guide section smoothly when button is clicked
              document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get the Free Guide
          </button>
        </div>
      </div>
    </div>
  );
}
