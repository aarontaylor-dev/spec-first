# Problem, Scope & Domain

> **When to use this:** Reference this when starting a new feature and you need to fill in the problem, scope, or domain spec files.

## Key Ideas

- **Problem** explains *why* you're building something
- **Scope** sets boundaries on *what* you will and won't build
- **Domain** defines the *language* everyone uses

## Problem Statement

**Template:**
```markdown
## The Problem
[Who] needs to [do what] because [why].
Currently, [pain point]. This causes [impact].

## Who has this problem?
- [User type]: [How they experience it]

## Success criteria
- [ ] [Measurable outcome]
```

**Example:**
```markdown
## The Problem
Small teams need to track tasks without heavyweight tools.
Currently, they use scattered notes or complex software. This causes missed deadlines and confusion.

## Who has this problem?
- Solo developers: Forget what they were working on
- Small teams: Lose track of who's doing what

## Success criteria
- [ ] Users can add, complete, and list tasks
- [ ] Works without an account or setup
```

---

## Scope

**Template:**
```markdown
## In Scope
- [What we WILL build]

## Out of Scope
- [What we WON'T build]

## Constraints
- [Technical/business limits]

## Assumptions
- [What we're assuming]
```

**Example:**
```markdown
## In Scope
- Add tasks with a title
- Mark tasks complete
- List all tasks

## Out of Scope
- User accounts
- Due dates
- Tags or categories
- Mobile app

## Constraints
- Must work offline
- No backend required for v1

## Assumptions
- Users are comfortable with command line
```

**Tips:**
- "Out of scope" prevents scope creep—be explicit
- Revisit assumptions when they turn out wrong

---

## Domain Model

**Template:**
```markdown
### [Concept Name]

**Definition**: [What it is in one sentence]

**Properties**:
- [attribute]: [type] — [description]

**Rules**:
- [Business rule]
```

**Example:**
```markdown
### Task

**Definition**: A single unit of work to be completed.

**Properties**:
- id: string — unique identifier
- title: string — what needs to be done
- completed: boolean — whether it's done

**Rules**:
- Title cannot be empty
- Once completed, a task cannot be un-completed
```

**Tips:**
- Use the language your users use
- Keep definitions to one sentence
- Document rules, not just structure
