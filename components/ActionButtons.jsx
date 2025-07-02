"use client";

export default function ActionButtons({ onFetch, onCopy, disabled }) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onFetch}
        disabled={disabled}
        className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
      >
        New Quote
      </button>
      <button
        onClick={onCopy}
        disabled={disabled}
        className="flex-1 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 disabled:opacity-50 transition"
      >
        Copy
      </button>
    </div>
  );
}
