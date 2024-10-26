const arr = [4, 5, 2, 25, 7, 8, 6];

// Previous means we need to check many times towards left side, so loop will be from left to right ::
// Next means we need to check many times towards right side, so loop will be from right to left ::

// The overall time complexity is O(n) because each element is processed only once, either by being pushed to or popped from the stack.
// The space complexity is O(n) as well, due to the stack and result arrays storing up to n elements.

const previousLargerElement = (arr) => {
  const stack = [];
  let result = new Array(arr.length).fill(-1);
  for (let i = 0; i <= arr.length - 1; i++) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
};

console.log("Previos Larger element ::", previousLargerElement(arr));

const previousSmallerElement = (arr) => {
  const stack = [];
  let result = new Array(arr.length).fill(-1);
  for (let i = 0; i <= arr.length - 1; i++) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
};

console.log("Previos Smallest element ::", previousSmallerElement(arr));

const nextSmallerElement = (arr) => {
  const stack = [];
  let result = new Array(arr.length).fill(-1);
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
};

console.log("Next Smallest element ::", nextSmallerElement(arr));

const nextGreaterElement = (arr) => {
  const stack = [];
  let result = new Array(arr.length).fill(-1);
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
};

console.log("Next Largest element ::", nextGreaterElement(arr));

const STOCK_ARRAY = [100, 80, 60, 70, 60, 75, 85];

// const op = [1, 1, 1, 2, 1, 4, 6];
//  a       0,1,2,3,4,5,6
//  b      -1,0,1,1,3,1,0
// (a-b) =  1,1,1,2,1,4,6

// all previous consecutive smaller element including itself ::
const stockSpan = (arr) => {
  const stack = [];
  let result = new Array(arr.length).fill(1);
  for (let i = 0; i <= arr.length - 1; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = i - stack[stack.length - 1];
    }
    stack.push(i);
  }
  return result;
};

console.log("Stock span problem ::", stockSpan(STOCK_ARRAY));
