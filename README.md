# herself-health-landingpages

## How the Repo Works

This repository contains multi-page React landing pages for Herself Health, built with Vite and Tailwind CSS. It is designed for maintainability, scalability, and easy customization for different marketing domains.

### Architecture Overview
- **Multi-page SPA:** Each landing page (care, email, guide, tv, directmail, newpatients, medicare, member, membership) has its own HTML entry and React entry point. This allows each page to have its own URL and configuration, while sharing common layouts and components.
- **Sectional Layout:** Pages are composed of ordered section components (Hero, Guide, Services, WaitingList, etc.), which are grouped by domain and by shared functionality.
- **Shared Components:** Common UI elements are reused via `src/components/shared/`.
- **Domain-specific Components:** Each domain (e.g., member, membership) has its own directory for unique sections and forms.
- **Form Handling:** Each domain has its own `WaitingListForm` and `WaitingListSection` for collecting user info.
- **Styling:** Tailwind CSS is used for styling, with custom theme variables in `src/styles/globals.css`.
- **Image Assets:** Images are organized by domain in `public/images/landingpage/`.

### Build & Development
- **Install dependencies:** `npm install` or `yarn install`
- **Development server:** `npm run dev` or `yarn dev` (starts Vite dev server)
- **Build for production:** `npm run build` or `yarn build` (runs custom build script and Vite)
- **Preview production build:** `npm run preview`
- **Lint code:** `npm run lint` (uses custom ESLint config)

### Key Files & Directories
- `package.json`: Scripts, dependencies, conventions
- `vite.config.js`: Vite + React + Tailwind setup
- `src/pages/[domain]/[Domain].jsx`: Main entry for each landing page
- `src/components/shared/`: Shared UI components
- `src/components/[domain]/`: Domain-specific components
- `scripts/build.js`: Custom build orchestration
- `src/styles/globals.css`: Tailwind theme and global styles

### Adding or Updating Pages
- To add a new landing page, create a new HTML entry and React entry point in `src/pages/[domain]/` and configure as needed.
- Use the `SharedLandingPage` component for pages that share a common layout, passing in domain-specific props.
- For domain-specific changes, update the relevant files in the corresponding domain directory.

### Notes
- There is no test setup by default.
- Ensure your Node.js version is compatible with Vite 7+.
- Custom ESLint config may require ESLint v9+.
- `.env` files are ignored by default.

For more details, see `.github/copilot-instructions.md`.
