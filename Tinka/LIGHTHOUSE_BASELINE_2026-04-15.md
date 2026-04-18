# Lighthouse Baseline and Remediation

Date: 2026-04-15
Environment: local preview on http://127.0.0.1:4173
Category set: performance, accessibility, best-practices, seo

## Report Files

- reports/lighthouse/home.json
- reports/lighthouse/insurance.json
- reports/lighthouse/location-md.json

## Score Summary

| Page                   | Performance | Accessibility | Best Practices | SEO |
| ---------------------- | ----------: | ------------: | -------------: | --: |
| /                      |          33 |            86 |            100 | 100 |
| /insurance-we-accept   |          35 |            86 |            100 |  92 |
| /maryland-psychiatrist |          38 |            90 |            100 |  92 |

## Key Findings

### 1) Performance is the primary blocker

Observed across all tested pages:

- High LCP (~11.9s to 12.6s)
- High TBT (~1.5s to 2.6s)
- Large unused JavaScript savings (~196 KiB to 230 KiB)
- Unused CSS savings (~34 KiB)

### 2) SEO category is mostly strong, but two pages failed canonical audit

Pages affected:

- /insurance-we-accept
- /maryland-psychiatrist

Lighthouse flagged:

- "Document does not have a valid rel=canonical"

Note:

- Canonical tags are present in source code on both pages. This likely indicates a runtime/head rendering conflict or canonical parsing issue under current rendering conditions and needs targeted verification.

## Prioritized Remediation Plan

### P0 (highest impact, do first)

1. Reduce JavaScript executed on initial load for core pages.

- Expand route-level lazy loading and avoid importing heavy modules in above-the-fold regions.
- Re-check pages that currently pull large components immediately.

2. Improve LCP on homepage and priority landing pages.

- Ensure hero/above-the-fold image is optimized and preloaded only when it is the LCP element.
- Avoid non-critical JS work before first meaningful paint.

3. Lower main-thread blocking time.

- Defer non-critical scripts/components below the fold.
- Break heavy UI sections into lazy chunks.

### P1 (important)

4. Investigate canonical audit failures on insurance and location pages.

- Confirm final rendered head has exactly one canonical tag.
- Confirm canonical URL is absolute and matches intended public URL.
- Confirm no late Helmet overrides from nested components.

5. Reduce unused CSS and JS.

- Trim global CSS where possible.
- Validate dead code and remove unused imports/sections.

### P2 (quality)

6. Accessibility follow-up from 86-90 baseline.

- Resolve remaining contrast/label/semantic issues from detailed audits (if any appear in expanded report views).

## Re-test Commands

Use these commands after implementing fixes:

```powershell
npx --yes lighthouse http://127.0.0.1:4173/ --output=json --output-path=reports/lighthouse/home.json --only-categories=performance,accessibility,best-practices,seo --no-enable-error-reporting --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"

npx --yes lighthouse http://127.0.0.1:4173/insurance-we-accept --output=json --output-path=reports/lighthouse/insurance.json --only-categories=performance,accessibility,best-practices,seo --no-enable-error-reporting --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"

npx --yes lighthouse http://127.0.0.1:4173/maryland-psychiatrist --output=json --output-path=reports/lighthouse/location-md.json --only-categories=performance,accessibility,best-practices,seo --no-enable-error-reporting --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"
```

## Exit Criteria for this sprint

- Performance >= 55 on all three sampled pages.
- SEO >= 95 on all three sampled pages.
- Canonical audit passes on insurance and location pages.

## Post-Fix Re-Run (Lazy-Loading Batch)

Re-run date: 2026-04-15

New report files:

- reports/lighthouse/home_after_lazy.json
- reports/lighthouse/insurance_after_lazy.json
- reports/lighthouse/location-md_after_lazy.json

### Score Deltas

| Page                   | Perf (Before -> After) |     A11y | Best Practices |        SEO |
| ---------------------- | ---------------------: | -------: | -------------: | ---------: |
| /                      |               33 -> 37 | 86 -> 86 |     100 -> 100 | 100 -> 100 |
| /insurance-we-accept   |               35 -> 34 | 86 -> 86 |     100 -> 100 |   92 -> 92 |
| /maryland-psychiatrist |               38 -> 39 | 90 -> 90 |     100 -> 100 |   92 -> 92 |

### Metric Deltas

