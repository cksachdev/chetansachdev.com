# TODO — chetansachdev.com

Audit of the Hexo site (`fctheme`). Issues grouped by priority.

---

## 🔴 Critical

### 1. Sci-fi intro plays on every page load
`themes/fctheme/layout/layout.ejs`  
The matrix/glitch intro overlay runs on **every page navigation**, not just the first visit. There is no `localStorage` check to skip it for returning visitors. A 10-second blocking overlay on every page is a major UX problem — users navigating between posts or archives see it repeatedly. Either remove it entirely or gate it with a session/localStorage flag so it only shows once per session.

### 2. Google Analytics using deprecated UA tracking ID
`themes/fctheme/layout/_partial/head.ejs`  
Using `UA-167238494-1` (Universal Analytics). Google shut down UA processing in July 2023 — this tag no longer records any data. Migrate to a GA4 property and replace the `gtag` config with the new `G-XXXXXXXX` measurement ID.

### 3. Sitemap config key is broken
`_config.yml` line 38–40  
```yaml
a Sitemap:     # ← broken key, treated as arbitrary string
  path: sitemap.xml
```
Should be:
```yaml
sitemap:
  path: sitemap.xml
```
No sitemap is being generated, hurting SEO and crawlability.

### 4. Site URL is HTTP, not HTTPS
`_config.yml`  
```yaml
url: http://chetansachdev.com
```
All canonical URLs, OG tags, and Disqus configs that pull from `config.url` produce `http://` links. Change to `https://chetansachdev.com`.

---

## 🟠 High Priority

### 5. Missing OG default image
`themes/fctheme/layout/_partial/head.ejs`  
The fallback Open Graph image is set to `/img/og-default.png`, but this file does not exist in `themes/fctheme/source/img/`. Posts without a `cover` or `thumbnail` in front-matter will have a broken OG image, making link previews appear blank on social platforms. Create and add the image.

### 6. Twitter handle mismatch in meta tags
`themes/fctheme/layout/_partial/head.ejs`  
```html
<meta name="twitter:site" content="@chetansachdev">
<meta name="twitter:creator" content="@chetansachdev">
```
But all actual social links (header, footer, sidebar, about page) point to `@cksachdev`. Pick one handle and make it consistent everywhere.

### 7. Font Awesome 4.7 loaded from legacy StackPath CDN
`themes/fctheme/layout/_partial/head.ejs`  
StackPath discontinued its free CDN. FA 4.7 is also outdated (2016). This is a single point of failure — if the CDN is unavailable, all icons (nav, social links, footer) disappear. Replace with locally hosted SVG icons or upgrade to Font Awesome 6 (CDN from Cloudflare or self-hosted).

### 8. No skip-to-content link
`themes/fctheme/layout/layout.ejs`  
`<main id="main-content">` exists but there is no visible skip link before the header. Keyboard and screen reader users must tab through the entire nav on every page. Add:
```html
<a href="#main-content" class="skip-link">Skip to content</a>
```
with appropriate CSS to show it on focus.

### 9. Stale/garbage pages in source
`source/service/index.md` — blank page (no content)  
`source/services/index.md` — rough stub with typos ("Developement") and `<br>` formatting  
`source/_posts/post.md` — placeholder test post that is published live  
`source/_drafts/index.md` — an index file sitting in `_drafts`  
These should be deleted or properly fleshed out. The `service` and `services` pages are both orphaned (not in nav), duplicated, and embarrassing on a professional blog.

### 10. Payment page is too rough for a public professional site
`source/payment/index.md`  
Uses legacy Hexo `{% img %}` tag syntax, an emoji heading (`# Payment Details :`), and has no surrounding context or design. Either remove it from the site, restrict it, or redesign it to match the rest of the theme.

---

## 🟡 Medium Priority

### 11. No RSS feed autodiscovery link in `<head>`
`themes/fctheme/layout/_partial/head.ejs`  
An Atom feed is configured (`atom.xml`) but there is no `<link rel="alternate" type="application/atom+xml">` tag in the HTML head. Browsers and feed readers won't auto-detect the feed. Add:
```html
<link rel="alternate" type="application/atom+xml" title="<%= config.title %>" href="/atom.xml">
```

### 12. Mobile nav drawer doesn't close on outside click
`themes/fctheme/layout/_partial/header.ejs`  
Clicking outside the open mobile nav drawer does not close it. Add a `document` click listener that closes the drawer when focus moves away.

