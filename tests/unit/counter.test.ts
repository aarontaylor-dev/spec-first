/**
 * DEMO: This file is part of the Counter demo.
 * Delete this file when adding your own features.
 */
import { describe, it, expect } from 'vitest';
import { Counter } from '../../src/features/counter/counter.js';

describe('Counter', () => {
  describe('constructor', () => {
    it('creates a counter with initial value 0', () => {
      const counter = new Counter();
      expect(counter.value).toBe(0);
    });
  });

  describe('increment()', () => {
    it('adds 1 to the current value', () => {
      const counter = new Counter();
      counter.increment();
      expect(counter.value).toBe(1);
    });
  });

  describe('incrementBy()', () => {
    it('adds the specified amount to the current value', () => {
      const counter = new Counter();
      counter.incrementBy(5);
      expect(counter.value).toBe(5);
    });

    it('works with negative amounts', () => {
      const counter = new Counter();
      counter.incrementBy(-3);
      expect(counter.value).toBe(-3);
    });
  });

  describe('decrement()', () => {
    it('subtracts 1 from the current value', () => {
      const counter = new Counter();
      counter.increment();
      counter.decrement();
      expect(counter.value).toBe(0);
    });
  });

  describe('reset()', () => {
    it('sets the value back to 0', () => {
      const counter = new Counter();
      counter.increment();
      counter.increment();
      counter.reset();
      expect(counter.value).toBe(0);
    });
  });
});
