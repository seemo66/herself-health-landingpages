export default function GuideSection() {
  return (
    <section className="bg-tan py-0 pb-12 px-6 md:px-24 md:flex md:flex-col md:py-[100px]">
      <h2 className="font-reckless text-[40px] text-pink text-4xl leading-tight mb-3 md:text-2xl md:text-center xl:text-5xl">
        Inside the Guide (and what happens next)
      </h2>
      <div className="block gap-4 md:flex md:gap-16">
        <div>
          <img
            src="/images/landingpage/shared/guide-cover.webp"
            alt="lady smiling"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center md:max-w-md lg:max-w-lg">
          <p className="font-untitled text-black text-[18px] md:text-[24px]">
            Download our free guide and get practical, easy-to-use tools to feel your best and get
            more out of your care.
          </p>
          <ul className="font-untitled text-black text-[18px] md:text-[24px] list-disc mt-4 ml-12 space-y-1">
            <li>Your 90-Minute first visit - explained</li>
            <li>Prep check list and questions to ask</li>
            <li>Next steps that fit your needs</li>
          </ul>
          {/* call-to-action button */}
          <button
            className="mt-8 hidden md:block w-full md:w-full h-auto bg-purple text-white font-untitled text-[22px] 
                       py-3 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Appointment & Get Guide
          </button>
        </div>
      </div>
    </section>
  );
}
