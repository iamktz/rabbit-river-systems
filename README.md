# rabbit-river-systems

Static site for **rabbitriversystems.com** — plain HTML/CSS, no build step.
Deploys on Cloudflare Pages (Framework preset: None, Build command: empty, Output dir: /).

- `index.html` — the whole site (single page; CSS inlined).
- `og.png`, `favicon.svg` — social image + icon.
- `DESIGN.md` — the design direction ("The Operator's Field Journal"), kept for reference.
- `_headers` — security + cache headers for Cloudflare.

Preview locally: `python3 -m http.server 8000` then open http://localhost:8000
Collaboration + deploy process: see `../COLLABORATION.md`.
