// Swap using third variable
function SwapNumbers(a, b) {
  let c = a;
  a = b;
  b = c;
  return [a, b];
}
console.log(SwapNumbers(5, 10));

// Swap without using third variable
function SwapWithoutVar(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  return [x, y];
}
console.log(SwapWithoutVar(5, 6));

console.log("---------------------------------------------------------------------");
console.log("");

// Fibonacci Series
function fibonacci() {
  let i = 0;
  let j = 1;
  console.log(i);
  console.log(j);
  for (let k = 0; k <= 20; k++) {
    let next = i + j;
    console.log(next);
    i = j;
    j = next;
  }
}
fibonacci();

console.log("---------------------------------------------------------------------");
console.log("");

// Sum of digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}
let num1 = 2456;
console.log("sum of " + num1 + " = " + sumOfDigits(num1));

console.log("---------------------------------------------------------------------");
console.log("");

// Armstrong number
function armStrong(num) {
  function sumofdigits(num) {
    function length(num) {
      let length = 0;
      let temp = num;
      while (temp > 0) {
        temp = parseInt(temp / 10);
        length++;
      }
      return length;
    }
    let l = length(num);
    let sum = 0;
    let temp1 = num;
    while (temp1 > 0) {
      let digit = temp1 % 10;
      sum += digit ** l;
      temp1 = parseInt(temp1 / 10);
    }
    return sum;
  }
  let res = sumofdigits(num);
  if (num === res) {
    console.log(num + " is an armStrong number");
  } else {
    console.log(num + " is not an armStrong number");
  }
}
let num2 = 153;
armStrong(num2);

console.log("---------------------------------------------------------------------");
console.log("");

// Perfect number
function isperfect(num) {
  let temp2 = num;
  let sum = 0;
  if (temp2 > 0) {
    for (let i = 1; i < temp2; i++) {
      if (temp2 % i === 0) {
        sum += i;
      }
    }
    if (sum === temp2) {
      console.log(temp2 + " is a perfect number");
    } else {
      console.log(temp2 + " is not a perfect number");
    }
  }
}
let num3 = 28;
isperfect(num3);

console.log("---------------------------------------------------------------------");
console.log("");

// Reverse number
function reverseNum(num) {
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = parseInt(num / 10);
  }
  return rev;
}
let num4 = 1234;
console.log(num4 + " reversed to -> " + reverseNum(num4));

console.log("---------------------------------------------------------------------");
console.log("");

// ✅ Prime number check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let num5 = 29;
console.log(num5 + (isPrime(num5) ? " is a prime number" : " is not a prime number"));

console.log("---------------------------------------------------------------------");
console.log("");

// ✅ Palindrome number
function isPalindrome(num) {
  let original = num;
  let reversed = reverseNum(num);
  if (original === reversed) {
    console.log(num + " is a palindrome number");
  } else {
    console.log(num + " is not a palindrome number");
  }
}
let num6 = 121;
isPalindrome(num6);

console.log("---------------------------------------------------------------------");
console.log("");

// ✅ Factorial of a number
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
let num7 = 5;
console.log("Factorial of " + num7 + " = " + factorial(num7));


