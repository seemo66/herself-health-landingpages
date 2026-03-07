// careComparisons data array
const careComparisons = [
  {
    title: 'Focus',
    hh: 'Care designed specifically for women 50+ and their health needs',
    other: 'General primary care for a broad population that is not tailored for women',
  },
  {
    title: 'Visit length',
    hh: 'Longer visits with time to cover multiple concerns',
    other: 'Short visits that often focus on one issue at a time',
  },
  {
    title: 'Access',
    hh: 'Same-day or next-day appointments for urgent needs',
    other: 'Appointments may take days or weeks to get',
  },
  {
    title: 'After-hours support',
    hh: '24/7 access to a nurse or on-call provider',
    other: 'On-call support varies and is often a general nurse line',
  },
  {
    title: 'Menopause care',
    hh: 'Proactive support for menopause and perimenopause',
    other: 'May be limited or referred out and is not always a focus',
  },
  {
    title: 'Behavioral Health',
    hh: 'In-house behavioral health services with referrals and care coordination as needed',
    other: 'Typically referred out to external providers with limited coordination',
  },
  {
    title: 'Women\'s Health Expert',
    hh: 'Clinicians trained in women’s health, prevention and midlife changes',
    other: 'Training centered on general internal or family medicine',
  },
  {
    title: 'Care coordination',
    hh: 'Help scheduling imaging, referrals, and follow-up',
    other: 'Often left to the patient to manage on their own',
  },
  {
    title: 'Preventive focus',
    hh: 'Tailored preventive plan for heart, bone, and cancer risk',
    other: 'Standard screenings by age, less personalized to women’s risk patterns',
  },
  {
    title: 'Member extras',
    hh: 'Included DEXA, lab screenings, and access to partners like Midi Health',
    other: 'These services often require separate visits and fees',
  },
  {
    title: 'Relationship',
    hh: 'Providers care for fewer patients, giving them more time to know you and support your care',
    other: 'Providers care for many patients, which makes continuity harder to maintain',
  },
];

export default function ComparisonTable() {
  return (
    <table className="w-full border-collapse border border-[#575C62] text-left">
      <thead>
        <tr className="h-[86px]">
          <th className="border border-[#575C62] px-4 py-2"></th>
          <th className="border border-[#575C62]px-4 py-2 bg-pink text-white text-center font-medium text-[25px]">
            Herself Health Membership
          </th>
          <th className="border border-[#575C62] px-4 py-2 bg-[#D9D9D9]/50 text-[#1D2534] text-center font-medium text-[25px]">
            Typical Primary Care Clinic
          </th>
        </tr>
      </thead>
      <tbody>
        {careComparisons.map((care, idx) => (
          <tr key={idx} className="h-[160px]">
            <td className="border border-[#575C62] font-medium pl-[52px] pr-8 text-[#1D2534] text-[25px]">
              {care.title}
            </td>
            <td className="border border-[#575C62] bg-pink/10 pl-[52px] pr-8 text-[#1D2534] text-[21px]">
              {care.hh}
            </td>
            <td className="border border-[#575C62] pl-[52px] pr-8 text-[#1D2534] text-[21px]">
              {care.other}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
