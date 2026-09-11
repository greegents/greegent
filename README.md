# XYZ — static website

Multi-page site for office engineering, desk setup, ESD supply, and support. Ready for GitHub Pages.

## Tabs (pages)

| Tab | File |
| --- | --- |
| Home | `index.html` |
| Services | `services.html` |
| ESD Supply | `esd.html` |
| Support | `support.html` |
| How we work | `how-we-work.html` |
| Contact | `contact.html` |

The tab bar stays on every page. The current tab is highlighted. Use Previous / Next at the bottom to move in order.

## Edit contact and text (no coding)

Open **`js/site-config.js`**.

Change these first:

- `contact.personName`
- `contact.phone`
- `contact.email`
- `companyName`

To rename a tab, edit the `nav` list in the same file. Save and refresh.

## Preview on your computer

Open `index.html` in a browser, or from this folder run:

```bash
npx --yes serve .
```

Then visit the local URL shown in the terminal.

## Publish on GitHub Pages

1. Create a GitHub repository and upload this folder (or push with git).
2. In the repo: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. After a minute, the site is live at `https://YOUR-USER.github.io/REPO-NAME/`.

Keep all `.html` files in the repository root.

## Files

| File | Purpose |
| --- | --- |
| `js/site-config.js` | Name, phone, copy, tab labels — edit this |
| `*.html` | One tab per page |
| `css/styles.css` | Look and layout |
| `js/app.js` | Fills pages from the config |
