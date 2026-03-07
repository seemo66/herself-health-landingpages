// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

import FaqAccordion from './FaqAccordion';

export default function ServicesSection() {
  const faqs = [
    {
      question: 'Why do I need a membership?',
      answer: {
        text: 'For women under 65, most insurance plans do not cover the longer visits, deeper conversations, and coordinated support that women-focused care requires. The membership helps us offer the level of time, access, and midlife expertise that many women say they have been missing in their care.',
      },
    },
    {
      question: 'Is this concierge medicine?',
      answer: {
        text: 'It is similar in that you pay a membership fee in return for greater access and more comprehensive primary care. The difference is that our model is built specifically for women 50 and older and is paired with your existing health insurance so you don’t pay for the things that are covered by your insurance.',
      },
    },
    {
      question: 'Can I try care without joining?',
      answer: {
        text: 'You need to join to get started. If you prefer to ease in, choose the monthly plan. It includes a 30-day money-back guarantee if it’s not the right fit.',
      },
    },
    {
      question: 'Is the full-year (pay annually) membership refundable?',
      answer: {
        text: 'No. Annual memberships are prepaid and nonrefundable. We always send a reminder at least 30 days before renewal.',
      },
    },
    {
      question: 'What if I cancel the monthly plan within 30 days after using a screening?',
      answer: {
        text: 'If you complete an included screening like a DEXA or body composition scan, we will bill your insurance if it is covered or charge the standard cash price.',
      },
    },
    {
      question: 'Are medical visits covered by membership?',
      answer: {
        text: 'We bill your insurance for covered medical services, just as we do today. Your membership supports the added time, coordination, midlife screening plan, and member benefits that most insurance does not include.',
      },
    },
    {
      question: 'Can I pause my membership?',
      answer: {
        text: 'Not at this time.',
      },
    },
    {
      question: 'Do both plans include the same benefits?',
      answer: {
        text: 'Yes. Both plans include the same care and member benefits. The only difference is how you choose to pay.',
      },
    },
    {
      question: 'If I am a current patient, will my care change?',
      answer: {
        text: 'No. Your care team, visit schedule, and clinical approach will stay the same. The membership supports the way we already practice and helps us extend it to more women.',
      },
      btn: true,
    },
    {
      question: 'Can I use my HSA or FSA?',
      answer: {
        text: 'Yes. In many cases, membership fees may be reimbursed through HSA or FSA plans. Check with your benefits provider to confirm your specific coverage.',
      },
    },
    {
      question: 'What happens when I transition to Medicare?',
      answer: {
        text: 'When you enroll in Medicare or an accepted Medicare Advantage plan, the membership fee is waived. You can continue to receive care at Herself Health under your Medicare coverage.',
      },
    },
    {
      question: 'Does the membership replace insurance?',
      answer: {
        text: 'No. You will still use your insurance for visits, procedures, and other medical services. The membership covers expanded access, longer visits, coordination, and women’s health services that are not typically included in standard coverage.',
      },
    },
  ];

  const currentPatients = [
    {
      question: 'Is my first year really free?',
      answer: {
        text: 'Yes. Your entire first year of the membership is free.',
      },
    },
    {
      question: 'When will my membership begin?',
      answer: {
        text: 'Your membership begins on February 3, 2026. The membership program officially starts on that date. You will receive your membership agreement in mid-January and will have 90 days from February 3, 2026 to sign it. Your agreement must be signed no later than May 4, 2026. If the agreement is not signed by May 4, 2026, we will assume you are opting out of the membership. At that point, your membership status will be changed to inactive, and you will no longer be able to schedule visits with your provider. If needed, our team can help you transition to another provider.',
      },
    },
    {
      question: 'When is my first payment due?',
      answer: {
        text: 'Your first payment will be due on February 3, 2027, one year after your membership begins. Your first year of membership (February 3, 2026 through February 2, 2027) is free. After that first year, you’ll be locked into our introductory pricing and can choose between two annual membership programs:',
        list: ['$99 per month', '$999 for the full year, paid annually'],
        footer:
          'We’ll send pricing details and clear instructions on how to make your payment ahead of February 3, 2027, so you’ll have plenty of time to review your options and choose the plan that works best for you.',
      },
    },
    {
      question: 'What if I have a Medicare or Medicare Advantage plan?',
      answer: {
        text: 'If you are enrolled in Medicare or an accepted Medicare Advantage plan, the membership fee is waived. You can continue to receive care at Herself Health under your Medicare coverage.',
      },
    },
    {
      question: 'What if I cannot afford the membership?',
      answer: {
        text: 'We understand this may be a meaningful change. We are exploring flexible payment options and will share more information before billing begins.',
      },
    },
    {
      question: 'Who can I talk to if I have questions?',
      answer: {
        text: 'We are here to support you. You can:',
        list: ['Call us at 888-290-1209', 'Talk with your Clinic Manager at your next visit'],
      },
    },
  ];

  return (
    <section className=" m-auto  bg-[#F9F0F7] px-[30px] py-[40px] lg:px-[90px] lg:py-[90px]">
      <div className="max-w-[1200px] m-auto">
        <h2 className="font-reckless text-[40px] text-pink">FAQs</h2>
        <FaqAccordion questionData={faqs} />

        <h2 className="font-reckless text-[40px] text-pink">Current Patients</h2>
        <FaqAccordion questionData={currentPatients} />
      </div>
    </section>
  );
}
