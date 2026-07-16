# Canary Foundation Website

## Overview
This project is a full-stack web application for the Canary Foundation, a non-profit dedicated to early cancer detection research. It aims to showcase the foundation's work, research programs, and impact through a modern, responsive online presence. The application provides comprehensive information about the foundation's mission, scientific approach, leadership, and opportunities for engagement. Key capabilities include displaying detailed research programs, authentic content on various scientific topics, and facilitating user interaction through a contact form.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Design and Technology Stack
The application features a modern, responsive design built with React 18 and TypeScript on the frontend, utilizing Radix UI components with shadcn/ui and Tailwind CSS for styling. The backend is powered by Express.js with TypeScript. Data management is handled by PostgreSQL with Drizzle ORM.

### Frontend Architecture Decisions
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI System**: Radix UI components with shadcn/ui for accessible and customizable UI
- **Styling**: Tailwind CSS for utility-first styling and custom theming
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side navigation
- **Forms**: React Hook Form with Zod for robust form handling and validation

### Backend Architecture Decisions
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe query building
- **Validation**: Zod schemas for API request and response validation, ensuring data integrity across the stack
- **Development**: tsx for efficient TypeScript execution

### Core System Design
- **Shared Schema Approach**: Utilizes a shared TypeScript schema between frontend and backend to ensure type safety and consistency.
- **Monorepo Structure**: Organizes `client/`, `server/`, and `shared/` directories within a single repository for streamlined development.
- **Database Schema**: Includes `Users` for basic management and `Contact Messages` for form submissions (defined in `shared/schema.ts`).
- **Contact storage**: Submissions persist to Postgres (Neon) via Drizzle when `DATABASE_URL` is set; otherwise an in-memory fallback is used (not retained across restarts). See `server/storage.ts` and `server/db.ts`.
- **API Endpoints**: `POST /api/contact` accepts Zod-validated form submissions. `GET /api/contact` returns submissions for admins and is gated by `CONTACT_ADMIN_TOKEN` (Bearer auth); it is disabled (404) when no token is configured.
- **Contact protections**: Requests have a 32 KB size limit, bounded field lengths, a hidden honeypot, and an in-memory per-IP rate limit. Successful responses distinguish durable Postgres storage (`201`) from temporary in-memory acceptance (`202`).
- **Multi-page Application**: Supports extensive content through dedicated navigation pages for "About Canary", "Canary Approach", and "Canary Science", each with detailed sub-sections and authentic content.
- **Responsive Design**: Mobile-first approach for optimal viewing across devices.
- **SEO Enhancements**: Implemented comprehensive sitemap generation, dynamic priority and change frequencies, and robust 301 redirect middleware for legacy URLs to preserve SEO value.
- **HTTP hardening**: Unknown routes return real `404` responses, page 404s are `noindex`, hashed assets are immutable-cached, HTML is `no-store`, and baseline security headers include a report-only CSP and Permissions Policy.
- **Analytics Integration**: Google Analytics 4 is integrated for tracking page views, user interactions, and specific events like form submissions and CTA clicks.

### Deployment
- **Platform**: Replit autoscale deployment. Build and run commands live in `.replit` (`build = npm run build`, `run = npm run start`).
- **Production runtime**: the bundled Express server at `dist/index.js` (not a static host). It serves the SPA and performs server-side per-route metadata/JSON-LD injection, legacy 301 redirects, `www`→apex canonicalization, crawler-asset serving, and security headers.
- **SEO/meta source of truth**: route metadata and JSON-LD builders live in `shared/seo.ts`, consumed by both the Express server (`server/vite.ts`) and the client router (`client/src/App.tsx`) so server-rendered HTML and client navigation stay in sync.

### Team Updates / Program Progress
- **Archive route**: `/science/programs/team-updates` lists only records with `status: "published"` and `approvedForPublicUse: true`.
- **Approved detail route**: `/science/programs/team-updates/ovarian-june-2026` presents the June 2026 ovarian update in a reusable report layout.
- **Content model**: `client/src/data/team-updates.ts` holds only approved public records. `client/src/components/team-updates/` owns shared archive/detail presentation. Public routes must also be added to `shared/seo.ts` and `seo/routes.json`.
- **Private preparation**: Prostate, pancreas, Q4, and CTUC are content-free pending shells in `internal/team-update-shells.ts`, a module that must never be imported by `client/`. They contain no report facts, routes, metadata, or assets and do not enter the public browser bundle.
- **Source and safety**: The ovarian copy mirrors Heidi's final donor-friendly PDF. Never reintroduce the confidential draft terms `CRABp2`, `ORF1p`, or `165 cases`. Run `npm run test:team-updates` and follow `docs/team-update-publication-workflow.md` before publication.

### Blog Content Model (2026 Update)
- **Data source**: Blog listing and detail pages are fully data-driven from `client/src/data/blog-posts.ts`.
- **Ordering**: Posts are sorted by `publishedDate ?? date` so recently published content appears first, while preserving historical source dates.
- **Date semantics**: `date` represents the content-native date (for example recording date), `publishedDate` represents when the Canary blog entry was published, and `dateLabel` provides explicit context like `Recorded`.
- **Shared logic**: Sorting and display labels are centralized in `client/src/lib/blog-post-utils.ts` and used by both `client/src/pages/blog.tsx` and `client/src/pages/blog-post.tsx`.
- **Filtering behavior**: Category filters only filter by `category`; they do not apply separate featured-only rendering paths.

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Form Management**: React Hook Form, Zod
- **Analytics**: Google Analytics 4

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM
- **Session Management**: connect-pg-simple (for PostgreSQL sessions)

### Development Tools
- **Build**: Vite
- **TypeScript**: Strict configuration
- **Database Migrations**: Drizzle Kit
