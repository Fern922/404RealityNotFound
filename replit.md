# AR Museum Portal - Replit.md

## Overview

The AR Museum Portal is a modern web application designed for the National Museum of the Philippines - Bohol. It serves as a digital platform showcasing augmented reality capabilities and cultural heritage preservation through interactive web technologies. The application features a sophisticated frontend with 3D animations, team member profiles, capstone project documentation, and an immersive AR-themed user interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom AR-themed design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **3D Graphics**: Three.js for interactive background animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in memory storage with extensible interface

### Build and Development
- **Development**: Hot module replacement with Vite dev server
- **Production**: Bundled with esbuild for server-side code
- **TypeScript**: Strict mode enabled with path mapping for clean imports

## Key Components

### Frontend Components
1. **Three.js Background**: Interactive 3D AR-themed geometric shapes
2. **Modal System**: Reusable modals for team members and capstone projects
3. **Card Components**: Flip cards with hover animations for team display
4. **Navigation**: Responsive header with smooth scrolling navigation
5. **UI Library**: Complete set of accessible components from Shadcn/ui

### Backend Components
1. **Express Server**: RESTful API server with middleware for logging and error handling
2. **Storage Interface**: Abstracted storage layer with in-memory implementation
3. **Route Registration**: Modular route handling system
4. **Vite Integration**: Development server integration for SPA serving

### Data Models
- **User Schema**: Basic user model with username/password fields
- **Team Data**: Static team member information with roles and skills
- **Capstone Data**: Structured academic project documentation with chapters

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **Client Updates**: Query cache invalidation triggers UI updates

## External Dependencies

### Core Libraries
- React ecosystem (React, React-DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with Neon Database adapter
- Three.js for 3D graphics
- Tailwind CSS for styling

### UI and Animation
- Radix UI primitives for accessibility
- Class Variance Authority for component variants
- Embla Carousel for interactive elements
- GSAP integration ready for advanced animations

### Development Tools
- Vite with React plugin and runtime error overlay
- ESBuild for production bundling
- PostCSS with Tailwind processing
- TypeScript compiler with strict configuration

## Deployment Strategy

### Development
- Vite dev server with hot module replacement
- Express server runs separately with tsx for TypeScript execution
- Database migrations handled via Drizzle Kit
- Replit-specific optimizations for cloud development

### Production
- Static assets built and served from Express
- Server bundle created with esbuild
- Environment-based configuration for database connections
- Single-process deployment with static file serving

### Database Management
- Drizzle migrations stored in `/migrations` directory
- PostgreSQL schema defined in shared TypeScript files
- Connection pooling via Neon serverless adapter
- Push-based schema updates for development

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
- July 02, 2025. Updated team member descriptions with detailed personal information (age, location, education, contact details)
- July 02, 2025. Removed contributions section from team member modals to simplify profile display
- July 02, 2025. Updated Capstone 1 timeline from "September 2023 - February 2024" to "June 2 - July 12"
- July 02, 2025. Replaced development process section with original detailed Agile methodology content including 6 phases: Planning, Designing, Development, Testing, Deployment, and Review
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```