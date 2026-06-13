# TODO2 — chetansachdev.com
Remaining issues after Hexo 8 upgrade, dependency updates, and About page redesign.  
_(Date: 2026-06-14)_

---

## ✅ Fixed in this session

| # | What was fixed |
|---|---|
| — | Hexo upgraded 5.0.2 → 8.1.2, all plugins updated to latest |
| — | Font Awesome 4.7 (legacy StackPath CDN) → FA 6.5.2 (Cloudflare CDN) |
| — | About page rewritten: modern profile card, FA6 icon buttons, tag chips, sticky sidebar, responsive grid |
| — | `{% youtube %}` tag missing from Hexo 8 core restored via `scripts/youtube-tag.js` |
| — | Footer and sidebar `fa fa-*` classes updated to FA6 (`fa-brands`, `fa-solid`) |

---

## 🔴 Critical

### 1. Google Analytics ID is still a placeholder
`themes/fctheme/layout/_partial/head.ejs`  
The head contains `G-XXXXXXXXXX` — a literal placeholder, not a real GA4 measurement ID. Analytics are not recording. Replace with your actual GA4 property ID from [analytics.google.com](https://analytics.google.com).

### 2. `npm audit` reports 11 vulnerabilities (1 critical, 7 high, 3 moderate)
Root causes are unmaintained or outdated transitive dependencies:
- **`hexo-renderer-kramed`** — pulls in `highlight.js 9.x` (vulnerable, CVE range 9.0–10.4). The package itself is unmaintained (last published 2019). Consider switching to `hexo-renderer-marked` (actively maintained) or `hexo-renderer-pandoc`.
- **`lodash ≤ 4.17.23`** — prototype pollution via `_.unset`/`_.omit` (pulled in by `hexo-tag-youtube-responsive`). No fix available without forcing a breaking upgrade.
- **`hexo-asset-image`** — pulls in `cheerio` → `css-what` → ReDoS vulnerability. The package is also stuck at v1.0.0 with no updates. Consider removing if not actively used (most posts use `/images/` absolute paths already).
- **`striptags < 3.2.0`** — unsanitised HTML output (pulled in by `hexo-generator-json-content`). Run `npm audit fix` — a non-breaking fix is available for this one.

### 3. Payment page uses broken `{% img %}` legacy tag
`source/payment/index.md`  
Hexo's built-in `{% img %}` tag was removed before v8. The payment page will fail to render the QR code image correctly. Either replace with a standard `<img>` tag or remove the page from the public site.

---

## 🟠 High Priority

### 4. `robots.txt` sitemap URL uses `http://`
`source/robots.txt` line 13:  
```
Sitemap: http://chetansachdev.com/sitemap.xml
```
The site URL is now `https://` — the sitemap reference should match. Update to:
```
Sitemap: https://chetansachdev.com/sitemap.xml
```
Also consider explicitly `Disallow:` ing `/payment/` if it should not be indexed.

### 5. No `loading="lazy"` on post body images
`themes/fctheme/layout/_partial/article.ejs`  
Markdown-rendered images don't get `loading="lazy"`. All images in every post load immediately on page open. Add lazy loading via a Hexo filter or by configuring `hexo-renderer-marked`'s `lazyload` option (another reason to replace `hexo-renderer-kramed`).

### 6. No structured data (JSON-LD)
`themes/fctheme/layout/_partial/head.ejs`  
No Schema.org markup exists on any page. At minimum add:
- `WebSite` schema on the home page (enables Google Sitelinks search)
- `BlogPosting` schema on post pages (enables rich results with date/author)
- `Person` schema on the About page

### 7. Payment page content is not suitable for a public professional site
`source/payment/index.md`  
The page has a raw bank/UPI identifier (`SBININBB`), an emoji heading, and legacy tag syntax. Either remove it or password-protect it — it should not be publicly indexed.

---

## 🟡 Medium Priority

### 8. Font loading causes Cumulative Layout Shift
`themes/fctheme/layout/_partial/head.ejs`  
Three font families (Inter, Lora, JetBrains Mono) load without `font-display` hints or `<link rel="preload">` for critical weights. Add preload for the primary body font weight to reduce CLS:
```html
<link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v13/...woff2" crossorigin>
```
Or switch to `font-display=swap` via the Google Fonts URL parameter (`&display=swap`).

### 9. `per_page: 100` loads all posts in one response
`_config.yml` lines 82 and 101  
Both the index and archive generators are configured to show 100 posts per page, which means all 35+ posts render in a single HTML page. As the blog grows this will increase load time. Reduce to `20` and let Hexo paginate.

### 10. No `loading="lazy"` on the About page avatar
`source/about/index.md`  
The profile photo in the new About card could use `loading="lazy"` since it's below the fold on mobile. Minor but easy win.

### 11. `hexo-tag-youtube-responsive` tag is `youtuber`, not `youtube`
`node_modules/hexo-tag-youtube-responsive/index.js`  
The installed plugin registers the `{% youtuber %}` block tag (not `{% youtube %}`). No posts use `{% youtuber %}`, so the plugin provides no value. The `{% youtube %}` tag was restored separately via `scripts/youtube-tag.js`. Consider removing `hexo-tag-youtube-responsive` from `package.json` to reduce the dependency surface (and one of the lodash vulnerability chains).

### 12. `hexo-helper-qrcode` appears unused
No posts or templates use the `qrcode` helper tag. The package can be removed to slim down `node_modules`.

### 13. Mobile nav: verify close-on-outside-click works on all breakpoints
`themes/fctheme/layout/_partial/header.ejs`  
A `document` click listener exists but it should be tested on actual mobile viewports — particularly that the click event correctly bubbles up when tapping a backdrop overlay vs. an anchor inside the nav.

---

## 🟢 Low Priority / Polish

### 14. YouTube embeds lack `title` attribute (accessibility)
`scripts/youtube-tag.js`  
The restored `{% youtube %}` iframe has no `title` attribute, which screen readers require to describe the frame's purpose. Update the tag to accept an optional title:
```
{% youtube VIDEO_ID "Video title here" %}
```

### 15. No `prefers-reduced-motion` guard on sci-fi intro animation
`themes/fctheme/layout/layout.ejs`  
The canvas-based matrix/glitch intro doesn't check `window.matchMedia('(prefers-reduced-motion: reduce)')`. Users who have motion sensitivity enabled will still see the full animation.

### 16. `og-default.png` in `/img/` exists but may not be optimised for social sharing
Verify the OG default image is exactly 1200×630px and under 1MB — standard requirements for Facebook/LinkedIn link previews to render correctly.

### 17. `hexo-generator-json-content` produces a large `content.json`
The plugin dumps all post content into a single JSON file used for search. On a slow connection this adds meaningful weight. Consider replacing with a lighter client-side search approach (e.g. Fuse.js with a pre-built index at build time) once post count grows.
