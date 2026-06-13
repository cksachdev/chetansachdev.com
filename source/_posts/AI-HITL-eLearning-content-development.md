---
title: "AI wrote the course. The SME hated it. Here's what actually works."
date: 2026-06-14 10:00:00
tags:
  - eLearning
  - AI
  - HITL
  - Instructional Design
  - Content Development
categories:
  - eLearning
cover: /images/2026/06/og-hitl-elearning.png
description: AI can draft eLearning content at speed, but it breaks in predictable ways. Here's how Human-in-the-Loop design fixes the actual problems without slowing everything down.
---

AI can turn a 40-page Word document into a full eLearning storyboard in minutes. That's real. The problem is what comes out the other end.

The content sounds confident. It's grammatically clean. The SME opens it and starts deleting paragraphs.

This isn't an AI problem. It's a pipeline problem — and **Human-in-the-Loop (HITL)** is how you fix it.

## What HITL actually means in eLearning

HITL isn't "add a review step at the end." That's just QA.

HITL means deliberately designing where humans intervene *during* the AI generation process, not just after. Different interventions serve different purposes:

- **Before generation** — humans shape the prompt, upload the source material, define tone and learning objectives
- **During generation** — humans steer chunk by chunk (e.g., approve the learning objectives before AI writes the scenarios)
- **After generation** — SME review, ID review, accessibility check

Most teams only do the third. That's why the SME hates the output.

## Where AI actually breaks in eLearning content

### 1. It invents plausible-sounding but wrong details

Give an LLM a source document on pharmaceutical compliance and ask it to write scenarios. It will write confident, realistic-sounding scenarios that contain subtle factual errors the source document never mentioned. The SME catches it on pass 3.

Fix: Don't let AI generate scenarios from raw source material alone. Use HITL at the objectives stage — have the ID verify learning objectives first, then constrain AI output to those objectives only.

### 2. It flattens everything to the same tone

AI defaults to a kind of neutral corporate voice. Every scenario sounds like a training video from 2014. If your brand has a specific voice (direct, conversational, safety-critical), AI doesn't know that unless you build it into the prompt system.

Fix: Create a tone reference document and inject it at generation time. Better — run a small human-reviewed sample set first and use those as few-shot examples in the prompt.

### 3. It gets instructional design wrong

AI doesn't inherently know the difference between knowledge check questions and performance-based assessments. It will write multiple-choice questions when a branching scenario was needed. It fills in content at Bloom's Level 1 when you asked for Level 4.

Fix: The ID needs to be in the loop at the *structure* stage — before any content is generated. The learning objectives, the activity types, the assessment strategy — all of that should be human-authored and used as scaffolding, not generated.

## A workflow that actually works

Here's a simplified version of what's working in practice:

**Step 1 (Human):** ID writes learning objectives and maps them to activity types (scenario, knowledge check, reflection, etc.)

**Step 2 (AI):** Generate a content outline based on Step 1 and the source material

**Step 3 (Human):** ID reviews the outline, fixes structure, flags anything that missed the mark

**Step 4 (AI):** Generate full storyboard content, section by section

**Step 5 (Human):** SME reviews for factual accuracy only — not structure, not tone

**Step 6 (AI):** Apply SME feedback and regenerate flagged sections

**Step 7 (Human):** Final ID pass for flow, accessibility, and brand voice

This isn't slower than a traditional process. It's about the same speed — but the AI is doing the heavy lifting on drafting while humans are doing the work only humans can do: judgment, accuracy, and design.

## The trap most teams fall into

They automate the wrong things. They use AI to generate content end-to-end and then ask humans to fix it. That's slower than just having a human write a good first draft, because fixing bad AI content is demoralizing and exhausting.

The better model: AI as a fast, tireless first drafter that humans *direct*, not review.

The human's job changes from *writer* to *director*.

## Tools worth knowing about

- [Synthesia](https://www.synthesia.io/) — AI video generation; good for narration if you have a solid human-authored script
- [Coursebox](https://www.coursebox.ai/) — AI course builder with structured human review points
- [Lectora](https://lectora.com/) — not AI-native but integrates well with AI-generated storyboard outputs
- [Articulate AI](https://articulate.com/) — built directly into Rise 360 and Storyline workflows

## The honest take

HITL in eLearning isn't a philosophy. It's a series of specific decisions about when to hand off to AI and when to take back control.

Get those handoff points wrong and you end up with a course the SME hates and an ID team that's demoralized.

Get them right and you're shipping better content, faster, with less burnout.

The AI isn't the hard part. The workflow design is.
