# AI Help for Spec-First

This page collects example prompts for using Spec-First with AI tools such as Claude, ChatGPT, or Cursor.

All prompts are copy-paste friendly. Replace bracketed placeholders with your actual content.

---

## Writing Problem, Scope & Domain Docs

### Draft a problem statement

```
I'm building [brief description of your project].

Read the template in spec/01-problem.md and help me fill it in. The main pain point is [describe the problem]. The users affected are [who].
```

### Refine an existing problem statement

```
Review my problem statement in spec/01-problem.md. Is it specific enough? Does it clearly state who has the problem and why it matters? Suggest improvements.
```

### Define scope boundaries

```
Based on the problem in spec/01-problem.md, help me fill in spec/02-scope.md.

I want to build: [list features]
I don't want to build: [list non-features]

Make sure the "Out of Scope" section is explicit enough to prevent scope creep.
```

### Extract domain concepts

```
Read spec/01-problem.md and spec/02-scope.md. Based on these, identify the core domain concepts for spec/03-domain.md.

For each concept, provide:
- A one-sentence definition
- Key properties
- Any business rules
```

### Review domain language consistency

```
Review the spec/ folder. Are we using consistent terminology? Flag any places where we use different words for the same concept, or the same word for different concepts.
```

---

## Generating & Improving Gherkin Scenarios

### Generate scenarios from requirements

```
Based on spec/02-scope.md, write Gherkin scenarios for the [feature name] feature.

Include:
- Happy path scenarios
- Edge cases
- Validation errors

Use concrete values, not placeholders like "some value".
```

### Convert user story to Gherkin

```
Convert this user story into Gherkin scenarios:

"As a [user type], I want to [action] so that [benefit]."

Write 2-4 scenarios covering the main success case and likely failure cases.
```

### Review and improve scenarios

```
Review the Gherkin scenarios in spec/behaviour/[feature].feature.

Check for:
- Vague language
- Scenarios that test multiple behaviours
- Missing edge cases
- Concrete values vs placeholders

Suggest improvements.
```

### Add edge case scenarios

```
Read spec/behaviour/[feature].feature. What edge cases are missing? Write additional scenarios for:
- Empty/null inputs
- Boundary values
- Error conditions
- Concurrent operations (if applicable)
```

### Simplify verbose scenarios

```
These Gherkin scenarios are too verbose. Simplify them while keeping the same coverage. Each scenario should test one behaviour.

[paste scenarios]
```

---

## Mirroring Behaviour Specs into Tests

### Generate test file from feature

```
Read spec/behaviour/[feature].feature and create a matching test file at tests/behaviour/[feature].behaviour.test.ts.

Requirements:
- Each scenario becomes one test
- Test names match scenario names exactly
- Use Given/When/Then comments to mirror the Gherkin steps
- Import from the expected path: ../../src/features/[feature]/[feature].js
```

### Add missing tests for new scenarios

```
Compare spec/behaviour/[feature].feature with tests/behaviour/[feature].behaviour.test.ts.

Identify any scenarios that don't have corresponding tests. Write the missing tests.
```

### Convert Gherkin steps to test code

```
Here's a Gherkin scenario:

[paste scenario]

Write the corresponding test. The implementation is in src/features/[feature]/[feature].ts. Use this structure:

it('[Scenario name]', () => {
  // Given ...
  // When ...
  // Then ...
});
```

---

## Keeping Spec and Tests in Sync

### Identify spec-test drift

```
Compare the scenarios in spec/behaviour/[feature].feature with the tests in tests/behaviour/[feature].behaviour.test.ts.

Report:
- Tests without matching scenarios
- Scenarios without matching tests
- Test names that don't match scenario names
- Any assertions that don't match the expected outcomes in the spec
```

### Update tests after spec change

```
I changed this scenario in spec/behaviour/[feature].feature:

Before:
[paste old scenario]

After:
[paste new scenario]

Update the corresponding test in tests/behaviour/[feature].behaviour.test.ts to match.
```

### Generate changelog entry

```
I made this behaviour change:

[describe the change]

Write a changelog entry for spec/evolution/behaviour-changelog.md following this format:

## [Date] - [Brief description]

### Added/Changed/Removed
- [What changed]

### Why
[One sentence reason]
```

### Audit spec-test-code alignment

```
Review these three files and verify they're in sync:
- spec/behaviour/[feature].feature
- tests/behaviour/[feature].behaviour.test.ts
- src/features/[feature]/[feature].ts

Flag any mismatches where:
- A scenario isn't tested
- A test doesn't match its scenario
- Code behaviour differs from the spec
```

### Plan a behaviour change

```
I need to change this behaviour: [describe current behaviour]
To this: [describe new behaviour]

Create a checklist of files I need to update, in order:
1. Which spec files?
2. Which test files?
3. Which source files?
4. What changelog entry?
```
