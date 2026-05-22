# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## 1. Project Overview

| Project Property | Value |
| :--- | :--- |
| **Project Name** | ZABNIX Website Platform |
| **Company** | ZABNIX (Sahakar IT Solution) |
| **Project Type** | Corporate Software Company Website with Headless CMS |
| **Design Vibe** | Minimal Futuristic Enterprise (Dark primary, electric blue glow, smooth scroll) |
| **Primary Goal** | Establish ZABNIX's brand identity, build digital trust, and drive inbound business leads. |

ZABNIX is a forward-looking software engineering company that builds scalable digital ecosystems, custom enterprise platforms (ERP/CRM), mobile applications, AI automation tools, and cloud integrations. 

This product requirements document establishes the goals, target audience, core features, and non-functional requirements for the ZABNIX corporate web presence.

---

## 2. Business Objectives & KPIs

### 2.1 Primary Objectives
- **Lead Generation:** Capture inbound business inquiries for software development, ERP, and AI integrations.
- **Brand Authority:** Establish ZABNIX as an enterprise-capable technology partner, backed by the real-world operational weight of the Sahakar Medicals & Surgicals ecosystem.
- **Product & Portfolio Showcase:** Showcase internal/WIP products and custom client projects to demonstrate execution capabilities.
- **Recruitment Engine:** Attract high-caliber developers, designers, and operations personnel through structured job postings and resume collection.

### 2.2 Success Metrics (KPIs)
- **Lead Conversions:** Number of contact form submissions and Calendly meeting bookings.
- **Engagement Duration:** Time spent exploring the interactive system visualization and project case studies.
- **Recruitment Inflow:** Volume of qualified career applications and resume uploads.
- **Search Performance:** High organic search indexing for target keywords (e.g., enterprise software systems, healthcare ERP).

---

## 3. Target Audience

1. **Startups & Scaleups:** Seeking agile MVP development, SaaS architecture, and UI/UX design.
2. **Hospitals & Pharmacies (Healthcare):** Seeking custom management software, HIPAA-compliant flows, and inventory integration (synergized with Sahakar's footprint).
3. **SMEs & Enterprises:** Seeking legacy modernization, cloud migrations, workflow automation, and custom ERP systems.
4. **Job Seekers / Tech Talent:** Developers and designers looking for an innovative, tech-first culture.
5. **Sahakar IT Ecosystem:** Internal stakeholders evaluating development capabilities for parent/partner companies.

---

## 4. Brand & Experience Guidelines

### 4.1 Positioning Statement
> "Building scalable digital systems for modern businesses."

### 4.2 Brand Personality & Tone
- **Personality:** Futuristic, Intelligent, Bold, Premium, and Technically Solid. 
- **Tone:** Confident, minimalistic, clear, and engineering-centric. Avoids excessive jargon but remains technically precise.
- **Visual Vibe:** "A modern digital operating system." Sleek dark theme, sharp geometric layouts, and high-impact typographic hierarchy.

---

## 5. Core Feature Matrix

| Feature Module | Description | Key Requirements | CMS Managed |
| :--- | :--- | :--- | :--- |
| **Homepage** | High-impact landing page with cinematic intro and sections. | Smooth cinematic loader, hero layout, services showcase, interactive ecosystem, products, projects, team, testimonials, and contact. | Yes |
| **About Page** | Company history, backing (Sahakar connection), and vision. | Compelling copy explaining how ZABNIX supports complex physical operations. | Yes |
| **Services Page** | Deep dive into ZABNIX's core engineering capabilities. | Interactive breakdowns of Web, Mobile, ERP, AI, Cloud, APIs, and UI/UX. | Yes |
| **Solutions Page** | Focuses on operational solutions (e.g., Automation, ERP). | Structured around client business problems and operational benefits. | Yes |
| **Industries Page** | Showcases specific domain experience. | Custom layouts for Healthcare, Education, Enterprise, Retail, and Startups. | Yes |
| **Products Page** | Showcases ZABNIX proprietary tools and active WIPs. | Screen mocks, feature cards, and direct inquiries for tools/SaaS. | Yes |
| **Projects / Portfolio** | Case-study style catalog of built systems. | High-fidelity screenshots, tech badges, problem-solution metrics. | Yes |
| **Team / Leadership** | Introducing the human intelligence driving the systems. | High-quality portraits, roles, brief bios, and social links. | Yes |
| **Careers Page** | Listing of open job positions with application mechanism. | Employment/location tags, job requirements, resume uploader. | Yes |
| **Blog / Insights** | Publication engine for tech deep-dives and company news. | Dynamic reading progress bar, categories (AI, Eng, Updates), SEO metadata. | Yes |
| **Contact System** | Multifaceted lead capturing mechanism. | Email forms, WhatsApp links, Calendly embed, and direct call buttons. | Yes |

---

## 6. Functional & User Flows

```
[Business Client] ---> Homepage ---> Services/Ecosystem ---> Projects ---> Contact (Lead)
[Job Seeker]     ---> Careers  ---> Open Position      ---> Application ---> Resume Upload
[Tech Reader]     ---> Blog     ---> Tech Insights     ---> Inline CTA  ---> Lead Gen
```

### 6.1 Lead Generation Flow
1. User lands on the homepage, captivated by the cinematic loading animation and clean geometric hero layout.
2. User scrolls through the **Interactive Ecosystem Visualization** and evaluates the horizontally scrolled **Services Cards**.
3. User navigates to a **Project Case Study** to verify execution proof.
4. User clicks "Start a Project" and is directed to a unified contact panel (Forms, Calendly booking, or instant WhatsApp).

### 6.2 Careers Flow
1. Applicant lands on `/careers` and filters positions by department (Development, Design, Operations) or location type (Remote, Hybrid, Onsite).
2. Applicant clicks on a job posting to view structured responsibilities and requirements.
3. Applicant fills out the application form directly on the page, uploads a PDF resume, and submits.
4. Submission triggers a secure webhook notifying the recruitment stakeholder.

---

## 7. Non-Functional Requirements

### 7.1 Performance & Accessibility
- **Lighthouse Score:** Target 90+ across all metrics (Performance, Accessibility, Best Practices, SEO).
- **Core Web Vitals:** First Contentful Paint (FCP) < 1.5s, Cumulative Layout Shift (CLS) < 0.1.
- **Contrast & Semantic HTML:** Adherence to WCAG 2.1 AA readability standards using native semantic HTML layouts.
- **Mobile Adaptability:** Lighter animations on mobile devices to save battery, CPU, and prevent layout thrashing.

### 7.2 Security & Data
- **Spam Protection:** Honeypot implementation and rate-limiting on forms.
- **Secure Uploads:** Resume file size caps (< 5MB) and format enforcement (PDF/DOCX only).
- **CMS Isolation:** Multi-factor authentication for Sanity Studio and credential safety via Vercel environment variables.
