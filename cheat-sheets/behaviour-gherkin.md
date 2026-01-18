# Behaviour & Gherkin

> **When to use this:** Reference this when writing `.feature` files or converting scenarios into tests.

## Key Ideas

- Gherkin describes *behaviour* in plain English
- Each scenario tests one specific example
- Scenarios map directly to tests
- Use concrete values, not vague placeholders

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

| Keyword | Purpose | Example |
|---------|---------|---------|
| `Feature` | Groups related scenarios | `Feature: Shopping cart` |
| `Scenario` | One specific example | `Scenario: Add item to empty cart` |
| `Given` | Setup/precondition | `Given an empty cart` |
| `When` | Action being tested | `When I add "Socks" to the cart` |
| `Then` | Expected outcome | `Then the cart should contain 1 item` |
| `And/But` | Additional steps | `And the total should be $9.99` |

## Examples

### Happy path

```gherkin
Scenario: Add item to empty cart
  Given an empty shopping cart
  When I add "Wireless Mouse" to the cart
  Then the cart should contain 1 item
  And the cart total should be $29.99
```

### Edge case

```gherkin
Scenario: Cannot add item with zero quantity
  Given an empty shopping cart
  When I try to add "Keyboard" with quantity 0
  Then the cart should still be empty
  And I should see an error "Quantity must be at least 1"
```

### Validation error

```gherkin
Scenario: Reject empty task title
  Given I am creating a new task
  When I submit a task with an empty title
  Then the task should not be created
  And I should see an error "Title is required"
```

## Good vs Bad Scenarios

```gherkin
# Good — specific, one behaviour, concrete values
Scenario: Empty cart shows zero total
  Given an empty shopping cart
  When I view the cart total
  Then the total should be $0.00

# Bad — vague, tests multiple things
Scenario: Cart works correctly
  Given a cart
  When I use it
  Then it should work
```

## Checklist

- [ ] Uses domain language (not technical jargon)
- [ ] One behaviour per scenario
- [ ] Concrete values (`$29.99`, not `some price`)
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
  // Given a counter with value 0
  const counter = new Counter();

  // When I increment the counter
  counter.increment();

  // Then the counter value should be 1
  expect(counter.value).toBe(1);
});
```

---

## Pairing with AI

Use these prompts to get help writing or improving Gherkin specs:

**Generate scenarios from requirements:**
> "Based on this scope document, write Gherkin scenarios for the 'add to cart' feature. Include happy path, empty input, and quantity limit cases."

**Improve existing scenarios:**
> "Review these Gherkin scenarios and suggest improvements. Check for vague language, missing edge cases, and scenarios that test multiple behaviours."

**Convert user stories to Gherkin:**
> "Convert this user story into Gherkin scenarios: 'As a user, I want to reset my password so I can regain access to my account.'"
