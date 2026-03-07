// MembershipSection Component
// Highlights membership stats, plan benefits, and a call-to-action button.

export default function MembershipSection() {
  const stats = [
    {
      icon: 'hand-heart-icon.png',
      alt: 'Hand holding a heart icon',
      title: 'Support',
      copy: 'Our patients tell us they finally feel listened to, supported, and understood.',
    },
    {
      icon: 'female-icon.png',
      alt: 'Outline of a female icon',
      title: '10,000+',
      copy: 'Over 10,000 women across Minnesota rely on Herself Health for personalized primary care.',
    },
    {
      icon: 'cross-icon.png',
      alt: 'Health care cross icon',
      title: '97%',
      copy: 'Ninety-seven percent of women tell us they are satisfied with their care.',
    },
  ];

  return (
    <section className="bg-[#F4EADB] px-[30px] py-[60px] lg:py-[90px]">
      <h2 className="font-reckless text-[40px] leading-tight lg:text-[50px] text-pink mb-7 lg:text-center lg:mb-12">
        Women tell us our care feels different
      </h2>
      {/* Stats Grid */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-12 max-w-[1200px] m-auto">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex w-full flex-col gap-1 mb-6 lg:mb-0 lg:items-center lg:text-center lg:w-1/3"
          >
            <div className="flex h-[89px] w-[89px] items-center justify-center rounded-full bg-pink lg:h-[116px] lg:w-[116px]">
              <img
                src={`/images/landingpage/membership/${stat.icon}`}
                alt={stat.alt}
                className="h-auto w-[46px] lg:w-[60px]"
              />
            </div>
            <h4 className="font-bold text-[26px] text-darkPink lg:text-[41px]">{stat.title}</h4>
            <p className="text-[16px] font-bold leading-5 text-darkPink lg:max-w-full lg:font-medium lg:text-[21px] lg:leading-tight">
              {stat.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
