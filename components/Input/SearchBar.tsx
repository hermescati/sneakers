"use client";

import { useState } from "react";
import SearchIcon from "@/public/assets/icons/search.svg";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

export default function SearchBar({
  placeholder,
  value,
  disabled,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <form
      className={`relative w-full px-10 py-3 border-2 rounded-2xl leading-none font-medium border-gray-400 text-gray-400 ${
        isFocused
          ? "border-gray-800 text-gray-800"
          : "border-gray-400 text-gray-400"
      }`}
    >
      <SearchIcon className="absolute top-3.5 left-4" width={16} height={16} />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="w-full leading-none font-medium placeholder:opacity-60 outline-none bg-transparent"
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </form>
  );
}
