// header component, fixed at the top of the page
// contains site logo and main navigation (currently just logo)
export default function Header({
  phone = '888-290-1209',
  phoneHref = 'tel:18882901209',
  phoneSubtitle = '',
  phoneSubtitleClass = 'text-pink font-untitled font-normal text-[14px]',
  centerSubtitleOnMobile = false,
  mobileHeaderHeightClass = 'h-[102px]',
}) {
  return (
    // semantic header, role banner for accessibility
    <header
      className={`
        fixed w-full ${mobileHeaderHeightClass} lg:h-[78px] z-[11] top-0 bg-white
        flex items-center justify-center py-[15px]
        shadow-header
      `}
      role="banner"
    >
      {/* container for logo and optional navigation */}
      <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center px-4 lg:px-[100px]">
        {/* Logo */}
        <a
          href="/"
          aria-label="Herself Health home"
          className="flex items-center mb-[12px] lg:mb-0"
        >
          <img
            src="/images/landingpage/shared/logo-pink.svg"
            alt="Herself Health logo"
            className="w-auto h-auto"
          />
          <span className="sr-only">Herself Health</span>
        </a>

        {/* Phone */}
        <a href={phoneHref} aria-label="Herself Health phone" className="inline-flex flex-col">
          <span className="flex items-center">
            <img
              src="/images/landingpage/shared/telephone.svg"
              alt="telephone icon"
              className="w-[25px] h-[25px] mr-4 shrink-0"
            />
            <span className="text-pink font-untitled font-bold text-[20px]">{phone}</span>
          </span>
          {phoneSubtitle && (
            <span
              className={`${phoneSubtitleClass} ${
                centerSubtitleOnMobile ? 'pl-0 text-center md:pl-[41px] md:text-left' : 'pl-[41px]'
              }`}
            >
              {phoneSubtitle}
            </span>
          )}
        </a>
      </div>
    </header>
  );
}
