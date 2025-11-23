# Agent Guidelines for Weird Components

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production  
- `npm run lint` - Run ESLint (no test framework configured)

## Code Style
- Use TypeScript with strict mode enabled
- Import React components with `import * as React from "react"`
- Use `@/` path alias for internal imports
- Follow shadcn/ui patterns with class-variance-authority for variants
- Use `cn()` utility from `@/lib/utils` for className merging
- Components use forwardRef and proper displayName
- Motion/Framer Motion for animations with `motion/react` import
- Tailwind CSS for styling with dark mode support
- Use Radix UI primitives for accessible components
- File naming: kebab-case for directories, PascalCase for components