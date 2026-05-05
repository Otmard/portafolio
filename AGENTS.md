# AGENTS.md

## Commands
- `npm run dev` - Start Vite dev server
- `npm run build` - TypeScript check + Vite build
- `npm run preview` - Preview production build

## Tech Stack
- Vite 5.4, TypeScript 5.5, Typed.js 2.1

## Entry Points
- `index.html` - Main HTML entry
- `src/main.ts` - TypeScript entry point
- `src/style.css` - Main styles

## Notes
- No lint/typecheck scripts beyond `tsc` in build
- No tests configured
- Static site, no backend or API
- `typed.js` imported via npm, `scrollreveal.min.js` is a local file in `src/`