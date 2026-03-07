// contains site logo and optional links
export default function HerselfHealthLogoSection() {
  return (
    // semantic footer element for accessibility
    <footer className="w-full z-[11] bg-pink flex items-center justify-center py-[45px] flex-col">
      {/* container for logo and optional navigation */}
      <div className="w-full mx-auto flex items-center justify-center flex-col">
        {/* site logo linking to home page */}
        <a href="/" aria-label="Herself Health home" className="flex items-center">
          <img
            src="/images/landingpage/shared/logo-white.svg" // logo image from public folder
            alt="Herself Health logo"
            className="h-auto w-auto"
          />
          {/* hidden text for screen readers */}
          <span className="sr-only">Herself Health</span>
        </a>

        <p className="text-white mt-2">Because your best self deserves the best care</p>
      </div>
    </footer>
  );
}
