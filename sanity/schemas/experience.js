export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'jobTitle', title: 'JobTitle', type: 'string'},
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      option: {hotspot: true},
    },

    {
      name: 'company',
      title: 'Company',
      type: 'text',
    },
    {
      name: 'dataStarted',
      title: 'DataStarted',
      type: 'date',
    },
    {
      name: 'dataEnded',
      title: 'DataEndedd',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    },

    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
    {
      name: 'points',
      title: '{Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
