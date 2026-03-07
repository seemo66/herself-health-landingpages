import LocationSection from './LocationsSection';

// footer component, displayed at the bottom of the page
// contains site logo and optional links
export default function Footer({ topPadding = false, topPaddingClass = 'md:pt-[275px]' }) {
  return (
    // semantic footer element for accessibility
    <footer className={`w-full z-[11] bg-pink flex items-center justify-center py-[45px] ${topPadding ? topPaddingClass : ''} flex-col`}>
      {/* container for logo and optional navigation */}
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        {/* site logo linking to home page */}
        <a href="/" aria-label="Herself Health home" className="flex items-center">
          <img
            src="/images/landingpage/shared/logo-white.svg" // logo image from public folder
            alt="Herself Health logo"
            className="w-auto h-auto"
          />
          {/* hidden text for screen readers */}
          <span className="sr-only">Herself Health</span>
        </a>

        <p className="mt-2 text-white">Because your best self deserves the best care</p>
      </div>

      <LocationSection />
    </footer>
  );
}
