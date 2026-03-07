// MembershipSection Component
// Highlights membership stats, plan benefits, and a call-to-action button.

export default function MembershipSection({ bottomPaddingClass = 'md:pb-[300px]' }) {
  const stats = [
    {
      icon: 'brain-icon.png',
      alt: 'Brain icon representing patient wellbeing',
      value: '10,000+',
      label: 'Women Served',
    },
    {
      icon: 'female-doctor-icon.png',
      alt: 'Doctor icon representing providers',
      value: '20+',
      label: 'Expert Providers',
    },
    {
      icon: 'star-icon.png',
      alt: 'Star icon representing reviews',
      value: '4.9/5',
      label: 'Stars on Google',
    },
    {
      icon: 'doctor-office-icon.png',
      alt: 'Clinic icon representing office locations',
      value: '5',
      label: 'Convenient Locations',
    },
  ];

  return (
    <section className={`flex flex-col bg-tan px-[30px] py-[60px] md:py-[72px] ${bottomPaddingClass} lg:flex-row items-center`}>
      {/* Stats Grid */}
      <div className="mb-[47px] grid grid-cols-2 gap-16 px-[30px] md:gap-[100px] lg:mx-auto lg:mb-0 lg:w-[50%] lg:max-w-[550px] lg:place-items-center lg:gap-8 lg:gap-x-0 lg:px-0 lg:text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex w-full flex-col items-center gap-[5px] text-center">
            <div className="mx-auto flex h-[89px] w-[89px] items-center justify-center rounded-full bg-dusty-indego lg:h-[116px] lg:w-[116px]">
              <img
                src={`/images/landingpage/shared/${stat.icon}`}
                alt={stat.alt}
                className="h-auto w-[46px] lg:w-[60px]"
              />
            </div>
            <h4 className="font-untitled text-[26px] font-bold text-dusty-indego lg:text-[41px]">
              {stat.value}
            </h4>
            <p className="font-untitled text-[16px] font-bold leading-5 text-black lg:max-w-full lg:text-[20px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Membership Content */}
      <div className="mx-auto lg:w-[50%] lg:max-w-[669px]">
        <h2
          className="mb-[16px] font-reckless text-[40px] leading-[45px] text-pink 
                     md:mb-[20px] md:text-[60px] md:leading-[70px]"
        >
          What Makes Herself Health Different
        </h2>

        <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-black md:mb-[18px] md:text-[20px]">
          You’ve spent a lifetime caring for others—now it’s time to focus on you. At Herself
          Health, we care for women 50+ with <strong>longer visits, real listening</strong>, and a
          plan built around your goals.
        </p>

        <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-black md:mb-[18px] md:text-[20px]">
          We’ll coordinate with your specialists, stay on top of screenings, and help you feel
          confident about what comes next.
        </p>

        <p className="mb-[16px] font-untitled text-[18px] font-bold leading-6 text-black md:mb-[18px] md:text-[20px]">
          Because your best self deserves the best care.
        </p>
      </div>
    </section>
  );
}
