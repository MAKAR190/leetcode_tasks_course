function simplifyPath(path: string): string {
  const parts = path.split("/");
  const stack = [];

  for (const part of parts) {
    if (part === "..") {
      stack.pop();
    } else if (part !== "" && part !== ".") {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}

function makeGood(s: string): string {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const last = result.length ? result[result.length - 1] : "";

    if (current.toLowerCase() === last.toLowerCase() && current !== last) {
      result.pop();
      continue;
    }

    result.push(current);
  }

  return result.join("");
}

class MovingAverage {
  private size: number;
  private queue: number[];

  constructor(size: number) {
    this.size = size;
    this.queue = [];
  }

  next(val: number): number {
    let result = 0;
    if (this.queue.length >= this.size) {
      this.queue.shift();
    }
    this.queue.push(val);
    result = this.queue.reduce((acc, el) => (acc += el), 0) / this.queue.length;
    return result;
  }
}
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = [];
  const map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      map.set(stack.pop() as number, nums2[i]);
    }
    stack.push(nums2[i]);
  }

  while (stack.length > 0) {
    map.set(stack.pop() as number, -1);
  }

  const res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i]) as number);
  }

  return res;
}
class StockSpanner {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let days = 1;
    let popped = [];
    while (
      this.stack.length > 0 &&
      price >= this.stack[this.stack.length - 1]
    ) {
      let j = this.stack.pop();
      popped.push(j);
      days += 1;
    }

    for (let i = 0; i < popped.length; i++) {
      this.stack.push(popped[i]);
    }
    this.stack.push(price);

    return days;
  }
}