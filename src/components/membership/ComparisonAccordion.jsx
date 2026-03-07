// faq accordion component
// displays a list of questions that can expand/collapse to reveal answers
import { useState, useRef } from 'react';

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

export default function ComparisonAccordion() {
  // array of currently open faq indices
  const [openIndices, setOpenIndices] = useState([]);

  // ref array to measure content height for smooth expand/collapse
  const panelRefs = useRef([]);

  // toggle faq open/close state
  const toggleFAQ = (index) => {
    setOpenIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // close if already open
          : [...prev, index] // open if closed
    );
  };

  return (
    <div className="space-y-[11px] md:mt-[72px]">
      {careComparisons.map((care, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div key={index} className="border-[1px] border-black rounded-[10px] overflow-hidden">
            {/* question row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-[20px] py-[15px] gap-[14px] text-left"
            >
              <div className="flex items-center w-full gap-[14px]">
                <p className="flex-1 font-untitled font-medium text-[22px] text-[#1D2534] leading-6">
                  {care.title}
                </p>
                <img
                  src="/images/landingpage/membership/arrow-right.svg"
                  alt="Arrow"
                  className={`shrink-0 w-[22px] h-[22px] transform transition-transform duration-700 ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>

            {/* answer panel */}
            <div
              ref={(el) => (panelRefs.current[index] = el)}
              className="text-[16px] text-gray-700 overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: isOpen ? `${panelRefs.current[index]?.scrollHeight}px` : '0px',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="flex">
                <div className="flex flex-col flex-1">
                  <div className="bg-pink text-white px-[18px] py-2 font-medium text-[15px]">
                    Herself Health Membership
                  </div>
                  <div className="bg-[#9A0180]/10 px-[18px] py-[18px] text-[18px] flex-1">
                    {care.hh}
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="bg-[#D9D9D9] text-[#1D2534] px-[18px] py-2 font-medium text-[15px]">
                    Typical Primary Care Clinic
                  </div>
                  <div className="bg-[#D9D9D9]/20 text-[#1D2534] px-[18px] py-[18px] text-[18px] flex-1">
                    {care.other}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
