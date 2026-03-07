// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSectionTwo() {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] py-[37px] lg:flex-row lg:items-center lg:justify-center lg:py-[90px] lg:pt-12 xl:px-[155px]">
      {/* Responsive service image */}
      <picture className="block lg:aspect-auto lg:max-h-full lg:w-1/2">
        <source
          srcSet="/images/landingpage/member/services2-desktop.webp"
          media="(min-width: 768px)"
        />
        <img
          src="/images/landingpage/member/services2-mobile.webp"
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover 2xl:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:w-1/2 xl:max-w-[605px]">
        <h2 className="title-font mb-4 lg:mb-[30px]">The Difference: Time & Training.</h2>
        <p className="mb-6 body-font md:mb-8">
          We believe you can’t treat the whole person in 15 minutes. That is why our first visits
          are 60 minutes long. We give you the time to share your full health history, symptoms and
          goals, and to finally be heard.
        </p>
        <p className="mb-6 body-font md:mb-8">
          You deserve a team trained in women’s health and committed to coordinated care. We connect
          the dots across menopause, mental health, heart health, and healthy aging—then help you
          build a clear plan with your broader care team.
        </p>
        <p id="guide" className="body-font !font-bold italic !text-[#9A0180]">
          That is why we built Herself Health Membership, care designed for women, by women,
          centered on what women want.
        </p>
      </div>
    </section>
  );
}
