# Garvit Magoo — Portfolio

Personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.
Designed with a "Void Architecture" aesthetic — deep space black, molten amber accent, Swiss precision grid.

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm start
```

## Customise

All portfolio data lives in **one file**: `lib/data.ts`

Update your name, experience, skills, contact info there — the entire site updates automatically.

## Stack

| Layer      | Technology          |
|------------|---------------------|
| Framework  | Next.js 15 (App Router) |
| Language   | TypeScript 5        |
| Styling    | Tailwind CSS 3      |
| Fonts      | next/font (self-hosted) |
| Animations | CSS-only + IntersectionObserver |
| Icons      | Inline SVG          |

## Project Structure

```
├── app/
│   ├── layout.tsx        ← Root layout, next/font, metadata
│   ├── page.tsx          ← Home page — composes all MFE sections
│   └── globals.css       ← Design tokens, animations, utilities
├── components/
│   ├── Nav.tsx           ← Sticky nav with active section tracking
│   ├── Footer.tsx        ← Footer
│   └── mfe/              ← Each section as an independent MFE
│       ├── HeroMFE.tsx
│       ├── MarqueeBanner.tsx
│       ├── SkillsMFE.tsx
│       ├── ExperienceMFE.tsx
│       └── ContactMFE.tsx
└── lib/
    ├── data.ts           ← All portfolio data (edit this)
    └── hooks.ts          ← useScrollReveal hook
```
