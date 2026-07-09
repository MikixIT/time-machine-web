# Time Machine Web

**Travel through the history of web design.**

Time Machine Web is an interactive experience that lets you step into a retro-futuristic time machine and journey through the evolution of the web — from 1995's table layouts and GIFs to 2026's glassmorphism and bento grids.

Created by Michael Torres.

This is not a Wayback Machine clone. It's an educational, cinematic recreation of how web design has changed over three decades.

![Time Machine Web Console](public/favicon.svg)

## Features

- **Time Machine Console** — Retro-futuristic sci-fi interface with LED displays, CRT effects, and a glowing TRAVEL button
- **Cinematic Travel Animation** — ~3 second sequence with flicker, glitch, sparks, camera shake, and arrival effects
- **Era System** — Isolated modules per year; add new eras without touching core code
- **Draggable Timeline** — Jump between years with keyboard and pointer support
- **Persistent State** — Last selected year saved to localStorage via Zustand
- **Accessibility** — ARIA labels, keyboard navigation, visible focus states, reduced motion support
- **Code Splitting** — Eras lazy-loaded for performance

## Tech Stack

| Tool                  | Purpose          |
| --------------------- | ---------------- |
| React 19 + TypeScript | UI framework     |
| Vite                  | Build tool       |
| Tailwind CSS 4        | Styling          |
| Motion                | Animations       |
| React Router          | Routing          |
| Zustand               | State management |
| Lucide Icons          | Iconography      |
| Vitest                | Testing          |
| ESLint + Prettier     | Code quality     |
| Husky + lint-staged   | Git hooks        |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/MikixIT/time-machine-web.git
cd time-machine-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

### Testing

```bash
npm test           # Run once
npm run test:watch # Watch mode
```

### Linting & Formatting

```bash
npm run lint
npm run format
npm run typecheck
```

## Project Structure

```
src/
├── app/              # App entry & router
├── components/       # Shared UI components
│   ├── console/      # Time machine console
│   ├── timeline/     # Draggable year timeline
│   ├── travel/       # Travel animation overlay
│   └── eras/         # Era-specific shared components
├── features/         # Feature pages
│   ├── console/      # Landing console page
│   └── era/          # Era view page
├── hooks/            # Custom React hooks
├── store/            # Zustand store
├── theme/            # Era theme registry
├── animations/       # Motion variants & travel config
├── eras/             # Isolated era modules
│   ├── 1995/         # ✅ Complete
│   ├── 2000/         # Placeholder
│   ├── 2005/         # Placeholder
│   ├── 2010/         # Placeholder
│   ├── 2015/         # Placeholder
│   ├── 2020/         # Placeholder
│   └── 2026/         # ✅ Complete
├── styles/           # Global CSS
├── types/            # TypeScript types
└── utils/            # Utility functions
```

## Adding a New Era

1. Create a folder under `src/eras/YYYY/`
2. Add `theme.ts` with era metadata, colors, and typography
3. Add `EraYYYYPage.tsx` with the era's page component
4. Export from `index.ts` as an `EraModule`
5. Register in `src/theme/registry.ts`

```typescript
// src/eras/2000/index.ts
import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2000 } from './theme';

export const era2000: EraModule = {
  theme: theme2000,
  component: lazy(() => import('./Era2000Page')),
};
```

No changes to core application code required.

## Implemented Eras

| Year | Status         | Style                                           |
| ---- | -------------- | ----------------------------------------------- |
| 1995 | ✅ Complete    | Gray bg, blue links, tables, marquee, guestbook |
| 2000 | 🔲 Placeholder | Dot-com / Flash era                             |
| 2005 | 🔲 Placeholder | Web 2.0 glossy UI                               |
| 2010 | 🔲 Placeholder | Responsive / flat design                        |
| 2015 | 🔲 Placeholder | Material Design                                 |
| 2020 | 🔲 Placeholder | Dark mode / neumorphism                         |
| 2026 | ✅ Complete    | Glassmorphism, bento grid, dark SaaS            |

## Future Roadmap

- [ ] Wayback Machine API integration
- [ ] AI-generated era summaries
- [ ] Side-by-side website comparison
- [ ] Historical events timeline
- [ ] Sound effects (Web Audio API)
- [ ] CRT fullscreen mode
- [ ] Custom theme editor
- [ ] Community plugin system

## Contributing

Contributions are welcome! Priority areas:

1. **Complete placeholder eras** (2000, 2005, 2010, 2015, 2020)
2. **Sound effects** — Wire up the travel sound hook
3. **Accessibility improvements**
4. **Performance optimizations**

Please open an issue before starting large features.

## License

MIT
