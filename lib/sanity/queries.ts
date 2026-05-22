/**
 * Compiled GROQ queries for fetching structured content from Sanity CMS.
 */

// Fetch all team members sorted by display order
export const teamQuery = `*[_type == "team"] | order(displayOrder asc) {
  _id,
  name,
  "slug": slug.current,
  role,
  department,
  bio,
  profileImage {
    asset->{
      _id,
      url
    }
  },
  linkedin,
  featured
}`;

// Fetch leadership members sorted by display order
export const leadershipQuery = `*[_type == "leadership"] | order(displayOrder asc) {
  _id,
  name,
  "slug": slug.current,
  designation,
  biography,
  leadershipMessage,
  profileImage {
    asset->{
      _id,
      url
    }
  },
  linkedin
}`;

// Fetch all services
export const servicesQuery = `*[_type == "services"] {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription,
  features,
  technologies,
  icon {
    asset->{
      _id,
      url
    }
  }
}`;

// Fetch projects / case studies
export const projectsQuery = `*[_type == "projects"] {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  description,
  client,
  industry,
  technologies,
  results,
  coverImage {
    asset->{
      _id,
      url
    }
  },
  gallery[] {
    asset->{
      _id,
      url
    }
  },
  featured
}`;

// Fetch active products
export const productsQuery = `*[_type == "products"] {
  _id,
  title,
  "slug": slug.current,
  productType,
  status,
  shortDescription,
  description,
  features,
  coverImage {
    asset->{
      _id,
      url
    }
  },
  gallery[] {
    asset->{
      _id,
      url
    }
  },
  links
}`;

// Fetch open jobs in careers
export const careersQuery = `*[_type == "careers" && isOpen == true] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  department,
  employmentType,
  locationType,
  location,
  experienceLevel,
  overview,
  responsibilities,
  requirements,
  benefits,
  applicationEmail
}`;

// Fetch blog posts sorted by published date
export const blogQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  coverImage {
    asset->{
      _id,
      url
    }
  },
  publishedAt,
  readTime,
  featured,
  author-> {
    name,
    role,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  categories[]-> {
    title,
    "slug": slug.current
  },
  tags
}`;
