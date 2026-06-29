export const getPortableBlockText = (block = {}) =>
  (block.children || [])
    .map((child) => child?.text || "")
    .join("")
    .replace(/\s+/g, " ")
    .trim();

export const createHeadingId = (text = "") =>
  String(text || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeComparableText = (text = "") =>
  String(text || "")
    .replace(/^#+\s*/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const isStrongOnlyBlock = (block = {}) => {
  const children = block.children || [];
  const textChildren = children.filter((child) => child?.text?.trim());

  return (
    textChildren.length > 0 &&
    textChildren.every((child) => (child.marks || []).includes("strong"))
  );
};

export const getPortableBlockHeading = (block = {}) => {
  const rawText = getPortableBlockText(block);
  if (!rawText) return null;

  if (block.style === "h1") {
    return { level: 2, text: rawText.replace(/^#\s*/, "").trim() };
  }

  if (block.style === "h2") {
    return { level: 2, text: rawText.replace(/^##\s*/, "").trim() };
  }

  if (block.style === "h3") {
    return { level: 3, text: rawText.replace(/^###\s*/, "").trim() };
  }

  if (block.style === "normal" || !block.style) {
    if (/^###\s+\S/.test(rawText)) {
      return { level: 3, text: rawText.replace(/^###\s+/, "").trim() };
    }

    if (/^#{1,2}\s+\S/.test(rawText)) {
      return { level: 2, text: rawText.replace(/^#{1,2}\s+/, "").trim() };
    }

    if (isStrongOnlyBlock(block) && rawText.length <= 120) {
      return { level: 2, text: rawText };
    }
  }

  return null;
};

export const getPortableTextBlocks = (
  blocks = [],
  { skipFirstHeadingText = "" } = {},
) => {
  if (!Array.isArray(blocks)) return [];

  const usedIds = new Map();
  const skipText = normalizeComparableText(skipFirstHeadingText);
  let skippedMatchingHeading = false;

  return blocks.map((block, index) => {
    const heading = getPortableBlockHeading(block);
    const shouldSkip =
      heading &&
      skipText &&
      !skippedMatchingHeading &&
      normalizeComparableText(heading.text) === skipText;

    if (shouldSkip) {
      skippedMatchingHeading = true;
    }

    if (!heading || shouldSkip) {
      return {
        block,
        heading,
        headingId: "",
        key: block?._key || `block-${index}`,
        skip: shouldSkip,
      };
    }

    const baseId = createHeadingId(heading.text) || `section-${index + 1}`;
    const count = usedIds.get(baseId) || 0;
    usedIds.set(baseId, count + 1);

    return {
      block,
      heading,
      headingId: count ? `${baseId}-${count + 1}` : baseId,
      key: block?._key || `block-${index}`,
      skip: false,
    };
  });
};

export const getPortableTextHeadings = (blocks = [], options = {}) =>
  getPortableTextBlocks(blocks, options)
    .filter((item) => item.heading && item.headingId && !item.skip)
    .map((item) => ({
      id: item.headingId,
      level: item.heading.level,
      text: item.heading.text,
    }));
