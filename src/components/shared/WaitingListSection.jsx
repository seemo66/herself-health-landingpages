// WaitingListSection component
// Displays a hero image, testimonial, and a form for users to join the waitlist
import FormGuideSection from './FormGuideSection';
import WaitingListForm from './WaitingListForm';

export default function WaitingListSection({ formConfig, FormComponent = WaitingListForm }) {
  return (
    <section className="bg-white">
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
                     md:max-w-[822px] lg:left-[146px] md:border-[2px] bg-white border-pink rounded-[10px] md:px-[83px] md:py-[61px]"
        >
          {/* Testimonial block */}
          <div className="mb-[35px] lg:mb-[40px] md:text-center md:hidden">
            <img
              src="/images/landingpage/shared/quotations-icon.png"
              alt="Quotation mark icon"
              className="block w-[50px] h-full mb-[15px] md:mx-auto"
            />
            <blockquote className="font-untitled font-bold italic text-[18px] md:text-[20px] text-pink leading-6 mb-[16px]">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
            <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[16px] md:text-[20px]">
              – Herself Health Patient.
            </p>
          </div>
          {/* Headline */}
          <h2
            className="font-reckless font-medium text-[40px] text-pink mb-[35px] 
                          md:text-[50px] leading-[45px]"
          >
            Schedule Your 90-Minute Welcome Visit
          </h2>

          <h3 className="font-untitled text-[18px] text-black leading-6 mb-[30px] lg:text-[20px] ">
            Want to connect online instead? Fill out the form below and we’ll be in touch promptly
            to help you get started.
          </h3>
          {/* Form box */}
          <div>
            {/* Embedded form */}
            <FormComponent {...formConfig} />
            <FormGuideSection className="block md:hidden" />
          </div>

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
    </section>
  );
}
