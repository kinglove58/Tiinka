export const conditionImages = {
  "Addiction Treatment": {
    src: "/images/conditions/library/addiction-treatment-hero-v2.webp",
    alt: "Adult participating in a supportive addiction recovery counseling session",
  },
  "Adult Psychiatry": {
    src: "/images/conditions/library/adult-psychiatry-hero-v2.webp",
    alt: "Adult patient discussing a personalized care plan with a psychiatric clinician",
  },
  Agoraphobia: {
    src: "/images/conditions/library/agoraphobia-hero-v2.webp",
    alt: "Adult practicing a supported step outdoors with a mental health clinician",
  },
  "Alzheimer's Disease": {
    src: "/images/conditions/library/alzheimers-disease-hero-v2.webp",
    alt: "Older adult and family member participating in a memory care consultation",
  },
  "Anger Management": {
    src: "/images/conditions/library/anger-management-hero-v2.webp",
    alt: "Adult practicing emotional regulation skills with a counselor",
  },
  Antidepressants: {
    src: "/images/conditions/library/antidepressants-hero-v2.webp",
    alt: "Patient and clinician reviewing an antidepressant treatment plan together",
  },
  Anxiety: {
    src: "/images/conditions/library/anxiety-hero-v2.webp",
    alt: "Adult practicing a grounding exercise during an anxiety care appointment",
  },
  "Attention Deficit Hyperactivity Disorder": {
    src: "/images/conditions/adhd/hero.webp",
    alt: "Adult using telehealth for ADHD evaluation and treatment planning",
  },
  "Autism Spectrum Disorder": {
    src: "/images/conditions/library/autism-hero-v2.webp",
    alt: "Autistic adult participating in a sensory-friendly healthcare consultation",
  },
  Bereavement: {
    src: "/images/conditions/library/bereavement-hero-v2.webp",
    alt: "Adult sharing meaningful memories during a bereavement counseling session",
  },
  "Bipolar Disorder": {
    src: "/images/conditions/library/bipolar-disorder-hero-v2.webp",
    alt: "Adult participating in a calm telehealth appointment for bipolar disorder care",
  },
  Depression: {
    src: "/images/conditions/library/depression-hero-v2.webp",
    alt: "Adult and psychiatric clinician creating a depression care plan together",
  },
  "Eating Disorders": {
    src: "/images/conditions/library/eating-disorders-hero-v2.webp",
    alt: "Adult discussing eating disorder recovery goals with a behavioral health clinician",
  },
  "Mental Health": {
    src: "/images/conditions/library/mental-health-hero-v2.webp",
    alt: "Adult having a collaborative mental health consultation with a clinician",
  },
  "Medication Management": {
    src: "/images/conditions/library/medication-management-hero-v2.webp",
    alt: "Patient and psychiatric clinician reviewing a medication follow-up plan",
  },
  "Obsessive Compulsive Disorder": {
    src: "/images/conditions/library/ocd-hero-v2.webp",
    alt: "Adult and therapist preparing a gradual OCD treatment plan",
  },
  "Opioid Medication Assistant Treatment": {
    src: "/images/conditions/library/opioid-mat-hero-v2.webp",
    alt: "Adult discussing coordinated opioid recovery treatment with a medical clinician",
  },
  "Panic Disorder": {
    src: "/images/conditions/library/panic-disorder-hero-v2.webp",
    alt: "Adult practicing a grounding technique during panic disorder treatment",
  },
  "Post Traumatic Stress Disorder": {
    src: "/images/conditions/library/ptsd-hero-v2.webp",
    alt: "Adult creating a trauma-informed grounding plan with a mental health clinician",
  },
  Schizophrenia: {
    src: "/images/conditions/library/schizophrenia-hero-v2.webp",
    alt: "Adult participating in collaborative schizophrenia care with a clinician and family member",
  },
  "Stress Management": {
    src: "/images/conditions/library/stress-management-hero-v2.webp",
    alt: "Adult creating a practical stress management plan with a therapist",
  },
  "Substance Abuse": {
    src: "/images/conditions/library/substance-abuse-hero-v2.webp",
    alt: "Adults participating in a respectful substance use recovery support group",
  },
  "Suboxone Treatment": {
    src: "/images/conditions/library/suboxone-treatment-hero-v2.webp",
    alt: "Adult attending a medication treatment follow-up for opioid recovery",
  },
  "Grief and Loss": {
    src: "/images/conditions/library/grief-and-loss-hero-v2.webp",
    alt: "Adult walking with a grief counselor during a supportive conversation",
  },
  Insomnia: {
    src: "/images/conditions/library/insomnia-hero-v2.webp",
    alt: "Adult reviewing a sleep diary and insomnia care plan with a clinician",
  },
};

export const getConditionImage = (conditionName) =>
  conditionImages[conditionName] || null;
