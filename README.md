# CATS of Ocala website concept

Editable static website with six routes: Home, About, Services, Meetings, Contact and Privacy Policy. No framework or build step; production source is the HTML, CSS, JavaScript and local assets in `docs/`.

## Run locally

From this directory: `python3 -m http.server 8080 --directory docs`, then open http://localhost:8080. This local server is accessible on the computer where it runs; it is not a hosted sharing link. Any static host supporting directory index routes can serve `docs/`.

## Edit

Edit each page’s `index.html`, shared `docs/assets/style.css`, and `docs/assets/app.js`. Navigation and footer are included in each page, so update all six when changing shared markup. Images and subset Lato fonts are local. No package installation is needed.

## Features

Responsive mobile navigation, keyboard focus/skip link, native service disclosures, complete weekly schedules, call and directions links. Optional cat artwork is off by default and can be removed with its toggle or Escape. It has no animation, sound, tracking or data collection. No intake workflow or backend is implemented.

## Asset provenance and licensing

Official CATS assets originate from https://catsofocala.com/: `/wp-content/uploads/2015/09/logo4.png`, `building7.jpg`, `sally.jpg` and `catsilhouette5.png`. The house and Sally photo were faithfully enhanced; decorative cat poses were generated using the official cat as reference. The original photos are retained as rollback assets. Confirm organization-controlled image rights before public publication; this export does not grant rights to CATS branding or photos.

Lato by Łukasz Dziedzic is included under the SIL Open Font License; see `licenses/Lato-OFL.txt`. The superseded Font Awesome cat asset and its attribution/license are retained for rollback; see `licenses/Font-Awesome.txt` (icons CC BY4.0). Current decorative cats use reference-based local WebP art.

## GitHub Pages and publication

This repository is public by the owner's approval. GitHub Pages publishes the `docs/` folder of `main`; `.nojekyll` serves the plain static files without Jekyll. Commit changes to `docs/` to update the preview. The GitHub-generated Pages build must finish before changes appear.

All page, stylesheet, and image paths are relative, including dynamically added cat images, so the site supports the GitHub project subpath as well as a custom-domain root without source-path rewrites. It has no ChatGPT runtime, hosted API, account login, or framework dependency. Deploy the contents of `docs/` to any ordinary static host supporting directory index pages.

This preview does not replace the live CATS website. No custom domain or DNS changes have been made. Domain migration should happen only after the organization approves the final content and hosting setup.
