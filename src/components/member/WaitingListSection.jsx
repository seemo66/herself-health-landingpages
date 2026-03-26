// WaitingListSection component
// Displays a hero image, testimonial, and a form for users to join the waitlist
import WaitingListForm from './WaitingListForm';

export default function WaitingListSection() {
  return (
    <section className="bg-white">
      {/* Hero wrapper with relative positioning for overlay form */}
      <div className="relative">
        {/* Hero image */}
        <div className="hidden w-full md:block">
          <picture>
            {/* Desktop image */}
            <source
              srcSet="/images/landingpage/member/waitlist-desktop.webp"
              media="(min-width: 768px)"
            />
            {/* Mobile fallback */}
            <img
              src="/images/landingpage/member/waitlist-desktop.webp"
              alt="A woman sitting at a desk looking at a laptop screen"
              className="block w-full object-cover md:h-[979px] md:min-h-[694px]"
            />
          </picture>
        </div>

        {/* Overlay container for testimonial + form */}
        <div
          id="waiting-list"
          className="w-full bg-[#8755F1]/10 px-[30px] py-[34px] md:absolute md:left-0 md:top-1/2 md:max-w-[822px] md:-translate-y-1/2 md:px-[30px] md:py-0 lg:left-[146px] lg:px-0"
        >
          {/* Headline */}
          <h2 className="mb-[25px] font-reckless text-[40px] font-medium leading-[45px] text-pink md:hidden">
            See what comprehensive care looks like.
          </h2>
          <h2 className="mb-[25px] font-reckless text-[40px] font-medium leading-[45px] text-pink md:hidden">
            Get the roadmap.
          </h2>
          {/* Description */}
            <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] md:hidden">
            Fill out the form below and someone from our team will get back to you in 24 hours.
          </p>

          {/* Form box */}
          <div className="rounded-[10px] border-pink bg-white md:border-[2px] md:px-[83px] md:py-[61px]">
            {/* Headline */}
            <h2 className="mb-[35px] hidden font-reckless text-[50px] font-medium leading-[55px] text-pink md:block 2xl:text-[60px] 2xl:leading-[66px]">
              See what comprehensive care looks like. <br />
              Get the roadmap.
            </h2>

            {/* Description */}
            <p className="md:leading-30px mb-[20px] hidden font-medium text-pink md:block md:text-[24px]">
              Because your best self deserves the best care
            </p>

            <p className="pb-[20px] bg-[#8755F1]/10 font-untitled text-[18px] font-normal leading-6 text-[#1D2534] md:bg-white">
              Start with our free guide to advocate for the care you need—and see how comprehensive
              primary care for women 50+ can support your next stage of health.
            </p>
            {/* Embedded form */}
            <WaitingListForm />
            <p className="font-untitled font-normal text-[18px] text-black leading-6 mt-[25px]">
              By submitting this form, you agree to our{' '}
              <a
                href="https://www.herself-health.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          {/* Testimonial block */}
          <div className="mt-[40px] hidden text-center md:block" id="call-now">
            {/* md and up (white) */}
            <img
              src="/images/landingpage/member/quotations-icon-white.png"
              alt="Quotation mark icon"
              className="mb-[15px] hidden h-full w-[50px] md:mx-auto md:block"
            />
            <blockquote className="mb-[16px] font-untitled text-[21px] font-bold italic leading-7 text-white md:px-16">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
            <p className="font-untitled text-[20px] text-white">– Jayne H.</p>
          </div>
        </div>
        {/* Mobile image AFTER form */}
        <div className="relative md:hidden">
          <div className="absolute left-8 top-8 w-[40%]">
            <img
              src="/images/landingpage/member/quotations-icon-white.png"
              alt="Quotation mark icon"
              className="mb-[15px] h-auto w-[50px]"
            />
            <blockquote className="mb-2 font-untitled text-[16px] font-medium leading-5 text-white">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
            <p className="font-untitled text-[16px] text-white">– Jayne H.</p>
          </div>
          <img
            src="/images/landingpage/member/waitlist-mobile.webp"
            alt="A woman sitting at a desk looking at a laptop screen"
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
