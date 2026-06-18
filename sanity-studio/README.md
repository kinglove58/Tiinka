# Tinka Health Services Sanity Studio

This Studio manages condition pages used by the main website:

- `/conditions`
- `/conditions/condition/:slug`

## Setup

1. Copy `.env.example` to `.env`.
2. Fill in your Sanity project values:

```env
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

3. Install dependencies:

```bash
npm install
```

4. Start the Studio locally:

```bash
npm run dev
```

5. Log in with the Sanity account that owns the project.

## Publish a Condition Page

1. Open the local Studio URL shown in the terminal.
2. Click `Condition`.
3. Create a new document.
4. Fill `Page Title`, `URL Slug`, `Hero Summary`, `SEO Title`, `Meta Description`, `SEO Keywords`, and `Page Body`.
5. Click `Publish`.
6. Re-run the website GitHub Action deployment so the static GoDaddy site rebuilds with the new content.

## Deploy Sanity Studio

```bash
npm run deploy
```

Sanity will ask you to choose a Studio hostname the first time you deploy.
