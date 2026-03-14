const dateStr = "2026-03-14T09:30:00-03:00";
const publishDate = new Date(dateStr);
const now = new Date("2026-03-14T09:55:16-03:00");

console.log("Publish Date:", publishDate.toISOString());
console.log("Now:", now.toISOString());
console.log("Is published?", publishDate <= now);
