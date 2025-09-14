// Day 5: Function Utilities & Higher-Order Functions

// 1. Function that calls another function twice
function callTwice(fn) {
  fn();
  fn();
}

// Example usage:
callTwice(() => console.log("Hello!"));

// 2. Function that returns another function (closure demo)
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

// Example usage:
const double = createMultiplier(2);
console.log("Double of 5:", double(5)); // 10

// 3. Custom forEach implementation
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Example usage:
myForEach([1, 2, 3], (num, i) => console.log(`Index ${i}: ${num}`));

// 4. Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example usage:
const logMessage = debounce(() => console.log("Debounced!"), 1000);
logMessage();
logMessage(); // Only the last one runs after 1s
