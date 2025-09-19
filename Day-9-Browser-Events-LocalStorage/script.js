// Keyboard Events
document.getElementById("keyInput").addEventListener("keyup", function(event) {
  document.getElementById("keyResult").textContent =
    `You pressed: ${event.key}`;
});

// Mouse Events
const mouseBtn = document.getElementById("mouseBtn");
mouseBtn.addEventListener("mouseover", () => {
  document.getElementById("mouseResult").textContent = "Mouse Over 🟦";
});
mouseBtn.addEventListener("mouseout", () => {
  document.getElementById("mouseResult").textContent = "Mouse Out 🟨";
});
mouseBtn.addEventListener("click", () => {
  document.getElementById("mouseResult").textContent = "Button Clicked 🟥";
});

// Form Events
document.getElementById("sampleForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload
  const username = document.getElementById("username").value;
  document.getElementById("formResult").textContent =
    `Hello, ${username}! 🎉`;
});

// Local Storage Utilities
function saveData() {
  const value = document.getElementById("storageInput").value;
  localStorage.setItem("savedData", value);
  document.getElementById("storageResult").textContent = "Data Saved ✅";
}

function loadData() {
  const data = localStorage.getItem("savedData");
  document.getElementById("storageResult").textContent =
    data ? `Loaded: ${data}` : "No data found ⚠️";
}

function clearData() {
  localStorage.removeItem("savedData");
  document.getElementById("storageResult").textContent = "Data Cleared 🗑️";
}
