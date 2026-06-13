---
title: How to write test cases in Manual testing
date: 2021-01-22 11:20:27
tags:
  - Testing
  - QA
categories:
  - Development
description: An introduction to writing test cases for manual software testing, covering test case structure, components, and best practices.
---

Manual test cases are structured documents that define inputs, execution conditions, and expected results for testing a specific functionality.

## A good test case includes

- **Test Case ID** — unique identifier
- **Test Description** — what is being tested
- **Preconditions** — what must be true before running the test
- **Test Steps** — numbered steps to follow
- **Expected Result** — what should happen
- **Actual Result** — what actually happened (filled in during execution)
- **Pass / Fail** — final status

## Example structure

| Field | Value |
|---|---|
| Test Case ID | TC_LOGIN_001 |
| Description | Verify login with valid credentials |
| Preconditions | User account exists |
| Steps | 1. Open login page. 2. Enter username. 3. Enter password. 4. Click Login. |
| Expected Result | User is redirected to dashboard |
| Actual Result | (filled during test) |
| Status | Pass / Fail |

## Video guide

For a detailed walkthrough on writing test cases:

{% youtube g0PrXoWKM2Y %}
