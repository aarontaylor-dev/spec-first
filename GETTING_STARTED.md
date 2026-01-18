# Getting Started with Spec-First

This tutorial walks you through the included Counter demo to show you the spec-first workflow in action. By the end, you'll understand how specs, tests, and code connect.

**Prerequisites**: Node.js 18+ and familiarity with TypeScript.

---

## Step 1: Create Your Project

On GitHub, click **"Use this template"** to create your own repository from Spec-First. Then clone it:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
npm install
```

Verify everything works:

```bash
npm test
```

You should see 11 passing tests. These test the Counter demo feature we're about to explore.

---

## Step 2: Read the Spec Files

Open the `spec/` folder. These files define *what* you're building before you write code.

Start with the core three:

| File | Purpose |
|------|---------|
| `spec/01-problem.md` | Why are we building this? What pain does it solve? |
| `spec/02-scope.md` | What's in scope and out of scope? |
| `spec/03-domain.md` | Key terms and concepts used throughout |

Each file has two parts:
1. **Template section** — Placeholders marked with `<!-- TODO -->` for you to fill in
2. **Counter Demo section** — A filled-in example showing what it looks like

Open `spec/01-problem.md` and scroll to the Counter Demo section. Notice how it clearly states:
- The problem (developers need a concrete example)
- Who has it (developers new to spec-first)
- Success criteria (counter can increment, decrement, reset)

This clarity is the foundation. You know exactly what to build before writing any code.

---

## Step 3: Read the Behaviour Spec

Open `spec/behaviour/counter.feature`. This is where behaviour meets specification.

```gherkin
Feature: Counter
  A counter tracks a numeric value that can be incremented, decremented, or reset.

  Scenario: New counter starts at zero
    Given I create a new counter
    Then the counter value should be 0

  Scenario: Increment increases the count by one
    Given a counter with value 0
    When I increment the counter
    Then the counter value should be 1
```

### How to read Gherkin

Each **Scenario** describes one behaviour. The structure is:

- **Given** — Set up the initial state
- **When** — Perform an action
- **Then** — Assert the expected outcome

Read the scenarios out loud. They're plain English descriptions of how the counter should behave. No implementation details—just behaviour.

The full file has 7 scenarios covering:
- Starting at zero
- Incrementing (from zero and non-zero)
- Decrementing (including going negative)
- Resetting
- Multiple operations in sequence

---

## Step 4: See How Tests Mirror Scenarios

Open `tests/behaviour/counter.behaviour.test.ts` alongside the feature file.

Notice how each scenario becomes a test:

**Feature file:**
```gherkin
Scenario: Increment increases the count by one
  Given a counter with value 0
  When I increment the counter
  Then the counter value should be 1
```

**Test file:**
```typescript
it('Increment increases the count by one', () => {
  // Given a counter with value 0
  const counter = new Counter();

  // When I increment the counter
  counter.increment();

  // Then the counter value should be 1
  expect(counter.value).toBe(1);
});
```

The test name matches the scenario name exactly. The comments mirror the Given/When/Then steps. This traceability is the core of spec-first: you can always map a test back to its specification.

---

## Step 5: Run the Tests

Run the behaviour tests:

```bash
npm test
```

You'll see output like:

```
 ✓ tests/behaviour/counter.behaviour.test.ts (7)
 ✓ tests/unit/counter.test.ts (4)

 Test Files  2 passed (2)
      Tests  11 passed (11)
```

The behaviour tests (`counter.behaviour.test.ts`) test the scenarios from the feature file. The unit tests (`counter.test.ts`) test internal implementation details.

For most features, behaviour tests are all you need. Unit tests are optional—use them for complex internal logic.

---

## Step 6: Break a Test (On Purpose)

Let's see what happens when the spec and implementation don't match.

Open `spec/behaviour/counter.feature` and change the "Decrement can go negative" scenario:

```gherkin
Scenario: Decrement can go negative
  Given a counter with value 0
  When I decrement the counter
  Then the counter value should be -1
