# GEMINI.md - Yihao Dong Personal Website

This document provides instructions and context for Gemini CLI when working on this project.

## Project Overview

*   **Purpose:** A professional academic portfolio website for Yihao Dong, a PhD Researcher.
*   **Main Technologies:**
    *   **Framework:** [Svelte 5](https://svelte.dev/) with [SvelteKit](https://kit.svelte.dev/)
    *   **Language:** TypeScript
    *   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
    *   **Deployment:** Vercel (using `@sveltejs/adapter-vercel`)
*   **Architecture:**
    *   **Routing:** File-based routing in `src/routes/`.
    *   **Data Management:** Content is managed through static TypeScript files in `src/lib/data/` (e.g., `publications.ts`, `courses.ts`).
    *   **Components:** Reusable UI components are located in `src/lib/components/`.
    *   **SEO:** Centralized SEO logic and schema.org metadata in `src/lib/utils/seo.ts`.

## Building and Running

*   **Install Dependencies:** `npm install`
*   **Development Server:** `npm run dev`
*   **Production Build:** `npm run build`
*   **Preview Build:** `npm run preview`
*   **Type Check & Lint:** `npm run check`

## Development Conventions

*   **Svelte 5:** Use Svelte 5 runes (`$state`, `$props`, `$derived`, etc.) for reactivity and component logic.
*   **Styling:** Use Tailwind CSS utility classes. Custom font families (`sans: Inter`, `serif: Merriweather`) are configured in `tailwind.config.js`.
*   **Content Updates:** 
    *   Modify `src/lib/data/*.ts` files to update publications, courses, projects, and skills.
    *   Update personal information in `src/lib/utils/seo.ts`, `src/lib/components/Footer.svelte`, and `src/routes/contact/+page.svelte`.
*   **SEO:** Every page should use the `generateSEOTags` utility from `$lib/utils/seo` within a `<svelte:head>` block if page-specific SEO is needed.
*   **Icons:** Favicons and other static assets are in `static/` or `$lib/assets/`.

## Key Files & Directories

*   `src/routes/`: Contains the pages of the website.
*   `src/lib/components/`: Reusable Svelte components (Header, Footer, etc.).
*   `src/lib/data/`: TypeScript files containing the site's content.
*   `src/lib/utils/seo.ts`: SEO configuration and schema generation.
*   `src/app.css`: Global styles and Tailwind imports.
*   `svelte.config.js`: SvelteKit configuration (Vercel adapter).
*   `tailwind.config.js`: Tailwind CSS theme extensions.
