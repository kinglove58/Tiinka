import { defineArrayMember, defineField, defineType } from "sanity";

export const condition = defineType({
  name: "condition",
  title: "Condition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Condition Hub Title",
      type: "string",
      description:
        "The main condition hub name. Example: ADHD, Anxiety, Depression, Bipolar Disorder.",
      validation: (Rule) => Rule.required().max(90),
    }),
    defineField({
      name: "slug",
      title: "Condition Slug",
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
        "Controls the WebMD-style hub URL. Example: add-adhd creates /add-adhd/default.htm. Leave blank to use the condition slug.",
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
      title: "Hub Intro Body",
      type: "array",
      description:
        "Optional intro content that appears before the section/article clusters.",
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
