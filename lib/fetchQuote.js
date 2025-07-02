export async function fetchQuote() {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("Error fetching quote");
    return res.json();
  }
  