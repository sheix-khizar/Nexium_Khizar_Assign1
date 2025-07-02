"use client";

import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Quote Generator</h1>
      <ModeToggle />
    </header>
  );
}
