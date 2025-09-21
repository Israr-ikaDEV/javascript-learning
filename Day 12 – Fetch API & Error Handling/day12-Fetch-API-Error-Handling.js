// Day 12 – Fetch API & Error Handling

// 1. Basic fetch request
function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("✅ Post fetched successfully:", data);
    })
    .catch(error => {
      console.error("❌ Error fetching post:", error.message);
    });
}

// 2. Using async/await with fetch
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("✅ User fetched successfully:", data);
  } catch (error) {
    console.error("❌ Error fetching user:", error.message);
  }
}

// 3. Fetch multiple resources with Promise.all
async function fetchMultiple() {
  try {
    const [postsRes, usersRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users")
    ]);

    if (!postsRes.ok || !usersRes.ok) {
      throw new Error("One of the requests failed");
    }

    const posts = await postsRes.json();
    const users = await usersRes.json();

    console.log("✅ Posts count:", posts.length);
    console.log("✅ Users count:", users.length);
  } catch (error) {
    console.error("❌ Error fetching multiple:", error.message);
  }
}

// Run examples
fetchPost();
fetchUser();
fetchMultiple();
