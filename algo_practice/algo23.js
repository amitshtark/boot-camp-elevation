// #24
// Implement a stack that supports the following operations,
// all in O(1) time:
// - push(val)   → push a value onto the stack
// - pop()       → remove and return the top value
// - getMin()    → return the minimum value in the stack
//
// Constraints: you may not use any built-in sort or min functions.
// getMin() must run in O(1) — not O(n).
//
// Hint: a single stack can't track the minimum in O(1) on its own.
// Think about using a second stack that only tracks minimums —
// what should it push and pop?
//
// Example:
// push(5) → stack: [5],    min: 5
// push(3) → stack: [5,3],  min: 3
// push(7) → stack: [5,3,7] min: 3
// pop()   → stack: [5,3],  min: 3
// pop()   → stack: [5],    min: 5  ← min changes!
// getMin() → 5

class MinStack {
  constructor() {
   this.stack = [];
   this.MStack = [];
  }

  push(val) {
    if(this.MStack.length === 0 || this.MStack[this.MStack.length - 1] >= val)
      this.MStack.push(val);
    this.stack.push(val);
  }

  pop() {
    if(this.stack[this.stack.length - 1] === this.MStack[this.MStack.length - 1])
      this.MStack.pop();
    return this.stack.pop();
  }

  getMin() {
    return this.MStack[this.MStack.length - 1];
  }
}

// Tests
const stack = new MinStack();
stack.push(5);
stack.push(3);
stack.push(7);
console.log(stack.getMin()); // → 3
stack.pop();
console.log(stack.getMin()); // → 3
stack.pop();
console.log(stack.getMin()); // → 5