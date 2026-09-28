# Academic data maintenance

- Both homepages render from the same records in `src/data/`. Edit `profile.ts`, `publications.ts`, `talks.ts`, and `surfaces.ts` to update content; UI translations are in `i18n.ts`.
- Paper titles, talk titles, author order, venues, event names, and the official funding-project titles retain the supplied language and wording. Localized explanatory prose is stored alongside the shared facts.
- Publications are sorted by supplied year, descending. Within a year, source order is retained because exact dates were not supplied. The initial view shows six records; an active filter applies before this limit.
- Talks are sorted by supplied dates, descending, preserving date precision and source order for equal dates. There are 20 supplied talks: 13 international invited, 5 domestic invited, and 2 domestic non-invited. The initial view shows 10 matching records. The March 23, 2026 presentation records all four authors as coauthors; its presenting speaker has not been specified.
- The Preprints filter is intentionally empty: none of the supplied records is categorized as a standalone preprint. An arXiv link does not change a peer-reviewed record's category.
- The incomplete source record “Masaya Hara and Denis Polly, MATRIX proceedings” is not rendered. A confirmed title and metadata are needed before publication.
- The Vienna talk has no supplied event URL; no link has been added.
- Five technical summaries are concise paraphrases of the linked arXiv or publisher summaries. Each stores its source URL and includes a source link in the modal. The thesis, RIMS report, and Maximal Darboux report have no verified technical-summary text in this pass; their modals explicitly indicate that a summary is pending.
- Publication illustrations and the four surface previews are generic placeholders, not research figures. No related-surface links are assigned. The optional `additionalImages` and `relatedSurfaces` fields are ready for confirmed assets and destinations.
- The first public release hides gallery navigation and the homepage section using `surfaceGalleryEnabled` in `src/data/release.ts`. Future source/data are retained. No `/surfaces/` route is generated or included in the sitemap.
- Without JavaScript, all records remain readable. JavaScript activates the filters, list-specific display limits, show-all controls, language-hash preservation, and native publication dialogs.

- Funding remains one shared record with the supplied official title and KAKEN URL for each homepage language.
- `InlineMath.astro` renders mixed text and inline mathematics at build time using KaTeX, with locally bundled styles/fonts and accessible MathML. It is used for talk/publication titles, technical summaries, research descriptions, and other scientific text. No client-side math renderer is loaded.
- Mark inline mathematics with `\(` and `\)` in content, for example `String.raw` followed by a template literal containing `Curves in \(\mathbb{R}^3\) with \(H = 0\)`. In ordinary quoted TypeScript strings, double the backslashes. The same mechanism supports `Q`, `g`, and other KaTeX expressions. Invalid mathematics or unmatched delimiters fail the build instead of exposing raw source to readers.

- Research Interest / 研究対象 descriptions use the supplied bilingual text in `profile.ts`. The `research` anchor is retained.
- CV has two vertical subsections: Position / 職歴 and Grants / 研究費. Contact is a separate full-width section. Only the grant number links to the language-specific KAKEN page.
- The supplied doctoral-thesis PDF is present at `public/papers/hara-phd-thesis-2026.pdf`. Its PDF resource opens in a new tab on the card and modal, alongside the existing repository link. The local PDF resource is omitted at build time if the file is absent.
