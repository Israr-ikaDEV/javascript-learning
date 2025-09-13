// Day 4: Object Utilities

// 1. Count properties in an object
function countProperties(obj) {
  return Object.keys(obj).length;
}

// 2. Find the person with the highest age
function findOldestPerson(people) {
  let oldest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldest.age) {
      oldest = people[i];
    }
  }
  return oldest;
}

// 3. Clone an object (shallow copy)
function cloneObject(obj) {
  return { ...obj };
}

// 4. Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// --- Demo usage ---
const person = { name: "Alice", age: 25, city: "Paris" };
console.log("Property count:", countProperties(person));

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];
console.log("Oldest person:", findOldestPerson(people));

const cloned = cloneObject(person);
console.log("Cloned object:", cloned);

const merged = mergeObjects({ a: 1, b: 2 }, { b: 5, c: 10 });
console.log("Merged object:", merged);
