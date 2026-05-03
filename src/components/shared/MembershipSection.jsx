// MembershipSection Component
// Highlights membership stats, plan benefits, and a call-to-action button.

export default function MembershipSection({ bottomPaddingClass = '' }) {
  return (
    <section className={`relative flex flex-col bg-tan px-[30px] py-[60px] pb-[160px] md:py-[72px] md:pb-[172px] ${bottomPaddingClass} items-center`}>
      {/* Membership Content */}
      <div className="mx-auto w-full max-w-[857px]">
        <h2
          className="mb-[35px] font-reckless text-[40px] leading-[45px] text-pink 
                     md:mb-[35px] md:text-[60px] md:leading-[70px] lg:text-center"
        >
          Support for the health concerns that matter now
        </h2>

        <ul className="mb-[16px] grid grid-cols-1 gap-x-8 gap-y-4 pl-0 font-untitled text-[20px] font-bold leading-6 text-[#6A0058] md:mx-auto md:w-fit md:grid-cols-2">
          {[
            'Sleep, mood, and energy changes',
            'Ongoing condition management',
            'Prevention and screenings',
            'Weight and thyroid concerns',
            'Heart, bone, and metabolic health',
            'Managing chronic and age-related conditions',
          ].map((item, idx) => (
            <li key={idx} className="flex space-x-3">
              <img
                src="/images/landingpage/shared/checkmark-pink.svg"
                alt=""
                aria-hidden="true"
                className="w-5 h-5"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Medicare badge straddling this section and the next */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <img
          src="/images/landingpage/shared/medicare-badge.png"
          alt="Medicare and Medicare Advantage Plans Accepted"
          className="w-[200px] h-auto md:w-[245px]"
        />
      </div>
    </section>
  );
}
