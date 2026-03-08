export default function HeroHighlightsBar() {
  const items = [
    { primaryText: '10,000+', secondaryText: 'Women Served' },
    { primaryText: '4.9/5', secondaryText: 'Google Rating' },
    { primaryText: '5', secondaryText: 'Twin Cities Locations' },
    { primaryText: '20+', secondaryText: 'Providers' },
  ];

  return (
    <section className="relative z-0 md:z-10 md:mt-[-70px] md:mb-[-70px] lg:mt-[-76px] lg:mb-[-76px] xl:mt-[-88px] xl:mb-[-88px] md:px-4 lg:px-6 xl:px-0">
      <div className="mx-auto w-full bg-pink px-[75px] py-8 md:max-w-[1402px] md:h-[140px] lg:h-[152px] xl:h-[176px] md:rounded-[30px] md:px-[100px] md:py-0">
        <div className="flex h-full flex-col items-center justify-center md:flex-row">
          {items.map((item, index) => (
            <div
              key={`${item.primaryText}-${item.secondaryText}-${index}`}
              className={`w-full py-[25px] text-center md:w-auto md:py-0 ${
                index === 0
                  ? 'md:pr-6 lg:pr-10 xl:pr-[66px]'
                  : index === items.length - 1
                    ? 'md:pl-6 lg:pl-10 xl:pl-[66px]'
                    : 'md:px-6 lg:px-10 xl:px-[66px]'
              } ${
                index > 0
                  ? 'border-t border-white md:border-t-0 md:border-l'
                  : ''
              }`}
            >
              <div className="mb-[7px] font-reckless not-italic font-normal text-[50px] leading-[55px] text-center text-white sm:text-[52px] sm:leading-[57px] md:mb-0 md:text-[41px] md:leading-[45px] lg:text-[44px] lg:leading-[49px] xl:text-[60px] xl:leading-[66px]">
                {item.primaryText}
              </div>
              <div className="font-untitled not-italic font-bold text-[18px] leading-[35px] text-center text-white sm:text-[18px] sm:leading-[32px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] xl:text-[23px] xl:leading-[35px] xl:whitespace-nowrap">
                {item.secondaryText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
