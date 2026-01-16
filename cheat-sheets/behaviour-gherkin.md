# Behaviour & Gherkin

## Gherkin Syntax

```gherkin
Feature: [Feature name]
  [One-line description]

  Scenario: [Scenario name]
    Given [context/setup]
    When [action]
    Then [expected result]
    And [additional result]
```

## Keywords

| Keyword | Purpose |
|---------|---------|
| `Feature` | Groups related scenarios |
| `Scenario` | One specific example |
| `Given` | Setup/precondition |
| `When` | Action being tested |
| `Then` | Expected outcome |
| `And/But` | Additional steps |

## Good Scenarios

```gherkin
# Good - specific, one behaviour
Scenario: Empty cart shows zero total
  Given an empty shopping cart
  When I view the cart total
  Then the total should be $0.00

# Bad - vague, multiple behaviours
Scenario: Cart works correctly
  Given a cart
  When I use it
  Then it should work
```

## Checklist

- [ ] Uses domain language
- [ ] One behaviour per scenario
- [ ] Concrete values (not "some value")
- [ ] Independent (no scenario depends on another)
- [ ] Describes WHAT, not HOW

## Mapping to Tests

```gherkin
Scenario: Increment increases count
  Given a counter with value 0
  When I increment the counter
  Then the counter value should be 1
```

Becomes:

```typescript
it('Increment increases count', () => {
  // Given
  const counter = new Counter();

  // When
  counter.increment();

  // Then
  expect(counter.value).toBe(1);
});
```
