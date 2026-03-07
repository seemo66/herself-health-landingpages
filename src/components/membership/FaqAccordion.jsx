import { useState, useRef } from 'react';

export default function FaqAccordion({ questionData }) {
  const [openIndices, setOpenIndices] = useState([]);
  const panelRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-[15px] md:mt-6 mb-16">
      {questionData.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        const { text, list, footer } = faq.answer || {};

        return (
          <div key={index} className="border-b border-black overflow-hidden">
            {/* Question row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center px-0 pr-2 py-[15px] gap-[14px] text-left"
            >
              <p className="font-reckless text-[30px] text-pink leading-tight">{faq.question}</p>

              <img
                src="/images/landingpage/membership/plus-icon.png"
                alt="Toggle"
                className={`w-[22px] h-[22px] ml-auto transform transition-transform duration-700 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Answer panel */}
            <div
              ref={(el) => (panelRefs.current[index] = el)}
              className="px-[20px] pt-[10px] lg:pt-4 overflow-hidden transition-all duration-700 ease-in-out border-t border-black"
              style={{
                maxHeight: isOpen ? `${panelRefs.current[index]?.scrollHeight}px` : '0px',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="pb-[15px] lg:pb-[25px] font-untitled text-[20px] text-left space-y-4 lg:text-[21] lg:leading-10">
                {/* main text */}
                {text && <p>{text}</p>}
                {/* list items */}
                {list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {/* footer text */}
                {footer && <p>{footer}</p>}

                {/* button text */}
                {faq.btn && (
                  <button
                    className="mb-7 w-full md:w-[385px] h-auto bg-purple text-white font-untitled text-[22px] 
                       py-4 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
                    onClick={() => {
                      // scroll to waiting list section smoothly when button is clicked
                      document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Existing Patients
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
