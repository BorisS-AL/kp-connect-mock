# KP Connect mock — running STUB / SWAP list

Single source of truth for what's real vs. pending. Update as items resolve.
Legend: 🟢 done/confirmed · 🟡 partial · 🔴 needs input

## Built faithfully from the high-fidelity design (homepage)
- 🟢 Brand colors sampled exact — orange `#E17327`, red `#C02126`, gradient, peach `#FCF1E9` (in css/tokens.css).
- 🟢 Real homepage layout + sections: header, hero, statement band, about+stats, audience, KP Services (4 cards), Stakeholder Ecosystem, Talent Supply Chains, Why Choose KP (metrics + testimonials + quote), footer.
- 🟢 Real copy from the design/transcript: hero statement, service descriptions + tag pills, ecosystem cards, supply-chain paragraph, footer links/address.
- 🟢 Real images extracted from the PDF → assets/: logo, about-group, audience x2, ecosystem-diagram (donut), supply-workers, supply-chain-infographic.
- 🟢 Interactions: sticky header, smooth scroll, CTA hover, card lift, mobile hamburger, animated counters (skip while 0).

## Still stubbed / pending input
- 🟡 Fonts — INFERRED as Poppins (headings) + Open Sans (body) via Google Fonts. Confirm the real Figma fonts to finalize (needs Figma dev access or a spec).
- 🔴 Hero image/video — the design itself shows an empty grey hero; supply the intended hero media.
- 🔴 Real stat numbers — counters show `00+ / 00%` placeholders (Years of Impact, Lives Changed, Success Rate; Individuals Upskilled, Businesses/Communities Supported, Partner Organizations). Numbers "provided later" per brand doc.
- 🔴 About body copy — design showed lorem; current text is a sensible placeholder. Supply final copy.
- 🔴 Video + testimonial media — grey placeholders (as in the design); supply real video thumbnails/links and testimonial names.
- 🟡 Service/why-choose icons — using emoji to match the design's icon style; swap for final icon assets if desired.

## Pages — ALL BUILT (11 pages)
🟢 index (Home) · about · services · kp-network · blog · contact ·
tech-modernization · kp-contributor · star-initiative · social-entrepreneur · talent-development.
All share one header/footer (Drupal regions) + css/tokens|base|blocks|pages + js/configurator.
Per-card stock photos use grey placeholders (`.media-card__img`, `.blog-card__thumb`) — swap with finals.
Real distinctive graphics are in: logo, ecosystem donut, stakeholder model, supply-chain workers + infographic, US map, community photo.

## Dynamic / CRM-fed (for the Drupal team) — from brand doc page notes
- 🔴 Service cards, testimonials, "All / Success Stories" filters → Drupal Views.
- 🔴 Counters → animated; numbers from admin.
- 🔴 Page 4 animated spinners (hover → side detail). Page 5 → TMG application form.
- 🔴 Pages 6, 9, 11 → data from ATMS (CRM). Integration method TBD.

## Configurator toggles (review aid — confirm intent)
- 🟡 Accent (Orange/Red) + Density (Light/Dense) are design-conversation toggles, not
  confirmed Figma variants. Confirm which (if any) should become a real content-editor
  option in Drupal vs. review-only.

## Notes
- A zip of design exports (jpegs/pdfs) was mentioned — if added, it may provide higher-res
  assets and the remaining page layouts. Pending inventory.
