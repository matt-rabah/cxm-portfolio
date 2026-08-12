# Customizing the portfolio

The portfolio is an Astro site. The easiest edits happen in two places:

- `src/pages/index.astro` — copy, experience content, metrics, links, section labels, and page metadata.
- `src/styles/global.css` — fonts, colors, typography, spacing, layout, borders, and responsive behavior.

## Copywriting

Edit the text in `src/pages/index.astro`.

### Hero
- Eyebrow: `Detroit, Michigan · CX & Customer Success`
- Main headline: the `<h1>` content.
- Supporting paragraph: the first paragraph inside `.hero-bottom`.
- CTA: `View selected work`.

### Experience

The `experiences` array at the top of `index.astro` controls the three work sections. Each entry contains:

- `years`
- `role`
- `company`
- `sector`
- `summary`
- `metrics`
- `bullets`

This is the preferred place to update resume-derived copy without touching the layout.

### Approach

The three principles are directly in the `#approach` section. Edit the headings and descriptions there.

### Credentials

Education, certification, and speaking content live in the `#credentials` section.

### Contact

Email and LinkedIn URLs live in the `#contact` section.

## Fonts

Fonts are loaded at the top of `src/styles/global.css`.

Current type system:

- **Manrope** — primary sans-serif/body type
- **Newsreader** — editorial italic/display accent
- **DM Mono** — labels, navigation, metrics, and metadata

To change fonts, update the Google Fonts import and the corresponding `font-family` declarations. For a self-hosted font, place the font files in `public/fonts` and replace the import with `@font-face` declarations.

## Colors

The main palette is controlled by CSS variables near the top of `src/styles/global.css`:

- `--ink` — primary text and dark sections
- `--paper` — page background
- `--acid` — accent color and contact section
- `--muted` — secondary text
- `--line` — borders/dividers
- `--cream` — secondary neutral

Changing these variables updates most of the visual system without changing individual components.

## Layout

The site is intentionally content-first. The main layout is controlled by the classes in `global.css`:

- `.section-shell` — max content width
- `.hero` — opening section spacing
- `.experience` — work-entry grid
- `.metrics` — metric cards
- `.approach` — dark strategy section
- `.credentials` — education/certification section
- `.contact` — closing CTA

## Recommended editing workflow

1. Edit copy in `src/pages/index.astro`.
2. Edit design tokens in `src/styles/global.css`.
3. Run the Astro build and rendered HTML checks.
4. Review desktop and mobile layouts.
5. Commit to `main`.
6. Deploy the validated build through Sites.

The current production deployment can be changed without changing the domain structure; the custom domain remains separate from the content edits.
