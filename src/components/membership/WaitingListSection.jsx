// WaitingListSection component
// Displays a hero image, testimonial, and a form for users to join the waitlist
import WaitingListForm from './WaitingListForm';

export default function WaitingListSection() {
  return (
    <section className="bg-white pt-[140px]">
      {/* Hero wrapper with relative positioning for overlay form */}
      <div className="relative">
        {/* Hero image */}
        <div className="w-full">
          <picture>
            {/* Desktop image */}
            <source
              srcSet="/images/landingpage/shared/waitlist-desktop.webp"
              media="(min-width: 768px)"
            />
            {/* Mobile fallback */}
            <img
              src="/images/landingpage/shared/waitlist-mobile.webp"
              alt="A woman wearing glasses stands in front of a closed door, looking directly at the camera"
              className="block w-full md:min-h-[694px] object-cover md:h-[877px]"
            />
          </picture>
        </div>

        {/* Overlay container for testimonial + form */}
        <div
          id="waiting-list"
          className="w-full py-[34px] px-[30px] 
                     md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 
                     lg:px-0 md:px-[30px] md:py-0 md:max-w-[822px] lg:left-[146px]"
        >
          {/* Testimonial block */}
          <div className="mb-[35px] lg:mb-[40px] md:text-center" id="call-now">
            <img
              src="/images/landingpage/shared/quotations-icon.png"
              alt="Quotation mark icon"
              className="block w-[50px] h-full mb-[15px] md:mx-auto"
            />
            <blockquote className="font-untitled font-bold italic text-[18px] md:text-[20px] text-pink leading-6 mb-[16px]">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
            <p className="font-untitled font-normal text-[18px] text-[#1D2534] leading-6 mb-[16px] md:text-[20px]">
              – Jayne H.
            </p>
          </div>

          {/* Headline */}
          <h2 className="font-reckless font-medium text-[40px] text-pink mb-[35px] md:hidden leading-[45px]">
            Speak with a Membership Advisor
          </h2>
          {/* Description */}
          <p className="font-untitled font-normal text-[18px] text-[#1D2534] leading-6 mb-[25px] md:hidden">
            Fill out the form below and our team will reach out to answer your questions and discuss
            if membership is right for you.
          </p>

          {/* Form box */}
          <div className="md:border-[2px] bg-white border-pink rounded-[10px] md:px-[83px] md:py-[61px]">
            {/* Headline */}
            <h2
              className="hidden font-reckless font-medium text-pink mb-[35px] 
                          md:block text-[50px] leading-[45px]"
            >
              Speak with a Membership Advisor
            </h2>
            {/* Description */}
            <p className="hidden md:block font-untitled font-normal text-[18px] text-[#1D2534] leading-6 mb-[25px] lg:text-[20px]">
              Fill out the form below and our team will reach out to answer your questions and
              discuss if membership is right for you.
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
        </div>
      </div>
    </section>
  );
}
