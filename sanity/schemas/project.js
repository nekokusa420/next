export default {
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    {name: 'Title', title: 'Title', decription: 'Title of the project', type: 'string'},
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {hotspot: true},
    },

    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
  ],
}
