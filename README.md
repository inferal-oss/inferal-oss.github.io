# Inferal Open Source

The organization website for [Inferal Open Source](https://oss.inferal.org/).
Edit `index.html` and `style.css` directly. GitHub Actions checks local asset
links, then publishes the static files from `main` to GitHub Pages. Project
documentation and the live inspector demo are built and deployed
by the [Web Network Inspector repository](https://github.com/inferal-oss/web-network-inspector).

The organization site uses `oss.inferal.org`; project sites inherit that domain.
Cloudflare manages DNS, and GitHub Pages enforces HTTPS. Domain settings are
managed separately from these static files.

## Assets

Project marks are copied from their respective public websites or repositories:
Open Regard (`openregard.org/assets/mark.svg`), Kimage (`kimage.dev/mark.svg`),
Notabenda (`notabenda.org/docs/assets/mark.svg`), and Web Network Inspector.
clipspyx has no dedicated mark in its repository; the `cx` tile is an original
wordmark for this directory. The Inferal chevron is the sponsor's existing brand
mark. These marks retain their respective ownership and licenses.

The Open Regard display control shares its `inferal-oss-display-v1` preference
with project sites on this origin. New subsites can reuse `assets/display/`,
load its widget CSS, display CSS, browser bundle, and configuration in the head,
and add a `[data-inferal-display]` container. Keep the profile IDs and storage
key consistent so saved choices stay synchronized across pages and tabs.

## Project index for assistants

`llms.txt` describes the five featured projects and links to their primary
websites, documentation, and repositories. Update it alongside the project
directory. The Pages workflow includes it in the published site.
