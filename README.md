# XYZ Engineering Solutions — static website

Multi-page, professional-services style site for workplace engineering, desk systems, ESD supply, and support. No build step, no framework — ready for GitHub Pages.

## Tabs (pages)

| Tab | File |
| --- | --- |
| Home | `index.html` |
| Services | `services.html` |
| Industries | `industries.html` |
| ESD Supply | `esd.html` |
| Support | `support.html` |
| How we work | `how-we-work.html` |
| Contact | `contact.html` |

## Edit content (no coding)

Everything a human normally changes lives in **`js/site-config.js`**:

- `contact.personName`, `contact.phone`, `contact.email`, `contact.address`
- `companyName`, `promise`, `tagline`, `intro`
- `stats`, `industries`, `services`, `esdProducts`, `support`, `process`
- `outcomes`, `differentiators`, `quote`, `cta`
- `nav` — rename or reorder tabs
- `images` — swap any photo

Save the file and refresh the browser.

## Colour palette

Accents follow the professional-services look (PwC / Deloitte / EY inspired) and are defined once at the top of `css/styles.css`:

| Variable | Value | Used for |
| --- | --- | --- |
| `--ink` | `#2E2E38` | Headings, top strip, footer, buttons |
| `--orange` | `#D04A02` | Primary accent, active tab, links |
| `--yellow` | `#FFE600` | Highlight blocks and call-to-action button |
| `--green` | `#86BC25` | Secondary accent |
| `--blue` | `#0076A8` | Secondary accent |
| `--red` | `#E0301E` | Occasional accent |

Give any card or step an accent by setting `accent: "orange" | "yellow" | "green" | "blue" | "red"` in `js/site-config.js`.

## Preview locally

Open `index.html` in a browser, or run from this folder:

```bash
npx --yes serve .
```

## Publish on GitHub Pages

1. Push this folder to a GitHub repository (keep all `.html` files in the root).
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site goes live at `https://YOUR-USER.github.io/REPO-NAME/`.

## Files

| Path | Purpose |
| --- | --- |
| `js/site-config.js` | All text, contact details, tabs, photos — edit this |
| `js/app.js` | Renders the shared nav, cards, and sections |
| `css/styles.css` | Design system and layout |
| `images/` | Photography used across the pages |
| `*.html` | One file per tab |
