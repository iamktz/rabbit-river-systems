# Rabbit River Systems

Static HTML/CSS website deployed through GitHub to Cloudflare Pages. No build step or framework.

## Prospect 25 market test, October 3, 2026

The homepage now positions Rabbit River around practical products and systems for owner-led commercial service businesses. Prospect 25 is the first product, with independent commercial cleaning and janitorial companies pursuing recurring commercial accounts as the founding pilot. Sales, Marketing, and Tech & AI remain the broader architecture.

- `prospect-25.html` serves `/prospect-25`; `_redirects` permanently sends the old `/sales/fill-the-funnel` URLs to it.
- The supplied sample is preserved verbatim at `assets/downloads/Rabbit_River_Prospect_25_Sample_Report.pdf` and linked directly for native browser viewing/download.
- Set the three `STAN_CHECKOUT_URLS` values in `assets/prospect-25-checkout.js` when real checkout URLs exist. Null values leave the honest “Coming shortly” disabled buttons. Only valid HTTPS URLs enable links; no checkout infrastructure is built here.
- Launch prices are displayed in the three cards in `prospect-25.html`: $29, $295, and $595.
- This update is local and has not been published or deployed.

## Current direction

The customer-outcome homepage was published on September 21, 2026. WEBSITE-DIRECTION.md governs the subsequent sitewide alignment. The site remains plain HTML/CSS with separate pages.

## Pages

- index.html: introduction, practical work, Kevin, approach, resources, booking
- about.html: background and Rabbit River story
- approach.html: conversation, scope, handoff, boundaries
- website-clarity-review.html: purchasable Website Clarity and AI Readiness Review
- website-clarity-self-check.html: free interactive 15-question companion with printable PDF
- website-diagnostic.html: legacy redirect to the published offer
- resources.html: AI resources and the four-category, seven-article index
- book.html: existing Calendly destination and a direct fallback link
- problems/: existing article prose, shared visual shell
- access-is-authority.html and ai-hygiene-check.html: reconciled printable resources
- assets/downloads/: printable resources and the sample website review PDF
- robots.txt and sitemap.xml: crawler discovery for the public site

Preview using any static server with this directory as its root. No install is required. Pages also open directly from disk, except third-party embeds may depend on network/browser settings.

Cloudflare Pages: framework None; build command empty; output directory /.

Historical index-old.html and v2-v5.html are retained but not linked from the new navigation. Local build remnants and review screenshots are ignored by Git.

Calendly reserves thirty minutes: twenty customer-facing minutes plus a ten-minute buffer. The website review is available as a $495 pilot for the first three qualified service businesses.
