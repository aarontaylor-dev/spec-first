# Contracts & Tests

## Behaviour Tests vs Unit Tests

**Start with behaviour tests.** They're your primary tests because they directly verify your spec.

| Test Type | Purpose | When to use |
|-----------|---------|-------------|
| **Behaviour** | Verify scenarios from `.feature` files | Always — these are your main tests |
| **Unit** | Test internal logic in isolation | When you have complex internals |

### When to add unit tests

Add unit tests when:
- A function has complex logic worth testing in isolation
- You want to test edge cases not covered by behaviour scenarios
- You're building a utility/helper with many code paths

**Don't add unit tests** just to duplicate behaviour tests. If your behaviour tests cover the functionality, that's enough.

### Example

```
# Behaviour test covers the user-facing scenario
Scenario: Apply 10% discount to cart over $100
  Given a cart with total $150
  When I apply the loyalty discount
  Then the total should be $135

# Unit test covers internal calculation edge cases
describe('calculateDiscount()', () => {
  it('rounds to 2 decimal places', () => {});
  it('returns 0 for totals under threshold', () => {});
  it('caps discount at maximum amount', () => {});
});
```

---

## API Contracts

**Template:**
```markdown
### `methodName(param: Type): ReturnType`

- **Input**: [describe parameters]
- **Output**: [describe return value]
- **Errors**: [what can go wrong]
```

**Example:**
```markdown
### `cart.addItem(item: Product, quantity: number): void`

- **Input**: Product to add, quantity (positive integer)
- **Output**: void (mutates cart state)
- **Errors**: Throws if quantity < 1
```

---

## Event Contracts

**Template:**
```markdown
### `event.name`

- **Trigger**: [what causes this event]
- **Payload**: `{ field: type }`
- **Consumers**: [who listens]
```

---

## Test Organization

```
tests/
  behaviour/      # Primary: scenarios from .feature files
  unit/           # Secondary: complex internal logic
```

## Test Naming

```typescript
// Behaviour tests - match scenario names exactly
describe('Feature: Counter', () => {
  it('New counter starts at zero', () => {});
  it('Increment increases the count by one', () => {});
});

// Unit tests - describe the function/method
describe('Counter', () => {
  describe('increment()', () => {
    it('adds 1 to the current value', () => {});
  });
});
```

## Test Structure (AAA / Given-When-Then)

```typescript
it('Increment increases the count by one', () => {
  // Arrange (Given)
  const counter = new Counter();

  // Act (When)
  counter.increment();

  // Assert (Then)
  expect(counter.value).toBe(1);
});
```
