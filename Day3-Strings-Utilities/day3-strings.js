// Day 3: String Utilities

// 1. Reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 2. Check if a string is a palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // ignore spaces/punctuation
  let reversed = reverseString(cleaned);
  return cleaned === reversed;
}

// 3. Count vowels in a string
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// 4. Convert to Title Case
function toTitleCase(str) {
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
}

// Testing
console.log("Reverse:", reverseString("hello"));
console.log("Palindrome check (madam):", isPalindrome("madam"));
console.log("Palindrome check (hello):", isPalindrome("hello"));
console.log("Vowel Count (hello world):", countVowels("hello world"));
console.log("Title Case:", toTitleCase("welcome to javascript learning"));
