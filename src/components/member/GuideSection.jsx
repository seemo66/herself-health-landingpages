export default function GuideSection() {
  return (
    // main container with background color
    <div className="relative bg-[#9A0180]">
      {/* hero image container */}
      <div className="relative max-h-[964px] w-full">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet="/images/landingpage/member/guide-bg-image-desktop.webp"
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src="/images/landingpage/member/guide-bg-image-mobile.webp"
            alt="A woman in workout clothes smiling, with a water bottle in hand."
            className="block w-full object-cover md:min-h-[525px]"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div className="relative z-10 px-[30px] py-[35px] pb-[48px] md:absolute md:inset-0 md:flex md:items-center md:justify-start md:p-12 lg:px-[100px]">
        <div className="flex flex-col gap-4 md:w-[57%] md:min-w-[700px] md:gap-0 md:rounded-lg md:bg-[#9A0180] md:px-14 md:py-10">
          {/* main headline */}
          <h2 className="title-font !text-white md:mb-8">
            The Comprehensive Women's Health Roadmap.
          </h2>
          {/* main descriptive paragraphs */}
          <p className="body-font !text-white md:mb-8 md:hidden lg:block lg:!text-[21px]">
            We have created a guide to help you advocate for the care you need.
          </p>

          <p className="body-font !text-white md:mb-8 md:hidden lg:!text-[21px] xl:block">
            Inside, you will discover:
          </p>

          <ul className="body-font list- ml-8 list-disc !text-white md:hidden lg:!text-[21px] xl:block">
            <li className="mb-3">
              The "Invisible" Gaps: Why standard screenings often miss early signs of heart disease
              and bone loss.
            </li>
            <li className="mb-3">
              The Rational Choice: The data behind why longer visits and advanced diagnostics (like
              DEXA scans) are critical right now.
            </li>
            <li>
              The Checklist: 3 questions to ask your current provider to see if you are protected.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-end md:gap-4 xl:gap-10">
            <img
              src="/images/landingpage/member/brochure-cover.webp"
              alt="Brochure cover titled 'The Herself Health Guide to Midlife Care'."
              className="-mt-6 h-auto w-[227px] md:mt-0 lg:w-[320px]"
            />

            {/* call-to-action button */}
            <button
              className="button-font flex h-[67px] w-full items-center justify-center rounded-lg bg-white px-4 text-center !text-[#9A0180] shadow-lg transition-colors duration-300 hover:bg-gray-200 lg:max-w-[330px]"
              onClick={() => {
                // scroll to guide section smoothly when button is clicked
                document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download your guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
