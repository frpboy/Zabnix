export default {
  name: 'ctaFields',
  title: 'CTA Action',
  type: 'object',
  fields: [
    { name: 'label', type: 'string', title: 'Button Text' },
    { name: 'url', type: 'string', title: 'Link Destination (e.g., /contact or external)' },
    { name: 'style', type: 'string', title: 'Button Style', options: { list: ['primary', 'secondary'] } }
  ]
}
