# Changelog

All notable changes to the Zabnix website platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-05-22

### Changed
- **Brand Realignment & Copywriting Refactor:**
  - Repositioned the corporate platform from a speculative "Silicon Valley concept startup" to an authentic, high-integrity engineering software division backed by the **Sahakar Group**.
  - Rewrote the main home hero, ecosystem pillars, and executive board statements to focus on real-world operational systems (cooperative credit ledgers, healthcare ERPs, fleet logistics tracking) instead of artificial metrics (e.g. 90k req/s, edge nodes, trading latency).
  - Repositioned core product listings ("Zabnix Core," "Kronos ERP," and "Helios Analytics") as internally deployed enterprise frameworks.
  - Refactored `/projects` and Case Study details pages to detail ledger migrations, supply-chain trackers, and clinic management.
  - Grounded `/team` member descriptions, naming (renamed fictional profiles), roles (focusing on databases, systems architecture, compliance audits), and expertise fields.
  - Grounded `/careers` page active listings, responsibilities, qualification requirements, and evaluation protocols.
  - Aligned company origin narratives in `/about` and homepage about preview to reflect our focus on cooperative systems, logistics, and healthcare databases.
- **Bug Fixes:**
  - Replaced missing Lucide brand icons (`Github`, `Linkedin` removed in Lucide v1.x.x) with custom, lightweight inline SVGs inside `app/team/page.tsx` to fix Turbopack build failure.

## [0.1.0] - 2026-05-22

### Added
- **Project Scaffolding:** Bootstrapped Next.js 16.2.6 workspace featuring React 19.2.4 and Tailwind CSS v4 support.
- **Sanity CMS Schema Core:** Programmed primary schemas for team directories, leadership bios, core services, project case studies, and corporate blog structures under `sanity/schemaTypes/`.
- **Global Theme Engine:** Created modular layout styles in `app/globals.css` with responsive cyber grids, smooth scroll behaviors, and glowing overlay layers.
- **Fluid Layout Provider:** Integrated Lenis smooth scrolling and Framer Motion micro-animations.
- **Corporate Routes & Dynamic Templates:** Added page blueprints for:
  - `/about` - Historical backing and strategic alignments.
  - `/careers` & `/careers/[slug]` - Job listings with resume ingestion paths.
  - `/blog` & `/blog/[slug]` - Filterable articles engine.
  - `/industries` - Sector capabilities panel.
  - `/products` - Custom specifications matrix and license requests.
  - `/projects` & `/projects/[slug]` - Filterable case studies and detail templates.
  - `/team` - Leadership and dev roster structures.
  - `/contact` - Transmission email interface with integrated Calendly scheduling.
- **Initial Documentation:** Created PRD, TRD, App Flow, UI/UX Design specs, and initial Implementation Plan.
