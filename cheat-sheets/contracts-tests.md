# Contracts & Tests

> **When to use this:** Reference this when deciding what tests to write, how to organize them, or when documenting API contracts.

## Key Ideas

- Behaviour tests are your primary tests—they verify your spec
- Unit tests are optional—use them for complex internal logic
- API contracts document inputs, outputs, and errors
- Test names should match scenario names exactly

## Behaviour Tests vs Unit Tests

| Test Type | Purpose | When to use |
|-----------|---------|-------------|
| **Behaviour** | Verify scenarios from `.feature` files | Always—these are your main tests |
| **Unit** | Test internal logic in isolation | Only for complex internals |

### When to add unit tests

Add unit tests when:
- A function has complex logic worth testing alone
- You need to test edge cases not in behaviour scenarios
- You're building a utility with many code paths

**Don't** add unit tests just to duplicate behaviour tests.

### Example

```gherkin
# Behaviour test covers the user-facing scenario
Scenario: Apply 10% discount to cart over $100
  Given a cart with total $150
  When I apply the loyalty discount
  Then the total should be $135
```

```typescript
// Unit tests cover internal calculation edge cases
describe('calculateDiscount()', () => {
  it('rounds to 2 decimal places', () => {});
  it('returns 0 for totals under threshold', () => {});
  it('caps discount at maximum amount', () => {});
});
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
// Behaviour tests — match scenario names exactly
describe('Feature: Shopping Cart', () => {
  it('Add item to empty cart', () => {});
  it('Remove item from cart', () => {});
});

// Unit tests — describe the function/method
describe('CartCalculator', () => {
  describe('calculateTotal()', () => {
    it('sums item prices', () => {});
    it('applies tax rate', () => {});
  });
});
```

## Test Structure (Given-When-Then)

```typescript
it('Add item to empty cart', () => {
  // Given an empty cart
  const cart = new Cart();

  // When I add "Socks" to the cart
  cart.add({ name: 'Socks', price: 9.99 });

  // Then the cart should contain 1 item
  expect(cart.items).toHaveLength(1);
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
### `cart.addItem(product: Product, quantity: number): void`

- **Input**: Product to add, quantity (positive integer)
- **Output**: void (mutates cart state)
- **Errors**: Throws `InvalidQuantityError` if quantity < 1
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

**Example:**
```markdown
### `cart.itemAdded`

- **Trigger**: When an item is added to the cart
- **Payload**: `{ productId: string, quantity: number }`
- **Consumers**: Analytics service, inventory tracker
```
