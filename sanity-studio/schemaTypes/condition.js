import { defineArrayMember, defineField, defineType } from "sanity";

export const condition = defineType({
  name: "condition",
  title: "Condition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required().max(90),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Hero Summary",
      type: "text",
      rows: 4,
      description:
        "Short opening copy shown on the condition page and condition card.",
      validation: (Rule) => Rule.required().min(80).max(320),
    }),
    defineField({
      name: "image",
      title: "Condition Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description:
        "Optional page image. If empty, the website uses the matching service image.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description:
        "Recommended length: 45-60 characters. Example: Anxiety Psychiatrist in Maryland | Tinka Health",
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Recommended length: 140-160 characters. This may show in Google search results.",
      validation: (Rule) => Rule.required().min(110).max(170),
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required().min(2).max(12),
    }),
    defineField({
      name: "body",
      title: "Page Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: "sections",
      title: "Section Clusters",
      type: "array",
      description:
        "Use these for the condition breakdown layers: overview, symptoms, treatment, access, and related article topics.",
      of: [
        defineArrayMember({
          type: "object",
          name: "sectionCluster",
          title: "Section Cluster",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required().max(90),
            }),
            defineField({
              name: "slug",
              title: "Section Anchor",
              type: "slug",
              options: {
                source: "title",
                maxLength: 80,
              },
            }),
            defineField({
              name: "summary",
              title: "Section Summary",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.max(500),
            }),
            defineField({
              name: "body",
              title: "Section Body",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "Heading 3", value: "h3" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Strong", value: "strong" },
                      { title: "Emphasis", value: "em" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        title: "Link",
                        type: "object",
                        fields: [
                          defineField({
                            name: "href",
                            title: "URL",
                            type: "url",
                            validation: (Rule) =>
                              Rule.uri({
                                allowRelative: true,
                                scheme: ["http", "https", "mailto", "tel"],
                              }),
                          }),
                        ],
                      },
                    ],
                  },
                }),
              ],
            }),
            defineField({
              name: "bullets",
              title: "Quick Bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "links",
              title: "Related Topic Links",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Link Label",
                      type: "string",
                      validation: (Rule) => Rule.required().max(90),
                    }),
                    defineField({
                      name: "slug",
                      title: "Topic Slug",
                      type: "slug",
                      options: {
                        source: "label",
                        maxLength: 96,
                      },
                    }),
                    defineField({
                      name: "summary",
                      title: "Short Summary",
                      type: "text",
                      rows: 2,
                      validation: (Rule) => Rule.max(240),
                    }),
                    defineField({
                      name: "href",
                      title: "Optional URL",
                      type: "url",
                      description:
                        "Use for a live article URL. Leave empty to keep the link inside this section.",
                      validation: (Rule) =>
                        Rule.uri({
                          allowRelative: true,
                          scheme: ["http", "https", "mailto", "tel"],
                        }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "updatedAt",
      title: "Reviewed / Updated Date",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
