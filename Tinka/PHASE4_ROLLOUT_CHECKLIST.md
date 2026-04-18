# Phase 4 Checklist - Performance Review and Refinement

Date: 2026-04-15
Scope: Week 4 items from the agreed SEO rollout plan

## Status Legend

- DONE: Completed in codebase and locally validated
- PARTIAL: Started/completed in code but needs external platform verification
- PENDING: Requires external tools/accounts or post-deploy data

## 4.1 Search Console and Indexing Review

### 4.1.1 Submit sitemap and inspect indexing of insurance/location/telehealth pages

Status: PARTIAL
Evidence:

- Sitemap generation is automated in prebuild and has been generating 56 URLs during recent builds.
- Core target pages have metadata + canonical + schema in place:
  - Home: src/pages/home/Home.jsx
  - Insurance: src/pages/insurance/InsuranceAccepted.jsx
  - Maryland page: src/pages/location/MarylandPsychiatrist.jsx
  - DC page: src/pages/location/DCPsychiatrist.jsx
  - Virginia page: src/pages/location/VirginiaPsychiatrist.jsx
  - Telehealth page: src/pages/telehealth/TelehealthPsychiatry.jsx
    Next action (Owner: You):
- Submit sitemap in Google Search Console and run URL Inspection for each target page.

### 4.1.2 Resolve exclusions, canonical conflicts, and soft 404 signals

Status: PARTIAL
Evidence:

- Booking canonical consolidation is implemented around /booking.
- Runtime canonical hardening was added for insurance and MD/DC/VA location pages.
- Lighthouse canonical audit now passes for /insurance-we-accept and /maryland-psychiatrist.
- Not Found route is marked noindex,nofollow in src/components/NotFound.jsx.
  Next action (Owner: You):
- Review Search Console Coverage and Page Indexing reports.
- Resolve any reported excluded URLs/soft 404/canonical conflicts after crawl data appears.

## 4.2 Ranking and Conversion Tracking

### 4.2.1 Track keyword groups (money/location/insurance)

Status: PENDING
Why pending:

- Requires Search Console and/or rank tracking platform data collection over time.
  Next action (Owner: You):
- Create tracking views/segments for:
  - money intent keywords
  - location intent keywords
  - insurance intent keywords

### 4.2.2 Compare landing-page-to-booking conversion rates by page type

Status: PENDING
Why pending:

- Requires analytics goals/events and live traffic period.
  Next action (Owner: You):
- Confirm conversion event for booking completed/start.
- Compare conversion rates across homepage, insurance, location, telehealth, and services pages.

## 4.3 Rich Results and Technical QA

### 4.3.1 Validate schema and metadata rendering for core pages

Status: DONE
Evidence:

- Metadata and schema are implemented for homepage, insurance, MD/DC/VA location pages, telehealth, booking, services, blogs, about, contact, and primary care.
- Multiple successful local production builds after SEO updates.

### 4.3.2 Run Lighthouse checks and resolve major SEO/performance regressions

Status: PARTIAL
Evidence:

- Lighthouse benchmarks were run locally for:
  - / (home)
  - /insurance-we-accept
  - /maryland-psychiatrist
- Reports are saved in reports/lighthouse/.
- Follow-up optimization batch improved performance scores and resolved Lighthouse canonical failures on insurance/location sampled pages.
- Accessibility remediation was completed for homepage (latest Lighthouse accessibility score: 100).
- DC and Virginia canonical parity was validated with Lighthouse SEO runs (canonical audit passes).
  Next action (Owner: Me or You):
- Continue reducing LCP/TBT and unused JS/CSS on priority pages until performance targets are met.

## 4.4 Refinement Sprint

### 4.4.1 Improve low-CTR pages using title/description iteration

Status: PENDING
Why pending:

- Requires Search Console CTR/impression data after indexation.
  Next action (Owner: You + Me):
- Identify pages with high impressions and low CTR.
- Iterate title and description on those pages.

### 4.4.2 Expand FAQ and insurance blocks where intent gaps are observed

Status: PARTIAL
Evidence:

- FAQ and insurance messaging are present and improved across key pages.
- Additional expansion should be data-driven from real query gaps.
  Next action (Owner: You + Me):
- Use Search Console query data and on-page engagement to choose FAQ/insurance expansions.

## Final Week-4 Summary

- Done: 1 item
- Partial: 4 items
- Pending: 3 items

Operational conclusion:

- Website implementation is in strong shape.
- Remaining Phase 4 work is primarily data-collection and optimization loops in Search Console/analytics.
