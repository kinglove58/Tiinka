/* global process */

import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const generatedConditionsPath = path.join(
  __dirname,
  "src",
  "generated",
  "sanityConditions.js",
);

const originalConditions = fs.existsSync(generatedConditionsPath)
  ? fs.readFileSync(generatedConditionsPath)
  : null;

const runNodeScript = (scriptName) => {
  const result = spawnSync(process.execPath, [scriptName], {
    cwd: __dirname,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${scriptName} exited with code ${result.status}`);
  }
};

try {
  runNodeScript("generate-sanity-content.js");
  runNodeScript("generate-sitemap.js");
  console.log("Local sitemap synchronized with published Sanity content.");
} finally {
  if (originalConditions) {
    fs.writeFileSync(generatedConditionsPath, originalConditions);
  } else if (fs.existsSync(generatedConditionsPath)) {
    fs.rmSync(generatedConditionsPath);
  }
}
