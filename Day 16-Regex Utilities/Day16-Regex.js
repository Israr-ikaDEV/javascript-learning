// Day 16: Regex Utilities

// 1. Validate Email
function isValidEmail(email) {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// 2. Validate Phone Number (simple pattern: 10 digits)
function isValidPhone(phone) {
  const regex = /^\d{10}$/;
  return regex.test(phone);
}

// 3. Extract Numbers from a String
function extractNumbers(str) {
  const regex = /\d+/g;
  return str.match(regex) || [];
}

// 4. Replace Multiple Spaces with Single Space
function normalizeSpaces(str) {
  const regex = /\s+/g;
  return str.trim().replace(regex, " ");
}

// 5. Check if String Contains Only Letters
function isAlphabetic(str) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(str);
}

// ----------- Testing -----------
console.log("Email Tests:");
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("wrong@email")); // false

console.log("\nPhone Tests:");
console.log(isValidPhone("1234567890")); // true
console.log(isValidPhone("12345")); // false

console.log("\nExtract Numbers:");
console.log(extractNumbers("My order IDs are 123, 456 and 789.")); // [ '123', '456', '789' ]

console.log("\nNormalize Spaces:");
console.log(normalizeSpaces("Hello    World   JS ")); // "Hello World JS"

console.log("\nAlphabetic Check:");
console.log(isAlphabetic("HelloWorld")); // true
console.log(isAlphabetic("Hello123")); // false
