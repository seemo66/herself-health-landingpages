export default function GuideSection() {
  return (
    <section className="bg-tan py-0 pb-12 px-6 md:px-24 md:flex md:flex-col md:py-[100px]">
      <p className="font-untitled text-[#1D2534] text-[18px] mb-6 md:font-reckless md:text-[40px] md:mb-8 md:leading-[50px] md:text-pink lg:text-[45px] md:text-center">
        We’ll send your guide and help you take the next step toward your first visit.
      </p>
      <div className="block md:flex gap-4 md:gap-16">
        <div>
          <img
            src="/images/landingpage/shared/guide-cover.webp"
            alt="lady smiling"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center md:max-w-md lg:max-w-lg">
          <p className="font-untitled text-[#1D2534] text-[18px] md:text-[24px]">
            Get your free Guide To Feeling Your Best and learn what to expect at Herself Health –
            from your first visit to the care designed around your life.
          </p>
          {/* call-to-action button */}
          <button
            className="mt-16 hidden md:block w-full md:w-[385px] h-auto bg-purple text-white font-untitled text-[22px] 
                       py-3 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get My Free Guide & Next Steps
          </button>
        </div>
      </div>
    </section>
  );
}
