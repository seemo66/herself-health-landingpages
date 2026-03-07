// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSectionOne() {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] py-[37px] pb-0 lg:flex-row-reverse lg:items-center lg:justify-center lg:py-[90px] lg:pb-0 xl:px-[155px]">
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] lg:aspect-auto lg:max-h-full lg:w-1/2">
        <source
          srcSet="/images/landingpage/member/services1-desktop.webp"
          media="(min-width: 768px)"
        />
        <img
          src="/images/landingpage/member/services1-mobile.webp"
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover 2xl:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:w-1/2 xl:max-w-[605px]">
        <h2 className="title-font mb-4 lg:mb-[30px]">The Reality of Healthcare Today.</h2>

        <p className="mb-6 body-font md:mb-8">
          Many women in their 50s feel like their care is spread across disconnected visits, with
          too little time to address the full picture.
        </p>

        <p className="body-font">
          If you’ve ever felt rushed or unheard, you are not alone. When symptoms and risks are
          addressed together, it becomes much easier to understand what’s changing and what to do
          next.
        </p>
      </div>
    </section>
  );
}
