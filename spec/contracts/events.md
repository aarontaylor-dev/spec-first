# Event Contracts

> **This file is optional.** Use it when your system emits or consumes events (pub/sub, webhooks, message queues, etc.). Skip it for simple request/response systems.

## When to use this

- Event-driven architectures
- Systems with webhooks
- Message queue integrations
- Real-time features (WebSockets, SSE)

## Format

```markdown
### `event.name`

- **Trigger**: What causes this event to fire
- **Payload**: `{ field: type, field: type }`
- **Consumers**: Who listens for this event
```

---

## Example

> The counter demo doesn't emit events. Here's a hypothetical example:

### `counter.changed`

- **Trigger**: Counter value changes (via increment, decrement, or reset)
- **Payload**: `{ previousValue: number, newValue: number, operation: 'increment' | 'decrement' | 'reset' }`
- **Consumers**: Dashboard UI, analytics service
