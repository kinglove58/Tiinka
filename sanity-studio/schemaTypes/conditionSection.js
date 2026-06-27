import { defineField, defineType } from "sanity";

export const conditionSection = defineType({
  name: "conditionSection",
  title: "Condition Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description:
        "The breakdown layer on the condition hub. Examples: Overview, Symptoms, Treatment, Medication Management.",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "condition",
      title: "Condition Hub",
      type: "reference",
      to: [{ type: "condition" }],
      description:
        "Choose the condition page where this section should appear.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Section Summary",
      type: "text",
      rows: 3,
      description:
        "Optional intro copy shown above this section's article cards.",
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: "image",
      title: "Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description:
        "Optional left-side image for this breakdown. If empty, the condition image is used.",
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
      validation: (Rule) => Rule.max(140),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Lower numbers appear first. Example: 10 for Overview, 20 for Symptoms.",
      initialValue: 10,
      validation: (Rule) => Rule.required().min(0).integer(),
    }),
    defineField({
      name: "visibleCount",
      title: "Cards Before View More",
      type: "number",
      description:
        "How many articles to show before the View more button appears.",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(12).integer(),
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
      order: "order",
      media: "image",
    },
    prepare({ title, condition, order, media }) {
      return {
        title,
        subtitle: `${condition || "No condition selected"}${
          order != null ? ` · Order ${order}` : ""
        }`,
        media,
      };
    },
  },
});
