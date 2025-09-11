
//Find Maximum in Array 

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}


//Find Minimum in Array

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}


//Sum of Array Elements
function sumArray(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}
 


//Reverse Array (without built-in reverse)
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}



//test
const numbers = [5, 8, 2, 9, 1];

console.log("Max:", findMax(numbers));
console.log("Min:", findMin(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Reversed:", reverseArray(numbers));



