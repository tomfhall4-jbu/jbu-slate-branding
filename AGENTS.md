
# Slate Branding – Codex Project Instructions

This repository manages CSS, templates, and assets used for branding Slate-hosted pages.

The project is currently undergoing a major redesign of Slate-hosted UI implemented in the `test` environment before promotion to production.

Codex and any automated tools must follow the architectural and workflow rules below.

---

# Repository Structure

The repository mirrors how Slate stores and loads assets.

Root folders:

- debug-html/
- institutional/
- portal/
- prod/
- test/

Each folder has a distinct purpose.

---

# debug-html/

Contains captured HTML snapshots used for debugging CSS cascade issues.

Typical structure:

debug-html/
  form-page/
    prod/
    test/

Files may include:

- captured HTML
- associated resource files
- screenshots

Rules:

- Files here are snapshots only
- They are not canonical
- They must never be edited as source code
- They exist only for inspection and debugging

---

# institutional/

CSS files pulled from the institutional website.

Examples include:

- template_jbu-global.css
- template_jbu-main.min.css

These are external dependencies.

Rules:

- Treat as read-only
- Never modify directly
- Override from Slate CSS only when necessary

Institutional CSS frequently contains broad selectors such as:

- table
- ul
- .content

These can interfere with Slate-hosted pages.

---

# portal/

Portal-specific assets.

Example:

portal/application-status/

Contains JavaScript and CSS used only inside Slate portals.

Rules:

- Changes here must not assume hosted page layout rules
- Avoid introducing styling that leaks into hosted forms

---

# prod/

Production assets currently deployed in Slate.

Structure:

- prod/fw/
- prod/register/
- prod/shared/

These directories mirror the Slate production file structure.

Rules:

- prod is considered deployment output
- Avoid direct editing unless promoting validated changes
- Automated tools should not refactor production files directly

All development work should occur in the test environment first.

---

# test/

Active development environment.

Structure:

- test/fw/
- test/register/
- test/shared/

The test environment is currently implementing a full redesign of Slate-hosted pages.

The goal is to modernize UI, fix cascade conflicts, and create a maintainable CSS architecture.

All new work should happen here before being promoted to prod.

---

# Shared CSS Files

Located in:

test/shared/

Key files:

- build.css
- build-overrides.css
- build-mobile-global.css
- _experiments.css
- build.xslt

Purpose of each file:

build.css  
Main branding stylesheet for Slate-hosted pages.

build-overrides.css  
Overrides for Slate defaults or institutional CSS.

build-mobile-global.css  
Mobile-specific global adjustments.

_experiments.css  
Temporary experimental CSS.

Rules:

- _experiments.css is a sandbox
- Rules here may be unstable
- Once validated, rules should move to build.css or build-overrides.css
- _experiments.css should not contain long-term code

---

# CSS Architecture

The redesign follows a container-based selector strategy to avoid fragile overrides.

Three layers exist.

---

## 1. Slate Form System

Root selector:

.form_container

Primary structural hooks:

- .form_container
- .form_page
- .form_question
- .form_label
- .form_responses
- .form_response

Direct control selectors:

- .form_container input
- .form_container select
- .form_container textarea

Avoid targeting:

- form[data-fw-form="1"]
- form[id^="form_"]

These selectors are instance-specific and unreliable.

---

## 2. Slate-Hosted Page Content

Root selector:

.jbu-admissions-body #content

Used for:

- headings
- paragraphs
- lists
- tables
- page layout
- general page styling

This scope should control most hosted page styling outside forms.

---

## 3. Dialog / Modal Chrome

Root selector:

.dialog_host .dialog[role="dialog"]

Used for:

- dialog layout
- viewport sizing
- overflow handling
- dialog headers and containers

Form styling should not depend on dialog selectors.

---

# CSS Design Principles

Follow these rules when modifying CSS.

Prefer:

- container-scoped selectors
- centralized rules
- consistent architecture

Avoid:

- !important unless necessary
- deep selector chains
- instance-specific IDs

Selectors should be portable across hosted pages, dialogs, and widgets.

---

# Development Workflow

Development should follow this pattern:

1. Prototype in DevTools.

2. Place experimental rules in:
   test/shared/_experiments.css

3. Validate across:

- hosted forms
- dialog forms
- replicate blocks
- application pages
- portals
- responsive breakpoints

4. Promote stable rules to:

- test/shared/build.css
- test/shared/build-overrides.css

5. Once validated in test, promote to prod/.

Production promotion should occur intentionally and with review.

---

# Refactoring Goals

The redesign aims to:

- reduce fragile CSS overrides
- eliminate unnecessary !important rules
- centralize styling logic
- support both hosted pages and dialog forms
- prevent institutional CSS conflicts

Codex tasks should focus on safe architectural improvements, not cosmetic churn.

---

# Safety Rules for Automated Changes

When making automated edits:

- prefer modifying test/
- avoid modifying prod/ automatically
- never edit files inside debug-html/
- never edit files inside institutional/
- treat prod/** as deployment output, not a workspace

All work should happen in test/ first and then be promoted intentionally.

---

# Codex Editing Guardrails

When Codex proposes changes:

- Prefer modifying the smallest possible CSS block
- Avoid rewriting entire stylesheets unless explicitly requested
- Do not reorganize selector architecture automatically
- Maintain existing comments and section headers
- Avoid introducing new !important rules unless required to resolve a cascade conflict

Large refactors should be proposed first before being applied.

---

# Summary

- test/ = active redesign environment
- prod/ = deployed system
- institutional/ = external dependency
- portal/ = portal-specific code
- debug-html/ = debugging snapshots

The goal is to build a clean, maintainable CSS system for Slate-hosted pages while minimizing risk to production environments.
