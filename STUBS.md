# KP Connect mock — running STUB / SWAP list

The single source of truth for everything not yet final. Update this as items
are resolved. Format: status — item — where — what's needed.

Legend: 🔴 needs Figma/brand input · 🟡 partial (have some, need exact) · 🟢 confirmed

## Design tokens (css/tokens.css)
- 🟢 Brand colors — `--kp-orange #E17327`, `--kp-red #C02126`, gradient — brand doc.
- 🔴 Font families — `--font-head`, `--font-body` — guessed (Poppins/Inter). Read exact families + weights from Figma inspect.
- 🔴 Type scale — `--fs-h1/h2/h3/body/small` — placeholder px. Replace with Figma sizes.
- 🔴 Neutrals — `--ink/--muted/--line/--surface` — approximated from PDF. Confirm exact hex.
- 🟡 Spacing/radius/shadow — `--section-y/--pad/--gap/--radius/--shadow` — placeholder. Confirm from Figma.

## Imagery & assets
- 🔴 Logo — `.logo-mark` is a gradient dot placeholder — supply real SVG/PNG.
- 🔴 Hero media — `.hero__media` grey box — supply hero image/video.
- 🔴 About team photo, supply-chain visual, ecosystem diagram — all grey placeholders.
- 🔴 Service-card icons/illustrations, testimonial video thumbs, partner logos.

## Content / copy
- 🟢 Hero statement headline — real, from narrative.
- 🟢 Service pillars + sub-services, footer address/phone/email — real, from transcript.
- 🟡 About body copy — placeholder (Figma shows lorem); supply final copy.
- 🔴 Stat numbers — `data-target="0"` on counters (Years of Impact, Lives Changed, Success Rate, social-proof metrics). Real numbers "provided later" per brand doc.
- 🔴 Testimonials / success stories — placeholder cards. Brand doc: Drupal view-driven from admin.

## Pages (only Home is scaffolded so far)
Site map from transcript — remaining pages to build in the real phase:
- 🔴 About · Services · KP Network · Blog · Contact
- 🔴 Service landing: KP Academy, KP University, KP Care, Innovative Workforce
- 🔴 Programs: Technology Modernization Grant, Everyone Can Go Pro, STAR Initiative, KP Contributor
- 🔴 Utility: Blog listing, Contact, Newsletter signup

## Dynamic / CRM-fed (from brand doc page notes) — for the Drupal team
- 🔴 Service cards, testimonials, "All / Success Stories" filtered lists → Drupal Views.
- 🔴 Counters → animated; numbers from admin.
- 🔴 Page 4 animated spinners (hover → side detail panel).
- 🔴 Page 5 → TMG application form.
- 🔴 Pages 6, 9, 11 → data from ATMS (CRM). Integration method TBD.

## Interactions
- 🟢 Smooth scroll, sticky header, CTA hover, card lift — built.
- 🟡 Hamburger menu — built (basic). Confirm Figma mobile menu styling.
- 🔴 Forms (TMG application, Contact, Everyone-Can-Go-Pro lead) — not built yet.

## Configurator toggles (review aid — confirm intent)
- 🟡 Accent A/B, Lead layout, Density are placeholder conversation toggles.
  Replace with REAL Figma variants once known. Confirm which (if any) should
  become content-editor-controlled options in Drupal vs. review-only.
