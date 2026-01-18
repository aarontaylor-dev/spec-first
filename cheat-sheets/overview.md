# Spec-First Overview

> **When to use this:** Reference this when you need a quick reminder of the spec-first workflow and where things live.

## The Core Idea

**Write the spec before the code.**

## Key Ideas

- Specs define *what* you're building before you write *how*
- Tests mirror behaviour examples from your specs
- Code implements exactly what's specified—nothing more
- Changes get documented so you can trace why things evolved

## The Workflow

```
Problem → Scope → Domain → Behaviour → Tests → Code → Evolve
```

| Step | Question | File |
|------|----------|------|
| **Problem** | What pain are we solving? | `spec/01-problem.md` |
| **Scope** | What will/won't we build? | `spec/02-scope.md` |
| **Domain** | What are the core concepts? | `spec/03-domain.md` |
| **Behaviour** | How should it behave? | `spec/behaviour/*.feature` |
| **Tests** | Do the examples pass? | `tests/behaviour/*.test.ts` |
| **Code** | What's the simplest solution? | `src/features/*/` |
| **Evolve** | What changed and why? | `spec/evolution/` |

## Golden Rules

1. No code without a spec
2. No spec without a problem
3. Tests mirror behaviour examples exactly
4. Keep everything small and traceable

## Example Flow

```
1. User reports: "I can't track my tasks"
2. Problem doc: "Users need task tracking because..."
3. Scope: "We WILL build add/complete tasks. We WON'T build tags or due dates."
4. Domain: "Task = { id, title, completed }"
5. Behaviour: "Given a task list, when I add 'Buy milk', then..."
6. Test: it('Add task to empty list', () => { ... })
7. Code: class TaskList { add(title) { ... } }
```