### 13. No `<meta name="theme-color">` for mobile browsers
`themes/fctheme/layout/_partial/head.ejs`  
Mobile browsers use this to colour the browser chrome. Add one for each theme:
```html
<meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
```

### 14. Outdated SEO keywords
`_config.yml`  
```yaml
keywords: ... adobe flex engineer, freelance flash developer ...
```
Flash and Flex are defunct technologies. Update keywords to reflect current skills (eLearning, SCORM, xAPI, Adapt Framework, Sunbird, JavaScript).

### 15. No structured data (JSON-LD)
`themes/fctheme/layout/_partial/head.ejs` / `post.ejs`  
No Schema.org markup. Adding `BlogPosting` for posts and `Person` for the about page would improve Google rich results. At minimum, add a `WebSite` schema with `sitelinks` search potential.

### 16. Disqus config uses hardcoded `https://` while `config.url` is `http://`
`themes/fctheme/layout/_partial/article.ejs`  
```js
this.page.url = 'https://chetansachdev.com/<%- item.path %>';
```
This is actually correct, but it diverges from `config.url` (`http://`). Once `config.url` is fixed to `https://`, update Disqus config to use the config variable instead of a hardcoded string.

### 17. Potential flash of wrong theme on load
`themes/fctheme/layout/_partial/header.ejs`  
Theme is applied via JavaScript after DOM parse. Users on a non-default theme may briefly see the dark theme before the script runs. Move the theme-reading logic to a `<script>` in `<head>` (before CSS loads) or use a CSS custom property with `prefers-color-scheme` as the default.

### 18. About page uses heavy inline styles
`source/about/index.md`  
The entire about page layout is built with inline `style=""` attributes (margins, colors, font sizes, flex). These override nothing and are hard to maintain — if the design system changes, they won't update. Extract these into CSS classes in `styles.css`.

### 19. Theme config still lists unused nav items
`themes/fctheme/_config.yml`  
The theme config `menu` section still defines `categories`, `tags`, `payment`, and `github` items. The actual rendered nav (hardcoded in `header.ejs`) doesn't use this config — it's dead config. Either wire the nav to use the config or remove the stale entries.

---

## 🟢 Low Priority / Polish

### 20. `post_asset_folder: true` combined with `relative_link: true` can break image paths
`_config.yml`  
This combination is known to cause inconsistent asset URL resolution in Hexo. Test post images carefully or switch to absolute paths.

### 21. Font loading causes layout shift
`themes/fctheme/layout/_partial/head.ejs`  
Three font families (Inter, Lora, JetBrains Mono) are loaded without `font-display: optional` or preload hints. Add `<link rel="preload">` for the most critical weights to reduce Cumulative Layout Shift.

### 22. Twitter/X — social links are out of date
Footer, sidebar, and about page still say "Twitter" and link to `twitter.com`. The platform is now X (`x.com`). Update the display text and links.

### 23. `index.ejs` renders but home page title is generic
`themes/fctheme/layout/index.ejs`  
The `<h1>` says "Writing" but the page `<title>` is just "Chetan Sachdev". Consider adding the subtitle ("planting ideas") to the home page title for better context.

### 24. Archive page heading is missing when viewing root archives
`themes/fctheme/layout/archive.ejs`  
The `<h1>` only renders `if (title)`. When `page.archive` is true but no year/month, `title` is set to `'Archives'` — this works, but the logic is fragile. Add a fallback default string to make it explicit.

### 25. No `loading="lazy"` on post body images
`themes/fctheme/layout/_partial/article.ejs`  
Post content images rendered from Markdown don't get `loading="lazy"`. This causes all post images to load immediately. Consider a post-processing step or Hexo plugin to inject this attribute.

### 26. `per_page: 100` means the home page loads all 35+ posts at once
`_config.yml`  
With 35 posts and pagination disabled via a high `per_page`, the home page renders all posts in a single HTML response. As the blog grows this will get slower. Reduce to 20–30 and enable pagination.

### 27. No `robots.txt` rules beyond the default
`source/robots.txt`  
The file exists (good) but verify it allows crawling of all intended paths and disallows `_drafts`, `payment`, etc. if those should remain private.

### 28. Favicon is `.ico` only — no modern PNG/SVG alternatives
`themes/fctheme/layout/_partial/head.ejs`  
Only `favicon.ico` is declared. Add `apple-touch-icon` and a 192×192 PNG for PWA/Android home screen support:
```html
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/img/icon-192.png">
```
