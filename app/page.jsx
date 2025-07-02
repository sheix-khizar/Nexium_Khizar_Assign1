"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import QuoteCard from "@/components/QuoteCard";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quotes");
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      console.error(err);
      setError("Oops! Could not load quote.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote}" — ${author}`);
      alert("Copied to clipboard!");
    } catch {
      alert("Failed to copy.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="w-full max-w-2xl space-y-8">
        <Header />
        <QuoteCard quote={quote} author={author} loading={loading} error={error} />
        <ActionButtons
          onFetch={fetchQuote}
          onCopy={copyToClipboard}
          disabled={loading || !quote}
        />
      </div>
    </main>
  );
}
