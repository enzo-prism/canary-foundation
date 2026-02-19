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
- **Database Schema**: Includes `Users` for basic management and `Contact Messages` for form submissions.
- **API Endpoints**: Key endpoints include `POST /api/contact` for form submissions and `GET /api/contact` (admin).
- **Multi-page Application**: Supports extensive content through dedicated navigation pages for "About Canary", "Canary Approach", and "Canary Science", each with detailed sub-sections and authentic content.
- **Responsive Design**: Mobile-first approach for optimal viewing across devices.
- **SEO Enhancements**: Implemented comprehensive sitemap generation, dynamic priority and change frequencies, and robust 301 redirect middleware for legacy URLs to preserve SEO value.
- **Analytics Integration**: Google Analytics 4 is integrated for tracking page views, user interactions, and specific events like form submissions and CTA clicks.

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
