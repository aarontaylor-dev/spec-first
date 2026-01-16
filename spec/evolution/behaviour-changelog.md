# Behaviour Changelog

Track changes to specified behaviours over time. When behaviour changes, document it here so the team understands what changed and why.

## Format

```markdown
## YYYY-MM-DD - Brief description

### Added
- [New behaviour]

### Changed
- [What changed]: [before] -> [after]

### Removed
- [Removed behaviour]

### Why
Brief explanation of why this change was made.
```

---

## 2024-01-15 - Add bounds checking (Example)

> This is a hypothetical example showing how to document a behaviour change.

### Changed
- Counter: added minimum value of -100 (was: no minimum)
- Counter: added maximum value of 100 (was: no maximum)
- Counter: increment at max value now throws error (was: would exceed max)

### Why
Users reported confusion when counters went to extreme values. Added bounds to keep values reasonable and provide clear feedback when limits are hit.

---

## 2024-01-01 - Initial specification

### Added
- Counter: new counter starts at zero
- Counter: increment increases value by 1
- Counter: decrement decreases value by 1
- Counter: reset returns value to 0
- Counter: value can go negative (no minimum bound)
- Counter: value has no maximum bound

### Why
Initial feature set for the counter demo.
