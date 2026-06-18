const { defineCliConfig, getStudioEnvironmentVariables } = require("sanity/cli");
const studioEnv = getStudioEnvironmentVariables({
  envFile: {
    mode: "development",
    envDir: process.cwd(),
  },
});

const projectId =
  studioEnv.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID;
const dataset =
  studioEnv.SANITY_STUDIO_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  process.env.SANITY_DATASET ||
  "production";

module.exports = defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
