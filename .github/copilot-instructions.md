# Copilot Workspace Instructions for Herself Health Landing Pages

---

## Purpose

This workspace contains multi-page React landing pages for Herself Health, built with Vite and Tailwind CSS. The goal is to provide clear, maintainable instructions for AI agents to assist with development, build, and troubleshooting tasks.

---

## Build & Development

- **Build:** Use `npm run build` or `yarn build` to build the project. This runs the custom build script ([scripts/build.js](scripts/build.js)) and Vite.
- **Development:** Use `npm run dev` or `yarn dev` to start the Vite dev server.
- **Preview:** Use `npm run preview` to preview the built site.
- **Lint:** Use `npm run lint` to check code style (ESLint, config in [eslint.config.mjs](eslint.config.mjs)).
- **No test command:** There is no test setup or test script.

---

## Architecture & Conventions

- **Multi-page SPA:** Each domain (care, member, membership, etc.) has its own HTML entry and React entry point.
- **Component Structure:** Components are grouped by domain and by shared functionality.
- **Sectional Layout:** Pages are composed of ordered section components (Hero, Guide, Services, WaitingList, etc.).
- **Shared Components:** Common UI elements are reused via [src/components/shared/](src/components/shared/).
- **Form Handling:** Each domain has its own `WaitingListForm` and `WaitingListSection`.
- **Tailwind CSS:** Used for styling, with custom theme variables in [src/styles/globals.css](src/styles/globals.css).
- **File Naming:** Section components are named `SectionName.jsx` and grouped by domain.
- **Image Assets:** Images are organized by domain in [public/images/landingpage/](public/images/landingpage/).

---

## Potential Pitfalls

- **No test setup:** No test command or framework is configured.
- **Vite version:** Uses Vite 7+; ensure Node.js version is compatible.
- **ESLint config:** Custom ESLint config may require ESLint v9+.
- **Tailwind plugin:** Uses `@tailwindcss/vite`.
- **Build script:** Custom build script may need troubleshooting if adding new pages.
- **Environment variables:** `.env` files are ignored by default.

---

## Key Files & Directories

- [package.json](package.json): Scripts, dependencies, conventions.
- [vite.config.js](vite.config.js): Vite + React + Tailwind setup.
- [src/pages/member/Member.jsx](src/pages/member/Member.jsx): Sectional layout pattern.
- [src/components/shared/GuideSection.jsx](src/components/shared/GuideSection.jsx): Shared section pattern.
- [src/components/member/InPracticeSection.jsx](src/components/member/InPracticeSection.jsx): Domain-specific section.
- [src/components/shared/WaitingListForm.jsx](src/components/shared/WaitingListForm.jsx): Form pattern.
- [scripts/build.js](scripts/build.js): Custom build orchestration.
- [src/styles/globals.css](src/styles/globals.css): Tailwind theme and global styles.

---

## Example Prompts

- "Build the project and troubleshoot any errors."
- "Add a new section to the membership landing page."
- "Update the shared Footer component for accessibility."
- "Configure ESLint for the latest version."

---

## Next Steps

- Consider adding test setup instructions if tests are introduced.
- Suggest agent customizations for frontend, build, or lint tasks as needed.

---

## 3 Landing pages are currently implemented:
1. [Shared Landing Page](care, tv, guide, directmail, email, newpatients and medicare)
2. [Member Landing Page](src/pages/member/Member.jsx)
3. [Membership Landing Page](src/pages/membership/Membership.jsx) 

When changes are made it's very important to know before making updates which landing page is to be effected as that will dictate which files to update. For example, if you are making changes to the member landing page, you will want to make sure to update the files in the member directory and not the shared directory.