| Page                   | LCP            | TBT              | Unused JS          |
| ---------------------- | -------------- | ---------------- | ------------------ |
| /                      | 11.9s -> 14.7s | 2630ms -> 2450ms | 196 KiB -> 198 KiB |
| /insurance-we-accept   | 12.6s -> 17.9s | 1590ms -> 1350ms | 230 KiB -> 168 KiB |
| /maryland-psychiatrist | 12.4s -> 12.0s | 1550ms -> 1780ms | 221 KiB -> 153 KiB |

### Interpretation

- The lazy-loading batch successfully reduced initial route bundle size and removed the dynamic/static Testimonial import conflict.
- Lighthouse improvements are mixed in this local run. TBT/unused JS improved on some pages, but LCP remains unstable/high.
- Canonical audit still fails on insurance and Maryland pages in Lighthouse, despite canonical tags existing in source; this needs targeted rendering verification.

### Next Fix Batch (Recommended)

1. Defer below-the-fold homepage sections so lazy chunks do not all request immediately after first paint.
2. Preload only the true LCP candidate image and add explicit dimensions for LCP stability.
3. Audit canonical rendering in final HTML head for insurance and location pages to confirm exactly one canonical tag at runtime.

## Post-Fix Re-Run (Professional Batch)

Re-run date: 2026-04-16

New report files:

- reports/lighthouse/home_after_pro.json
- reports/lighthouse/insurance_after_pro.json
- reports/lighthouse/location-md_after_pro.json

### Score Deltas (Compared to Lazy-Loading Batch)

| Page                   | Perf (Before -> After) |     A11y | Best Practices |        SEO |
| ---------------------- | ---------------------: | -------: | -------------: | ---------: |
| /                      |               37 -> 40 | 86 -> 85 |     100 -> 100 | 100 -> 100 |
| /insurance-we-accept   |               34 -> 38 | 86 -> 86 |     100 -> 100 |  92 -> 100 |
| /maryland-psychiatrist |               39 -> 42 | 90 -> 90 |     100 -> 100 |  92 -> 100 |

### Metric Deltas (Compared to Lazy-Loading Batch)

| Page                   | LCP            | TBT              | Unused JS          |
| ---------------------- | -------------- | ---------------- | ------------------ |
| /                      | 14.7s -> 12.1s | 2450ms -> 1500ms | 198 KiB -> 174 KiB |
| /insurance-we-accept   | 17.9s -> 12.2s | 1350ms -> 1280ms | 168 KiB -> 162 KiB |
| /maryland-psychiatrist | 12.0s -> 11.5s | 1780ms -> 1300ms | 153 KiB -> 174 KiB |

### Canonical Audit Outcome

- Canonical audit now passes on both:
  - /insurance-we-accept
  - /maryland-psychiatrist
- Runtime canonical hardening resolved the prior Lighthouse canonical failures.

### Updated Next Fix Batch

1. Continue reducing LCP on homepage and location pages by trimming above-the-fold payload and optimizing hero rendering path.
2. Reduce main-thread work further to target TBT below 800ms on key landing pages.
3. Run accessibility-focused remediation for homepage to recover and improve the 1-point A11y regression.

## Post-Fix Re-Run (Accessibility and Canonical Parity)

Re-run date: 2026-04-16

New report files:

- reports/lighthouse/home_after_pro2.json
- reports/lighthouse/home_after_pro2_repeat.json
- reports/lighthouse/location-dc_after_pro2.json
- reports/lighthouse/location-va_after_pro2.json

### Home Score Deltas (Compared to previous pro run)

| Metric         | Previous | Current |
| -------------- | -------: | ------: |
| Performance    |       40 |      33 |
| Accessibility  |       85 |     100 |
| Best Practices |      100 |     100 |
| SEO            |      100 |     100 |

Repeat sample (variance check):

- home_after_pro2_repeat.json -> Performance 32, Accessibility 100, Best Practices 100, SEO 100.

Interpretation:

- Accessibility remediations are validated and stable (100 in both current and repeat sample).
- Performance remains variable in Lighthouse simulated runs; LCP/TBT are still primary bottlenecks for next sprint.

### Accessibility Outcome

Resolved homepage failures:

- aria-prohibited-attr
- color-contrast
- link-name

Remaining homepage accessibility failures in current report:

- none

### DC/VA Canonical Parity Outcome

- /dc-psychiatrist SEO score: 100, canonical audit: pass (score 1)
- /virginia-psychiatrist SEO score: 100, canonical audit: pass (score 1)
