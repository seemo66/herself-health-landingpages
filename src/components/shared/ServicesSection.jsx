// ServicesSection Component (shared)
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSection({ showMedicareCoverageCopy = false }) {
  return (
    <section
      className="m-auto flex flex-col items-center gap-[40px] bg-white px-[30px] pt-[50px] py-[40px] 
                 min-[1024px]:flex-row min-[1024px]:items-center min-[1024px]:justify-center min-[1024px]:gap-[54px] min-[1024px]:px-[80px] min-[1024px]:py-[90px] xl:px-[155px]"
    >
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] w-full min-[1024px]:aspect-auto min-[1024px]:w-[50%]">
        <source
          srcSet="/images/landingpage/shared/services-desktop.png"
          media="(min-width: 1024px)"
        />
        <img
          src="/images/landingpage/shared/services-mobile.png"
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover lg:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:max-w-[605px]">
        <h2 className="mb-[16px] font-reckless text-[40px] leading-[100%] text-pink lg:text-[56px]">
          Care that's centered on your concerns, your goals, and your life.
        </h2>

        <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-black">
          You've spent years taking care of others. Now it's your turn to have care that truly
          focuses on you.
        </p>

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-black">
          At Herself Health, we take the time to understand what's going on, not just medically,
          but in your day-to-day life, so your care actually makes sense for you. That means no
          rushed visits, no unanswered questions, and no feeling like you're on your own trying to
          connect the dots.
        </p>

        {/* Service highlights */}
        <ul className="mb-[25px] space-y-4 pl-0 font-untitled text-[18px] leading-6 text-[#6A0058]">
          {[
            { bold: 'More time at every visit', detail: 'So you never feel rushed or dismissed' },
            { bold: 'A clear, personalized plan', detail: 'So you understand what\'s happening and what comes next' },
            { bold: 'Ongoing support between visits', detail: 'So you\'re not left figuring things out alone' },
            { bold: 'Coordination with your specialists', detail: 'So everything works together - not in pieces' },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <img
                src="/images/landingpage/shared/checkmark-pink.svg"
                alt=""
                aria-hidden="true"
                className="w-5 h-5 mt-1"
              />
              <span>
                <strong>{item.bold}</strong>
                <br />
                {item.detail}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-reckless not-italic font-normal text-[30px] leading-[33px] text-pink">
          Because feeling confident in your care shouldn't be complicated
        </p>

        {showMedicareCoverageCopy && (
          <>
            <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-black">
              <strong>Original Medicare (Parts A &amp; B) welcome.</strong>
            </p>

            <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-black">
              We'll confirm coverage in minutes.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
