// ComparisonSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

import ComparisonAccordion from './ComparisonAccordion';
import ComparisonTable from './ComparisonTable';

export default function ComparisonSection() {
  return (
    <section className="m-auto bg-white px-[30px] pt-[50px] py-[40px] lg:px-32 lg:py-28">
      <div className="max-w-[1200px] m-auto">
        <h2 className="mb-8 font-reckless text-[40px] leading-tight text-pink lg:text-[60px] lg:text-center">
          How the Herself Health Membership compares to typical primary care
        </h2>

        <p className="mb-8 font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:leading-8 lg:text-[21px] lg:text-center">
          You are not imagining it. Many primary care practices are built around short visits, full
          schedules, and limited time to connect the dots. Our membership model was created to offer
          more time and more access.
        </p>

        <p className="text-[#1D2534] mb-8 font-untitled text-[18px] font-normal leading-6  lg:text-[25px] lg:text-center lg:font-medium">
          <strong>Here is how care with the Herself Health Membership stacks up.</strong>
        </p>
      </div>

      {/* Mobile Comparison Table */}
      <div className="lg:hidden -mx-[15px]">
        <ComparisonAccordion />
      </div>
      {/* Desktop Comparison Table */}
      <div className="hidden lg:block">
        <ComparisonTable />
      </div>
    </section>
  );
}
