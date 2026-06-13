---
title: Using Google Sheets as a database for an experimental project
date: 2020-02-25 22:47:55
tags:
  - Google Sheets
  - JavaScript
  - Database
categories:
  - Development
description: How to use Google Sheets as a lightweight backend database for small experimental projects, with a comparison of Sheetrock, Tabletop, and Sheetsee libraries.
---

Google Sheets can work as a quick, zero-setup database for experimental or prototype projects. Here's a comparison of the main libraries and useful starting points.

## Library options

After evaluating several libraries, these three are the most commonly used:

**1. Sheetrock** — simplest option for read-only display of sheet data in HTML
- [chriszarate.github.io/sheetrock](https://chriszarate.github.io/sheetrock/)

**2. Tabletop** — fetch Google Sheets data as JSON in JavaScript
- [github.com/jsoma/tabletop](https://github.com/jsoma/tabletop)
- [CSS-Tricks walkthrough](https://css-tricks.com/creating-an-editable-webpage-with-google-spreadsheets-and-tabletop-js/)

**3. Sheetsee** — adds sorting, filtering and templating on top of Tabletop
- [jlord.us/sheetsee.js](https://jlord.us/sheetsee.js/docs/basics.html)
- [GitHub — jlord/sheetsee](https://github.com/jlord/sheetsee)

## Most useful reference (CRUD with Google Apps Script)

For read/write access (not just read), use Google Apps Script as a backend:

```
https://gist.github.com/nyancodeid/abc7f2c3ce47eda753dee8a2b63070ab
```

This lets you do full CRUD (Create, Read, Update, Delete) by deploying a script as a web app endpoint.

## Working examples

- [Codepen — Sheets CRUD demo](https://codepen.io/ashrafali46/pen/bJgwEN)
- [Google Sheets as backend tutorial](https://programming-steps.blogspot.com/2016/10/google-sheet-data-crud-app-script-jquery.html)

## When to use this approach

Best for: prototypes, demos, internal tools with small datasets, and projects where you want non-technical collaborators to edit the data.

Not suitable for: production apps, large datasets, or anything requiring authentication and security.
