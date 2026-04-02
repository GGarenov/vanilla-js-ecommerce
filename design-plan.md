# Vanilla JS E‑commerce — Design & Architecture Plan

Single-page storefront for static hosting (e.g. GitHub Pages): one `index.html`, vanilla JS for routing and state, CSS variables for theming.

---

## Big picture

| Goal | Approach |
|------|----------|
| One page (SPA) | Show/hide views or swap main content; no extra HTML routes required on the server. |
| Shareable links | **Hash routing** (`#/`, `#/men`, `#/women`, `#/sale`) — works on GitHub Pages without server rewrites. |
| Men / Women / Sale | Navbar links update hash + visible section; product data filtered by `gender` / `onSale`. |
| Dark default + light toggle | `data-theme` or class on `<html>` + CSS variables; optional `localStorage` persistence. |
| Lean page | Remove gallery and new season blocks; tighten layout and styles. |

---

## Phase 1 — Structure & routing

- [ ] Remove **gallery** and **newSeason** sections from `index.html`; delete unused CSS.
- [ ] Add semantic wrappers: `<main>`, `<section>` with stable `id`s for each view (e.g. `home`, `men`, `women`, `sale`).
- [ ] Implement **hash router** in `app.js`: parse `location.hash`, map to a view name, show matching section and hide others.
- [ ] On load and on `hashchange`, sync UI to the current hash; default to `#/` or `#/home` if missing.
- [ ] Wire navbar: **Men**, **Women**, **SALE** (and logo/home if desired) to `location.hash` or `history.replaceState` + hash (prefer setting hash only for GH Pages simplicity).
- [ ] Replace **Limited offer!** with **SALE** linking to `#/sale` (button or `<a href="#/sale">`).
- [ ] Fix script path: use `./app.js` instead of `/app.js` for local and GitHub Pages subpaths.
- [ ] Fix HTML issues: invalid `</br>` / mismatched heading tags; one logical `<h1>` per view or per page (decide and apply consistently).

---

## Phase 2 — Product data & UI

- [ ] Extend `products` in `app.js` with `gender: 'men' \| 'women' \| 'unisex'` and `onSale: boolean` (and optional `salePrice` if prices differ).
- [ ] Align **slider prices** with **product detail** prices for the same SKU (avoid conflicting `$119` vs `$199`).
- [ ] For **Men** / **Women**: filter products and drive slider + product block from filtered list (or show a grid — decide one pattern).
- [ ] For **Sale**: show only products with `onSale: true` (subset of slider or dedicated list).
- [ ] Keep existing behaviors: menu ↔ slide index, color/size selection, checkout modal — refactor so they use the **currently selected product** from filtered data without breaking indices.
- [ ] Replace Lorem ipsum with short, realistic copy per product.

---

## Phase 3 — Theming (dark default, light toggle)

- [ ] Define **CSS variables** on `:root` for dark theme (background, surface, text, muted text, border, accent, nav).
- [ ] Add `html[data-theme="light"]` (or `.light`) overrides for the same variables.
- [ ] Set **default** to dark: `data-theme="dark"` on `<html>` or variables only on `:root` for dark.
- [ ] Add a **theme toggle** control in the nav (icon or “Light / Dark”); on click, flip `data-theme` and `localStorage.setItem('theme', ...)`.
- [ ] On `DOMContentLoaded`, read `localStorage` and apply saved theme (fallback: dark).
- [ ] Optional: respect `prefers-color-scheme` **only** when no saved preference exists.
- [ ] Update components that use hardcoded colors (`whitesmoke`, `#111`, etc.) to use variables so both themes stay consistent.

---

## Phase 4 — Polish & UX

- [ ] **Payment modal**: full-viewport overlay (scrim), scrollable panel, close on overlay click and **Escape**; optional focus trap for accessibility.
- [ ] **Responsive**: add a tablet breakpoint (e.g. 768px); fix `.nsItem` → correct class if any dead rules remain after removing new season.
- [ ] **Slider**: optional slide indicators (dots) synced with hash or active product line; `prefers-reduced-motion` for transitions.
- [ ] **Footer**: real `<a href>` for social links; newsletter row aligned with theme variables.
- [ ] **Accessibility**: meaningful `alt` on product images; `aria-current` or `aria-selected` on active nav/theme where appropriate.

---

## Phase 5 — GitHub Pages deploy check

- [ ] Confirm all asset paths are **relative** (`./img/...`, `./style.css`, `./app.js`).
- [ ] Test with **hash URLs** after deploy: `https://<user>.github.io/<repo>/#/men`.
- [ ] Add a short **README** note: “Use hash links for sections” (optional).

---

## Out of scope / later

- Backend, cart persistence, real payments.
- `history.pushState` clean URLs without hash (requires `404.html` hack on GitHub Pages).
- Framework migration (React/Vue) — not required for this plan.

---

## File touch list (expected)

| File | Changes |
|------|---------|
| `index.html` | Nav (Men, Women, SALE), theme button, sections, remove gallery/new season, fix tags/script path. |
| `style.css` | Theme variables, dark/light, layout tweaks, remove unused rules. |
| `app.js` | Router, filters, theme init, modal improvements. |

---

## Done when

- [ ] Hash navigation works for home, men, women, sale without full reload.
- [ ] Theme toggles between dark and light and persists across refresh.
- [ ] Gallery and new season are removed; no broken styles or JS references.
- [ ] Page is deployable to GitHub Pages with relative paths and hash links working.
