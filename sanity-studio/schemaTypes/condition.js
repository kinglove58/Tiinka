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
      name: "pathSlug",
      title: "Public URL Path Slug",
      type: "slug",
      description:
        "Controls the WebMD-style URL. Example: add-adhd creates /add-adhd/default.htm.",
      options: {
        source: "title",
        maxLength: 80,
      },
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
              name: "topics",
              title: "Topic Pages",
              type: "array",
              description:
                "Add topic cards under this cluster. Each topic becomes its own page, for example /add-adhd/adhd-in-adults.htm.",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "conditionTopic",
                  title: "Condition Topic",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Topic Title",
                      type: "string",
                      validation: (Rule) => Rule.required().max(110),
                    }),
                    defineField({
                      name: "slug",
                      title: "Topic URL Slug",
                      type: "slug",
                      options: {
                        source: "title",
                        maxLength: 96,
                      },
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "summary",
                      title: "Topic Brief",
                      type: "text",
                      rows: 3,
                      description:
                        "Short card text shown on the condition hub page.",
                      validation: (Rule) => Rule.required().min(40).max(240),
                    }),
                    defineField({
                      name: "image",
                      title: "Topic Image",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                    }),
                    defineField({
                      name: "seoTitle",
                      title: "SEO Title",
                      type: "string",
                      validation: (Rule) => Rule.max(70),
                    }),
                    defineField({
                      name: "metaDescription",
                      title: "Meta Description",
                      type: "text",
                      rows: 3,
                      validation: (Rule) => Rule.max(170),
                    }),
                    defineField({
                      name: "keywords",
                      title: "SEO Keywords",
                      type: "array",
                      of: [defineArrayMember({ type: "string" })],
                      options: {
                        layout: "tags",
                      },
                    }),
                    defineField({
                      name: "body",
                      title: "Topic Article Body",
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
                    }),
                    defineField({
                      name: "href",
                      title: "Optional External/Internal URL",
                      type: "url",
                      description:
                        "Only use this when the card should link somewhere else instead of creating a topic page.",
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
            defineField({
              name: "links",
              title: "Legacy Related Links",
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
