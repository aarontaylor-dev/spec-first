# Evolution & Change Management

## When Behaviour Changes

1. **Update the spec** - Modify the relevant `.feature` file
2. **Log the change** - Add entry to `behaviour-changelog.md`
3. **Update tests** - Modify or add tests to match
4. **Update code** - Implement the change
5. **Update matrix** - Ensure test-matrix.md is current

## Changelog Format

```markdown
## [Date] - [Brief description]

### Added
- [New behaviour]

### Changed
- [What changed]: [before] -> [after]

### Removed
- [Removed behaviour]

### Why
[One sentence explaining the reason]
```

## Types of Changes

| Type | Example |
|------|---------|
| **Added** | New feature, new scenario |
| **Changed** | Modified behaviour, different rules |
| **Removed** | Deprecated feature |
| **Fixed** | Spec clarification (not a behaviour change) |

## Version Considerations

**Breaking changes** (affect existing users):
- Changing method signatures
- Removing features
- Changing default behaviour

**Non-breaking changes**:
- Adding new optional features
- Adding new methods
- Bug fixes that match intended spec

## Review Checklist

Before merging behaviour changes:

- [ ] Spec updated
- [ ] Changelog entry added
- [ ] Tests updated/added
- [ ] Test matrix current
- [ ] Breaking changes documented
