// header component, fixed at the top of the page
// contains site logo and main navigation (currently just logo)
export default function Header() {
  return (
    // semantic header, role banner for accessibility
    <header
      className="
        fixed w-full h-[102px] lg:h-[78px] z-[11] top-0 bg-white 
        flex items-center justify-center py-[15px] 
        shadow-header
      "
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
        <a href="tel:8882901209" aria-label="Herself Health phone" className="flex items-center">
          <img
            src="/images/landingpage/shared/telephone.svg"
            alt="telephone icon"
            className="w-auto h-auto mr-4"
          />
          <span className="text-pink font-untitled font-bold text-[20px]">888-290-1209</span>
        </a>
      </div>
    </header>
  );
}
