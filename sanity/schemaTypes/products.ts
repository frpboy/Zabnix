export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Product Title',
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
      name: 'productType',
      type: 'string',
      title: 'Product Type',
      options: {
        list: [
          { title: 'SaaS', value: 'SaaS' },
          { title: 'ERP Tool', value: 'ERP Tool' },
          { title: 'Dashboard', value: 'Dashboard' },
          { title: 'Internal System', value: 'Internal System' },
        ],
      },
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Production', value: 'Production' },
          { title: 'WIP (Work In Progress)', value: 'WIP' },
          { title: 'Internal', value: 'Internal' },
          { title: 'Experimental', value: 'Experimental' },
        ],
      },
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
      title: 'Product Description',
      of: [{ type: 'block' }],
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
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'string' }],
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links / Calls to Action',
      of: [{ type: 'ctaFields' }],
    },
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO Settings',
    },
  ],
}
