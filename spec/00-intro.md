# Introduction

> **This is a template.** Replace placeholders marked with `<!-- TODO: ... -->` with your project's information. Delete this notice and the "Counter Demo" sections once you've customized the spec.

## What is this?

<!-- TODO: Replace with your project name and description -->
This is the specification for **Your Project Name**. It describes what we're building, why, and how it should behave.

## How to use this spec

1. Start with `01-problem.md` to understand the problem
2. Read `02-scope.md` to see what's in/out
3. Review `03-domain.md` for key terms
4. Check `behaviour/` for detailed examples
5. See `contracts/` for API and event definitions

**Quick references**: See the `cheat-sheets/` folder for templates and syntax guides.

## Spec structure

| File | Purpose |
|------|---------|
| `01-problem.md` | The problem and who has it |
| `02-scope.md` | What we will and won't build |
| `03-domain.md` | Core concepts and vocabulary |
| `04-behaviour-guide.md` | How to write behaviour specs |
| `contracts/` | API and event contracts |
| `behaviour/` | Gherkin-style feature files |
| `verification/` | Test coverage tracking (optional) |
| `evolution/` | Change history |

## Updating the spec

When requirements change:
1. Update the relevant spec file
2. Add an entry to `evolution/behaviour-changelog.md`
3. Update or add behaviour examples in `behaviour/`
4. Update tests to match

---

## Counter Demo

> The files in this template include a **Counter** demo to show the spec-first workflow in action. The counter is a trivial example—just increment, decrement, reset—but it demonstrates how specs connect to tests and code.
>
> **Delete the Counter Demo sections** from each file once you understand the pattern and are ready to add your own features.
