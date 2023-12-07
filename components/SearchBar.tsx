import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative flex items-center w-full px-4">
      <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
        <CiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        className="hidden md:block pl-12 w-full py-2 text-sm  border border-gray-300 rounded-[50px] "
        type="text"
        placeholder="Your text here"
      />
    </div>
  );
}
