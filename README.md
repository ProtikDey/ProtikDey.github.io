# Protik Dey — Personal Academic Website

Personal portfolio and research website of Protik Dey, Ph.D. student in Computer Science at the
University of Texas at San Antonio. Live at **https://protikdey.github.io/**.

---

## Tech stack

| Layer | Technology |
|---|---|
| Markup | Plain HTML5 (single page, `index.html`) |
| Styling | Plain CSS (`style.css`) — no framework, no build step |
| Behavior | Vanilla JavaScript (`script.js`) — scrollspy nav highlighting, footer year |
| Fonts | Google Fonts: **Fraunces** (headings), **Atkinson Hyperlegible Next** (body), **JetBrains Mono** (dates, tags, metadata) |
| Icons | **Font Awesome 6** (general + brand icons) and **Academicons** (Google Scholar, ResearchGate) — both loaded from CDN |
| Hosting | GitHub Pages |

No build tools, no dependencies to install. Edit the files, push to GitHub, done.

## Project structure

```
├── index.html        # all content lives here
├── style.css         # all styling
├── script.js         # nav highlighting + footer year
├── README.md
├── cv/
│   └── Protik_Dey_CV.pdf   # CV opened by the nav's CV link
└── images/
    ├── protik-dey.jpg      # sidebar avatar
    ├── favicon.ico         # browser tab icon (+ 3 more favicon files)
    ├── favicon-16.png
    ├── favicon-32.png
    └── apple-touch-icon.png
```

## Running locally

Just open `index.html` in a browser. (Fonts and icons load from CDNs, so you need internet for
the page to look right.)

---

# How to edit each section

All content is in `index.html`. Sections appear in this order, each wrapped in a
`<section id="...">` tag. Find them by searching for the `id`.

## 1. Sidebar navigation (`<nav class="rail__nav">`)

Each nav item looks like:

```html
<li><a href="#skills" class="rail__link"><i class="fa-solid fa-code" aria-hidden="true"></i><span>Skills</span></a></li>
```

