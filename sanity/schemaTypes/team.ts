export default {
  name: 'team',
  title: 'Team Directory',
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
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'department',
      type: 'string',
      title: 'Department',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Design', value: 'design' },
          { title: 'Operations', value: 'operations' },
        ],
      },
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography',
      rows: 3,
      validation: (Rule: any) => Rule.max(150),
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
      description: 'Used to sort team members on the website.',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false,
    },
  ],
}
