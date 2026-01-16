# Test Matrix

> **This file is optional.** Use it when you need to track test coverage across a large spec, or when stakeholders want visibility into what's tested. For small projects, your test files themselves are often enough.

## When to use this

- Large projects with many features
- Compliance requirements needing coverage documentation
- Onboarding new team members to show what's tested
- Identifying gaps before releases

## How to use

1. List each scenario from your `.feature` files
2. Link to the corresponding test file
3. Mark coverage status

## Coverage Status

| Status | Meaning |
|--------|---------|
| :white_check_mark: | Covered by test |
| :x: | Not covered |
| :construction: | In progress |

---

## Counter Feature (Demo)

| Scenario | Test File | Status |
|----------|-----------|--------|
| New counter starts at zero | `counter.behaviour.test.ts` | :white_check_mark: |
| Increment increases the count by one | `counter.behaviour.test.ts` | :white_check_mark: |
| Increment from non-zero value | `counter.behaviour.test.ts` | :white_check_mark: |
| Decrement decreases the count by one | `counter.behaviour.test.ts` | :white_check_mark: |
| Decrement can go negative | `counter.behaviour.test.ts` | :white_check_mark: |
| Reset returns counter to zero | `counter.behaviour.test.ts` | :white_check_mark: |
| Multiple operations | `counter.behaviour.test.ts` | :white_check_mark: |
