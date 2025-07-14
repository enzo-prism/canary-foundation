# Canary Foundation Website

## Overview

This is a full-stack web application for the Canary Foundation, a non-profit organization focused on early cancer detection research and precision medicine. Founded in 2004, the foundation develops breakthrough technologies and biomarkers for detecting cancer at its earliest stages. The application features a modern, responsive design built with React and TypeScript on the frontend, Express.js on the backend, and uses PostgreSQL with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Client**: Neon Database serverless driver
- **Validation**: Zod schemas for request/response validation
- **Development**: tsx for TypeScript execution in development

### Project Structure
- `client/` - Frontend React application
  - `src/pages/home.tsx` - Main homepage with all sections
  - `src/pages/blog.tsx` - Blog page with 2024 authentic content
  - `src/pages/not-found.tsx` - 404 error page
  - `src/components/` - Reusable UI components
- `server/` - Backend Express.js application
- `shared/` - Shared TypeScript types and schemas
- `migrations/` - Database migration files

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contact Messages Table**: Stores contact form submissions with name, email, subject, message, and timestamp

### API Endpoints
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve contact messages (admin functionality)
- `/blog` - Blog page with authentic 2024 Canary Foundation content

### Research Programs Featured
- **Prostate Cancer Program**: PASS study (1,100+ participants), PATROL genetic risk cohort
- **Ovarian Cancer Program**: BRCA pre-cancer atlas, fallopian tube precursor studies
- **Pancreatic Cancer Program**: Advanced ultrasound imaging, POCUS technology
- **Liquid Biopsy Center**: Urine analysis, interstitial fluid research, microneedle patches
- **Molecular Imaging**: Photoacoustic imaging, microbubble contrast agents
- **Education & Training**: NCI R25 CREST program, Phillips Postdoc Fellowship
- **Cyclotron & Radiochemistry Facility**: 36+ FDA-approved radiotracers, radiation safety education
- **Interventional Radiology (IRIS)**: Endovascular neuromodulation, stem cell implantation
- **Lung Cancer Program**: Never-smoker biomarkers, MD Anderson partnerships, community outreach

### Frontend Features
- Multi-page application with smooth scrolling navigation and routing
- Responsive design with mobile-first approach
- Contact form with client-side validation
- Toast notifications for user feedback
- Modern UI components from Radix UI/shadcn
- Yellow and white branding for cancer research focus
- Research program showcases with detailed descriptions
- Impact stories highlighting breakthrough discoveries
- Navigation structure: Home, About Canary, Canary Approach, Canary Science, Blog, Take Action
- Take Action button prominently styled as primary call-to-action
- Canary Approach dropdown: Overview, Canary Collaborations and Partnership, Canary Symposium
- Canary Science dropdown: Overview, Science, Programs, Centers, Publications, Funding by Invitation
- About Canary dropdown: Our Mission, Founder's Story, Impact & Success
- Dedicated blog page with authentic 2022-2024 content from Canary Foundation
- Blog features: search functionality, category filtering, featured posts, external links
- 7 authentic blog posts covering Don Listwin Awards, EDx conferences, and research milestones
- Three years of continuous EDx conference coverage (2022: sold-out, 2023: London with 500 attendees, 2024: San Francisco)
- News & Blog section with recent awards and research updates
- Events section covering conferences, symposiums, and training programs
- Comprehensive timeline with 18+ authentic milestones (2000-2024)
- Leadership section featuring key personnel and Scientific Advisory Board
- Community outreach section highlighting health disparities initiatives
- Financial transparency information with nonprofit status and funding history
- GPU-accelerated animations with scroll-triggered effects

### Storage Layer
- In-memory storage implementation for development (`MemStorage`)
- Database-ready architecture with Drizzle ORM configuration
- Prepared for PostgreSQL production deployment

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated with Zod schema
   - API request sent to `/api/contact` endpoint
   - Server validates data and stores in database
   - Success/error response returned to client
   - Toast notification shown to user

2. **Server-Side Validation**:
   - All API endpoints use Zod schemas for validation
   - Shared schemas between frontend and backend ensure consistency
   - Error handling with proper HTTP status codes

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library
- **Form Management**: React Hook Form with Zod resolvers

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development Tools**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Strict configuration with path aliases
- **Database Migrations**: Drizzle Kit for schema management
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with automatic TypeScript compilation
- In-memory storage for rapid development
- Replit-specific plugins for cloud development

### Production Build
- Frontend built with Vite to static assets
- Backend compiled with esbuild to ES modules
- Database migrations applied with Drizzle Kit
- Environment variables for database connection

### Database Configuration
- PostgreSQL database with Drizzle ORM
- Connection via DATABASE_URL environment variable
- Migration files stored in `/migrations` directory
- Schema definitions in `shared/schema.ts`

### Key Architectural Decisions

1. **Shared Schema Approach**: Uses a shared TypeScript schema file to ensure type safety between frontend and backend, reducing duplication and maintaining consistency.

2. **Memory Storage Pattern**: Implements an in-memory storage layer for development that can be easily swapped for database persistence in production.

3. **Monorepo Structure**: Organizes code into logical directories (client, server, shared) while maintaining a single repository for easier development and deployment.

4. **Component-First UI**: Leverages Radix UI primitives with shadcn/ui styling for accessible, customizable components.

5. **Type-Safe API**: Uses Zod for runtime validation and TypeScript for compile-time safety throughout the application stack.