---
title: Getting started with xAPI (Tin Can API)
date: 2021-01-02 02:01:26
tags:
  - xAPI
  - eLearning
  - JavaScript
categories:
  - Development
description: An introduction to writing xAPI statements for eLearning tracking, with resources on statement structure, context, and common misconceptions about JSON vs JavaScript objects.
---

xAPI (also called Tin Can API) is a specification for tracking learning experiences. Here's a starting point for writing and understanding xAPI statements.

## Writing xAPI statements

An xAPI statement has three required parts: **actor**, **verb**, and **object**.

```json
{
  "actor": {
    "name": "Chetan Sachdev",
    "mbox": "mailto:chetan@example.com"
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/completed",
    "display": { "en-US": "completed" }
  },
  "object": {
    "id": "http://example.com/courses/intro-to-xapi",
    "definition": {
      "name": { "en-US": "Intro to xAPI" }
    }
  }
}
```

## Key reading

- [Five things a web developer needs to know about xAPI](https://learningsolutionsmag.com/articles/1526/five-things-a-web-developer-needs-to-know-about-the-xapi)
- [How to write an xAPI statement (tutorial)](https://www.devlinpeck.com/tutorials/write-xapi-statement)
- [Deep dive: xAPI Context element](https://xapi.com/blog/deep-dive-context/)
- [xAPI context examples — Learning Pool](https://learningpool.com/xapi-statement-101-context-element/)

## Common confusion: JSON vs JavaScript Object

xAPI statements are JSON, not JavaScript objects. The syntax looks similar, but there are important differences (all keys must be quoted strings, no trailing commas, no `undefined`):

- [Never confuse JSON and JavaScript Objects again](https://medium.com/@alifabdullah/never-confuse-json-and-javascript-object-ever-again-7c32f4c071ad)

## Community resources

- [xAPI Trello board](https://trello.com/b/NHz6aCDV/experience-api-xapi-tincan)
- [CSV to xAPI converter (GitHub)](https://github.com/liris-tweak/csv-to-xapi)
