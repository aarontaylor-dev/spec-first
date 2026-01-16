/**
 * DEMO: This file is part of the Counter demo.
 * Delete this entire folder (src/features/counter/) when adding your own features.
 *
 * Counter - A simple counter that can be incremented, decremented, and reset.
 * See spec/behaviour/counter.feature for the behaviour specification.
 */
export class Counter {
  private _value: number = 0;

  get value(): number {
    return this._value;
  }

  increment(): void {
    this._value += 1;
  }

  decrement(): void {
    this._value -= 1;
  }

  reset(): void {
    this._value = 0;
  }
}
