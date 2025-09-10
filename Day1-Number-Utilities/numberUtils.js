

// Reverse a number
function reverseNum(num) {
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = parseInt(num / 10);
  }
  return rev;
}

// Check if number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Sum of digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

// Run tests
let number = 54321;
console.log(`Original: ${number}`);
console.log(`Reversed: ${reverseNum(number)}`);
console.log(`Sum of digits: ${sumOfDigits(number)}`);
console.log(`Is prime? ${isPrime(number)}`);
