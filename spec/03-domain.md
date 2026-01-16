# Domain Model

> **Template**: Replace the placeholder sections below with your domain concepts. See the Counter Demo at the bottom for an example.

## Core Concepts

<!-- TODO: Define the key entities and concepts in your domain -->

### [Concept Name]

**Definition**: [One sentence explaining what this is]

**Properties**:
- `[property]`: [type] — [description]

**Rules**:
- [Business rule that governs this concept]
- [Another rule]

### [Another Concept]

**Definition**: [What it is]

**Relationships**: [How it relates to other concepts]

## Glossary

<!-- TODO: Define key terms used throughout the spec -->

| Term | Definition |
|------|------------|
| [Term] | [Definition] |
| [Term] | [Definition] |

---

## Counter Demo

> This example shows how a filled-in domain model looks. Delete this section when adding your own.

### Counter

**Definition**: A numeric value that can be incremented, decremented, or reset.

**Properties**:
- `value`: integer — the current count

**Rules**:
- Initial value is 0
- No minimum or maximum bounds (can go negative)
- Increment adds exactly 1
- Decrement subtracts exactly 1
- Reset sets value to 0

### Glossary

| Term | Definition |
|------|------------|
| Counter | An object tracking a numeric count |
| Increment | Increase the count by 1 |
| Decrement | Decrease the count by 1 |
| Reset | Return the count to its initial value (0) |
