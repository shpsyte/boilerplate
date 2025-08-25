# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a **Next.js 15 boilerplate** designed as a **SaaS template** with the following key characteristics:

- **Next.js 15** with App Router architecture
- **DaisyUI + Tailwind CSS 4** for styling
- **TypeScript** with path aliases (`@/*` → `./src/*`)
- **Configuration-driven SaaS setup** via `src/config/app.config.js`
- **Component library** in `src/components/ui/`

## Development Commands

```bash
npm run dev    # Start development server (localhost:3000)
npm run build  # Production build
npm start      # Start production server
npm run lint   # ESLint with Prettier (single quotes enforced)
```

## SaaS Configuration System

The boilerplate uses a **centralized configuration system** in `src/config/app.config.js` that allows users to customize their SaaS without touching component code:

- **Themes**: All DaisyUI themes with light/dark categorization
- **Navbar**: Brand, menu items, auth buttons, theme switcher
- **Fonts**: Google Fonts configuration (currently Bricolage_Grotesque)
- **Metadata**: App title, description, version, author

Components should **read from appConfig** when possible instead of hardcoded values.

## File Conventions

- **Components**: Use `.tsx` extension
- **Configs**: Use `.js` extension (app.config.js is JavaScript)
- **Styles**: Global styles in `src/app/globals.css`
- **Utilities**: Helper functions in `src/lib/`
- **Types**: Define interfaces in component files or separate `.d.ts` files

## Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── (home)/            # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── [feature].tsx     # Feature components
├── config/               # Configuration files
│   └── app.config.js     # Main app configuration
├── contexts/             # React contexts
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities (cn function)
```

## Theme System

The project includes a comprehensive theme system:

- **32 DaisyUI themes** categorized as light/dark
- **ThemeSwitch component** for user selection
- **localStorage persistence**
- **Theme configuration** in app.config.js

## Additional Documentation

For React component development and UI guidelines, see **CLAUDE.react.md**.