```

Change `-1` to `-2`:

```gherkin
  Then the counter value should be -2
```

Now update the corresponding test in `tests/behaviour/counter.behaviour.test.ts`:

```typescript
it('Decrement can go negative', () => {
  // Given a counter with value 0
  const counter = new Counter();

  // When I decrement the counter
  counter.decrement();

  // Then the counter value should be -2
  expect(counter.value).toBe(-2);
});
```

Run the tests:

```bash
npm test
```

You'll see a failure:

```
 FAIL  tests/behaviour/counter.behaviour.test.ts > Feature: Counter > Decrement can go negative
AssertionError: expected -1 to be -2
```

The spec says decrement should produce `-2`, but the implementation produces `-1`. The test caught the mismatch.

---

## Step 7: Fix the Implementation

Open `src/features/counter/counter.ts`:

```typescript
export class Counter {
  private _value: number = 0;

  get value(): number {
    return this._value;
  }

  increment(): void {
    this._value += 1;
  }

  decrement(): void {
    this._value -= 1;  // Currently decrements by 1
  }

  reset(): void {
    this._value = 0;
  }
}
```

To make the test pass, change `decrement()` to subtract 2:

```typescript
decrement(): void {
  this._value -= 2;
}
```

Run the tests again:

```bash
npm test
```

The "Decrement can go negative" test now passes—but other tests fail:

```
 FAIL  tests/behaviour/counter.behaviour.test.ts > Feature: Counter > Decrement decreases the count by one
 FAIL  tests/behaviour/counter.behaviour.test.ts > Feature: Counter > Multiple operations
```

This is the spec-first feedback loop in action. Changing one behaviour broke others. The specs and tests show you exactly what's affected.

**Revert your changes** to restore the original behaviour:
- In `counter.feature`: change `-2` back to `-1`
- In `counter.behaviour.test.ts`: change `-2` back to `-1`
- In `counter.ts`: change `-= 2` back to `-= 1`

Run `npm test` to confirm everything passes again.

---

## Step 8: Explore the Implementation

Look at `src/features/counter/counter.ts` one more time:

```typescript
export class Counter {
  private _value: number = 0;

  get value(): number {
    return this._value;
  }

  increment(): void {
    this._value += 1;
  }

  decrement(): void {
    this._value -= 1;
  }

  reset(): void {
    this._value = 0;
  }
}
```

It's minimal. No extra features, no over-engineering. It does exactly what the spec says and nothing more. This is the goal: **code that matches the specification exactly**.

---

## Next Steps

You've seen the full workflow:

1. **Problem/Scope/Domain** — Define what you're building
2. **Feature file** — Describe behaviour in Gherkin
3. **Tests** — Mirror the scenarios
4. **Code** — Implement just enough to pass the tests

### Remove the Demo Files

Once you're comfortable, delete the demo:

```bash
rm -rf src/features/counter
rm tests/behaviour/counter.behaviour.test.ts
rm tests/unit/counter.test.ts
rm spec/behaviour/counter.feature
```

Also remove the "Counter Demo" sections from:
- `spec/01-problem.md`
- `spec/02-scope.md`
- `spec/03-domain.md`
- `spec/evolution/behaviour-changelog.md`

### Start Your Own Feature

1. Fill in `spec/01-problem.md` with your actual problem
2. Define scope in `spec/02-scope.md`
3. List key terms in `spec/03-domain.md`
4. Create a `.feature` file in `spec/behaviour/`
5. Write matching tests in `tests/behaviour/`
6. Implement in `src/features/`

### Quick Reference

| Need help with... | Look at... |
|-------------------|------------|
| Gherkin syntax | `cheat-sheets/behaviour-gherkin.md` |
| Problem/scope/domain templates | `cheat-sheets/problem-scope-domain.md` |
| Test organization | `cheat-sheets/contracts-tests.md` |
| Managing changes over time | `cheat-sheets/evolution.md` |

Visit [spec-first.com](https://spec-first.com) for more tutorials and examples.
