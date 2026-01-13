# ToolVault - Premium AI Tool Reselling Platform

## Overview

ToolVault is a premium tool-reselling platform where digital AI tools (Claude AI, ChatGPT, VEO3, Lovable, etc.) are listed, explained, sold, and managed. The platform emphasizes a high-end, modern UI/UX with premium dark/light hybrid themes, smooth micro-interactions, and advanced animations. The design philosophy draws from premium SaaS leaders like Stripe, Linear, Vercel, and Framer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Design**: RESTful JSON API with `/api/*` endpoints
- **TypeScript**: Full TypeScript support across server code

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage**: DatabaseStorage implementation using PostgreSQL for persistent data
- **Database**: PostgreSQL via `DATABASE_URL` environment variable

## Deployment Configuration

### Production Database Setup
**IMPORTANT**: Development and Production databases are separate in Replit.

1. Open the **Database** tool in your workspace (left sidebar)
2. Navigate to the **Production** database section
3. Go to **Settings** tab to get the production `DATABASE_URL`
4. Add it as a secret in **Deployments > Configuration > Secrets**:
   - Key: `DATABASE_URL`
   - Value: (your production database connection string)

### Startup Behavior
- App tests database connection with 5 retries (3-second intervals)
- Owner account is seeded automatically if not exists
- App will start even if database connection fails (with warnings)
- Clear error messages logged for debugging

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (layout + shadcn/ui)
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schemas
└── migrations/       # Database migrations (Drizzle Kit)
```

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Path Aliases**: `@/` for client src, `@shared/` for shared modules
- **Storage Abstraction**: `IStorage` interface allows swapping between memory and database implementations
- **Development/Production Split**: Vite dev server in development, static file serving in production

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations via `npm run db:push`

### UI/Component Libraries
- **Radix UI**: Accessible primitive components (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **Framer Motion**: Animation library
- **class-variance-authority**: Component variant management

### Data & Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling
- **Zod**: Schema validation

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Fonts (External)
- Inter (primary font via Google Fonts)
- Space Grotesk (accent/headline font)
- DM Sans, Geist Mono, Fira Code (additional typography)