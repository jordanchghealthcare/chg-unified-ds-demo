# Project Overview

This is a demo application for the CHG Healthcare unified design system (`@oxymormon/chg-unified-ds`). It serves as a sandbox for testing design system components in a React environment.

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

The app imports components from `@oxymormon/chg-unified-ds` (public NPM package). The CSS configuration in `src/index.css`:

- Imports the design system's Tailwind config from `node_modules`
- Imports design tokens and all brand theme CSS variables
- Uses `@source` directive to scan design system dist files for Tailwind class detection

### Theming

Components are themed via the `data-theme` attribute (e.g., `data-theme="weatherby"` in App.tsx). This enables the design system's theming layer.

## Notes

- The `.npmrc` configures GitHub Packages registry for the `@jordanchghealthcare` scope (legacy)
