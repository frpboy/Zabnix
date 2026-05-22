export default {
  name: 'careers',
  title: 'Careers / Job Openings',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Job Title',
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
      name: 'department',
      type: 'string',
      title: 'Department',
      options: {
        list: [
          { title: 'Development', value: 'Development' },
          { title: 'Design', value: 'Design' },
          { title: 'Operations', value: 'Operations' },
        ],
      },
    },
    {
      name: 'employmentType',
      type: 'string',
      title: 'Employment Type',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
    },
    {
      name: 'locationType',
      type: 'string',
      title: 'Location Type',
      options: {
        list: [
          { title: 'Remote', value: 'Remote' },
          { title: 'Hybrid', value: 'Hybrid' },
          { title: 'Onsite', value: 'Onsite' },
        ],
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      initialValue: 'Bangalore, India',
    },
    {
      name: 'experienceLevel',
      type: 'string',
      title: 'Experience Level',
      description: 'e.g., Mid-Senior, Junior, 3+ years',
    },
    {
      name: 'overview',
      type: 'text',
      title: 'Job Overview / Summary',
      rows: 3,
    },
    {
      name: 'responsibilities',
      type: 'array',
      title: 'Key Responsibilities',
      of: [{ type: 'string' }],
    },
    {
      name: 'requirements',
      type: 'array',
      title: 'Requirements / Qualifications',
      of: [{ type: 'string' }],
    },
    {
      name: 'benefits',
      type: 'array',
      title: 'Benefits & Perks',
      of: [{ type: 'string' }],
    },
    {
      name: 'isOpen',
      type: 'boolean',
      title: 'Is Open / Recruiting',
      initialValue: true,
    },
    {
      name: 'applicationEmail',
      type: 'string',
      title: 'Application Email Address',
      validation: (Rule: any) => Rule.required().email(),
    },
  ],
}
