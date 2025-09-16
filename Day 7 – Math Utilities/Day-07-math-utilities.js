// Day 7: Math Utilities

// 1️⃣ Factorial of a number
function factorial(n) {
  if (n < 0) return "Not defined";
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 2️⃣ Fibonacci sequence (first n numbers)
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

// 3️⃣ Greatest Common Divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 4️⃣ Least Common Multiple (LCM)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 🔹 Test the functions
console.log("Factorial of 5:", factorial(5));
console.log("Fibonacci (first 7 numbers):", fibonacci(7));
console.log("GCD of 48 and 18:", gcd(48, 18));
console.log("LCM of 4 and 6:", lcm(4, 6));
