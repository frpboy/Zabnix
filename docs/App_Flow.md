# APP FLOW DOCUMENT

## 1. App Flow Overview

The ZABNIX website is structured to guide visitors through a progressive storytelling funnel:

```
[ Loader ] ---> [ Hero (Visual Hook) ] ---> [ Ecosystem (Scale & Capability) ]
                                                        |
                                                        v
[ Contact / Calendly ] <--- [ Case Studies ] <--- [ Services & Products ]
```

---

## 2. Navigation Architecture (Sitemap)

The directory structure maps directly to the public routes:

```
/ (Homepage)
├── /about (Ecosystem, Parent connection, Company history)
├── /services (Detailed custom software capabilities)
├── /solutions (Problem-oriented workflow integrations)
├── /industries (Sector capabilities: Healthcare, Enterprise, Retail)
├── /products (In-house SaaS products and active WIPs)
├── /projects (Completed portfolio case studies)
├── /team (Leadership profiles and developer directory)
├── /careers (Job search and application form)
├── /blog (Technical documentation and industry updates)
└── /contact (Lead submission and meeting schedules)
```

---

## 3. Detailed Homepage Journey

The homepage functions as a single unified narrative:

| Section | Scroll Depth | Visual Transition | User Goal |
| :--- | :--- | :--- | :--- |
| **0. Loader** | 0% (Entrance) | Fade-up + vertical wipe. | Visual introduction. |
| **1. Hero** | 0% - 15% | Smooth fade reveal, grid line draw-in. | Understand what ZABNIX is instantly. |
| **2. Ecosystem** | 15% - 30% | Layered diagram reveal (3D grid draw-in).| Establish ZABNIX's operational scale. |
| **3. Services** | 30% - 48% | Horizontal track reveal (scroll locking).| Discover engineering disciplines. |
| **4. Industries**| 48% - 60% | Interactive tabs, dynamic grid changes. | Confirm ZABNIX's industry vertical fits. |
| **5. Products** | 60% - 72% | Interactive device mocks slide in. | See active in-house software (credibility). |
| **6. Projects** | 72% - 85% | Image hover expansion, case cards. | Review proof of execution. |
| **7. CTA Footer**| 85% - 100% | Electric glow pulse expansion. | Convert through meeting or WhatsApp. |

---

## 4. User Interaction Flows

### 4.1 Business Client Conversion Loop (Start a Project)
```
[ Land on Homepage ] ---> [ Click "Start a Project" (Hero or Navbar) ]
                                     |
                                     v
                       [ Unified Contact Panel ]
                         ├── Option A: Calendly Scheduler (Direct meeting lock)
                         ├── Option B: Instant WhatsApp Chat (Real-time talk)
                         └── Option C: Custom Form (Project detail drop)
                                     |
                                     v
                       [ Redirect to Success Route ]
```

---

### 4.2 Candidate Application Loop (Join the Team)
```
[ Land on /careers ] ---> [ Filter by Department/Location ] ---> [ Open Job Card ]
                                                                       |
                                                                       v
                                                              [ Read Job PRD ]
                                                                       |
                                                                       v
                                                               [ Apply Form ]
                                                                 ├── Inputs: Name, Email
                                                                 └── Upload: PDF Resume
                                                                       |
                                                                       v
                                                               [ Submit API ]
                                                                       |
                                                                       v
                                                               [ Success State ]
```

---

### 4.3 Content Consumption Loop (Technical Blog)
1. **Discover:** Reader lands on `/blog` via search results or homepage highlights.
2. **Filter:** Reader filters articles using category badges (e.g., `AI & Automation`, `Web Architecture`, `Company News`).
3. **Read:** Reader enters the dynamic blog post route (`/blog/[slug]`).
   - A **Reading Progress Bar** displays at the top of the viewport.
   - An **Estimated Reading Time** counter appears near the title.
4. **Convert:** An inline CTA appears at the 50% scroll mark, directing readers to contact Zabnix if they are facing a similar business challenge.

---

## 5. System Content Loops (Headless CMS Update)

```
[ Admin Editor ] ---> [ Modifies Project Card in Sanity ] ---> [ Clicks Publish ]
                                                                      |
                                                                      v
                                                            [ Sanity API Update ]
                                                                      |
                                                                      v
                                                            [ Vercel Webhook ]
                                                                      |
                                                                      v
                                                            [ Revalidate Cache ]
```

1. **Trigger:** The ZABNIX content manager adds a new project inside the Sanity Studio interface.
2. **Sync:** Clicking "Publish" commits the JSON data to Sanity's content lake.
3. **Revalidation:** Next.js matches the updated query parameters, invalidates the previous static file, and replaces it with the updated layout containing the new project cards within 60 seconds (ISR).
