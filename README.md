# chetansachdev.com

Personal blog built with [Hexo](https://hexo.io/) and deployed to GitHub Pages via the `gh-pages` branch.

## Prerequisites

- Node.js (v14+)
- npm

## Setup

```bash
npm install
```

## Development

Start the local dev server with live reload:

```bash
npm start
```

The site is available at `http://localhost:4000`.

## Creating a New Post

```bash
npm run new -- "My Post Title"
```

This generates `source/_posts/my-post-title.md`. Edit that file to add your content.

Post front matter example:

```yaml
---
title: My Post Title
date: 2026-06-14 10:00:00
tags:
  - javascript
categories:
  - tech
---
```

Write your content in Markdown below the front matter.

## Testing

Preview the site locally before deploying:

```bash
npm start
```

Check that:
- New posts appear correctly
- Images load
- Links work

## Deployment

Builds the site and deploys the `public/` folder to the `gh-pages` branch:

```bash
npm run deploy
```

This runs `hexo clean && hexo generate && hexo deploy` under the hood, pushing to:
`https://github.com/cksachdev/chetansachdev.com.git` → branch `gh-pages`

GitHub Pages then serves the site at [chetansachdev.com](http://chetansachdev.com).

## Project Structure

```
.
├── _config.yml       # Hexo site configuration
├── package.json
├── scaffolds/        # Post/page/draft templates
├── source/
│   ├── _posts/       # Blog posts (Markdown)
│   └── _drafts/      # Unpublished drafts
├── themes/           # Active theme(s)
└── public/           # Generated output (git-ignored)
```
