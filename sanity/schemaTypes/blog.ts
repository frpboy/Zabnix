export default {
  name: 'blog',
  title: 'Blog / Insights',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt / Summary',
      description: 'Used for cards and list previews.',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Blog Post Content',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    },
    {
      name: 'readTime',
      type: 'number',
      title: 'Read Time (Minutes)',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      initialValue: false,
    },
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO Settings',
    },
  ],
}
