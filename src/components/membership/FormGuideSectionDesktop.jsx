export default function FormGuideSection() {
  return (
    <section className="hidden md:flex px-[30px] flex-col py-[75px]">
      <p className="font-reckless text-[40px] mb-8 leading-[50px] text-pink lg:text-[45px] text-center">
        Take the Next Step to Feeling Your Best
      </p>
      <div className="flex gap-16 flex-col lg:flex-row">
        <div>
          <img
            src="/images/landingpage/shared/guide-cover.webp"
            alt="lady smiling"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center lg:max-w-full">
          <p className="font-untitled text-[#1D2534] text-[24px] mb-6">
            Get your free Guide to Feeling Your Best — it’s filled with everything you need to know
            about how Herself Health helps women 65+ stay active, confident, and cared for.
          </p>
          <p className="font-untitled text-[#1D2534] text-[24px] mb-8">
            After you download, a member of our team will reach out to answer any questions and help
            you schedule your first visit when you’re ready.
          </p>
          <h2 className="font-reckless  text-[24px] text-pink text-lg font-medium mb-8 xl:text-[30px] xl:leading-tight">
            Ready to take the next step?
          </h2>
          <button
            className="self-start inline rounded-lg bg-purple px-4 py-3 font-untitled text-[22px] text-white shadow-lg transition-colors duration-300 hover:bg-purple-dark"
            onClick={() =>
              document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get My Free Guide & Next Steps
          </button>
        </div>
      </div>
    </section>
  );
}
