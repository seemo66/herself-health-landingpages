export default function FormGuideSection() {
  return (
    <section className="block mb-8 md:hidden">
      <div>
        <img
          src="/images/landingpage/shared/guide-cover.webp"
          alt="lady smiling"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[25px]">
        Not ready to schedule today? No problem — we’ll email the guide so you can review what to
        expect, and you can schedule when you’re ready.
      </p>

      <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[15px]">
        Inside the guide (quick read):
      </p>
      <ul className="list-disc font-untitled font-normal text-[18px] text-black leading-6 mb-[25px] ml-8">
        <li>What to expect during your 90-minute Welcome Visit</li>
        <li>How to prepare for your appointment</li>
        <li>What to bring to your visit</li>
        <li>Answers to common questions</li>
      </ul>
    </section>
  );
}
