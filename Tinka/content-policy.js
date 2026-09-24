// Keep discontinued prescription services out of published condition and blog content.
export const medicationTerms = /\b(?:(?:non)?medication(?:s)?|medicines?|(?:non|un)?prescri(?:be|bed|ber|bers|bing|ption|ptions)|refills?|suboxone|buprenorphine|antidepressants?|pharmac(?:y|ies|ist|ists)|dosages?|drug interactions?|medicated)\b/i;
const focusedTerms = /(?:medication[-\s]*(?:management|assisted|assistant|treatment)|prescri(?:ption|bing)|suboxone|buprenorphine|antidepressants?|opioid[-\s]*medication)/i;

export const isMedicationFocused = (item = {}) =>
  focusedTerms.test([item.title, item.slug, item.pathSlug, item.seoTitle, item._id].filter(Boolean).join(' '));

export const isMedicationFocusedBlog = (blog = {}) =>
  medicationTerms.test([
    blog.title, blog.slug, blog.excerpt, blog.summary, blog.body,
    blog.description, ...(Array.isArray(blog.keywords) ? blog.keywords : [blog.keywords]),
  ].filter(Boolean).join(' '));

const cleanString = (value) => {
  if (!medicationTerms.test(value)) return value;
  const sentences = value.split(/(?<=[.!?])\s+/);
  const kept = sentences.filter((sentence) => !medicationTerms.test(sentence)).join(' ').trim();
  return kept || 'Explore evaluation, treatment options, and ongoing care with Tinka Health Services.';
};

export const sanitizeConditionContent = (value) => {
  if (Array.isArray(value)) {
    return value.filter((item) => {
      if (typeof item === 'string') return !medicationTerms.test(item);
      if (!item || typeof item !== 'object') return true;
      if (isMedicationFocused(item) || /medication|prescri|suboxone|antidepressant/i.test(item._id || "")) return false;
      if (item._type === 'block') {
        return !(item.children || []).some((child) => medicationTerms.test(child.text || ''));
      }
      return true;
    }).map(sanitizeConditionContent);
  }
  if (typeof value === 'string') return cleanString(value);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, ["_id", "_key", "slug", "pathSlug", "conditionId", "conditionSlug", "sectionId", "sectionSlug", "href", "image", "assetUrl"].includes(key) ? item : sanitizeConditionContent(item)]));
  }
  return value;
};
