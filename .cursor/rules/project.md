# Project Overview

This is a test application for the CHG Healthcare unified design system (`@jordanchghealthcare/chg-unified-ds`). It serves as a sandbox for testing design system components in a React environment.

## Commands

- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Type-check with TypeScript then build for production
- `npm run lint` - Run ESLint across the project
- `npm run preview` - Preview the production build locally

## Tech Stack

- React 19 with TypeScript
- Vite 7 for bundling and dev server
- Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- ESLint with TypeScript and React Hooks plugins
- React Aria Components for accessible UI primitives

## Architecture

### Design System Integration

The app imports components from `@jordanchghealthcare/chg-unified-ds` (installed via GitHub Packages). The CSS configuration in `src/index.css` is critical:

- Imports the design system's Tailwind config from a sibling directory (`../../chg-unified-ds/`)
- Imports theme CSS variables (tokens.css, weatherby.css)
- Uses `@source` directive to scan design system source files for Tailwind class detection

### Theming

Components are themed via the `data-theme` attribute (e.g., `data-theme="weatherby"` in App.tsx). This enables the design system's theming layer.

## Notes

- The `.npmrc` configures GitHub Packages registry for the `@jordanchghealthcare` scope
- The design system is expected to be in a sibling directory for local development (relative imports in index.css)
