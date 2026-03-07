// hero section component

// displays a responsive hero image with text overlay and call-to-action button
export default function HeroSection() {
  return (
    // main container with background color
    <div className="relative pb-8 bg-tan">
      {/* hero image container */}
      <div className="relative w-full max-h-[929px]">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet="/images/landingpage/membership/hero-desktop.webp"
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src="/images/landingpage/membership/hero-mobile.webp"
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
        <div className="md:w-[45%] lg:w-[45%] xl:w-[45%] md:max-w-7xl">
          {/* main headline */}
          <h1 className="font-reckless text-[40px] text-pink text-4xl leading-tight mb-3 md:text-[50px] 2xl:text-[60px]">
            A Primary Care Membership Designed For Women 50+
          </h1>
          {/* subheadline */}
          <h2 className="text-[24px] text-darkPink text-lg font-medium mb-6 xl:text-[30px] xl:leading-tight">
            Is your healthcare keeping up with you? Standard clinics often miss the full picture of women's health after 50
          </h2>
          {/* main descriptive paragraphs */}
          <p className="font-untitled text-[#000] text-[18px] mb-6 leading-[22px] md:leading-[26px] md:text-[21px] md:hidden 2xl:block">
            Too often, healthcare does not give women the high-quality, female-focused care they
            deserve. Many women are rushed through appointments, have symptoms brushed aside, or
            leave without clear answers. Your health changes during midlife, and your healthcare
            should change to fit your needs.
          </p>

          <p className="font-untitled text-[#000] text-[18px] leading-[22px] mb-7 md:text-[21px] md:leading-[26px] md:hidden xl:block">
            <span className="md:font-bold">The Herself Health Membership is different. </span>
            You get longer visits, providers trained in women’s health, and a care team that
            connects hormones, sleep, mood, bone health, heart health, and more into one plan that
            fits your life.
          </p>
          {/* call-to-action button */}
          <button
            className="mb-7 w-full md:w-[312px] h-auto bg-purple text-white font-untitled text-[22px] 
                       py-4 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
            onClick={() => {
              // scroll to call now section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Call a Membership Advisor
          </button>
          <p className="font-untitled italic text-[#000] text-[14px] md:text-[21px] leading-[17px] md:leading-[23px] md:hidden 2xl:block">
            Start your care with a team that understands what matters most to women in their
            healthcare.
          </p>
        </div>
      </div>
    </div>
  );
}
