export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
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
      name: 'icon',
      type: 'image',
      title: 'Service Icon',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'Used for card summaries and lists.',
      rows: 3,
    },
    {
      name: 'fullDescription',
      type: 'array',
      title: 'Full Description',
      of: [{ type: 'block' }],
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features Offered',
      of: [{ type: 'string' }],
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      of: [{ type: 'string' }],
    },
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO Settings',
    },
  ],
}
