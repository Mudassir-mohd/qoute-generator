
const quotes = [
    "Believe in yourself!",
    "You are stronger than you think.",
    "Every day is a new opportunity.",
    "Keep pushing forward.",
    "Success is not final, failure is not fatal."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
