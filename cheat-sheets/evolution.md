# Evolution & Change Management

> **When to use this:** Reference this when behaviour changes and you need to update specs, log the change, and keep tests in sync.

## Key Ideas

- Specs are living documents—they evolve with your product
- Log every behaviour change so you can trace *why* things changed
- Update spec → tests → code in that order
- Distinguish breaking changes from non-breaking ones

## When Behaviour Changes

Follow this order:

1. **Update the spec** — Modify the `.feature` file
2. **Log the change** — Add entry to `behaviour-changelog.md`
3. **Update tests** — Modify or add tests to match
4. **Update code** — Implement the change
5. **Update matrix** — Ensure test coverage is current

## Changelog Format

```markdown
## [Date] - [Brief description]

### Added
- [New behaviour]

### Changed
- [What changed]: [before] → [after]

### Removed
- [Removed behaviour]

### Why
[One sentence explaining the reason]
```

**Example:**
```markdown
## 2024-01-15 - Cart minimum order amount

### Added
- Cart now requires minimum $10 order to checkout

### Changed
- Checkout button: [always enabled] → [disabled under $10]

### Why
Shipping costs make orders under $10 unprofitable.
```

## Types of Changes

| Type | Example |
|------|---------|
| **Added** | New feature, new scenario |
| **Changed** | Modified behaviour, different rules |
| **Removed** | Deprecated feature |
| **Fixed** | Spec clarification (not a behaviour change) |

## Breaking vs Non-Breaking

**Breaking changes** (affect existing users):
- Changing method signatures
- Removing features
- Changing default behaviour

**Non-breaking changes**:
- Adding new optional features
- Adding new methods
- Bug fixes that match the intended spec

## Review Checklist

Before merging behaviour changes:

- [ ] Spec file updated
- [ ] Changelog entry added
- [ ] Tests updated or added
- [ ] Test matrix current
- [ ] Breaking changes documented
- [ ] Migration path documented (if breaking)
