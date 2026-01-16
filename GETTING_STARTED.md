# Getting Started with SpecKit

This guide walks you through using SpecKit for your project.

## Your First 10 Minutes

### 1. Clone and install

```bash
git clone <this-repo> my-project
cd my-project
npm install
```

### 2. Run the demo tests

```bash
npm test
```

You should see 11 passing tests. These test the **Counter** demo feature.

### 3. Explore the demo

Look at how the Counter feature flows through the codebase:

| Step | File | What it does |
|------|------|--------------|
| 1. Spec | `spec/behaviour/counter.feature` | Describes behaviour in Gherkin |
| 2. Test | `tests/behaviour/counter.behaviour.test.ts` | Mirrors the Gherkin scenarios |
| 3. Code | `src/features/counter/counter.ts` | Implements the behaviour |

Open these three files side by side. Notice how each Gherkin scenario maps to a test, and the code is just enough to make the tests pass.

### 4. Understand the spec structure

Browse the `spec/` folder:
- `01-problem.md` — What problem are we solving?
- `02-scope.md` — What will (and won't) we build?
- `03-domain.md` — Key concepts and terms
- `behaviour/` — Gherkin feature files

Each file has a **template section** (with `<!-- TODO -->` markers) and a **Counter Demo section** showing a filled-in example.

---

## Adding Your First Feature

Let's say you want to add a `Greeter` feature that says hello.

### Step 1: Define the problem (optional for small features)

For larger features, update `spec/01-problem.md`. For a tiny feature like this, you can skip it.

### Step 2: Write the behaviour spec

Create `spec/behaviour/greeter.feature`:

```gherkin
Feature: Greeter
  A greeter returns a personalized greeting message.

  Scenario: Greet by name
    Given a greeter
    When I greet "Alice"
    Then the message should be "Hello, Alice!"

  Scenario: Greet with default
    Given a greeter
    When I greet without a name
    Then the message should be "Hello, World!"
```

### Step 3: Write the behaviour tests

Create `tests/behaviour/greeter.behaviour.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { Greeter } from '../../src/features/greeter/greeter.js';

describe('Feature: Greeter', () => {
  it('Greet by name', () => {
    // Given a greeter
    const greeter = new Greeter();

    // When I greet "Alice"
    const message = greeter.greet('Alice');

    // Then the message should be "Hello, Alice!"
    expect(message).toBe('Hello, Alice!');
  });

  it('Greet with default', () => {
    // Given a greeter
    const greeter = new Greeter();

    // When I greet without a name
    const message = greeter.greet();

    // Then the message should be "Hello, World!"
    expect(message).toBe('Hello, World!');
  });
});
```

### Step 4: Run the tests (they should fail)

```bash
npm test
```

The tests fail because `Greeter` doesn't exist yet. This is expected.

### Step 5: Implement the feature

Create `src/features/greeter/greeter.ts`:

```typescript
export class Greeter {
  greet(name?: string): string {
    return `Hello, ${name ?? 'World'}!`;
  }
}
```

### Step 6: Run the tests again

```bash
npm test
```

All tests should pass.

### Step 7: Clean up the demo (when ready)

Once you're comfortable with the workflow:

1. Delete `src/features/counter/`
2. Delete `tests/unit/counter.test.ts`
3. Delete `tests/behaviour/counter.behaviour.test.ts`
4. Delete `spec/behaviour/counter.feature`
5. Remove the "Counter Demo" sections from the spec files (or replace them with your own examples)

---

## Quick Reference

| Task | Where to look |
|------|---------------|
| Gherkin syntax | `cheat-sheets/behaviour-gherkin.md` |
| Problem/scope/domain templates | `cheat-sheets/problem-scope-domain.md` |
| Test organization | `cheat-sheets/contracts-tests.md` |
| Handling changes | `cheat-sheets/evolution.md` |
| Full workflow overview | `cheat-sheets/overview.md` |

---

## Common Pitfalls

### "I don't know where to start"

Start with `spec/behaviour/`. Write a `.feature` file describing what you want to build. Then write tests that mirror it. Then implement.

### "My tests and spec are out of sync"

Keep test names identical to scenario names. When you change a scenario, update the test name and implementation together.

### "When do I write unit tests vs behaviour tests?"

- **Behaviour tests** (in `tests/behaviour/`) — Test scenarios from your `.feature` files. These are your primary tests.
- **Unit tests** (in `tests/unit/`) — Test internal logic that's too complex for behaviour tests alone. Optional for simple features.

Most features only need behaviour tests. Add unit tests when you have complex internal logic worth testing in isolation.

### "The spec files feel like overkill for my small project"

Start with just:
- `spec/behaviour/*.feature` — Your behaviour specs
- `tests/behaviour/*.test.ts` — Your tests
- `src/features/` — Your code

Add the other spec files (problem, scope, domain) when your project grows or you need to communicate with others.

---

## Next Steps

1. Delete the Counter demo once you understand the pattern
2. Add your first real feature following the steps above
3. Set up CI (see `.github/workflows/` for an example later)
4. Customize the spec templates for your project's needs
