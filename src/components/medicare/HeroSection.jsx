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
          <source
            srcSet="/images/landingpage/medicare/new-hero-desktop.webp"
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src="/images/landingpage/medicare/new-hero-mobile.webp"
            alt="A woman happily smiling."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div
        className="relative pt-[25px] pb-0 px-[30px] lg:px-[100px] 
                      md:p-12 md:absolute md:inset-0 md:flex md:items-center md:justify-start z-10"
      >
        <div className="md:w-[55%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] md:max-w-7xl md:pr-8">
          {/* main headline */}
          <h1 className="font-reckless text-[40px] text-pink text-4xl leading-tight mb-3 md:text-2xl xl:text-5xl">
            Finally – primary care that listens.
          </h1>

          {/* subheadline */}
          <h2 className="font-untitled text-[24px] text-darkPink text-lg font-medium mb-4 xl:text-[30px] xl:leading-tight">
            Designed for women 50+. More time, more answers, and a care team that follows through.
          </h2>

          {/* Service highlights with checkmarks */}
          <ul className="mb-[25px] space-y-4 pl-0 font-untitled text-[18px] 2xl:text-[20px] font-medium leading-6 text-black">
            {[
              "90-minute Welcome Visit focused on prevention and what matters to you.",
              "We coordinate screenings, specialists, and follow-ups.",
              "Original Medicare (parts A & B) welcome (we’ll confirm coverage quickly)."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <img
                  src="/images/landingpage/shared/check-icon-black.png"
                  alt="" // decorative, so we leave empty alt
                  aria-hidden="true"
                  className="w-7 h-7"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* call-to-action button */}
          <button
            className="w-full md:w-[420px] h-auto bg-purple text-white font-untitled text-[20px] 
                       py-3 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300 mb-8"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Appointment & Get Guide
          </button>
        </div>
      </div>
    </div>
  );
}
