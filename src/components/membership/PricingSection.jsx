
export default function PricingSection({ phoneNumber = '888-290-1209' }) {
  const membershipIncludes = [
    'Longer visits',
    'Same-day and next-day visits',
    '24/7 access to a nurse or on-call provider',
    'Menopause and midlife support',
    'Preferred scheduling with specialty partners',
    'Help with sleep, mood, and energy',
    'Mental health care',
    'Weight and metabolic support',
    'Care coordination',
    'Annual DEXA and body composition scan at no extra cost',
    'Annual cholesterol and glucose screening at no extra cost',
  ];

  return (
    <section className="bg-[#9A0180] text-white px-[30px] py-[50px] lg:m-auto lg:text-center">
      <h2 className="font-reckless text-[40px] leading-[44px] md:text-[60px] md:leading-[66px] md:text-center mb-4 md:mb-6">
        Simple, Transparent Pricing.
      </h2>

      <p className="font-untitled italic text-[18px] md:text-[21px] md:text-center leading-[25px] text-white mb-4 md:mb-8">
        No long-term commitment required 
      </p>

      <h3 className="font-untitled font-bold text-[29px] md:font-medium md:text-[45px] md:leading-[56px] md:text-center text-white leading-9 mb-[30px]">
        Membership Plans: <br />
        $99 per month or $999 per year
      </h3>

      <p className="font-untitled font-medium text-[28px] md:text-[35px] leading-8 mb-4 md:mb-8">Your Membership Includes:</p>
      <div className="flex flex-col md:flex-row md:gap-x-[25px] mb-[30px] mx-auto max-w-[1200px]">
        <ul className="grid grid-cols-1 gap-2 pl-8 list-disc md:flex-1">
          {membershipIncludes.slice(0, 6).map((item, index) => (
            <li className="text-left font-untitled font-medium text-[20px] leading-[28px] text-white" key={index}>{item}</li>
          ))}
        </ul>
        <ul className="grid grid-cols-1 gap-2 pl-8 list-disc md:flex-1">
          {membershipIncludes.slice(6).map((item, index) => (
            <li className="text-left font-untitled font-medium text-[20px] leading-[28px] text-white" key={index + 6}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="font-untitled font-medium text-[28px] text-white">
        To join, call a Membership Advisor at <a href={`tel:${phoneNumber.replace(/[^\d]/g, '')}`}>{phoneNumber}</a>
      </p>
    </section>
  );
}
