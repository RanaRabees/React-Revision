"use client"
import { useRef } from "react";

export default function First() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }
  // const handleClick = () => {
  //   inputRef.current?.focus();
  // };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Focus Input Using useRef 🚀</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type Here..."
        className="border p-3 rounded-lg shadow mb-4 w-64"
      />

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Focus Input
      </button>
    </div>
  );
}
