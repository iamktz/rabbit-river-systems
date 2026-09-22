# Rabbit River website direction — September 22, 2026

This is the governing direction for the current website. It supersedes conflicting visual and positioning guidance in DESIGN.md. Preserve the detailed sales philosophy in SALES-DIRECTION.md.

## Customer outcomes and capabilities

The homepage leads with three reasons to talk: make more money, save money, and get some time back. The capability pages explain Sales, Marketing, and Tech & AI. Outcomes and capabilities are related, not a one-to-one taxonomy.

The audience includes owners and teams in small and medium-sized businesses. Avoid assuming every visitor is a solo operator.

## Visual and interaction system

Use the approved homepage as the reference: cream on green openings, light reading surfaces, straightforward sans-serif type, generous spacing, a compact sticky header, a single navigation row (Sales, Marketing, Tech & AI, Tools & Resources, About, Let’s Talk), and a native HTML mobile disclosure menu. Keep the site static HTML/CSS and deploy through GitHub to Cloudflare Pages. Do not introduce a framework or a different hosting platform.

The active site uses assets/design-system.css for shared visual tokens, navigation, typography, components, footer, and service hero styles. Interior grids and page-specific layout patterns are in assets/page-layouts.css. Printable guides also use assets/resources.css. The approved homepage composition and river crop remain in assets/homepage-detail.css. Keep shared header links and labels synchronized across active pages. The original homepage.css, interior.css, and site.css are retained for historical reference but are not loaded by active pages. Historical unlinked versions and redirect-only pages are not redesigned.

Use the supplied hero images directly: sales-hero-approved.png for Sales, marketing-hero-approved.png for Marketing, and tech-ai-hero-approved.png for Technology & AI. Use cover cropping and leftward positioning at smaller widths to keep the artwork away from the copy. river-hero-approved.png is unique to the homepage. About, Approach, Booking, Resources, diagnostics, guides, and offer pages remain text-led; About uses a modest headshot. Do not generate or reinterpret replacement imagery.

Use Arial/Helvetica consistently. Shared colors are cream #fafbf8, dark green #173b32, body copy #465c52, and warm orange #a4512d, with #d99870 for accents against dark surfaces. Content width is 1200px including responsive gutters; long-form reading width is 860px including gutters. Keep orange to small rules, markers, links, and button details. Service heroes share a responsive heading scale and a minimum desktop height, growing when content requires it. All published copy remains intact apart from replacing em dashes with appropriate punctuation.

## Content boundaries

- Process: Listen carefully. Make a focused improvement. Measure the results.
- Marketing: clarity, discoverability, trust, differentiation, real customer questions, and an easy next action. AI recommendation readiness belongs primarily here.
- Sales: preserve preparation, prospecting as sorting, qualification, follow-up, and the human selling moment. Developing tools are not finished products.
- Tech & AI: start with the business problem; choose useful tools, appropriate automation, and human oversight.
- Resources: group existing materials by customer problem. Distinguish free guides/checks from the paid review.
- Preserve the name, scope, pricing, and exclusions of the Website Clarity and AI Readiness Review unless explicitly changed.
- About: credibility after customer benefit. Preserve Wise. Nimble. Fruitful.
- Approach: bounded work, agreed scope, focused implementation or coordination as appropriate, and measurement.

Do not invent customer results, testimonials, available products, or guarantees about AI recommendations. A2A is longer-term context, not a claim that a protocol produces search visibility. Keep biographies and jargon out of the primary pitch.

Provide multiple paths: a conversation, free resources, and the existing bounded paid service. The proposed sales booklet remains outside this work.

## Focused homepage, September 22

Open with the SMB customer's core work and the sales, marketing, and technology work needed to support it. Make the three outcomes prominent. Link once to Sales, Marketing, and Tech & AI beneath those outcomes, in that order. Use short capability labels in the single primary navigation row and mobile disclosure. Do not restore the second benefit-label navigation row.

Use muted warm orange sparingly for reason numbers, small rules, hover states, and CTA details. Preserve cream on green and the simple wordmark. Close with a conversation as the primary action, resources as a secondary link, and a brief experience statement. Keep the biography and process on About/Approach and AI recommendation readiness on Marketing. Do not use em dashes in new homepage copy. Prior homepage copy is retained in the workspace at design-references/homepage-content-before-sept22.html and in Git history.
