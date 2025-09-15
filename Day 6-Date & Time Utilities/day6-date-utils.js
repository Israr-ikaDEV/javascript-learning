// Day 6: Date & Time Utilities

// 1. Get current date & time in YYYY-MM-DD HH:MM:SS format
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 2. Format a date as DD/MM/YYYY
function formatDate(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

// 3. Find difference between two dates in days
function dateDiffInDays(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// 4. Add N days to a given date
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

// --- Testing ---
console.log("Current DateTime:", getCurrentDateTime());
console.log("Formatted Date:", formatDate("2025-09-12"));
console.log("Days Difference:", dateDiffInDays("2025-09-01", "2025-09-12"));
console.log("Add 10 Days:", addDays("2025-09-12", 10).toDateString());
