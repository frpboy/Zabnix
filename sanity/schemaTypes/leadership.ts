export default {
  name: 'leadership',
  title: 'Leadership Bios',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'designation',
      type: 'string',
      title: 'Designation / Title',
      description: 'e.g., CEO, Tech Lead',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'biography',
      type: 'text',
      title: 'Detailed Biography',
    },
    {
      name: 'leadershipMessage',
      type: 'text',
      title: 'Leadership Message / Personalized Quote',
      rows: 4,
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL',
    },
    {
      name: 'displayOrder',
      type: 'number',
      title: 'Display Order',
      description: 'Used to sort leadership members on the website.',
    },
  ],
}
