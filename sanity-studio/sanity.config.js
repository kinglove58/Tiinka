const { defineConfig } = require("sanity");
const { structureTool } = require("sanity/structure");
const { visionTool } = require("@sanity/vision");
const { schemaTypes } = require("./schemaTypes");

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || "production";

module.exports = defineConfig({
  name: "tinkaHealthServices",
  title: "Tinka Health Services",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
