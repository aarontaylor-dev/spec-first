# SpecKit

A minimal, opinionated starter for **spec-first development**.

**Website**: [speckit.guide](https://speckit.guide) — cheat sheets, tutorials, and more.

## Why Spec-First?

Most projects start with code and figure out requirements later. This leads to:
- Building the wrong thing
- Scope creep
- Tests that don't match actual requirements
- Difficulty explaining what the system does

**Spec-first flips this.** You write down what you're building *before* you build it. Benefits:

- **Clarity** — Forces you to think through requirements upfront
- **Alignment** — Spec becomes the source of truth for the team
- **Testability** — Behaviour examples translate directly to tests
- **Simplicity** — You only build what's specified, nothing more

## Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

**New to SpecKit?** Read [GETTING_STARTED.md](./GETTING_STARTED.md) for a step-by-step guide.

## The Workflow

```mermaid
flowchart LR
    A[Problem] --> B[Scope]
    B --> C[Domain]
    C --> D[Behaviour]
    D --> E[Tests]
    E --> F[Code]
    F --> G[Evolve]
    G -.-> D
```

1. **Problem** — What pain are we solving? (`spec/01-problem.md`)
2. **Scope** — What will and won't we build? (`spec/02-scope.md`)
3. **Domain** — What are the key concepts? (`spec/03-domain.md`)
4. **Behaviour** — How should it behave? (`spec/behaviour/*.feature`)
5. **Tests** — Mirror the behaviour examples (`tests/behaviour/`)
6. **Code** — Implement the simplest solution (`src/features/`)
7. **Evolve** — Document changes (`spec/evolution/`)

## Project Structure

```
spec/                    # The specification
  00-intro.md           # How to use this spec
  01-problem.md         # The problem we're solving
  02-scope.md           # What's in/out of scope
  03-domain.md          # Core concepts and terms
  04-behaviour-guide.md # How to write behaviour specs
  behaviour/            # Gherkin-style feature files
  contracts/            # API and event contracts (optional)
  verification/         # Test coverage matrix (optional)
  evolution/            # Change history

src/features/           # Implementation, organized by feature

tests/
  behaviour/            # Behaviour tests (primary)
  unit/                 # Unit tests (for complex internals)
```

## Gherkin & `.feature` Files

Behaviour specs use [Gherkin](https://cucumber.io/docs/gherkin/) syntax — a simple, readable format for describing how software should behave:

```gherkin
Feature: Shopping cart
  Scenario: Add item to empty cart
    Given an empty cart
    When I add "Socks" to the cart
    Then the cart should contain 1 item
```

The `Given`/`When`/`Then` structure maps directly to test setup, action, and assertion.

### IDE Setup

For syntax highlighting and autocomplete in `.feature` files:

| IDE | Extension |
|-----|-----------|
| **VS Code** | [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) |
| **JetBrains** (WebStorm, IntelliJ) | Built-in — enable "Gherkin" plugin in settings |
| **Vim/Neovim** | `vim-cucumber` or treesitter `gherkin` parser |
| **Sublime Text** | "Gherkin (Cucumber) Syntax" package |

For VS Code, install from the command line:

```bash
code --install-extension alexkrechik.cucumberautocomplete
```

See `cheat-sheets/behaviour-gherkin.md` for full Gherkin syntax reference.

## Demo Feature

This template includes a **Counter** demo to show the workflow in action:

| Step | File |
|------|------|
| Behaviour spec | `spec/behaviour/counter.feature` |
| Behaviour tests | `tests/behaviour/counter.behaviour.test.ts` |
| Unit tests | `tests/unit/counter.test.ts` |
| Implementation | `src/features/counter/counter.ts` |

Open these files side by side to see how specs connect to tests and code.

### Cleaning up the demo

Once you're comfortable with the workflow, delete the demo files:

```bash
# Remove demo code and tests
rm -rf src/features/counter
rm tests/behaviour/counter.behaviour.test.ts
rm tests/unit/counter.test.ts
rm spec/behaviour/counter.feature
```

Also remove the "Counter Demo" sections from the spec templates:
- `spec/01-problem.md`
- `spec/02-scope.md`
- `spec/03-domain.md`
- `spec/evolution/behaviour-changelog.md`

## Quick Reference

Visit [speckit.guide](https://speckit.guide) for online cheat sheets and tutorials.

The `cheat-sheets/` folder also has offline quick reference guides:

| Guide | What it covers |
|-------|----------------|
| [overview.md](./cheat-sheets/overview.md) | Spec-first workflow at a glance |
| [problem-scope-domain.md](./cheat-sheets/problem-scope-domain.md) | Templates for early spec docs |
| [behaviour-gherkin.md](./cheat-sheets/behaviour-gherkin.md) | Gherkin syntax and examples |
| [contracts-tests.md](./cheat-sheets/contracts-tests.md) | API contracts and test organization |
| [evolution.md](./cheat-sheets/evolution.md) | Managing spec changes over time |

## Philosophy

- **Small** — Keep specs concise and practical
- **Clear** — Use plain language, not jargon
- **Traceable** — Tests map directly to spec examples
- **Minimal** — Only build what's specified

## License

MIT
