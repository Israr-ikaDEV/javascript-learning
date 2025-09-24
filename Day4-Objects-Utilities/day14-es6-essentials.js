// ===============================
// Day 14 – ES6+ Essentials
// ===============================

// 1. let, const vs var
console.log("=== let, const vs var ===");

var a = 10;
var a = 20; // allowed
console.log("var a:", a);

let b = 30;
// let b = 40; // ❌ not allowed
b = 40; // reassignment allowed
console.log("let b:", b);

const c = 50;
// c = 60; // ❌ not allowed
console.log("const c:", c);


// 2. Arrow Functions
console.log("\n=== Arrow Functions ===");

function addNormal(x, y) {
  return x + y;
}
const addArrow = (x, y) => x + y;

console.log("Normal:", addNormal(2, 3));
console.log("Arrow:", addArrow(2, 3));


// 3. Template Literals
console.log("\n=== Template Literals ===");

const name = "Israr";
const age = 23;

console.log("Old way: My name is " + name + " and I am " + age + " years old.");
console.log(`New way: My name is ${name} and I am ${age} years old.`);


// 4. Destructuring
console.log("\n=== Destructuring ===");

const person = { firstName: "Ali", lastName: "Khan", age: 25 };
const { firstName, age: personAge } = person;
console.log(firstName, personAge);

const numbers = [10, 20, 30];
const [n1, n2] = numbers;
console.log(n1, n2);


// 5. Spread Operator
console.log("\n=== Spread Operator ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("Copied object:", obj2);


// 6. Rest Operator
console.log("\n=== Rest Operator ===");

function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log("Sum(1,2,3):", sum(1, 2, 3));
console.log("Sum(4,5,6,7):", sum(4, 5, 6, 7));


// 7. Default Parameters
console.log("\n=== Default Parameters ===");

function greet(user = "Guest") {
  return `Hello, ${user}!`;
}
console.log(greet());
console.log(greet("Hanan"));
