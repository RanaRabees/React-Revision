"use client"
import { useRef, useState } from "react";

export default function Second() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Show / Hide Password 🔐</h1>

      <input
        ref={inputRef}
        type={show ? "text" : "password"}
        placeholder="Enter Password"
        className="border p-3 rounded-lg shadow mb-4 w-64"
      />

      <button
        onClick={handleToggle}
        className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
      >
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
