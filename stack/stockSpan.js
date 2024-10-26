const arr = [100, 80, 60, 70, 60, 75, 85];

// const op = [1, 1, 1, 2, 1, 4, 6];

// all previous consecutive smaller element including itself ::
const stockSpan = (arr) => {
  const stack = [];
  let result = new Array(arr.length).fill(1);
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

console.log("Stock span problem ::", stockSpan(arr));
