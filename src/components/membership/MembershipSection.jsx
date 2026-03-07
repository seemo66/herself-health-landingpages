// MembershipSection Component
// Highlights membership stats, plan benefits, and a call-to-action button.

export default function MembershipSection() {
  const stats = [
    {
      icon: 'social-network-icon.png',
      alt: 'Social network icon',
      title:
        'We believe you can’t treat the whole person in 15 minutes. That is why our first visits are 60 minutes long',
      list: [
        'A care team that listens and helps you build a plan that works for you',
        'Same-day or next-day visits for urgent needs',
        '24/7 access to a nurse or on-call provider',
        'Longer visits with time to talk',
      ],
    },
    {
      icon: 'document-icon.png',
      alt: 'document page',
      title: 'Support for Menopause & Healthy Aging',
      list: [
        'Menopause and perimenopause care',
        'Help with hot flashes, sleep, mood, and energy',
        'Weight and metabolic health support',
        'Access to mental health services',
      ],
    },
    {
      icon: 'medication-icon.png',
      alt: 'medication bottle',
      title: 'Prevention designed for your long-term health',
      list: [
        'GYN care including Pap smears, pelvic exams, and annual visits',
        'Mammograms and DEXA scans onsite at select locations',
        'Heart health and early heart failure screening',
        'Cancer screening guidance',
      ],
    },
    {
      icon: 'ladies-icon.png',
      alt: 'ladies icon',
      title: 'Exclusive member benefits',
      list: [
        'Annual DEXA scan and body composition analysis at no extra cost',
        'Annual cholesterol and glucose screening at no extra cost',
        'Direct access to perimenopause support through Premier and Midi Health',
        'Coordinated care and preferred scheduling with specialty partners',
        'Weight management support, including lifestyle guidance and medications when appropriate',
        'Note: Weight loss medications may require additional cost if not medically necessary.',
      ],
    },
  ];

  return (
    <section className="flex flex-col bg-purple-darker px-[30px] py-[60px] lg:py-[72px]">
      <h2 className="mb-[16px] font-reckless text-[40px] leading-tight text-pink lg:text-[60px] lg:text-center lg:mb-6">
        The Difference: Time & Training
      </h2>

      <p className="mb-[25px] font-untitled text-[18px] font-medium leading-6 text-[#1D2534] lg:text-[25px] lg:text-center lg:mb-16">
        <strong>Finally! Care designed specifically for you.</strong>
      </p>
      {/* Stats Grid */}
      <div
        className="
          flex flex-col gap-8
          lg:grid lg:grid-cols-2 lg:gap-[60px]
          xl:gap-[100px] xl:px-[115px]
        "
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex w-full flex-col gap-[7px] lg:flex-row">
            <img
              src={`/images/landingpage/membership/${stat.icon}`}
              alt={stat.alt}
              className="self-start w-auto h-auto shrink-0 lg:mt-2 lg:mr-6"
            />

            <div className="flex flex-col">
              <h4 className="font-untitled text-[22px] font-medium text-[#1D2534] lg:text-[25px] lg:mb-4">
                {stat.title}
              </h4>

              <ul className="pl-8 text-left list-disc">
                {stat.list.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="font-untitled text-[20px] leading-7 text-[#1D2534] lg:text-[21px] lg:leading-8"
                  >
                    {stat.list.length === 6 && itemIdx === 5 ? <em>{item}</em> : item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Membership Content */}
      <div className="mx-auto mt-8 lg:mt-16 md:flex md:flex-col md:items-center lg:max-w-[900px]">
        <p className="font-untitled text-[#000] text-[20px] md:text-center mb-6 md:mb-12">
          You need a team of primary care providers specially trained in women’s health, who connect
          the dots between menopause, mental health, and healthy aging
        </p>
        {/* call-to-action button */}
        <button
          className="mx-auto w-[330px] md:w-[385px] mb-6 lg:w-[594px] h-auto bg-purple text-white font-untitled font-regular text-[22px] 
                       py-4 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
          onClick={() => {
            // scroll to waiting list section smoothly when button is clicked
            document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Call a Membership Advisor
        </button>
        <p className="font-untitled text-[#000] text-[20px] md:text-center">No obligation</p>
      </div>
    </section>
  );
}