- **Rename a label:** edit the text inside `<span>`.
- **Change an icon:** replace the classes on the `<i>` tag. Find icons at
  [fontawesome.com/search](https://fontawesome.com/search) (filter: Free). Use prefix
  `fa-solid` for general icons, `fa-brands` for brand logos.
- **Add a section link:** copy an `<li>`, set `href="#your-section-id"` — it must match the
  `id` of a `<section>` in the page. The highlight logic picks it up automatically.
- **The CV link** points to a file (`cv/Protik_Dey_CV.pdf`), not a section — see §8.

> ⚠️ **Caution:** the sidebar auto-widens to fit the longest label (`max-content` grid column).
> Very long labels will push the main content right — keep labels short.

## 2. About Me / hero (`id="summary"`)

- **Title line ("Ph.D. Researcher — Human-Centered AI"):** the `<p class="eyebrow">`.
- **Name:** the `<h1 class="hero__name">`.
- **Bio:** the `<p class="hero__dek">` paragraph.
- **Social icons:** the `<ul class="social-row">`. Each pill is an `<a class="social-pill ...">`
  with a brand class (`linkedin`, `github`, `google-scholar`, `medium-blog`, `researchgate`).
  To add a network: copy an `<li>`, change the `href`, `aria-label`, the icon classes, and add a
  matching color rule in `style.css` (search "Colorful brand icons").

> ⚠️ **Caution:** Google Scholar and ResearchGate icons come from **Academicons**
> (`class="ai ai-google-scholar"`), not Font Awesome. Don't change their prefix to `fa-`.

## 3. Research focus (`id="research"`)

Plain paragraphs — edit freely. The pill labels at the bottom are the
`<ul class="tag-list">`; add or remove `<li>` items, no CSS changes needed.

## 4. Publications (`id="publications"`)

Each paper is one `<p class="pub-entry">` in the format: authors → linked title → italic venue.

```html
<p class="pub-entry">
  Co-Author One, <strong>Protik Dey</strong>, Co-Author Two,
  <a href="https://doi.org/..." target="_blank" rel="noopener noreferrer">Paper Title.</a>
  <em>Venue Name (ABBREV), Year.</em>
</p>
```

- Bold **only your own name** with `<strong>`.
- Put the paper link in the `href`. Use the DOI or publisher page when possible.
- To add a paper: copy a whole `pub-entry` block. Newest papers go on top.

> ⚠️ **Caution:** the CHI 2026 entry's link may still be the placeholder `href="#"` — replace it
> with the real URL when the paper page exists.

## 5. Research projects (`id="projects"`)

Each project is an `<article class="project">` with a title (`h3`), an optional italic note
(`<p class="project__note">`, used e.g. for "Undergraduate thesis, advised by ..."), and a
bullet list. Copy a whole `<article>` to add one.

## 6. Experience (`id="experience"`) and 7. Education (`id="education"`)

Both use the same timeline structure. Each entry:

```html
<li class="timeline__item">
  <p class="timeline__date">Jan 2026 – Present · Texas, USA</p>
  <h3 class="timeline__role">Role, Organization</h3>
  <p>Description…</p>                                   <!-- optional -->
  <p class="timeline__stack">Tool · Tool · Tool</p>     <!-- optional -->
</li>
```

- Entries are ordered **newest first** — insert new roles at the top of the `<ol>`.
- The amber dot and connecting line are automatic (CSS), don't add anything for them.
- `timeline__stack` renders in indigo mono font; separate items with `·`.

## 8. Skills (`id="skills"`)

A grid of groups. Each group:

```html
<div class="skills-group">
  <h3>Group name</h3>
  <p>Skill, Skill, Skill</p>
</div>
```

Add/remove whole groups freely — the two-column grid reflows automatically (one column on
mobile).

## 9. CV (nav link, no page section)

The nav's CV item opens `cv/Protik_Dey_CV.pdf` in a new tab.

- **To update the CV:** replace the PDF in the `cv/` folder, keeping the same filename — or
  change the filename and update the `href` in the nav to match.

> ⚠️ **Caution:** no spaces in the PDF filename (use `_`). And if you ever add another
> file-opening nav link, keep its `href` pointing at a file path — the highlight script in
> `script.js` only tracks links whose `href` starts with `#`. Don't change that selector
> (`.rail__link[href^="#"]`), or the script will crash on file links.

## 10. Contact (`id="contact"`)

Each row is:

```html
<li class="contact-item">
  <span class="contact-icon" aria-hidden="true"><i class="fa-solid fa-envelope"></i></span>
  <a href="mailto:you@example.com">you@example.com</a>
</li>
```

- Email rows use `href="mailto:..."`, phone rows `href="tel:+1234567890"` (digits only, with
  country code), web links plain `https://...` with `target="_blank" rel="noopener noreferrer"`.

## 11. Footer

The year updates itself via JavaScript (`<span id="year">`). Only edit the surrounding text.

> ⚠️ **Caution:** don't delete the `id="year"` span — the first line of `script.js` looks for
> it and will throw an error (killing the nav highlighting below it) if it's missing.

---

# Adding a brand-new section

Say you want a "Teaching" section. Three steps:

**Step 1 — Add the section to `index.html`**, inside `<main>`, wherever it should appear in
the page order:

```html
<section id="teaching" aria-labelledby="teaching-h">
  <h2 id="teaching-h"><span class="num">08</span> Teaching</h2>
  <p>Your content here…</p>
</section>
```

Requirements:
- A unique `id` on the `<section>` (lowercase, no spaces) — this is what the nav links to.
- An `<h2>` with its own `id` (convention: section id + `-h`), referenced by the section's
  `aria-labelledby`. This is what screen readers announce for the region.
- The `<span class="num">` is the small indigo number — renumber it (and the sections after
  it) to match the new page order.

**Step 2 — Add the matching nav item** in the sidebar `<ol>`, at the same position as the
section's place on the page:

```html
<li><a href="#teaching" class="rail__link"><i class="fa-solid fa-chalkboard-user" aria-hidden="true"></i><span>Teaching</span></a></li>
```

The `href` must be `#` + the section's exact `id`. Pick any Font Awesome Free icon.

**Step 3 — There is no step 3.** The scrollspy highlighting, spacing, heading styles, and
mobile layout all pick the new section up automatically. Inside the section, reuse existing
patterns (timelines, tag lists, project cards, skills groups) — they work in any section.

> ⚠️ **Caution:** if the new section becomes the **last** one on the page, no action needed —
> the script's bottom-of-page rule automatically highlights whichever nav link is last. Just
> make sure the nav order matches the page order, or the wrong link will light up at the
> bottom.

---

# Styling: common adjustments (`style.css`)

The most-tweaked values are marked with `/* — edit this */` comments:

| What | Where | Current |
|---|---|---|
| Site colors | `:root` tokens at the top (`--indigo`, `--amber`, `--paper`, …) | indigo `#3730C4`, amber `#E8992B` |
| Content column width | `--content-max` in `:root` | `1060px` |
| Side gaps of content | `main { padding: ... }` (middle value) | `1.75rem` |
| Body font size / weight | `body { font-size; font-weight }` | `17px` / `400` |
| Nav label & icon size | `.rail__link` and `.rail__link i` | `1.05rem` / `1rem` |
| Avatar size | `.rail__avatar` (desktop) + inside `@media (max-width: 900px)` (mobile) | `190px` |
| Social pill / icon size | `.social-pill` and `.social-pill i` | `48px` / `1.3rem` |
| Contact icon circles | `.contact-icon` | `46px` |
| Tag pill colors | `.tag-list li` | soft indigo |

**Changing a color everywhere:** edit the token in `:root` once — everything referencing
`var(--indigo)` etc. updates.

# Favicon

The browser-tab icon is the "PD" monogram, generated as 4 files in `images/`
(`favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`) and referenced from
`<head>`. To change it, replace those 4 files (keep the filenames).

> ⚠️ **Caution:** favicons cache aggressively. After changing them, test in a private/incognito
> window — your normal tab may show the old icon for days.

# Deploying

Push to the `main` branch of the `protikdey.github.io` repository; GitHub Pages publishes
automatically within a minute or two. Hard-refresh (Ctrl/Cmd+Shift+R) if you don't see changes.

# General cautions

1. **Keep `id`s and `href`s in sync.** Nav links (`href="#skills"`) must match section ids
   (`id="skills"`), and `aria-labelledby` values must match a real heading `id`. Broken pairs
   hurt both navigation and screen-reader users.
2. **Icon prefixes matter.** `fa-solid` / `fa-brands` (Font Awesome) vs `ai` (Academicons). A
   wrong prefix renders an empty square.
3. **Accessibility is a feature of this site.** Keep `aria-label` on icon-only links,
   `aria-hidden="true"` on decorative icons, and don't remove the skip link, focus outline
   styles, or `prefers-reduced-motion` block in the CSS.
4. **Test on mobile after layout changes.** The `@media (max-width: 900px)` block at the bottom
   of `style.css` turns the sidebar into a horizontal top bar; changes to rail/nav styles should
   be checked there too.
5. **Commenting out HTML:** be careful that a `<!-- ... -->` block doesn't accidentally swallow
   a closing tag (like `</div>`) that live markup still needs.
6. **External links** should keep `target="_blank" rel="noopener noreferrer"`.