# Protik Dey — Personal Academic Website

Personal portfolio and research website of Protik Dey, Ph.D. student in Computer Science at the
University of Texas at San Antonio. Live at **https://protikdey.github.io/**.

---

## Tech stack

| Layer | Technology |
|---|---|
| Markup | Plain HTML5 (single page, `index.html`) |
| Styling | Plain CSS (`style.css`) — no framework, no build step |
| Behavior | Vanilla JavaScript (`script.js`) — scrollspy nav highlighting, mobile nav auto-scroll, footer year |
| Fonts | Google Fonts: **Fraunces** (headings), **Atkinson Hyperlegible Next** (body), **JetBrains Mono** (dates, tags, metadata) |
| Icons | **Font Awesome 6** (general + brand icons) and **Academicons** (Google Scholar, ResearchGate) — both loaded from CDN |
| Analytics | **GoatCounter** (privacy-respecting, no cookies) — dashboard at protik-dey.goatcounter.com |
| Hosting | GitHub Pages |

No build tools, no dependencies to install. Edit the files, push to GitHub, done.

## Project structure

```
├── index.html        # all content lives here
├── style.css         # all styling
├── script.js         # nav highlighting + footer year
├── README.md
├── cv/
│   └── Protik_Dey_CV.pdf       # CV opened by the nav's CV link
├── files/
│   └── *.pdf                   # posters and other linked documents
└── images/
    ├── demo-protik2.jpg        # sidebar avatar
    ├── og-image.png            # social sharing preview card
    ├── favicon.ico             # browser tab icon (+ 3 more favicon files)
    ├── favicon-16.png
    ├── favicon-32.png
    ├── apple-touch-icon.png
    └── projects/               # one thumbnail per research project
```

## Running locally

Just open `index.html` in a browser. (Fonts and icons load from CDNs, so you need internet for
the page to look right.)

---

# Section numbering (automatic — do not hand-number)

Section numbers (01, 02, …) are generated **automatically by a CSS counter** — see the
`counter-reset` / `counter-increment` / `h2::before` rules near the top of `style.css`. Every
`<h2>` inside `<main>` gets the next number based on its position on the page.

