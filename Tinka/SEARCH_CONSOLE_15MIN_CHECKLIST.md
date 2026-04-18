# Search Console 15-Minute Action Checklist

Date: 2026-04-15
Goal: Confirm indexation and surface blockers for priority SEO pages.

## 0) Property and sitemap (2 minutes)

- [ ] Open Google Search Console for the production property.
- [ ] Go to Sitemaps and submit: https://tinkahealthservices.com/sitemap.xml
- [ ] Confirm latest status is Success.

## 1) URL Inspection for priority pages (6 minutes)

Run URL Inspection and Request Indexing if not indexed for:

- [ ] https://tinkahealthservices.com/
- [ ] https://tinkahealthservices.com/insurance-we-accept
- [ ] https://tinkahealthservices.com/maryland-psychiatrist
- [ ] https://tinkahealthservices.com/dc-psychiatrist
- [ ] https://tinkahealthservices.com/virginia-psychiatrist
- [ ] https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va
- [ ] https://tinkahealthservices.com/booking

For each URL, record:

- [ ] Indexing state (Indexed or Not indexed)
- [ ] Canonical selected by Google
- [ ] Last crawl date
- [ ] Any crawl or enhancement warnings

## 2) Page indexing report quick scan (3 minutes)

Go to Indexing > Pages and review these buckets:

- [ ] Crawled - currently not indexed
- [ ] Duplicate, Google chose different canonical
- [ ] Soft 404
- [ ] Excluded by noindex

Immediate actions:

- [ ] If canonical mismatch appears, confirm page canonical tags and internal links point to the intended URL.
- [ ] If soft 404 appears, improve unique content depth and internal links to that page.

## 3) Performance baseline pull (4 minutes)

Go to Performance > Search results. Set:

- [ ] Date range: Last 28 days
- [ ] Search type: Web
- [ ] Compare enabled later after edits

Export and capture:

- [ ] Queries for insurance intent
- [ ] Queries for location intent (MD/DC/VA)
- [ ] Queries for booking/near me intent
- [ ] Top pages by impressions and CTR

## 4) Success criteria this week

- [ ] All seven priority URLs are indexed or submitted for indexing.
- [ ] No unresolved canonical conflict on priority URLs.
- [ ] No unresolved soft 404 on priority URLs.
- [ ] Baseline export captured for CTR/title iteration.

## 5) Escalation rules

- If URL remains not indexed after 7-10 days:
  - [ ] Add 2-3 contextual internal links from high-authority pages.
  - [ ] Expand page with intent-specific FAQ block.
  - [ ] Re-request indexing.
- If canonical conflict persists:
  - [ ] Normalize internal links to preferred URL only.
  - [ ] Ensure redirect path is one-way to preferred URL.
