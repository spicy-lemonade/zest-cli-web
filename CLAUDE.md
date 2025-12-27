# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Important Rules

- *Never* run git commands without asking for user permission, even if 'auto-accept' is selected during a Claude Command session
- *Never* make assumptions. Ask for more information and wait for the user response.
- Do *not* use numerical prefixes when writing comments
- Use double quotation marks instead of single quotation marks when possible
- Favor modular, reusable code
- Keep components simple and focused

## Project Overview

This repository contains the marketing website for Zest CLI - a privacy-first natural language CLI tool. The site is a modern, performant single-page application built with React that showcases the product's features, pricing, and download options.

**Key Technologies:**
- Vite for development and build tooling
- React 19 for UI components
- TypeScript for type safety
- Tailwind CSS (via CDN) for styling
- Lucide React for icons

## React/TypeScript Code Style

### The Principle of Least Abstraction

Your goal is clarity over cleverness. Start with the simplest possible solution.

- **Default to Simple Components** - Solve the problem within a single component first. Do not create helper functions, custom hooks, or new components prematurely.
- **Justify Every Abstraction** - Before creating a new component or hook, justify its existence based on concrete needs (e.g., reuse across 3+ places, component length, or complexity).

### Component Design

Components are the fundamental building blocks. They must be clear and focused.

- **Components Do One Thing** - Every component should have a single, clear responsibility. If you cannot describe what a component does in one simple sentence, it's doing too much.
- **Component Length Limit** - A component should rarely exceed 200 lines. If it grows longer, decompose it into smaller sub-components.
- **Props Limit** - A component should not have more than 5-7 props. If you need more, group related props into a single object or reconsider the component design.
- **Avoid Prop Drilling** - If passing props through more than 2 levels, consider using React Context or lifting state differently.

### Duplication vs. Abstraction

Avoid hasty abstractions. Duplication is often better than the wrong abstraction.

- **The Rule of Three** - Do not create a shared component on its first or second use. Only when you need it in three places should you consider creating a reusable component.
- **Verify True Duplication** - Before refactoring, confirm the duplicated code represents the same core logic. If components look similar but handle different business rules that might change independently, they must remain separate.

### TypeScript Usage

- **Use Explicit Types** - Define interfaces for component props, API responses, and complex objects.
- **Avoid `any`** - Use proper types or `unknown` if the type is truly unknown.
- **Keep Types Simple** - Don't over-engineer type definitions. Start simple and add complexity only when needed.

### Naming Conventions

- **Components** - Use PascalCase (e.g., `Terminal`, `PricingCard`)
- **Files** - Match the component name (e.g., `Terminal.tsx`, `PricingCard.tsx`)
- **Props Interfaces** - Use the pattern `ComponentNameProps` (e.g., `TerminalProps`)
- **Event Handlers** - Use the pattern `handleEventName` (e.g., `handleClick`, `handleSubmit`)

## Styling Standards

Maintain consistent, maintainable styling using Tailwind CSS utilities.

### Tailwind CSS Usage

- **Utility-First** - Use Tailwind utility classes directly in JSX. Avoid writing custom CSS unless absolutely necessary.
- **Responsive Design** - Use responsive prefixes (`sm:`, `md:`, `lg:`) for mobile-first design.
- **Consistent Spacing** - Stick to Tailwind's spacing scale (e.g., `gap-4`, `p-6`, `mb-8`).
- **Custom Utilities** - Define custom utilities in `index.html` style tag for project-specific patterns like `zest-gradient-bg` and `zest-gradient-text`.

### Component Styling

- **Group Related Classes** - Order Tailwind classes logically: layout > spacing > typography > colors > effects
- **Extract Repeated Patterns** - If the same combination of 10+ classes appears in 3+ places, consider creating a custom CSS class.
- **Avoid Inline Styles** - Use Tailwind utilities instead of style props unless dealing with dynamic values.

### Design System Consistency

- **Color Palette** - Use the defined gradient colors (`#facc15` yellow to `#ef4444` red) and Tailwind's slate palette.
- **Typography** - Plus Jakarta Sans for UI, JetBrains Mono for code.
- **Spacing** - Maintain consistent spacing using Tailwind's scale (4px increments).

## Development Workflow

### Running the App
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality
```bash
# TypeScript type checking
npx tsc --noEmit

# Check for issues (if linter is configured)
npm run lint
```

## Project Structure
```
.
├── components/        # React components (Terminal, Features, Pricing)
├── App.tsx            # Main application component
├── index.tsx          # React app entry point
├── index.html         # HTML entry point (includes Tailwind CDN)
├── types.ts           # TypeScript type definitions
├── vite.config.ts     # Vite configuration
├── CLAUDE.md          # AI assistant guidance
└── README.md          # Project documentation
```

## Project Notes

- Tailwind CSS is loaded via CDN (see `index.html`)
- Custom gradient utilities are defined in `index.html` style tag
- Site is a static SPA with no backend dependencies
- No environment variables or secrets needed for frontend