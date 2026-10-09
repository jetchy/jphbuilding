# AGENTS.md

## Project

Static website built with Astro. Follow Astro conventions for routing and component structure:

- Components: `src/components`
- Pages: `src/pages`
- Layouts: `src/layouts`

Put styles in a separate CSS file in the same directory as the page or component that uses it.

## Commands

- `npm install` – install dependencies
- `npm run dev` – local dev server
- `npm run build` – production build (output in `dist/`)
- `npm run lint` – ESLint
- `npm run format` – Prettier
- `npm run check` – Astro check

## Code style

- ESLint and Prettier enforce style. Config lives in `eslint.config.js` and `.prettierrc`. Don't override or disable rules without asking.
- Path aliases are defined in `tsconfig.json`. Use them instead of long relative imports.
- Before finishing any task, run lint and format, and make sure `npm run build` passes.

## Git and deployment

- Work on a feature branch and open a PR. Never commit directly to `main`.
- Merging to `main` triggers a production deploy on Netlify. Each PR also gets a Netlify deploy preview.

## Documentation

Astro docs: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)