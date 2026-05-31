# Lujza & Aron wedding website

A simple static single-page wedding website for `www.lujziaron.com`. The site uses
plain HTML anchor links and an official Google Forms iframe with an external-form
fallback link.

The names use the hosted `Pinyon Script` web font, selected as the closest
available hosted match for the invitation calligraphy.

The remaining text uses the hosted `Cormorant Garamond` web font so Hungarian
accented characters render consistently.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

On macOS, you can also double-click `start-preview.command`.

## GitHub Pages

This folder includes:

- `CNAME` for `www.lujziaron.com`
- `.nojekyll` so GitHub Pages serves the static files directly

## Edit later

- Update wedding details in `index.html`.
- Replace the placeholder wording in the `#dress-code` section once the dress code is final.
- The embedded RSVP form is the Google Form supplied for the site.
