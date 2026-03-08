// WaitingListSection component
// Displays a hero image, testimonial, and a form for users to join the waitlist
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

        {/* Overlay container for form content */}
        <div
          id="waiting-list"
          className="w-full py-[34px] px-[30px] 
                     md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 
                     md:max-w-[822px] lg:left-[146px] md:border-[2px] bg-white border-pink rounded-[10px] md:px-[83px] md:py-[41px]"
        >
          {/* Headline */}
          <h2
            className="font-reckless font-medium text-[40px] text-pink mb-[35px] 
                          md:text-[50px] leading-[45px]"
          >
            Schedule Your Welcome Visit
          </h2>

          <h3 className="font-reckless not-italic font-normal text-[22px] leading-[24px] text-pink mb-[30px] lg:text-[30px] lg:leading-[33px]">
            More time, more answers, and a care team that follows through
          </h3>

          <p className="mb-[20px] md:mb-[46px] font-untitled not-italic font-normal text-[18px] leading-6 text-black">
            Fill out the form below to get our guide and take the next step toward becoming a
            patient. Our team will follow up to help you get started
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="md:flex-1">
              <p className="mb-[10px] font-untitled not-italic font-normal text-[18px] leading-6 text-black">
                Inside the guide:
              </p>

              <ul className="list-disc pl-6 font-untitled not-italic font-normal text-[18px] leading-6 text-black space-y-1">
                <li>Your first visit, explained</li>
                <li>Prep checklist + questions to ask</li>
                <li>Next steps that fit your needs</li>
              </ul>
            </div>

            <img
              src="/images/landingpage/shared/guide-brochure-cover.png"
              alt="Guide cover"
              className="mx-auto h-[168px] w-[235px] rounded-lg object-cover md:mx-0 md:shrink-0 md:relative md:-top-[30px] md:-left-[20px]"
            />
          </div>

          <div className="mb-[25px] md:mb-0">
            <img
              src="/images/landingpage/shared/quotations-icon.png"
              alt="Quotation mark icon"
              className="mb-[15px] h-[22px] w-[34px]"
            />
            <blockquote className="mb-[16px] font-untitled text-[18px] font-bold italic leading-6 text-pink">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
          </div>
          {/* Form box */}
          <div>
            {/* Embedded form */}
            <FormComponent {...formConfig} />
          </div>

          <p className="mt-[25px] font-untitled font-normal text-[14px] leading-[17px] text-black">
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
