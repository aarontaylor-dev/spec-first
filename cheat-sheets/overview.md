# Spec-First Development Overview

## The Core Idea

**Write the spec before the code.**

## The Workflow

```
Problem -> Scope -> Domain -> Behaviour -> Tests -> Code -> Evolve
```

1. **Problem** - What pain are we solving?
2. **Scope** - What will/won't we build?
3. **Domain** - What are the core concepts?
4. **Behaviour** - How should it behave? (Gherkin examples)
5. **Tests** - Mirror the behaviour examples
6. **Code** - Implement the simplest solution
7. **Evolve** - Document changes

## Key Files

| What | Where |
|------|-------|
| Problem | `spec/01-problem.md` |
| Scope | `spec/02-scope.md` |
| Domain | `spec/03-domain.md` |
| Behaviour | `spec/behaviour/*.feature` |
| Tests | `tests/behaviour/*.test.ts` |
| Code | `src/features/*/` |
| Changes | `spec/evolution/behaviour-changelog.md` |

## Golden Rules

1. No code without a spec
2. No spec without a problem
3. Tests mirror behaviour examples
4. Keep everything small
