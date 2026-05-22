export default {
  name: 'seoFields',
  title: 'SEO Fields',
  type: 'object',
  fields: [
    { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (Rule: any) => Rule.max(60) },
    { name: 'metaDescription', type: 'text', title: 'Meta Description', validation: (Rule: any) => Rule.max(160) },
    { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' },
    { name: 'openGraphImage', type: 'image', title: 'OG Image' }
  ]
}