**Never put a number or `<span class="num">` inside a heading.** Headings are written as plain
text, e.g. `<h2 id="skills-h">Skills</h2>`. If a manual number is added, the section will show
**two** numbers (the counter's and the manual one). Adding, removing, or reordering sections
requires no renumbering — the counter recalculates on every page load.

---

# How to edit each section

All content is in `index.html`. Sections appear in this order, each wrapped in a
`<section id="...">` tag: **About Me** (`summary`), **Research Focus** (`research`),
**News** (`news`), **Publications** (`publications`), **Research Projects** (`projects`),
**Experience** (`experience`), **Education** (`education`), **Skills** (`skills`),
**Professional Services** (`service`), **Contact** (`contact`). Find them by searching for
the `id`.

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
- **The CV link** points to a file (`cv/Protik_Dey_CV.pdf`), not a section — see §9.

> ⚠️ **Caution:** the sidebar auto-widens to fit the longest label (`max-content` grid column).
> Very long labels will push the main content right — keep labels short.

## 2. About Me / hero (`id="summary"`)

- **Title line:** the `<p class="eyebrow">`.
- **Name:** the `<h1 class="hero__name">`.
- **Bio:** the `<p class="hero__dek">` paragraphs (who I am → research focus → BUET/thesis).
- **Social icons:** the `<ul class="social-row">`. Each pill is an `<a class="social-pill ...">`
  with a brand class (`email`, `linkedin`, `github`, `google-scholar`, `medium-blog`,
  `researchgate`). To add a network: copy an `<li>`, change the `href`, `aria-label`, the icon
  classes, and add a matching color rule in `style.css` (search "Colorful brand icons").

> ⚠️ **Caution:** Google Scholar and ResearchGate icons come from **Academicons**
> (`class="ai ai-google-scholar"`), not Font Awesome. Don't change their prefix to `fa-`.
> The email pill uses `mailto:` and needs no `target="_blank"`.

## 3. Research Focus (`id="research"`)

Plain paragraphs — edit freely. The pill labels at the bottom are the
`<ul class="tag-list">`; add or remove `<li>` items, no CSS changes needed.

## 4. News (`id="news"`)

A reverse-chronological list — **newest entry on top**. Each entry:

```html
<li><span class="news-date">Apr 2026</span> One-line description of the event.
  <a href="..." target="_blank" rel="noopener noreferrer" aria-label="Read the HCXAI 2026 paper">Read here.</a></li>
```

- The link is optional. When several entries link with the same visible text ("Read here."),
  give each a distinct `aria-label` naming its destination, so screen-reader users can tell
  them apart in a links list.
- Good news items: paper acceptances, talks/posters, new roles, awards, service.

## 5. Publications (`id="publications"`)

Each paper is one `<p class="pub-entry">`: authors → linked title → italic venue → type chip.

```html
<p class="pub-entry">
  Co-Author One, <strong>Protik Dey</strong>, Co-Author Two,
  <a href="https://doi.org/..." target="_blank" rel="noopener noreferrer">Paper Title.</a>
  <i>Venue Name (ABBREV), Year.</i>
  <span class="pub-chip pub-chip--paper">Paper</span>
</p>
```

- Bold **only your own name** with `<strong>`.
- End the title with a period inside the link; use the DOI or publisher page when possible.
- Chip variants: `pub-chip--paper`, `pub-chip--poster`, `pub-chip--abstract` (colors defined
  in `style.css`). Newest papers go on top.

## 6. Research Projects (`id="projects"`)

Each project is a card: thumbnail on the left, then title, paragraph description, keyword
chips, and (optionally) linked outcome chips:

```html
<article class="project">
  <div class="project__thumb"><img src="images/projects/name.jpg" alt=""></div>
  <div class="project__body">
    <h3 class="project__title">Project Title</h3>
    <p>Paragraph description…</p>
    <ul class="project__tags" aria-label="Keywords">
      <li>Keyword</li>
    </ul>
    <div class="project__outcomes">
      <a class="outcome-chip" href="..." target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-file-lines" aria-hidden="true"></i> Paper · Venue Year
      </a>
    </div>
  </div>
</article>
```

- Thumbnails live in `images/projects/` (roughly square, ≥300px). Keep `alt=""` — they're
  decorative next to the title.
- Outcome chips can also be non-link `<span class="outcome-chip">Ongoing</span>` status labels.
  Omit the whole `project__outcomes` div if there's nothing to show.

## 7. Experience (`id="experience"`) and 8. Education (`id="education"`)

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

## 9. Skills (`id="skills"`)

A grid of groups. Each group:

```html
<div class="skills-group">
  <h3>Group name</h3>
  <p>Skill, Skill, Skill</p>
</div>
```

Add/remove whole groups freely — the grid reflows automatically (one column on mobile).

## 10. Professional Services (`id="service"`)

Two parts:

**Service cards** (`.service-grid` → `.service-card`): each card has an icon badge, a
category heading (External Reviewer, Volunteering, …), and a `.service-list`. The grid uses
`auto-fit`, so any number of cards lays out automatically.

```html
<div class="service-card">
  <div class="service-card__icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></div>
  <h3>Category</h3>
  <ul class="service-list">
    <li>Entry</li>
  </ul>
</div>
```

**Mentoring** (`.mentoring-list`): one row per mentee — name, role, date.

```html
<li>
  <span class="mentoring-name">Student Name</span>
  <span class="mentoring-role">Undergraduate Student, University</span>
  <span class="mentoring-date">Spring 2026 – Present</span>
</li>
```

> ⚠️ **Caution:** only list confirmed service (no "may attend"), and get each mentee's okay
> before naming them publicly.

## 11. CV (nav link, no page section)

The nav's CV item opens `cv/Protik_Dey_CV.pdf` in a new tab.

- **To update the CV:** replace the PDF in the `cv/` folder, keeping the same filename — or
  change the filename and update the `href` in the nav to match. Posters and other linked
  PDFs live in `files/`.

> ⚠️ **Caution:** no spaces in PDF filenames (use `_`). File-opening nav links must keep a
> file path in `href` — the highlight script only tracks links whose `href` starts with `#`
> (selector `.rail__link[href^="#"]` in `script.js`). Don't change that selector.

## 12. Contact (`id="contact"`)

Each row is:

```html
<li class="contact-item">
  <span class="contact-icon" aria-hidden="true"><i class="fa-solid fa-envelope"></i></span>
  <a href="mailto:you@example.com">you@example.com</a>
</li>
```

- Email rows use `href="mailto:..."`, phone rows `href="tel:+1234567890"` (digits only, with
  country code), web links plain `https://...` with `target="_blank" rel="noopener noreferrer"`.

## 13. Footer

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
  <h2 id="teaching-h">Teaching</h2>
  <p>Your content here…</p>
</section>
```

Requirements:
- A unique `id` on the `<section>` (lowercase, no spaces) — this is what the nav links to.
- An `<h2>` with its own `id` (convention: section id + `-h`), referenced by the section's
  `aria-labelledby`. This is what screen readers announce for the region.
- **No number in the heading** — the CSS counter adds it automatically based on position
  (see "Section numbering" above).

**Step 2 — Add the matching nav item** in the sidebar `<ol>`, at the same position as the
section's place on the page:

```html
<li><a href="#teaching" class="rail__link"><i class="fa-solid fa-chalkboard-user" aria-hidden="true"></i><span>Teaching</span></a></li>
```

The `href` must be `#` + the section's exact `id`. Pick any Font Awesome Free icon.

**Step 3 — There is no step 3.** Numbering, scrollspy highlighting, spacing, heading styles,
and mobile layout all pick the new section up automatically. Inside the section, reuse
existing patterns (timelines, tag lists, project cards, service cards, skills groups) — they
work in any section.

> ⚠️ **Caution:** make sure the nav order matches the page order, or the wrong link will
> highlight while scrolling (and at the very bottom of the page, where the last nav link is
> force-highlighted).

---

# Styling: common adjustments (`style.css`)

The most-tweaked values are marked with `/* — edit this */` comments:

| What | Where | Current |
|---|---|---|
| Site colors | `:root` tokens at the top (`--indigo`, `--amber`, `--paper`, …) | indigo `#3730C4`, amber `#E8992B` |
| Content column width | `--content-max` in `:root` | `1060px` |
| Side gaps of content | `main { padding: ... }` (middle value) | `1.75rem` |
| Body font size / weight | `body { font-size; font-weight }` | `17px` / `400` |
| Section numbers | `h2::before` counter rules near top of file | auto, `decimal-leading-zero` |
| Nav label & icon size | `.rail__link` and `.rail__link i` | `1.05rem` / `1rem` |
| Avatar size | `.rail__avatar` (desktop) + inside `@media (max-width: 900px)` (mobile) | `190px` |
| Social pill / icon size | `.social-pill` and `.social-pill i` | `48px` / `1.3rem` |
| Publication chip colors | `.pub-chip--paper` / `--poster` / `--abstract` | see file |
| Project thumbnails | `.project__thumb` | `110px` square, `12px` radius |
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

# Analytics

Visits are counted by **GoatCounter** via one script tag in the `<head>`
(`data-goatcounter="https://protik-dey.goatcounter.com/count"`). Dashboard:
https://protik-dey.goatcounter.com. No cookies, so no consent banner is needed. To stop
counting your own visits, use the "ignore my views" option in GoatCounter's settings.

# Deploying

Push to the `main` branch of the `protikdey.github.io` repository; GitHub Pages publishes
automatically within a minute or two. Hard-refresh (Ctrl/Cmd+Shift+R) if you don't see changes.

# General cautions

1. **Never hand-number section headings** — the CSS counter does it. A manual number shows as
   a double number.
2. **Keep `id`s and `href`s in sync.** Nav links (`href="#skills"`) must match section ids
   (`id="skills"`), and `aria-labelledby` values must match a real heading `id`. Broken pairs
   hurt both navigation and screen-reader users.
3. **Icon prefixes matter.** `fa-solid` / `fa-brands` (Font Awesome) vs `ai` (Academicons). A
   wrong prefix renders an empty square.
4. **Accessibility is a feature of this site.** Keep `aria-label` on icon-only links,
   `aria-hidden="true"` on decorative icons, distinct `aria-label`s on repeated "Read here."
   links, and don't remove the skip link, focus outline styles, or `prefers-reduced-motion`
   block in the CSS.
5. **Test on mobile after layout changes.** The `@media (max-width: 900px)` block at the bottom
   of `style.css` turns the sidebar into a horizontal top bar and stacks project cards; changes
   to rail/nav/project styles should be checked there too.
6. **Commenting out HTML:** be careful that a `<!-- ... -->` block doesn't accidentally swallow
   a closing tag (like `</div>`) that live markup still needs.
7. **External links** should keep `target="_blank" rel="noopener noreferrer"`.