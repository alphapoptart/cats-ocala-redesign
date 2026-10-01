# CATS of Ocala — separate makeover

This six-page static design is isolated at `docs/makeover/`. The original cleanup version in `docs/` is unchanged. GitHub Pages serves this version at https://alphapoptart.github.io/cats-ocala-redesign/makeover/.

Run from this folder with `python3 -m http.server 8080`, then open http://localhost:8080. No framework, package installation, backend, analytics or health-data form is required. All internal paths are relative, supporting both the nested Pages path and a future custom-domain root.

The design uses editorial serif typography, cream/forest section fields, restrained peach/lime accents and original decorative SVG path artwork. The artwork is abstract decoration, not a depiction of a facility or a treatment outcome. The official house photo is secondary on About and Contact, and absent from the homepage.

Content was checked against all six pages at https://catsofocala.com/ on October 1, 2026, and the approved cleanup source at commit ed002fee0aa569c6d83196546efcd26e26febcfb. Published counseling and community meeting times are retained. The privacy policy keeps its original legal meaning and the repaired NAI, NIDA/NIH and SAMHSA links.

The logo, actual founder portrait, enhanced house photograph and optional decorative cat asset come from the existing approved export; see the parent repository README for provenance. Lato is licensed under the SIL Open Font License in `licenses/Lato-OFL.txt`. Georgia is a system font and is not redistributed.

Edit the six `index.html` files, shared `assets/style.css` and `assets/app.js`. The mobile navigation supports Enter/Space and Escape. The optional cat is off by default, appears only in the footer, and can be hidden with its button or Escape. No animation or persistence is used. Without JavaScript, navigation stays visible.
