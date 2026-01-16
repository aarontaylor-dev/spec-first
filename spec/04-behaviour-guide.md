# Behaviour Specification Guide

## What is a behaviour spec?

A behaviour spec describes how the system should behave from the user's perspective. We use Gherkin syntax (Given/When/Then) to make examples concrete and testable.

## Gherkin basics

```gherkin
Feature: [Name of the feature]
  [Brief description]

  Scenario: [Name of the scenario]
    Given [initial context]
    When [action taken]
    Then [expected outcome]
```

## Writing good scenarios

### Do

- Use domain language (from `03-domain.md`)
- One behaviour per scenario
- Keep scenarios independent
- Use concrete examples with real values

### Don't

- Don't describe implementation details
- Don't combine multiple behaviours
- Don't use vague language ("it should work")

## Example structure

```gherkin
Feature: Counter operations
  A counter tracks a numeric value that can be modified.

  Scenario: Increment increases the count
    Given a counter with value 0
    When I increment the counter
    Then the counter value should be 1

  Scenario: Decrement decreases the count
    Given a counter with value 5
    When I decrement the counter
    Then the counter value should be 4
```

## Mapping to tests

Each scenario becomes a test:

```typescript
describe('Counter operations', () => {
  it('Increment increases the count', () => {
    // Given a counter with value 0
    const counter = new Counter();

    // When I increment the counter
    counter.increment();

    // Then the counter value should be 1
    expect(counter.value).toBe(1);
  });
});
```

## File naming

- Feature files: `spec/behaviour/[feature-name].feature`
- Test files: `tests/behaviour/[feature-name].behaviour.test.ts`
