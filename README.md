## HRX Next.js

TODO: one-line description of what this repo is and which property/platform it serves.

Next.js application built with the App Router, TypeScript, and Tailwind CSS.

## Getting started

This repo pins its Node.js version (see `.nvmrc`) and package manager (see the `packageManager` field in
`package.json`). Enable Corepack once per machine so the pinned pnpm version is used automatically, instead
of whatever pnpm you happen to have installed globally:

```bash
corepack enable
```

Then install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

- `pnpm dev` — start the local dev server
- `pnpm build` — production build
- `pnpm start` — run the production build locally
- `pnpm lint` — run ESLint
- `pnpm typecheck` — run the TypeScript compiler in check-only mode
