export default {
  name: 'projects',
  title: 'Projects & Case Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
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
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'array',
      title: 'Detailed Case Study',
      of: [{ type: 'block' }],
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client Name',
    },
    {
      name: 'industry',
      type: 'string',
      title: 'Industry',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      of: [{ type: 'string' }],
    },
    {
      name: 'results',
      type: 'array',
      title: 'Project Results / Metrics',
      of: [
        {
          type: 'object',
          name: 'metric',
          title: 'Metric',
          fields: [
            { name: 'label', type: 'string', title: 'Metric Label (e.g., Performance)' },
            { name: 'value', type: 'string', title: 'Metric Value (e.g., 99%)' },
          ],
        },
      ],
    },
    {
      name: 'relatedServices',
      type: 'array',
      title: 'Related Services',
      of: [{ type: 'reference', to: [{ type: 'services' }] }],
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      initialValue: false,
    },
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO Settings',
    },
  ],
}
