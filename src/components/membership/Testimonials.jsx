import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    '“I love the longer appointment times. I feel heard.”',
    '“The care team was so kind and knowledgeable.”',
    '“I left feeling like my health mattered and was understood.”',
    '“The doctor listened, explained everything, and made me feel supported.”',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F4E9DA]/40 px-[30px] py-[50px] lg:m-auto lg:text-center">
      <h2 className="mb-[25px] font-reckless text-[40px] leading-[45px] text-pink">Testimonials</h2>
      <div className="relative w-full flex flex-col items-center h-[40px]">
        {testimonials.map((testimonial, index) => (
          <p
            key={index}
            className={`transition-opacity duration-1000 absolute w-full text-[18px] font-bold ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <em>{testimonial}</em>
          </p>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-1000 ${
              index === current ? 'bg-darkPink' : 'bg-[#575C62]/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
