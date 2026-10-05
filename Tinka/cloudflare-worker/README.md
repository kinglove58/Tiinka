# Tinka Care Finder Worker

This Worker receives only the selected service and anonymous multiple-choice answers. Names, email addresses, phone numbers, and free-text health details must never be sent to it.

## Deploy

1. In Cloudflare, open the `restless-heart-7d24` Worker and choose **Edit code**.
2. Replace the starter file with the content of `care-finder-worker.js`.
3. Click **Deploy**.
4. Confirm that `OPENAI_API_KEY` remains a Production secret under **Settings -> Variables and secrets**.

Before public launch, add Cloudflare Turnstile and an OpenAI project spending limit to reduce automated abuse.
