// 🧠 Day 18 – Advanced Array Methods Practice

// 1️⃣ map() – Transform each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2️⃣ filter() – Keep elements that match a condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// 3️⃣ reduce() – Accumulate into a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 4️⃣ find() – Get the first element matching a condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// 5️⃣ some() – Check if any element passes the condition
const hasNegative = numbers.some(num => num < 0);
console.log("Has negative number:", hasNegative);

// 6️⃣ every() – Check if all elements satisfy a condition
const allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive);

console.log("----------------------------------------------------");

// 7️⃣ Custom map() implementation
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
console.log("Custom myMap:", myMap(numbers, num => num * 3));


// 8️⃣ Custom filter() implementation
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("Custom myFilter (even numbers):", myFilter(numbers, num => num % 2 === 0));

console.log("----------------------------------------------------");

// 9️⃣ Chaining methods example
const chainedResult = numbers
  .filter(n => n % 2 === 0)   // even numbers
  .map(n => n * 2)            // double them
  .reduce((sum, n) => sum + n, 0); // sum them
console.log("Chained result:", chainedResult);
