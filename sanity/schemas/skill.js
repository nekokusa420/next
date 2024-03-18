export default {
  name: "skill",
  title: "Skill",
  type: "document",

  fields: [
    {
      name: "Title",
      title: "Title",
      decription: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      decription: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
