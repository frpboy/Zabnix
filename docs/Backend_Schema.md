# BACKEND SCHEMA ARCHITECTURE (SANITY)

## 1. Schema System Overview

The ZABNIX website uses **Sanity CMS** to model, store, and serve structural content. Next.js fetches data via the **GROQ** query language.

---

## 2. Reusable Schemas (Object Types)

These schema objects are imported and embedded within multiple document types to enforce consistency:

### 2.1 `seoFields` (SEO Metadata)
```typescript
export default {
  name: 'seoFields',
  title: 'SEO Fields',
  type: 'object',
  fields: [
    { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: Rule => Rule.max(60) },
    { name: 'metaDescription', type: 'text', title: 'Meta Description', validation: Rule => Rule.max(160) },
    { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' },
    { name: 'openGraphImage', type: 'image', title: 'OG Image' }
  ]
}
```

### 2.2 `ctaFields` (Call to Action Buttons)
```typescript
export default {
  name: 'ctaFields',
  title: 'CTA Action',
  type: 'object',
  fields: [
    { name: 'label', type: 'string', title: 'Button Text' },
    { name: 'url', type: 'string', title: 'Link Destination (e.g., /contact or external)' },
    { name: 'style', type: 'string', options: { list: ['primary', 'secondary'] } }
  ]
}
```

---

## 3. Core Document Schemas

### 3.1 `team` (Core Team Directory)
- **Document Type:** `document`
- **Fields:**
  - `name` (string, required)
  - `slug` (slug, matching name, unique, required)
  - `role` (string, required)
  - `department` (string, options: `engineering`, `design`, `operations`)
  - `bio` (text, max 150 chars)
  - `profileImage` (image, required, hotspot enabled)
  - `linkedin` (url)
  - `displayOrder` (number, used for custom sorting)
  - `featured` (boolean)

---

### 3.2 `leadership` (Leadership Bios)
- **Document Type:** `document`
- **Fields:**
  - `name` (string, required)
  - `slug` (slug, unique)
  - `designation` (string, e.g., CEO, Tech Lead)
  - `biography` (text, detailed bio)
  - `leadershipMessage` (text, personalized quote)
  - `profileImage` (image, required)
  - `linkedin` (url)
  - `displayOrder` (number)

---

### 3.3 `services` (Engineering Offerings)
- **Document Type:** `document`
- **Fields:**
  - `title` (string, required)
  - `slug` (slug, unique)
  - `icon` (image or code block)
  - `shortDescription` (text, card summary)
  - `fullDescription` (array, block content)
  - `features` (array of strings)
  - `technologies` (array of strings, e.g., Next.js, Node.js, Drizzle)
  - `seo` (type: `seoFields`)

---

### 3.4 `projects` (Case Studies & Portfolio)
- **Document Type:** `document`
- **Fields:**
  - `title` (string, required)
  - `slug` (slug, unique)
  - `coverImage` (image, required)
  - `gallery` (array of images)
  - `shortDescription` (text, required)
  - `description` (array, block content)
  - `client` (string)
  - `industry` (string)
  - `technologies` (array of strings)
  - `results` (array of objects: `{ label: string, value: string }`, e.g., "Speed", "90%")
  - `relatedServices` (array of references to `services`)
  - `featured` (boolean)
  - `seo` (type: `seoFields`)

---

### 3.5 `products` (In-house SaaS & WIP)
- **Document Type:** `document`
- **Fields:**
  - `title` (string, required)
  - `slug` (slug, unique)
  - `productType` (string, options: `SaaS`, `ERP Tool`, `Dashboard`, `Internal System`)
  - `status` (string, options: `Production`, `WIP`, `Internal`, `Experimental`)
  - `shortDescription` (text, required)
  - `description` (array, block content)
  - `coverImage` (image, required)
  - `gallery` (array of images)
  - `features` (array of strings)
  - `links` (array of CTA objects)
  - `seo` (type: `seoFields`)

---

### 3.6 `careers` (Job Openings)
- **Document Type:** `document`
- **Fields:**
  - `title` (string, required)
  - `slug` (slug, unique)
  - `department` (string, options: `Development`, `Design`, `Operations`)
  - `employmentType` (string, options: `Full-time`, `Part-time`, `Contract`, `Internship`)
  - `locationType` (string, options: `Remote`, `Hybrid`, `Onsite`)
  - `location` (string)
  - `experienceLevel` (string)
  - `overview` (text, short summary)
  - `responsibilities` (array of strings)
  - `requirements` (array of strings)
  - `benefits` (array of strings)
  - `isOpen` (boolean, default: true)
  - `applicationEmail` (string, required)

---

### 3.7 `blog` (Insights and News)
- **Document Type:** `document`
- **Fields:**
  - `title` (string, required)
  - `slug` (slug, unique)
  - `excerpt` (text, card preview, required)
  - `content` (array, block content / rich text)
  - `coverImage` (image, required)
  - `publishedAt` (datetime, required)
  - `author` (reference to `author` document)
  - `categories` (array of references to `category` document)
  - `tags` (array of strings)
  - `readTime` (number, minutes)
  - `featured` (boolean)
  - `seo` (type: `seoFields`)

---

## 4. Content Reference Mappings

```
  +----------------------+            +----------------------+
  |       projects       | <--------> |       services       |
  | (Related Services)   |            | (Related Projects)   |
  +----------+-----------+            +----------+-----------+
             |                                   ^
             | One-to-One                        | Referenced In
             v                                   |
  +----------+-----------+                       |
  |     caseStudies      | ----------------------+
  +----------------------+
```

1. **Service-Project Relationship:** Many-to-many relationship mapping projects to the technologies and development services provided.
2. **Author-Blog Relationship:** Dynamic reference allowing singular authors to be mapped across multiple articles.
3. **Category-Blog Relationship:** Reusable categories (e.g. `Healthcare Tech`, `Automation`) mapped to blog index routes.
