# API Contracts

## Overview

This document defines the API contracts for the system.

## Format

```
[Method Name]
  Input:  [parameters and types]
  Output: [return type]
  Errors: [possible error conditions]
```

---

## Counter API

### `new Counter()`

- **Input**: none
- **Output**: Counter instance with value 0

### `counter.increment()`

- **Input**: none
- **Output**: void

### `counter.decrement()`

- **Input**: none
- **Output**: void

### `counter.reset()`

- **Input**: none
- **Output**: void

### `counter.value`

- **Output**: number (integer)
