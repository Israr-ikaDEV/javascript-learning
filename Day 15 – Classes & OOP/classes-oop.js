// Day 15 - Classes & OOP

// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static isAdult(age) {
    return age >= 18;
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call parent constructor
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying in grade ${this.grade}.`;
  }
}

// Test the classes
const person1 = new Person("Alice", 25);
console.log(person1.introduce());
console.log("Is Adult:", Person.isAdult(person1.age));

const student1 = new Student("Bob", 16, "10th");
console.log(student1.introduce());
console.log(student1.study());
console.log("Is Adult:", Student.isAdult(student1.age));
