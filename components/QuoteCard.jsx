"use client";

export default function QuoteCard({ quote, author, loading, error }) {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md min-h-[150px]">
      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <p className="text-xl italic text-center mb-4">“{quote}”</p>
          <p className="text-right font-medium text-indigo-600 dark:text-indigo-400">
            — {author}
          </p>
        </>
      )}
    </section>
  );
}
