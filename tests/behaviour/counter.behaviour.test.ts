/**
 * DEMO: This file is part of the Counter demo.
 * Delete this file when adding your own features.
 *
 * Behaviour tests for Counter feature.
 * These tests mirror the scenarios in spec/behaviour/counter.feature
 */
import { describe, it, expect } from 'vitest';
import { Counter } from '../../src/features/counter/counter.js';
describe('Feature: Counter', () => {
  it('New counter starts at zero', () => {
    // Given I create a new counter
    const counter = new Counter();

    // Then the counter value should be 0
    expect(counter.value).toBe(0);
  });

  it('Increment increases the count by one', () => {
    // Given a counter with value 0
    const counter = new Counter();

    // When I increment the counter
    counter.increment();

    // Then the counter value should be 1
    expect(counter.value).toBe(1);
  });

  it('Increment from non-zero value', () => {
    // Given a counter with value 5
    const counter = new Counter();
    for (let i = 0; i < 5; i++) counter.increment();

    // When I increment the counter
    counter.increment();

    // Then the counter value should be 6
    expect(counter.value).toBe(6);
  });

  it('Decrement decreases the count by one', () => {
    // Given a counter with value 5
    const counter = new Counter();
    for (let i = 0; i < 5; i++) counter.increment();

    // When I decrement the counter
    counter.decrement();

    // Then the counter value should be 4
    expect(counter.value).toBe(4);
  });

  it('Decrement can go negative', () => {
    // Given a counter with value 0
    const counter = new Counter();

    // When I decrement the counter
    counter.decrement();

    // Then the counter value should be -1
    expect(counter.value).toBe(-1);
  });

  it('Reset returns counter to zero', () => {
    // Given a counter with value 10
    const counter = new Counter();
    for (let i = 0; i < 10; i++) counter.increment();

    // When I reset the counter
    counter.reset();

    // Then the counter value should be 0
    expect(counter.value).toBe(0);
  });

  it('Multiple operations', () => {
    // Given a counter with value 0
    const counter = new Counter();

    // When I increment the counter 3 times
    counter.increment();
    counter.increment();
    counter.increment();

    // And I decrement the counter 1 time
    counter.decrement();

    // Then the counter value should be 2
    expect(counter.value).toBe(2);
  });
});
