# TypescriptAutodoc

A Nuxt 4 app with a styled homepage, a Dragon Editor workspace at `/editor`, Tailwind-based theming, unit tests, and GitHub Actions CI.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Dragon Editor
- Tailwind CSS 4
- Vitest
- Playwright
- Husky

## Requirements

- Node.js 20.20+ is supported locally
- Node.js 22 is also a good choice for CI to reduce engine warnings from transitive tooling
- npm is the expected package manager because `package-lock.json` is committed

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Nuxt usually starts on `http://localhost:3000`. If that port is busy, it will automatically choose another port.

## Routes

- `/`: styled landing page in [app/pages/index.vue](./app/pages/index.vue)
- `/editor`: Dragon Editor page in [app/pages/editor/index.vue](./app/pages/editor/index.vue)

## Available Scripts

### App

```bash
npm run dev
npm run build
npm run preview
npm run generate
```

- `npm run dev`: start the local development server
- `npm run build`: create a production build
- `npm run preview`: preview the production build
- `npm run generate`: generate a static build when applicable

### Quality

```bash
npm run lint
npm run test
npm run test:watch
npm run test:coverage
npm run test:unit
npm run test:nuxt
npm run test:e2e
npm run test:e2e:ui
```

- `npm run lint`: run ESLint
- `npm run test`: run the unit test suite with [vitest.unit.config.ts](./vitest.unit.config.ts)
- `npm run test:watch`: run unit tests in watch mode
- `npm run test:coverage`: run unit tests with coverage
- `npm run test:unit`: explicit alias for the unit suite
- `npm run test:nuxt`: run Nuxt-aware tests when present
- `npm run test:e2e`: run Playwright tests
- `npm run test:e2e:ui`: open Playwright UI mode

## Project Structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- ci.yml
|-- .husky/
|   `-- pre-commit
|-- app/
|   |-- app.vue
|   |-- assets/
|   |   `-- css/
|   |       `-- main.css
|   `-- pages/
|       |-- index.vue
|       `-- editor/
|           `-- index.vue
|-- test/
|   `-- unit/
|       `-- editor-page.test.ts
|-- nuxt.config.ts
|-- package.json
|-- playwright.config.ts
`-- vitest.unit.config.ts
```

## App Layout Notes

This project uses Nuxt 4's `app/` directory structure:

- The shared application shell lives in [app/app.vue](./app/app.vue)
- Route files live under `app/pages/`
- Tailwind is loaded through [nuxt.config.ts](./nuxt.config.ts) and [app/assets/css/main.css](./app/assets/css/main.css)

If `app/app.vue` renders `<NuxtPage />`, Nuxt expects route components to exist under `app/pages/...`.

## Styling

The UI is styled with Tailwind CSS 4 and a shared theme defined in [app/assets/css/main.css](./app/assets/css/main.css).

Current styling direction:

- dark layered background
- glass-style panels
- cyan and warm-gold accent colors
- shared header/navigation across routes
- Tailwind utilities for layout and component styling

## Testing And Git Hooks

Unit tests currently cover the editor page in [test/unit/editor-page.test.ts](./test/unit/editor-page.test.ts).

Pre-commit checks are handled by Husky in [.husky/pre-commit](./.husky/pre-commit), which runs:

```bash
npm run lint
npm run test:unit
```

## CI

GitHub Actions CI is defined in [.github/workflows/ci.yml](./.github/workflows/ci.yml).

It currently runs:

- `npm ci`
- `npm run lint`
- `npm run test:unit`
- `npm run build`

If CI fails on dependency sync, regenerate the lockfile with `npm install` and commit the updated `package-lock.json`.

## Build And Deployment

Create a production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

Nuxt writes the production server to `.output/`. After building, you can also run:

```bash
node .output/server/index.mjs
```

## Environment Variables

Local environment files such as `.env` and `.env.local` are supported. Do not commit real secrets.

## Notes Before Committing

- Keep `package-lock.json` in sync with `package.json`
- Run `npm run lint`
- Run `npm run test:unit`
- Run `npm run build` if you changed app or config code

## License

Add a license section here once you decide how this project should be shared.
