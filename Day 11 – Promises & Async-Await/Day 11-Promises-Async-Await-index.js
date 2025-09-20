// Day 11: Promises & Async/Await Examples

// 1. Basic Promise
function asyncTask(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("✅ Task completed successfully!");
      } else {
        reject("❌ Task failed!");
      }
    }, 1000);
  });
}

// Using .then() and .catch()
asyncTask(true)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// 2. Chaining Promises
asyncTask(true)
  .then(result => {
    console.log("Step 1:", result);
    return asyncTask(true);
  })
  .then(result => {
    console.log("Step 2:", result);
    return asyncTask(false); // will cause rejection
  })
  .then(result => console.log("Step 3:", result))
  .catch(error => console.error("Caught error:", error));

// 3. Async/Await Example
async function runAsyncExamples() {
  try {
    const result1 = await asyncTask(true);
    console.log("Await Result 1:", result1);

    const result2 = await asyncTask(true);
    console.log("Await Result 2:", result2);

    const result3 = await asyncTask(false);
    console.log("Await Result 3:", result3);
  } catch (error) {
    console.error("Caught with async/await:", error);
  }
}

runAsyncExamples();

// 4. Promise.all Example
Promise.all([asyncTask(true), asyncTask(true), asyncTask(true)])
  .then(results => console.log("Promise.all results:", results))
  .catch(error => console.error(error));

// 5. Promise.race Example
Promise.race([asyncTask(true), asyncTask(false)])
  .then(result => console.log("Promise.race winner:", result))
  .catch(error => console.error("Promise.race error:", error));
