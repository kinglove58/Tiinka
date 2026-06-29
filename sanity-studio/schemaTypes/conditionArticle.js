import { defineArrayMember, defineField, defineType } from "sanity";

const richTextBlocks = [
  defineArrayMember({
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "Heading 2", value: "h2" },
      { title: "Heading 3", value: "h3" },
      { title: "Quote", value: "blockquote" },
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
];

export const conditionArticle = defineType({
  name: "conditionArticle",
  title: "Condition Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      description:
        "This is the card title and article H1. Example: Adult ADHD: Symptoms, Causes, Treatments.",
      validation: (Rule) => Rule.required().max(110),
    }),
    defineField({
      name: "slug",
      title: "Article URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "condition",
      title: "Condition Hub",
      type: "reference",
      to: [{ type: "condition" }],
      description:
        "Choose the condition page where this article should appear.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section",
      title: "Condition Section",
      type: "reference",
      to: [{ type: "conditionSection" }],
      description:
        "Choose the breakdown section where this card belongs. Select the condition above first.",
      options: {
        filter: ({ document }) => {
          const conditionId = document?.condition?._ref;

          if (!conditionId) {
            return {
              filter: "defined(condition._ref)",
              params: {},
            };
          }

          return {
            filter: "condition._ref == $conditionId",
            params: { conditionId },
          };
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Card Summary",
      type: "text",
      rows: 3,
      description:
        "Short card text shown on the condition hub and used as fallback meta description.",
      validation: (Rule) => Rule.required().min(40).max(240),
    }),
    defineField({
      name: "image",
      title: "Article Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imageUrl",
      title: "Static Image URL",
      type: "string",
      description:
        "Optional. Use a public image path if the article image is stored in the website files.",
      validation: (Rule) => Rule.max(260),
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
      validation: (Rule) => Rule.max(140),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description:
        "Recommended length: 45-60 characters. Leave blank to use the article title.",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Recommended length: 140-160 characters. Leave blank to use the card summary.",
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
      validation: (Rule) => Rule.max(12),
    }),
    defineField({
      name: "body",
      title: "Article Body",
      type: "array",
      of: richTextBlocks,
      description:
        "Full article content for the article page. The Article Title is the page H1. Use Heading 2 / Heading 3 from the style dropdown for body sections, or paste headings as ## Heading / ### Heading.",
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: "order",
      title: "Display Order Within Section",
      type: "number",
      description:
        "Lower numbers show first inside the selected section.",
      initialValue: 10,
      validation: (Rule) => Rule.required().min(0).integer(),
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
      condition: "condition.title",
      section: "section.title",
      order: "order",
      media: "image",
    },
    prepare({ title, condition, section, order, media }) {
      return {
        title,
        subtitle: `${condition || "No condition"} · ${
          section || "No section"
        }${order != null ? ` · Order ${order}` : ""}`,
        media,
      };
    },
  },
});
