const { getCliClient } = require("@sanity/cli");

const createSlug = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const preferredPathSlugs = {
  "Attention Deficit Hyperactivity Disorder": "add-adhd",
  "Obsessive Compulsive Disorder": "ocd",
  "Post Traumatic Stress Disorder": "ptsd",
  "Autism Spectrum Disorder": "autism",
};

const main = async () => {
  const { default: servicesDataList } = await import(
    "../../Tinka/src/pages/services/serviceData.js"
  );
  const { getConditionImage } = await import(
    "../../Tinka/src/pages/conditions/conditionImageData.js"
  );
  const client = getCliClient({ apiVersion: "2025-06-16" });
  const shouldApply = process.argv.includes("--apply");
  const patches = [];

  for (const service of servicesDataList) {
    if (service.name === "Attention Deficit Hyperactivity Disorder") continue;

    const image = getConditionImage(service.name);
    if (!image) continue;

    const serviceSlug = createSlug(service.id || service.name);
    const pathSlug = preferredPathSlugs[service.name] || serviceSlug;
    const conditionId = `condition-${pathSlug}`;
    const hubId = `drafts.${conditionId}`;
    const childIds = await client.fetch(
      `*[
        _id in path("drafts.**") &&
        _type in ["conditionSection", "conditionArticle"] &&
        condition._ref == $conditionId
      ]._id`,
      { conditionId },
      { perspective: "raw" },
    );

    const hubExists = await client.fetch(
      `count(*[_id == $hubId]) > 0`,
      { hubId },
      { perspective: "raw" },
    );
    const publishedHubExists = await client.fetch(
      `count(*[_id == $conditionId]) > 0`,
      { conditionId },
      { perspective: "raw" },
    );

    if (hubExists) {
      patches.push({
        id: hubId,
        values: { imageUrl: image.src, imageAlt: image.alt },
      });
    }

    if (publishedHubExists) {
      patches.push({
        id: conditionId,
        values: { imageUrl: image.src, imageAlt: image.alt },
      });
    }

    const conditionRecordCount = childIds.length + (hubExists ? 1 : 0);
    if (conditionRecordCount !== 25) {
      console.log(
        `${service.name}: found ${conditionRecordCount}/25 editable draft records (draft hub: ${hubExists}, published hub: ${publishedHubExists}, draft children: ${childIds.length}).`,
      );
    }

    childIds.forEach((id) => {
      patches.push({ id, values: { imageUrl: image.src } });
    });
  }

  const batchSize = 100;
  let processed = 0;

  console.log(`Prepared ${patches.length} Sanity draft image updates.`);

  if (!shouldApply) {
    console.log("Dry run only. Re-run with --apply to update the image paths.");
    return;
  }

  for (let index = 0; index < patches.length; index += batchSize) {
    const batch = patches.slice(index, index + batchSize);
    let transaction = client.transaction();

    batch.forEach(({ id, values }) => {
      transaction = transaction.patch(id, (patch) => patch.set(values));
    });

    await transaction.commit({ visibility: "async" });
    processed += batch.length;
    console.log(`Updated ${processed}/${patches.length} Sanity draft image references.`);
  }

  console.log(`Condition image sync completed for ${patches.length} draft records.`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
