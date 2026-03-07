// ServicesSection Component (shared)
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSection() {
  return (
    <section
      className="m-auto flex flex-col items-center gap-[40px] bg-white px-[30px] pt-[50px] py-[40px] 
                 xl:flex-row xl:items-center xl:justify-center xl:gap-[54px] xl:px-[155px] xl:py-[90px]"
    >
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] w-full md:aspect-auto md:w-[50%]">
        <source
          srcSet="/images/landingpage/shared/services-desktop.webp"
          media="(min-width: 768px)"
        />
        <img
          src="/images/landingpage/shared/services-mobile.webp"
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover lg:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:max-w-[605px]">
        <h2 className="mb-[16px] font-reckless text-[40px] leading-[100%] text-pink lg:text-[60px]">
          Care Built Around You
        </h2>

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-black lg:text-[20px]">
          <strong>Comprehensive primary care for women 50+.</strong> We create personalized care
          plans to support your health goals—starting with a 90-minute Welcome Visit.
        </p>

        {/* Service highlights with checkmarks */}
        <ul className="mb-[25px] space-y-4 pl-0 font-untitled text-[20px] font-bold leading-6 text-[#6A0058]">
          {[
            'Longer visits with your provider',
            'Same-day or next-day appointments',
            'Referrals + care coordination with specialists',
            'Preventive screenings',
            'Chronic condition management',
            'Mental health support',
            'Care team available by phone and online',
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

        <hr className="my-6 border-t border-black" />

        <p className="mb-[25px] font-untitled font-bold text-[18px] leading-6 text-black lg:text-[20px]">
          Common concerns we help with:
        </p>

        {/* List of key healthcare services */}
        <ul className="list-disc pl-7 font-untitled text-[20px] font-normal leading-6 text-black lg:columns-2 lg:space-y-1">
          <li>Arthritis</li>
          <li>Behavioral Health</li>
          <li>Diabetes</li>
          <li>Heart Health</li>
          <li>Osteoporosis</li>
          <li>Post Menopause</li>
          <li>Thyroid Health</li>
          <li>Weight Management</li>
        </ul>
      </div>
    </section>
  );
}
